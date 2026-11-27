(function () {
  let building = false;
  function loadImage(src) {
    return new Promise(resolve => {
      if (!src) return resolve(null);
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = src;
    });
  }

  window.HAWrapped = async function ({ night, T, posterPath, filmTitle, period, button }) {
    const existing = document.getElementById('wrapview');
    if (existing || building) return;
    const stats = night?.wrapStats(period);
    const status = document.getElementById('wrap-note');
    if (!stats?.count) {
      status.textContent = T('В этом периоде нет отмеченных просмотров.', 'There are no logged films in this period.');
      return;
    }
    status.textContent = '';
    building = true;
    button.disabled = true;
    try {
      await document.fonts?.load('900 90px "Playfair Display"');
      const [sheet, ...posters] = await Promise.all([
        loadImage('night-data/yokai.webp?v=1'),
        ...stats.best.map(f => loadImage(posterPath(f[0]))),
      ]);
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1920;
      const ctx = canvas.getContext('2d');
      const bg = ctx.createLinearGradient(0,0,1080,1920);
      bg.addColorStop(0,'#390e1d');
      bg.addColorStop(0.45,'#110b16');
      bg.addColorStop(1,'#050507');
      ctx.fillStyle = bg;
      ctx.fillRect(0,0,1080,1920);
      ctx.strokeStyle = '#b63b52';
      ctx.lineWidth = 3;
      ctx.strokeRect(34,34,1012,1852);
      ctx.fillStyle = 'rgba(255,116,137,.05)';
      for (let y = 45; y < 1870; y += 8) ctx.fillRect(35,y,1010,1);

      function text(value,x,y,size,color,max = 924,mono = false) {
        ctx.fillStyle = color;
        ctx.font = (mono ? '700 ' + size + 'px monospace' : '900 ' + size + 'px "Playfair Display", Georgia, serif');
        ctx.fillText(value,x,y,max);
      }

      text('HORROR AESTHETIC',76,114,29,'#ff95a6',924,true);
      text('HORROR WRAPPED',76,237,99,'#faeee7');
      text(period === 'week' ? T('ПОСЛЕДНИЕ 7 ДНЕЙ','LAST 7 DAYS') : T('ИТОГИ ГОДА','YEAR IN REVIEW'),76,314,36,'#f59aa9',924,true);
      ctx.fillStyle = '#35141f';
      ctx.fillRect(76,384,928,460);
      text(String(stats.count),110,678,224,'#faeee7',476);
      text(T('ФИЛЬМОВ','FILMS'),116,775,39,'#f59aa9',480,true);
      if (sheet) {
        const pos = night.yokaiSlot(stats.yokai[0]), { tile, columns } = night.atlas;
        const x = (pos % columns) * tile, y = Math.floor(pos / columns) * tile;
        ctx.drawImage(sheet,x,y,tile,tile,576,414,394,394);
      }
      text(T('ТВОЙ ЁКАЙ','YOUR YŌKAI'),76,952,32,'#f59aa9',924,true);
      text(T(stats.yokai[1],stats.yokai[2]),76,1043,80,'#faeee7');
      text(T('ЛЮБИМЫЙ ПОДЖАНР','FAVOURITE SUBGENRE'),76,1148,32,'#f59aa9',924,true);
      text(stats.genre || '—',76,1234,68,'#faeee7');

      text(T('ТОП ФИЛЬМОВ','TOP FILMS'),76,1355,31,'#f59aa9',924,true);
      for (const [i,f] of stats.best.entries()) {
        const x = 76 + i * 314, y = 1392, w = 298, h = 400, img = posters[i];
        ctx.fillStyle = '#251523';
        ctx.fillRect(x,y,w,h);
        if (img) {
          const scale = Math.max(w / img.width, h / img.height);
          ctx.save();
          ctx.beginPath();
          ctx.rect(x,y,w,h);
          ctx.clip();
          ctx.drawImage(img,x + (w-img.width*scale)/2,y + (h-img.height*scale)/2,img.width*scale,img.height*scale);
          ctx.restore();
        }
        ctx.fillStyle = 'rgba(8,5,10,.88)';
        ctx.fillRect(x,y+h-60,w,60);
        text(filmTitle(f), x+12, y+h-22, 26, '#faeee7', w-24);
      }
      text('horroraesthetic.github.io/horror-aesthetic',76,1854,25,'#ce9aa6',924,true);

      const url = canvas.toDataURL('image/png');
      if (!button.isConnected) return;
      const dialog = document.createElement('dialog');
      dialog.id = 'wrapview';
      dialog.setAttribute('aria-label','Horror Wrapped');
      dialog.innerHTML = '<img alt="Horror Wrapped"><div><button type="button" class="btn" id="wshare">' + T('Поделиться','Share') +
        '</button><button type="button" class="btn" id="wclose">' + T('Закрыть','Close') + '</button></div><p id="night-wrap-status" role="status"></p>';
      dialog.querySelector('img').src = url;
      dialog.querySelector('#wclose').onclick = () => dialog.close();
      dialog.addEventListener('close',()=>dialog.remove(),{once:true});
      dialog.querySelector('#wshare').onclick = () => {
        if (night.post('share-image', { png:url.slice('data:image/png;base64,'.length) })) return;
        const download = () => {
          const a = document.createElement('a');
          a.href = url;
          a.download = 'horror-aesthetic-wrapped.png';
          a.click();
        };
        canvas.toBlob(blob => {
          if (!blob) return download();
          const file = new File([blob], 'horror-aesthetic-wrapped.png', { type:'image/png' });
          if (navigator.canShare?.({ files:[file] })) {
            navigator.share({ title:'Horror Wrapped', files:[file] }).catch(error => {
              if (error.name !== 'AbortError') download();
            });
          } else download();
        }, 'image/png');
      };
      document.body.append(dialog);
      dialog.showModal();
    } catch {
      status.textContent = T('Не удалось собрать карточку. Попробуй ещё раз.', 'Could not make the card. Try again.');
    } finally {
      building = false;
      button.disabled = false;
    }
  };
})();
