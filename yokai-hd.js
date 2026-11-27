/* High-detail animated yokai for the gallery (viewBox 160x160). Gradients + layered shapes; animation is transform/opacity only. */
(function(){
 var H={};
 /* ---------- 1. Kasa-obake ---------- */
 H.karakasa='<defs><radialGradient id="kkA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff3a48" stop-opacity=".5"/><stop offset="1" stop-color="#ff3a48" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="kkP" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#b3262f"/><stop offset=".55" stop-color="#6e1019"/><stop offset="1" stop-color="#2c0509"/></linearGradient>'+
 '<linearGradient id="kkH" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
 '<radialGradient id="kkE" cx=".42" cy=".4" r=".7"><stop offset="0" stop-color="#fffdf6"/><stop offset=".7" stop-color="#eadfd0"/><stop offset="1" stop-color="#b9a590"/></radialGradient>'+
 '<radialGradient id="kkI" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#ffb08a"/><stop offset=".45" stop-color="#e5362f"/><stop offset="1" stop-color="#6b0a14"/></radialGradient>'+
 '<linearGradient id="kkT" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ff7c88"/><stop offset="1" stop-color="#b3182a"/></linearGradient>'+
 '<linearGradient id="kkL" x1="0" x2="1"><stop offset="0" stop-color="#efe6d6"/><stop offset="1" stop-color="#9c8d78"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="76" r="76" fill="url(#kkA)"/>'+
 '<g class="yd-orbit"><g transform="translate(80 18)"><path class="yd-fl" d="M0 -9Q5 -3 3.4 2.4 2 5.4 0 5.4-2 5.4-3.4 2.4-5-3 0 -9Z" fill="#bff7ee" opacity=".9"/><circle r="9" fill="#7fe8d0" opacity=".16"/></g></g>'+
 '<ellipse class="yd-shadow" cx="80" cy="152" rx="28" ry="4.4" fill="#000" opacity=".4"/>'+
 '<g class="yd-hop"><path d="M79 126V150" stroke="url(#kkL)" stroke-width="5" stroke-linecap="round"/><path d="M79 126V150" stroke="#fff" stroke-width="1" opacity=".35" stroke-linecap="round" transform="translate(-1 0)"/>'+
  '<path d="M66 148Q66 143 74 143H92Q98 143 98 148Z" fill="#6b3d1c"/><rect x="69" y="148" width="5" height="6" rx="1" fill="#4a2a12"/><rect x="88" y="148" width="5" height="6" rx="1" fill="#4a2a12"/><path d="M80 143L72 140M80 143L88 140" stroke="#d8232b" stroke-width="1.4" stroke-linecap="round"/>'+
  '<g class="yd-tongue"><path d="M88 88C86 108 106 110 102 128 99 138 89 138 89 128 89 116 82 112 84 88Z" fill="url(#kkT)" stroke="#7a0e1c" stroke-width=".8"/><path d="M92 96Q96 112 96 126" stroke="#8d1426" stroke-width=".8" fill="none" opacity=".7"/></g>'+
  '<path d="M80 18C46 22 18 48 14 88Q30 78 38 88 48 78 58 88 68 78 80 88 92 78 102 88 112 78 122 88 130 78 146 88C142 48 114 22 80 18Z" fill="url(#kkP)"/>'+
  '<path d="M80 18C46 22 18 48 14 88Q30 78 38 88 48 78 58 88 68 78 80 88Z" fill="url(#kkH)"/>'+
  '<g stroke="#e0b88a" stroke-width="1.1" opacity=".7" fill="none"><path d="M80 18Q50 50 38 86M80 18Q66 50 58 86M80 18V86M80 18Q94 50 102 86M80 18Q110 50 122 86M80 18Q40 36 14 86M80 18Q120 36 146 86"/></g>'+
  '<path d="M104 36l8 10-6 4 6 8-10 2z" fill="#14040a" opacity=".55"/><path d="M40 56l12 2-3 6z" fill="#14040a" opacity=".4"/>'+
  '<circle cx="80" cy="16" r="4" fill="#3a1d0e"/><path d="M80 10V4" stroke="#3a1d0e" stroke-width="2.4" stroke-linecap="round"/>'+
  '<g class="yd-eye"><ellipse cx="80" cy="56" rx="22" ry="15" fill="url(#kkE)" stroke="#4a0a12" stroke-width="1.6"/><g stroke="#d8453f" stroke-width=".6" fill="none" opacity=".7"><path d="M60 56Q66 54 70 52M60 59Q66 59 70 58M100 56Q94 54 90 52M100 59Q94 59 90 58"/></g>'+
   '<g class="yd-look"><circle cx="80" cy="56" r="10.4" fill="url(#kkI)"/><circle cx="80" cy="56" r="10.4" fill="none" stroke="#4a0a12" stroke-width=".8"/><ellipse cx="80" cy="56" rx="2.8" ry="8" fill="#050203"/><circle cx="75.4" cy="51.6" r="2.6" fill="#fff" opacity=".9"/><circle cx="84.6" cy="60.6" r="1.1" fill="#fff" opacity=".6"/></g>'+
   '<path class="yd-lid" d="M57 56Q80 30 103 56Q80 41 57 56Z" fill="#3a0a10"/></g></g>';
 /* ---------- 2. Bakeneko ---------- */
 H.bakeneko='<defs><radialGradient id="bkM" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e8e4ff" stop-opacity=".34"/><stop offset="1" stop-color="#e8e4ff" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="bkF" cx=".4" cy=".3" r=".9"><stop offset="0" stop-color="#3b3050"/><stop offset=".6" stop-color="#150f20"/><stop offset="1" stop-color="#05030a"/></radialGradient>'+
 '<radialGradient id="bkY" cx=".4" cy=".4" r=".7"><stop offset="0" stop-color="#fbff9a"/><stop offset=".6" stop-color="#c7e000"/><stop offset="1" stop-color="#6a7a00"/></radialGradient>'+
 '<radialGradient id="bkG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e8ff4d" stop-opacity=".55"/><stop offset="1" stop-color="#e8ff4d" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="bkK" x1="0" x2="1"><stop offset="0" stop-color="#8d1626"/><stop offset="1" stop-color="#3a060f"/></linearGradient>'+
 '<radialGradient id="bkB" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#e6fffb"/><stop offset=".45" stop-color="#7fe8d0" stop-opacity=".8"/><stop offset="1" stop-color="#7fe8d0" stop-opacity="0"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="70" r="58" fill="url(#bkM)"/>'+
 '<g class="yd-tail"><path d="M50 146C20 146 12 112 26 92 32 84 38 88 34 96" fill="none" stroke="#0c0714" stroke-width="9" stroke-linecap="round"/><path d="M50 146C20 146 12 112 26 92" fill="none" stroke="#4b3f66" stroke-width="1" opacity=".6" transform="translate(-2 -1)"/><g transform="translate(33 90)"><g class="yd-fl"><circle r="12" fill="url(#bkB)"/><path d="M0 -10Q5 -4 3.4 1.4 2 4.4 0 4.4-2 4.4-3.4 1.4-5-4 0 -10Z" fill="#effffb"/></g></g></g>'+
 '<g class="yd-tail2"><path d="M54 150C30 160 8 140 8 116" fill="none" stroke="#0c0714" stroke-width="8" stroke-linecap="round"/><g transform="translate(8 112)"><g class="yd-fl" style="animation-delay:-.7s"><circle r="12" fill="url(#bkB)"/><path d="M0 -10Q5 -4 3.4 1.4 2 4.4 0 4.4-2 4.4-3.4 1.4-5-4 0 -10Z" fill="#effffb"/></g></g></g>'+
 '<path d="M36 160Q38 112 62 104H98Q122 112 124 160Z" fill="url(#bkF)"/><path d="M62 104L80 134 98 104" fill="none" stroke="url(#bkK)" stroke-width="7" stroke-linejoin="round"/><path d="M62 104L80 134 98 104" fill="none" stroke="#e6405a" stroke-width="1" opacity=".6"/>'+
 '<g class="yd-wave"><path d="M112 124Q128 114 134 92" fill="none" stroke="#0c0714" stroke-width="13" stroke-linecap="round"/><ellipse cx="135" cy="84" rx="10.4" ry="11.6" fill="url(#bkF)"/><g stroke="#3b3050" stroke-width="1" fill="none"><path d="M131 88q0-5 0-6M135 88v-7M139 88q0-5 0-6"/></g><ellipse cx="135" cy="90" rx="4.6" ry="3.4" fill="#6a2036"/></g>'+
 '<path d="M46 56L42 18 70 38Z" fill="url(#bkF)"/><path d="M114 56L118 18 90 38Z" fill="url(#bkF)"/><path d="M49 50L47 26 63 38Z" fill="#6a2036"/><path d="M111 50L113 26 97 38Z" fill="#6a2036"/>'+
 '<ellipse cx="80" cy="72" rx="36" ry="30" fill="url(#bkF)"/><ellipse cx="80" cy="72" rx="36" ry="30" fill="none" stroke="#5a4c7c" stroke-width=".8" opacity=".6"/>'+
 '<circle class="yd-pulse2" cx="64" cy="70" r="16" fill="url(#bkG)"/><circle class="yd-pulse2" cx="96" cy="70" r="16" fill="url(#bkG)"/>'+
 '<g class="yd-blink"><path d="M50 70Q64 56 78 70Q64 82 50 70Z" fill="url(#bkY)" stroke="#1b2200" stroke-width="1"/><path d="M82 70Q96 56 110 70Q96 82 82 70Z" fill="url(#bkY)" stroke="#1b2200" stroke-width="1"/><ellipse cx="64" cy="70" rx="2.4" ry="9.4" fill="#050203"/><ellipse cx="96" cy="70" rx="2.4" ry="9.4" fill="#050203"/><circle cx="60.4" cy="66" r="1.6" fill="#fff" opacity=".85"/><circle cx="92.4" cy="66" r="1.6" fill="#fff" opacity=".85"/></g>'+
 '<path d="M76 82H84L80 87Z" fill="#c75a7a"/><path d="M80 87Q76 93 70 90M80 87Q84 93 90 90" fill="none" stroke="#c9bfe0" stroke-width="1.1" stroke-linecap="round"/><path d="M74 90l1.6 5 1.6-4.6M82.8 90.4l1.6 4.6 1.6-5" fill="#fff" stroke="#bdb2d4" stroke-width=".4"/>'+
 '<g class="yd-whisk" stroke="#e8e2f4" stroke-width="1" stroke-linecap="round" opacity=".85" fill="none"><path d="M54 80Q36 76 22 80M54 86Q38 88 24 94M106 80Q124 76 138 80M106 86Q122 88 136 94"/></g>';
 /* ---------- 3. Teru-teru-bozu ---------- */
 H.teruteru='<defs><linearGradient id="ttW" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#1b2b3c"/><stop offset="1" stop-color="#090e16"/></linearGradient>'+
 '<radialGradient id="ttC" cx=".4" cy=".3" r=".9"><stop offset="0" stop-color="#ffffff"/><stop offset=".7" stop-color="#e6dfd2"/><stop offset="1" stop-color="#b5ab9b"/></radialGradient>'+
 '<linearGradient id="ttB" x1="0" x2="1"><stop offset="0" stop-color="#e03a46"/><stop offset="1" stop-color="#8a0f1c"/></linearGradient></defs>'+
 '<rect x="14" y="4" width="132" height="152" rx="3" fill="url(#ttW)" stroke="#5a6b80" stroke-width="3"/><path d="M80 4V156M14 80H146" stroke="#5a6b80" stroke-width="3"/>'+
 '<rect class="yd-flash" x="17" y="7" width="126" height="146" fill="#cfe6ff" opacity="0"/>'+
 '<g stroke="#9ab4d0" stroke-linecap="round" opacity=".55">'+(function(){var s='',i;for(i=0;i<16;i++){s+='<path class="yd-rain" style="--d:-'+(i*.31).toFixed(2)+'s;--t:'+(1.1+(i%4)*.2).toFixed(2)+'s" stroke-width="'+(i%3?1:1.6)+'" d="M'+(22+i*7.5)+' 6v'+(10+i%3*4)+'"/>'}return s})()+'</g>'+
 '<g class="yd-sway"><path d="M80 4V36" stroke="#d9c9a8" stroke-width="1.6"/><circle cx="80" cy="6" r="3" fill="#d9c9a8"/>'+
  '<path d="M66 66Q58 100 46 132Q56 128 62 136 70 128 80 136 90 128 98 136 104 128 114 132 102 100 94 66Z" fill="url(#ttC)" stroke="#8c8272" stroke-width="1" stroke-linejoin="round"/>'+
  '<g stroke="#a89f8e" stroke-width="1" fill="none" opacity=".7"><path d="M72 76Q68 104 60 128M80 78V132M88 76Q92 104 100 128"/></g>'+
  '<circle cx="80" cy="50" r="19" fill="url(#ttC)" stroke="#8c8272" stroke-width="1"/><path d="M63 46Q80 30 97 46" fill="none" stroke="#fff" stroke-width="2" opacity=".5" stroke-linecap="round"/>'+
  '<path d="M64 66Q80 76 96 66" fill="none" stroke="url(#ttB)" stroke-width="6" stroke-linecap="round"/><path d="M80 71q-8 6-14 2M80 71q8 6 14 2" fill="none" stroke="#e03a46" stroke-width="4" stroke-linecap="round"/><circle cx="80" cy="71" r="3" fill="#b01a2a"/>'+
  '<ellipse cx="72" cy="50" rx="3.4" ry="4.4" fill="#0a0608"/><ellipse cx="88" cy="50" rx="3.4" ry="4.4" fill="#0a0608"/><circle cx="71" cy="48.6" r="1" fill="#fff" opacity=".7"/><circle cx="87" cy="48.6" r="1" fill="#fff" opacity=".7"/>'+
  '<path class="yd-drip" d="M72 54v18" stroke="#0a0608" stroke-width="1.6" stroke-linecap="round"/><path class="yd-drip" style="--d:-2.4s" d="M88 54v22" stroke="#0a0608" stroke-width="1.6" stroke-linecap="round"/>'+
  '<path d="M71 61Q80 57 89 61" fill="none" stroke="#0a0608" stroke-width="1.4" stroke-linecap="round"/><g stroke="#0a0608" stroke-width="1"><path d="M73 59.6v3M77 58.6v3M81 58.4v3M85 58.6v3M88 59.6v3"/></g>'+
  '<path class="yd-seep" d="M84 84Q90 98 86 118" fill="none" stroke="#a5101f" stroke-width="2" stroke-linecap="round" opacity="0"/></g>';
 /* ---------- 4. Jizo ---------- */
 H.jizo='<defs><radialGradient id="jzH" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe9b0" stop-opacity=".5"/><stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="jzS" x1="0" x2="1"><stop offset="0" stop-color="#a9a6a1"/><stop offset=".5" stop-color="#78746f"/><stop offset="1" stop-color="#3d3a37"/></linearGradient>'+
 '<linearGradient id="jzR" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#e5303c"/><stop offset="1" stop-color="#7d0c18"/></linearGradient>'+
 '<radialGradient id="jzF" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd36b" stop-opacity=".9"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="56" r="52" fill="url(#jzH)"/>'+
 '<path class="yd-smoke" d="M132 112Q122 98 134 86Q144 74 132 62" fill="none" stroke="#cfc7ba" stroke-width="3" stroke-linecap="round" opacity=".0"/><path class="yd-smoke" style="--d:-3s" d="M134 112Q146 98 134 86Q124 74 136 62" fill="none" stroke="#cfc7ba" stroke-width="2.4" stroke-linecap="round" opacity=".0"/>'+
 '<path d="M24 150L34 132H126L136 150Z" fill="url(#jzS)"/><path d="M34 132H126" stroke="#bfbbb4" stroke-width="1.4" opacity=".6"/><path d="M40 140q6-3 10 0 5 3 9 0" stroke="#4f7a38" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/><path d="M100 146q8-4 14 0" stroke="#4f7a38" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>'+
 '<path d="M50 134Q48 98 60 80 80 70 100 80 112 98 110 134Z" fill="url(#jzS)"/><path d="M60 82Q58 108 62 132M100 82Q102 108 98 132" stroke="#2e2c2a" stroke-width="1.4" fill="none" opacity=".5"/><path d="M66 96Q80 108 94 96" stroke="#2e2c2a" stroke-width="1.2" fill="none" opacity=".45"/>'+
 '<circle cx="80" cy="58" r="19" fill="url(#jzS)"/><path d="M60 58Q58 66 62 74M100 58Q102 66 98 74" stroke="#6c6863" stroke-width="3" fill="none" stroke-linecap="round"/>'+
 '<path d="M61 52Q62 28 80 26 98 28 99 52Q80 44 61 52Z" fill="url(#jzR)"/><path d="M61 52Q80 44 99 52" fill="none" stroke="#ff7a84" stroke-width="1" opacity=".6"/><g stroke="#5a0a14" stroke-width=".8" opacity=".5" fill="none"><path d="M70 30v12M80 28v14M90 30v12"/></g><circle cx="80" cy="25" r="2.6" fill="#ff7a84"/>'+
 '<path d="M68 59q4 3.4 8 0M84 59q4 3.4 8 0" stroke="#26231f" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M75 68q5 3 10 0" stroke="#26231f" stroke-width="1.3" fill="none" stroke-linecap="round"/><circle cx="80" cy="63" r="1.2" fill="#e7e2da" opacity=".7"/>'+
 '<g class="yd-bib"><path d="M64 78Q80 100 96 78L94 108Q80 122 66 108Z" fill="url(#jzR)"/><path d="M70 90q10 8 20 0M68 100q12 9 24 0" stroke="#5a0a14" stroke-width=".9" fill="none" opacity=".6"/><path d="M80 82v34" stroke="#ff7a84" stroke-width=".6" opacity=".5"/></g>'+
 '<g class="yd-ring"><path d="M118 44V134" stroke="#c9a14a" stroke-width="2.4" stroke-linecap="round"/><circle cx="118" cy="40" r="8" fill="none" stroke="#d9b45a" stroke-width="2.2"/><circle cx="111" cy="40" r="2.4" fill="#d9b45a"/><circle cx="125" cy="40" r="2.4" fill="#d9b45a"/><path d="M118 32v-6" stroke="#d9b45a" stroke-width="2"/></g>'+
 '<g fill="url(#jzS)" stroke="#2e2c2a" stroke-width=".6"><ellipse cx="38" cy="128" rx="9" ry="4.4"/><ellipse cx="38" cy="120.6" rx="6.6" ry="3.6"/><ellipse cx="38" cy="114.4" rx="4.4" ry="3"/></g>'+
 '<g transform="translate(136 124)"><g class="yd-fl"><circle r="14" fill="url(#jzF)"/><rect x="-2.4" y="0" width="4.8" height="12" fill="#efe6d2"/><path d="M0 -10Q5 -3 3 1.4 1.8 3.4 0 3.4-1.8 3.4-3 1.4-5-3 0 -10Z" fill="#ffb347"/></g></g>'+
 '<g transform="translate(24 70)"><g class="yd-fl" style="animation-delay:-1.2s"><circle r="9" fill="url(#jzF)" opacity=".4"/></g></g>';
 /* ---------- 5. Daruma ---------- */
 H.daruma='<defs><radialGradient id="drB" cx=".35" cy=".3" r=".95"><stop offset="0" stop-color="#ff5a52"/><stop offset=".5" stop-color="#c0141d"/><stop offset="1" stop-color="#5a0710"/></radialGradient>'+
 '<radialGradient id="drF" cx=".5" cy=".35" r=".8"><stop offset="0" stop-color="#fffaf0"/><stop offset=".8" stop-color="#ecdfc8"/><stop offset="1" stop-color="#c9b496"/></radialGradient>'+
 '<radialGradient id="drG" cx=".3" cy=".25" r=".4"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>'+
 '<ellipse class="yd-shadow" cx="80" cy="152" rx="46" ry="5" fill="#000" opacity=".4"/>'+
 '<g class="yd-rock"><path d="M80 14C120 14 138 50 136 92 134 128 114 148 80 148 46 148 26 128 24 92 22 50 40 14 80 14Z" fill="url(#drB)"/>'+
  '<path d="M34 104Q50 120 80 118 110 120 126 104M30 118Q50 136 80 132 110 136 130 118" stroke="#f2c94c" stroke-width="1.4" fill="none" opacity=".75" stroke-linecap="round"/><path d="M44 130q6-6 14-2M102 128q8-4 14 2" stroke="#f2c94c" stroke-width="1.2" fill="none" opacity=".7"/>'+
  '<path d="M44 52Q80 22 116 52Q126 84 102 96Q80 104 58 96Q34 84 44 52Z" fill="url(#drF)" stroke="#7a1a1a" stroke-width="1.4"/>'+
  '<path d="M44 46Q50 28 70 40 78 46 78 56 62 44 44 46Z M116 46Q110 28 90 40 82 46 82 56 98 44 116 46Z" fill="#120808"/>'+
  '<g fill="none" stroke="#120808" stroke-width="2" stroke-linecap="round"><path d="M80 80Q64 72 50 82Q44 90 52 94M80 80Q96 72 110 82Q116 90 108 94"/><path d="M66 94Q80 100 94 94" stroke-width="1.6"/></g>'+
  '<path d="M72 98Q80 108 88 98" fill="none" stroke="#120808" stroke-width="1.2" opacity=".6"/>'+
  '<circle cx="63" cy="64" r="10.6" fill="#fff" stroke="#120808" stroke-width="1.4"/><circle cx="63" cy="64" r="6.4" fill="#120808"/><circle cx="60.6" cy="61.4" r="2" fill="#fff"/>'+
  '<circle cx="97" cy="64" r="10.6" fill="#fff" stroke="#120808" stroke-width="1.4"/><circle class="yd-iris" cx="97" cy="64" r="6.4" fill="#120808"/><circle class="yd-iris" style="animation-delay:.02s" cx="94.6" cy="61.4" r="2" fill="#fff"/>'+
  '<rect x="58" y="104" width="44" height="30" rx="4" fill="#7a0b14" stroke="#f2c94c" stroke-width="1.4"/><text x="80" y="128" text-anchor="middle" font-size="26" font-weight="700" fill="#f2c94c" style="font-family:var(--ja,serif)">願</text>'+
  '<ellipse cx="54" cy="40" rx="18" ry="10" fill="url(#drG)" transform="rotate(-30 54 40)"/></g>';
 /* ---------- 6. Nopperabo ---------- */
 H.nopperabo='<defs><radialGradient id="npM" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d9d6ff" stop-opacity=".3"/><stop offset="1" stop-color="#d9d6ff" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="npP" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#ffffff"/><stop offset=".7" stop-color="#ebe3d9"/><stop offset="1" stop-color="#b9ad9f"/></radialGradient>'+
 '<linearGradient id="npK" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#262a52"/><stop offset="1" stop-color="#0c0e22"/></linearGradient>'+
 '<linearGradient id="npH" x1="0" x2="1"><stop offset="0" stop-color="#2a2433"/><stop offset=".5" stop-color="#050307"/><stop offset="1" stop-color="#1c1724"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="64" r="64" fill="url(#npM)"/>'+
 '<path d="M24 160Q28 120 56 108L80 130 104 108Q132 120 136 160Z" fill="url(#npK)"/><path d="M56 108L80 138 104 108" fill="none" stroke="#f1ece4" stroke-width="5" stroke-linejoin="round"/><path d="M56 108L80 138 104 108" fill="none" stroke="#c12a38" stroke-width="1.4" transform="translate(0 4)"/>'+
 '<g stroke="#4a5090" stroke-width=".8" opacity=".5" fill="none"><path d="M40 140l8 8M52 134l8 8M120 140l-8 8M108 134l-8 8"/></g>'+
 '<path d="M70 98V118Q80 126 90 118V98Z" fill="#e6ddd1"/>'+
 '<g class="yd-hairL"><path d="M54 60C38 92 46 130 34 160" fill="none" stroke="url(#npH)" stroke-width="12" stroke-linecap="round"/><path d="M52 66C44 96 50 128 42 156" fill="none" stroke="#3a3248" stroke-width="1" opacity=".6"/></g>'+
 '<g class="yd-hairR"><path d="M106 60C122 92 114 130 126 160" fill="none" stroke="url(#npH)" stroke-width="12" stroke-linecap="round"/><path d="M108 66C116 96 110 128 118 156" fill="none" stroke="#3a3248" stroke-width="1" opacity=".6"/></g>'+
 '<g class="yd-head"><path d="M80 22C108 22 114 56 108 82 104 102 92 110 80 110 68 110 56 102 52 82 46 56 52 22 80 22Z" fill="url(#npP)" stroke="#a89c8e" stroke-width="1"/>'+
  '<path d="M48 64C42 30 60 12 80 12 100 12 118 30 112 64 108 44 98 34 80 34 62 34 52 44 48 64Z" fill="url(#npH)"/><path d="M80 12V34" stroke="#3a3248" stroke-width="1" opacity=".7"/><path d="M60 24Q80 14 100 24" fill="none" stroke="#5a4c78" stroke-width="1" opacity=".5"/>'+
  '<g class="yd-kan"><path d="M104 30L118 18" stroke="#c9a14a" stroke-width="1.4"/><circle cx="104" cy="31" r="3.6" fill="#d8232b"/><path class="yd-bead" d="M118 18v10" stroke="#c9a14a" stroke-width="1"/><circle class="yd-bead" cx="118" cy="30" r="2.6" fill="#d8232b"/></g>'+
  '<g fill="none" stroke="#2a2433"><path class="yd-feat" d="M60 62Q68 56 76 62Q68 66 60 62ZM84 62Q92 56 100 62Q92 66 84 62Z" stroke-width=".8"/><path class="yd-feat" style="--d:-3.6s" d="M72 86Q80 90 88 86" stroke-width=".8"/></g>'+
  '<g fill="none" stroke="#2a2433" stroke-width=".7"><ellipse class="yd-rip" cx="68" cy="62" rx="8" ry="4"/><ellipse class="yd-rip" style="--d:-1.2s" cx="92" cy="62" rx="8" ry="4"/><ellipse class="yd-rip" style="--d:-2.4s" cx="80" cy="86" rx="9" ry="3"/></g>'+
  '<path class="yd-tear" d="M92 66V96" stroke="#7a0e1c" stroke-width="1.6" stroke-linecap="round" fill="none"/></g>';
 /* ---------- 7. Kitsune ---------- */
 H.kitsune='<defs><radialGradient id="ksA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffb347" stop-opacity=".42"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="ksT" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#b8480f"/><stop offset=".6" stop-color="#f09a35"/><stop offset=".86" stop-color="#ffe2b0"/><stop offset="1" stop-color="#fff"/></linearGradient>'+
 '<radialGradient id="ksH" cx=".5" cy=".3" r=".9"><stop offset="0" stop-color="#ffc468"/><stop offset=".7" stop-color="#e5832a"/><stop offset="1" stop-color="#a8420e"/></radialGradient>'+
 '<radialGradient id="ksW" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f2e2cc"/></radialGradient>'+
 '<radialGradient id="ksE" cx=".4" cy=".4" r=".7"><stop offset="0" stop-color="#fff4a8"/><stop offset=".6" stop-color="#ffb800"/><stop offset="1" stop-color="#a85a00"/></radialGradient>'+
 '<radialGradient id="ksF" cx=".5" cy=".6" r=".5"><stop offset="0" stop-color="#e6fffb"/><stop offset=".45" stop-color="#6fd8ff" stop-opacity=".8"/><stop offset="1" stop-color="#6fd8ff" stop-opacity="0"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="84" r="76" fill="url(#ksA)"/>'+
 '<g transform="rotate(-48 80 142)"><g class="yd-t1"><path d="M80 142C54 124 52 72 80 24 108 72 106 124 80 142Z" fill="url(#ksT)"/><path d="M80 140C70 110 72 70 80 40" stroke="#fff" stroke-width="1" fill="none" opacity=".35"/></g></g>'+
 '<g transform="rotate(48 80 142)"><g class="yd-t2"><path d="M80 142C54 124 52 72 80 24 108 72 106 124 80 142Z" fill="url(#ksT)"/><path d="M80 140C90 110 88 70 80 40" stroke="#fff" stroke-width="1" fill="none" opacity=".35"/></g></g>'+
 '<g transform="rotate(0 80 142)"><g class="yd-t3"><path d="M80 142C58 126 56 78 80 28 104 78 102 126 80 142Z" fill="url(#ksT)"/></g></g>'+
 '<g transform="translate(26 44)"><g class="yd-fl yd-hit"><circle r="15" fill="url(#ksF)"/><path d="M0 -11Q6 -4 4 2 2.4 5.4 0 5.4-2.4 5.4-4 2-6-4 0 -11Z" fill="#eaffff"/></g></g>'+
 '<g transform="translate(136 40)"><g class="yd-fl yd-hit" style="animation-delay:-.6s"><circle r="12" fill="url(#ksF)"/><path d="M0 -9Q5 -3 3.4 1.6 2 4.4 0 4.4-2 4.4-3.4 1.6-5-3 0 -9Z" fill="#eaffff"/></g></g>'+
 '<path d="M42 160Q46 124 80 118 114 124 118 160Z" fill="#f4ece0"/><path d="M62 120L80 146 98 120" fill="none" stroke="#c4181f" stroke-width="6" stroke-linejoin="round"/><path d="M80 146V160" stroke="#c4181f" stroke-width="5"/><path d="M48 150H112" stroke="#c4181f" stroke-width="2" opacity=".5"/>'+
 '<g class="yd-ear"><path d="M45 80L38 30 72 62Z" fill="url(#ksH)"/><path d="M48 70L45 42 64 62Z" fill="#2a0c06"/></g><path d="M115 80L122 30 88 62Z" fill="url(#ksH)"/><path d="M112 70L115 42 96 62Z" fill="#2a0c06"/>'+
 '<path d="M40 80Q80 62 120 80 114 114 80 128 46 114 40 80Z" fill="url(#ksH)"/>'+
 '<path d="M58 96Q80 88 102 96 94 126 80 128 66 126 58 96Z" fill="url(#ksW)"/><path d="M40 84Q54 100 62 108M120 84Q106 100 98 108" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity=".92"/>'+
 '<g fill="none" stroke="#c4181f" stroke-width="2.6" stroke-linecap="round"><path d="M50 86Q38 82 32 70M110 86Q122 82 128 70M60 96Q50 100 44 112M100 96Q110 100 116 112"/></g><path d="M80 68l5 8-5 8-5-8Z" fill="#c4181f"/>'+
 '<g class="yd-blink2"><path d="M50 92Q62 82 76 94Q62 98 50 92Z" fill="url(#ksE)" stroke="#2a0c06" stroke-width="1.2"/><path d="M110 92Q98 82 84 94Q98 98 110 92Z" fill="url(#ksE)" stroke="#2a0c06" stroke-width="1.2"/><ellipse cx="63" cy="92" rx="2" ry="5.2" fill="#050203"/><ellipse cx="97" cy="92" rx="2" ry="5.2" fill="#050203"/><circle cx="59" cy="89.4" r="1.4" fill="#fff"/><circle cx="93" cy="89.4" r="1.4" fill="#fff"/></g>'+
 '<path d="M74 108H86L80 115Z" fill="#14070a"/><path d="M80 115Q75 122 69 119M80 115Q85 122 91 119" fill="none" stroke="#2a0c06" stroke-width="1.4" stroke-linecap="round"/>';
 /* ---------- 8. Kappa ---------- */
 H.kappa='<defs><radialGradient id="kpA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#5fe0c8" stop-opacity=".36"/><stop offset="1" stop-color="#5fe0c8" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="kpG" cx=".4" cy=".3" r=".9"><stop offset="0" stop-color="#9ad468"/><stop offset=".6" stop-color="#4f9a3a"/><stop offset="1" stop-color="#1f4a22"/></radialGradient>'+
 '<linearGradient id="kpS" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#8a6a2e"/><stop offset="1" stop-color="#3a2810"/></linearGradient>'+
 '<linearGradient id="kpB" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd24a"/><stop offset="1" stop-color="#c8801a"/></linearGradient>'+
 '<radialGradient id="kpD" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#e8fff8"/><stop offset=".7" stop-color="#9ad8d0"/><stop offset="1" stop-color="#4a8f8a"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="86" r="74" fill="url(#kpA)"/>'+
 '<g fill="none" stroke="#7fe8d0" stroke-width="1.4" opacity=".7"><ellipse class="yd-rip" cx="80" cy="148" rx="46" ry="7"/><ellipse class="yd-rip" style="--d:-1.8s" cx="80" cy="148" rx="46" ry="7"/></g>'+
 '<ellipse cx="80" cy="124" rx="46" ry="34" fill="url(#kpS)"/><g stroke="#1e1408" stroke-width="1.2" fill="none" opacity=".7"><path d="M52 112Q80 104 108 112M48 128Q80 120 112 128M80 96V150M62 100L58 146M98 100L102 146"/></g>'+
 '<path d="M50 160Q48 120 80 114 112 120 110 160Z" fill="url(#kpG)"/><path d="M62 128Q80 140 98 128" fill="none" stroke="#1f4a22" stroke-width="1.6" opacity=".6"/>'+
 '<g transform="rotate(-28 126 118)"><rect x="104" y="108" width="50" height="17" rx="8.5" fill="#4a9a2e" stroke="#1f4a22" stroke-width="1.2"/><g fill="#86c85a"><circle cx="116" cy="112" r="1.2"/><circle cx="128" cy="113" r="1.2"/><circle cx="140" cy="112" r="1.2"/><circle cx="122" cy="121" r="1.2"/><circle cx="134" cy="121" r="1.2"/></g><path d="M150 116.5q6 0 6-3" stroke="#e8d84a" stroke-width="2" fill="none"/></g>'+
 '<path d="M96 124Q108 128 112 120" fill="none" stroke="#2f6a2c" stroke-width="10" stroke-linecap="round"/><circle cx="114" cy="118" r="6" fill="url(#kpG)"/>'+
 '<g class="yd-bow"><path d="M48 66C48 40 112 40 112 66 112 96 98 106 80 106 62 106 48 96 48 66Z" fill="url(#kpG)"/>'+
  '<path d="M46 62C50 44 66 40 80 40 94 40 110 44 114 62 108 52 98 50 80 50 62 50 52 52 46 62Z" fill="#0d0a10"/>'+
  '<ellipse cx="80" cy="42" rx="21" ry="7.4" fill="#2f6a2c" stroke="#1f4a22" stroke-width="1"/><ellipse cx="80" cy="42.6" rx="17" ry="5.2" fill="url(#kpD)"/><ellipse class="yd-glint" cx="74" cy="41.4" rx="6" ry="1.6" fill="#fff" opacity=".8"/>'+
  '<path class="yd-drip" d="M96 46V60" stroke="#9ad8d0" stroke-width="2.2" stroke-linecap="round"/>'+
  '<g class="yd-blink2" style="transform-origin:80px 72px"><circle cx="64" cy="72" r="10.6" fill="#fff" stroke="#14280e" stroke-width="1.4"/><circle cx="96" cy="72" r="10.6" fill="#fff" stroke="#14280e" stroke-width="1.4"/><circle cx="66" cy="73" r="5.4" fill="#0a0a0a"/><circle cx="94" cy="73" r="5.4" fill="#0a0a0a"/><circle cx="64.4" cy="70.6" r="1.8" fill="#fff"/><circle cx="92.4" cy="70.6" r="1.8" fill="#fff"/></g>'+
  '<path d="M52 62Q64 66 74 62M108 62Q96 66 86 62" fill="none" stroke="#14280e" stroke-width="2.6" stroke-linecap="round"/>'+
  '<path d="M62 88Q80 80 98 88 98 102 80 104 62 102 62 88Z" fill="url(#kpB)" stroke="#6a4208" stroke-width="1"/><path d="M64 94Q80 98 96 94" fill="none" stroke="#6a4208" stroke-width="1.2"/><circle cx="75" cy="87" r="1.2" fill="#6a4208"/><circle cx="85" cy="87" r="1.2" fill="#6a4208"/></g>';
 /* ---------- 9. Rokurokubi ---------- */
 H.rokurokubi='<defs><radialGradient id="rkM" cx=".5" cy=".4" r=".55"><stop offset="0" stop-color="#e2dcff" stop-opacity=".32"/><stop offset="1" stop-color="#e2dcff" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="rkK" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#5a2a5e"/><stop offset="1" stop-color="#1c0c24"/></linearGradient>'+
 '<linearGradient id="rkN" x1="0" x2="1"><stop offset="0" stop-color="#d8cfc4"/><stop offset=".5" stop-color="#f6efe6"/><stop offset="1" stop-color="#bfb3a6"/></linearGradient>'+
 '<radialGradient id="rkP" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#fff8ee"/><stop offset=".8" stop-color="#eadcca"/><stop offset="1" stop-color="#bba890"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="60" r="74" fill="url(#rkM)"/>'+
 '<path d="M30 160Q34 122 66 106H94Q126 122 130 160Z" fill="url(#rkK)"/><path d="M66 106L80 132 94 106" fill="none" stroke="#f1ece4" stroke-width="5" stroke-linejoin="round"/><path d="M40 138Q80 150 120 138" stroke="#c4181f" stroke-width="9" fill="none" opacity=".85"/><path d="M80 140V160" stroke="#8a1018" stroke-width="2"/><g fill="#e8a8d0" opacity=".5"><circle cx="48" cy="150" r="3"/><circle cx="112" cy="152" r="3"/><circle cx="64" cy="158" r="2.4"/><circle cx="96" cy="158" r="2.4"/></g>'+
 '<g class="yd-neck"><path d="M74 108C68 92 92 84 84 68 82 62 80 60 80 56" fill="none" stroke="url(#rkN)" stroke-width="15" stroke-linecap="round"/><path d="M74 108C68 92 92 84 84 68" fill="none" stroke="#bfb3a6" stroke-width="1" opacity=".6" transform="translate(-4 0)"/></g>'+
 '<g class="yd-necktop"><g class="yd-head"><path d="M58 32C48 70 44 86 40 100" fill="none" stroke="#050307" stroke-width="12" stroke-linecap="round" opacity=".0"/>'+
  '<path d="M80 6C62 6 56 22 56 38 56 60 66 72 80 72 94 72 104 60 104 38 104 22 98 6 80 6Z" fill="url(#rkP)" stroke="#a8967c" stroke-width="1"/>'+
  '<path d="M54 40C50 14 64 2 80 2 96 2 110 14 106 40 102 24 94 16 80 16 66 16 58 24 54 40Z" fill="#050307"/>'+
  '<g class="yd-hairL"><path d="M56 30C44 56 52 86 42 112" fill="none" stroke="#050307" stroke-width="9" stroke-linecap="round"/></g><g class="yd-hairR"><path d="M104 30C116 56 108 86 118 112" fill="none" stroke="#050307" stroke-width="9" stroke-linecap="round"/></g>'+
  '<circle cx="80" cy="2" r="6" fill="#050307"/><path d="M92 2L108 -2" stroke="#c9a14a" stroke-width="1.6"/><circle cx="109" cy="-2" r="2.8" fill="#c4181f"/>'+
  '<g class="yd-blink2" style="transform-origin:80px 42px"><path d="M60 42Q68 36 76 42Q68 46 60 42Z" fill="#fff" stroke="#14070a" stroke-width="1"/><path d="M84 42Q92 36 100 42Q92 46 84 42Z" fill="#fff" stroke="#14070a" stroke-width="1"/><circle cx="72" cy="41.6" r="2.6" fill="#050203"/><circle cx="96" cy="41.6" r="2.6" fill="#050203"/></g>'+
  '<path d="M60 34Q68 31 76 35M84 35Q92 31 100 34" stroke="#14070a" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M80 44v8" stroke="#bba890" stroke-width="1"/><path d="M66 58Q80 66 94 58" fill="none" stroke="#a5101f" stroke-width="2.4" stroke-linecap="round"/><path d="M69 59.4l1.6 3 1.6-2.2M88 60l1.8 2.6 1.4-3" fill="#fff" stroke="#fff" stroke-width=".4"/></g></g>';
 /* ---------- 10. Kuchisake-onna ---------- */
 H.kuchisake='<defs><radialGradient id="kcL" cx=".5" cy=".3" r=".6"><stop offset="0" stop-color="#ffd98a" stop-opacity=".34"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="kcC" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#cdb89a"/><stop offset="1" stop-color="#6e5c46"/></linearGradient>'+
 '<radialGradient id="kcP" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#fff8ee"/><stop offset=".8" stop-color="#ecdccb"/><stop offset="1" stop-color="#b9a48c"/></radialGradient>'+
 '<linearGradient id="kcS" x1="0" x2="1"><stop offset="0" stop-color="#7d8794"/><stop offset=".45" stop-color="#f2f6fa"/><stop offset="1" stop-color="#8f99a6"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="56" r="76" fill="url(#kcL)"/>'+
 '<g class="yd-hairS"><path d="M52 40C32 76 40 130 24 160H60L64 70Z" fill="#050307"/><path d="M108 40C128 76 120 130 136 160H100L96 70Z" fill="#050307"/></g>'+
 '<path d="M28 160Q32 118 64 106L80 124 96 106Q128 118 132 160Z" fill="url(#kcC)"/><path d="M64 106L76 140 56 160M96 106L84 140 104 160" fill="none" stroke="#3e3226" stroke-width="2.4" stroke-linejoin="round"/><path d="M80 124V160" stroke="#3e3226" stroke-width="1.4"/><circle cx="76" cy="146" r="1.8" fill="#3e3226"/><circle cx="76" cy="154" r="1.8" fill="#3e3226"/>'+
 '<rect x="70" y="92" width="20" height="18" fill="#e6d6c2"/>'+
 '<path d="M80 26C62 26 54 42 54 58 54 84 64 98 80 98 96 98 106 84 106 58 106 42 98 26 80 26Z" fill="url(#kcP)" stroke="#a8967c" stroke-width="1"/>'+
 '<path d="M52 60C46 26 62 12 80 12 98 12 114 26 108 60 106 40 98 30 80 30 62 30 54 40 52 60Z" fill="#050307"/><path d="M80 12V30" stroke="#3a3248" stroke-width="1"/>'+
 '<g class="yd-blink2" style="transform-origin:80px 58px"><path d="M60 58Q68 51 76 58Q68 63 60 58Z" fill="#fff" stroke="#14070a" stroke-width="1"/><path d="M84 58Q92 51 100 58Q92 63 84 58Z" fill="#fff" stroke="#14070a" stroke-width="1"/><circle cx="68" cy="57.4" r="3.2" fill="#050203"/><circle cx="92" cy="57.4" r="3.2" fill="#050203"/><circle cx="67" cy="56.2" r="1" fill="#fff"/><circle cx="91" cy="56.2" r="1" fill="#fff"/></g><path d="M60 50Q68 46 77 51M84 51Q92 46 100 50" fill="none" stroke="#14070a" stroke-width="1.4" stroke-linecap="round"/>'+
 '<path d="M62 72L50 82M98 72L110 82" stroke="#a5101f" stroke-width="2" stroke-linecap="round"/>'+
 '<path d="M54 76Q80 106 106 76" fill="none" stroke="#c4181f" stroke-width="5" stroke-linecap="round"/><path d="M60 82l3 4 3-3.4 3 5 3-4 3 5 3-4.4 3 5 3-4.4 3 4 3-3.6 3 3.4 3-3.6" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round" opacity=".9"/>'+
 '<g class="yd-mask"><path d="M56 66Q80 60 104 66 106 90 80 99 54 90 56 66Z" fill="#f4f6f8" stroke="#a9b2bc" stroke-width="1"/><g stroke="#cdd4dc" stroke-width="1" fill="none"><path d="M58 74Q80 80 102 74M58 82Q80 89 102 82"/></g><path d="M56 68Q46 62 44 54M104 68Q114 62 116 54" fill="none" stroke="#e8edf2" stroke-width="1.2"/></g>'+
 '<g transform="translate(124 104)"><g class="yd-snip1"><path d="M0 0L-6 -62 6 -62Z" fill="url(#kcS)" stroke="#59616b" stroke-width=".8"/><path d="M-2 -6L-3 -50" stroke="#fff" stroke-width="1" opacity=".7"/><path d="M0 0C-12 12 -22 30 -12 40" fill="none" stroke="#3a3f47" stroke-width="5" stroke-linecap="round"/><ellipse cx="-12" cy="46" rx="8" ry="10" fill="none" stroke="#c4181f" stroke-width="3.4"/></g><g class="yd-snip2"><path d="M0 0L6 -62 -6 -62Z" fill="url(#kcS)" stroke="#59616b" stroke-width=".8" opacity=".95"/><path d="M0 0C12 12 22 30 12 40" fill="none" stroke="#3a3f47" stroke-width="5" stroke-linecap="round"/><ellipse cx="12" cy="46" rx="8" ry="10" fill="none" stroke="#c4181f" stroke-width="3.4"/></g><circle r="3.4" fill="#8f99a6" stroke="#3a3f47" stroke-width="1"/><path class="yd-glint" d="M-1 -10L0 -60" stroke="#fff" stroke-width="1.6" opacity="0"/></g>';
 /* ---------- 11. Yuki-onna ---------- */
 H.yukionna=(function(){var sn='',i;for(i=0;i<22;i++){sn+='<circle class="yd-snow" style="--d:-'+(i*.43).toFixed(2)+'s;--t:'+(3.4+(i%5)*.5).toFixed(1)+'s;--x:'+((i%2?1:-1)*(6+i%4*4))+'px" cx="'+(8+i*7)+'" cy="4" r="'+(1+i%3*.6).toFixed(1)+'" fill="#e8f6ff"/>'}
 return '<defs><radialGradient id="ynM" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#cfe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#cfe8ff" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="ynK" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#b8cfe6"/></linearGradient>'+
 '<radialGradient id="ynP" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#f4fbff"/><stop offset=".8" stop-color="#cfe2f2"/><stop offset="1" stop-color="#93aecb"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="56" r="60" fill="url(#ynM)"/><circle cx="80" cy="56" r="34" fill="#eaf6ff" opacity=".12"/>'+
 '<g class="yd-hairL"><path d="M54 40C34 80 46 130 28 160H56L62 70Z" fill="#05070d"/></g><g class="yd-hairR"><path d="M106 40C126 80 114 130 132 160H104L98 70Z" fill="#05070d"/></g>'+
 '<path d="M30 160Q34 122 64 108L80 130 96 108Q126 122 130 160Z" fill="url(#ynK)"/><path d="M64 108L80 140 96 108" fill="none" stroke="#7fa4cc" stroke-width="3"/><path d="M44 148H116" stroke="#9db8d6" stroke-width="1.4"/><g fill="#9fd0f4" opacity=".7"><path d="M52 132l4 4-4 4-4-4ZM108 136l4 4-4 4-4-4ZM80 148l3 3-3 3-3-3Z"/></g>'+
 '<rect x="71" y="92" width="18" height="18" fill="#c4d8ea"/>'+
 '<g class="yd-head"><path d="M80 24C62 24 54 40 54 56 54 80 64 92 80 92 96 92 106 80 106 56 106 40 98 24 80 24Z" fill="url(#ynP)" stroke="#86a4c2" stroke-width="1"/>'+
 '<path d="M52 58C46 22 62 10 80 10 98 10 114 22 108 58 106 38 98 28 80 28 62 28 54 38 52 58Z" fill="#05070d"/>'+
 '<g class="yd-blink2" style="transform-origin:80px 56px"><path d="M60 56Q68 49 76 56Q68 61 60 56Z" fill="#fff" stroke="#14202e" stroke-width="1"/><path d="M84 56Q92 49 100 56Q92 61 84 56Z" fill="#fff" stroke="#14202e" stroke-width="1"/><circle cx="68" cy="55.6" r="3" fill="#7fd0ff"/><circle cx="92" cy="55.6" r="3" fill="#7fd0ff"/><circle cx="68" cy="55.6" r="1.3" fill="#050a12"/><circle cx="92" cy="55.6" r="1.3" fill="#050a12"/></g>'+
 '<path d="M60 48Q68 44 76 49M84 49Q92 44 100 48" fill="none" stroke="#14202e" stroke-width="1.2" stroke-linecap="round"/><path d="M80 58v8" stroke="#86a4c2" stroke-width="1"/><path d="M71 76Q80 82 89 76" fill="none" stroke="#3f6ea8" stroke-width="3" stroke-linecap="round"/>'+
 '<path class="yd-breath" d="M80 82Q74 96 84 104Q96 112 90 124" fill="none" stroke="#dff2ff" stroke-width="5" stroke-linecap="round" opacity="0"/></g>'+
 '<g>'+sn+'</g>'})();
 /* ---------- 12. Tsuchigumo ---------- */
 H.tsuchigumo=(function(){var L='',i,ys=[52,70,88,106];
 for(i=0;i<4;i++){var y=ys[i],c=(i%2?'yd-leg1':'yd-leg2');
  L+='<g transform="translate(60 '+(y+8)+')"><g class="'+c+'"><path d="M0 0C-26 '+(-18+i*4)+' -44 '+(-8+i*6)+' -50 '+(24+i*6)+'" fill="none" stroke="#1a0c10" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M0 0C-26 '+(-18+i*4)+' -44 '+(-8+i*6)+' -50 '+(24+i*6)+'" fill="none" stroke="#6a3a46" stroke-width="1" opacity=".6"/></g></g>';
  L+='<g transform="translate(100 '+(y+8)+') scale(-1 1)"><g class="'+(i%2?'yd-leg2':'yd-leg1')+'"><path d="M0 0C-26 '+(-18+i*4)+' -44 '+(-8+i*6)+' -50 '+(24+i*6)+'" fill="none" stroke="#1a0c10" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M0 0C-26 '+(-18+i*4)+' -44 '+(-8+i*6)+' -50 '+(24+i*6)+'" fill="none" stroke="#6a3a46" stroke-width="1" opacity=".6"/></g></g>'}
 return '<defs><radialGradient id="tgA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#a01028" stop-opacity=".4"/><stop offset="1" stop-color="#a01028" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="tgB" cx=".4" cy=".3" r=".9"><stop offset="0" stop-color="#4a3038"/><stop offset=".6" stop-color="#1c0e14"/><stop offset="1" stop-color="#07030a"/></radialGradient>'+
 '<radialGradient id="tgE" cx=".4" cy=".4" r=".7"><stop offset="0" stop-color="#ff9a8a"/><stop offset=".5" stop-color="#e5182e"/><stop offset="1" stop-color="#5a0510"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="84" r="76" fill="url(#tgA)"/>'+
 '<g stroke="#cfc8d8" stroke-width=".8" opacity=".5" fill="none"><path d="M80 0V30M80 0L30 40M80 0L130 40M10 20L150 20"/><path d="M30 40Q80 52 130 40"/></g>'+
 '<g class="yd-hop2">'+L+
 '<ellipse cx="80" cy="112" rx="26" ry="32" fill="url(#tgB)" stroke="#4a2a34" stroke-width="1"/><g stroke="#e5182e" stroke-width="1.6" fill="none" opacity=".75"><path d="M80 90V134M68 100Q80 108 92 100M66 116Q80 124 94 116"/></g>'+
 '<ellipse cx="80" cy="74" rx="22" ry="20" fill="url(#tgB)" stroke="#4a2a34" stroke-width="1"/>'+
 '<g class="yd-blink2" style="transform-origin:80px 70px"><circle cx="72" cy="68" r="5" fill="url(#tgE)"/><circle cx="88" cy="68" r="5" fill="url(#tgE)"/><circle cx="80" cy="62" r="3.2" fill="url(#tgE)"/><circle cx="66" cy="76" r="2.4" fill="url(#tgE)"/><circle cx="94" cy="76" r="2.4" fill="url(#tgE)"/><circle cx="70.6" cy="66.6" r="1.2" fill="#fff"/><circle cx="86.6" cy="66.6" r="1.2" fill="#fff"/></g>'+
 '<path d="M72 84Q80 90 88 84" fill="none" stroke="#e8e0d8" stroke-width="1.4"/><path d="M73 83L70 96 76 85M87 83L90 96 84 85" fill="#efe6d8" stroke="#a89c88" stroke-width=".6"/>'+
 '<path d="M64 52L60 40M96 52L100 40" stroke="#2a1218" stroke-width="3" stroke-linecap="round"/></g>'})();
 /* ---------- 13. Jorogumo ---------- */
 H.jorogumo=(function(){var L='',i;
 for(i=0;i<4;i++){var a=-70+i*22;
  L+='<g transform="rotate('+a+' 80 108)"><g class="'+(i%2?'yd-lj1':'yd-lj2')+'" style="transform-origin:80px 108px"><path d="M80 108C84 80 92 52 96 22" fill="none" stroke="#150a18" stroke-width="5" stroke-linecap="round"/><path d="M96 22L102 8" fill="none" stroke="#150a18" stroke-width="3.2" stroke-linecap="round"/></g></g>';
  L+='<g transform="rotate('+(-a)+' 80 108)"><g class="'+(i%2?'yd-lj2':'yd-lj1')+'" style="transform-origin:80px 108px"><path d="M80 108C76 80 68 52 64 22" fill="none" stroke="#150a18" stroke-width="5" stroke-linecap="round"/><path d="M64 22L58 8" fill="none" stroke="#150a18" stroke-width="3.2" stroke-linecap="round"/></g></g>'}
 return '<defs><radialGradient id="jgA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9a3cff" stop-opacity=".34"/><stop offset="1" stop-color="#9a3cff" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="jgK" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#6a2a78"/><stop offset=".6" stop-color="#2a0e3a"/><stop offset="1" stop-color="#0c0414"/></linearGradient>'+
 '<radialGradient id="jgP" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#fff6ee"/><stop offset=".8" stop-color="#ecd9ca"/><stop offset="1" stop-color="#b8a090"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="80" r="78" fill="url(#jgA)"/>'+
 '<g stroke="#d8d0e8" stroke-width=".8" opacity=".55" fill="none"><path d="M0 20Q40 40 80 30 120 40 160 20M20 0Q40 60 80 56M140 0Q120 60 80 56M0 70Q40 80 60 96M160 70Q120 80 100 96"/></g>'+
 L+
 '<path d="M36 160Q42 126 66 112L80 132 94 112Q118 126 124 160Z" fill="url(#jgK)"/><path d="M66 112L80 142 94 112" fill="none" stroke="#f1ece4" stroke-width="4"/><path d="M42 146Q80 158 118 146" stroke="#c4181f" stroke-width="8" fill="none" opacity=".9"/><g fill="#e8a8d0" opacity=".55"><circle cx="54" cy="136" r="2.6"/><circle cx="106" cy="138" r="2.6"/></g>'+
 '<rect x="72" y="92" width="16" height="22" fill="#e6d4c4"/>'+
 '<g class="yd-head"><path d="M80 22C64 22 56 38 56 54 56 76 66 90 80 90 94 90 104 76 104 54 104 38 96 22 80 22Z" fill="url(#jgP)" stroke="#a8967c" stroke-width="1"/>'+
 '<path d="M54 56C48 22 62 10 80 10 98 10 112 22 106 56 104 36 96 26 80 26 64 26 56 36 54 56Z" fill="#0a050c"/><circle cx="80" cy="8" r="7" fill="#0a050c"/><path d="M92 8L112 2" stroke="#c9a14a" stroke-width="1.6"/><circle cx="113" cy="2" r="3" fill="#c4181f"/>'+
 '<g class="yd-blink2" style="transform-origin:80px 54px"><path d="M60 54Q68 47 76 54Q68 59 60 54Z" fill="#fff" stroke="#14070a" stroke-width="1"/><path d="M84 54Q92 47 100 54Q92 59 84 54Z" fill="#fff" stroke="#14070a" stroke-width="1"/><ellipse cx="68" cy="53.4" rx="1.8" ry="4.6" fill="#a60fc4"/><ellipse cx="92" cy="53.4" rx="1.8" ry="4.6" fill="#a60fc4"/></g>'+
 '<path d="M60 46Q68 42 77 47M84 47Q92 42 100 46" fill="none" stroke="#14070a" stroke-width="1.2" stroke-linecap="round"/><path d="M64 72Q80 84 96 72" fill="none" stroke="#a5101f" stroke-width="2.6" stroke-linecap="round"/><path d="M68 74l2 3 2-2.6M88 75l2 2.6 2-3.2" fill="#fff"/></g>'})();
 /* ---------- 14. Aka Manto ---------- */
 H.akamanto='<defs><radialGradient id="amA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e5182e" stop-opacity=".4"/><stop offset="1" stop-color="#e5182e" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="amC" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ff3a4a"/><stop offset=".5" stop-color="#b3101f"/><stop offset="1" stop-color="#4a0610"/></linearGradient>'+
 '<linearGradient id="amD" x1="0" x2="1"><stop offset="0" stop-color="#5a6a62"/><stop offset="1" stop-color="#26302c"/></linearGradient>'+
 '<radialGradient id="amM" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d4cdc0"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="84" r="76" fill="url(#amA)"/>'+
 '<rect x="16" y="6" width="128" height="152" rx="3" fill="url(#amD)" stroke="#161d1a" stroke-width="3"/><path d="M80 6V158M16 40H144" stroke="#161d1a" stroke-width="2" opacity=".7"/><circle cx="30" cy="84" r="3.4" fill="#c4b8a0"/><rect x="22" y="12" width="116" height="24" fill="#0a0f0d" opacity=".8"/>'+
 '<g class="yd-sway2"><path d="M80 30C46 30 28 60 24 160H136C132 60 114 30 80 30Z" fill="url(#amC)"/><path d="M80 34C70 70 70 120 76 160M80 34C90 70 90 120 84 160" stroke="#4a0610" stroke-width="1.4" fill="none" opacity=".6"/>'+
 '<path d="M44 46L36 24Q60 38 80 46 100 38 124 24L116 46Q98 58 80 58 62 58 44 46Z" fill="#7a0b18" stroke="#3a0408" stroke-width="1"/>'+
 '<path d="M80 52C62 52 56 66 56 78 56 96 66 108 80 108 94 108 104 96 104 78 104 66 98 52 80 52Z" fill="url(#amM)" stroke="#8c8272" stroke-width="1"/>'+
 '<path d="M54 74C50 48 66 36 80 36 94 36 110 48 106 74 104 56 96 48 80 48 64 48 56 56 54 74Z" fill="#14070a"/>'+
 '<g class="yd-blink2" style="transform-origin:80px 76px"><ellipse cx="69" cy="76" rx="6" ry="3.4" fill="#050203"/><ellipse cx="91" cy="76" rx="6" ry="3.4" fill="#050203"/><circle cx="69" cy="76" r="1.4" fill="#e5182e"/><circle cx="91" cy="76" r="1.4" fill="#e5182e"/></g>'+
 '<path d="M66 92Q80 100 94 92" fill="none" stroke="#050203" stroke-width="2.2" stroke-linecap="round"/><path d="M72 94v3M78 96v3M84 96v3M90 94v3" stroke="#050203" stroke-width="1.2"/></g>'+
 '<g class="yd-paper"><rect x="100" y="112" width="22" height="30" rx="1" fill="#d8232b" transform="rotate(8 111 127)"/><text x="111" y="132" font-size="12" text-anchor="middle" fill="#fff" transform="rotate(8 111 127)" style="font-family:var(--ja,serif)">赤</text></g><g class="yd-paper" style="animation-delay:-1.4s"><rect x="40" y="114" width="22" height="30" rx="1" fill="#2a6ad8" transform="rotate(-8 51 129)"/><text x="51" y="134" font-size="12" text-anchor="middle" fill="#fff" transform="rotate(-8 51 129)" style="font-family:var(--ja,serif)">青</text></g>';
 /* ---------- 15. Okiku ---------- */
 H.okiku=(function(){var P='',i;for(i=0;i<5;i++){var x=22+i*29,y=28+(i%2)*12;P+='<g transform="translate('+x+' '+y+')"><g class="yd-plate" style="--d:-'+(i*.8).toFixed(1)+'s"><ellipse rx="12" ry="4.4" fill="#e6f0ee" stroke="#7fa8a0" stroke-width="1"/><ellipse rx="8" ry="2.4" fill="none" stroke="#3a6a8a" stroke-width=".9"/>'+(i==2?'<path d="M-6 -2L2 2 6 -3" stroke="#222" stroke-width="1.2" fill="none"/>':'')+'</g></g>'}
 return '<defs><radialGradient id="okA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#7fe8d0" stop-opacity=".32"/><stop offset="1" stop-color="#7fe8d0" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="okW" x1="0" x2="1"><stop offset="0" stop-color="#6a645c"/><stop offset=".5" stop-color="#8a847a"/><stop offset="1" stop-color="#3a3630"/></linearGradient>'+
 '<linearGradient id="okK" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#bcc8c4"/></linearGradient>'+
 '<radialGradient id="okP" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#f6f4ee"/><stop offset="1" stop-color="#b8b0a2"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="80" r="76" fill="url(#okA)"/>'+P+
 '<g class="yd-sway2" style="transform-origin:80px 150px">'+
 '<path d="M50 150Q54 104 80 96 106 104 110 150Z" fill="url(#okK)"/><path d="M64 98L80 126 96 98" fill="none" stroke="#98a8a4" stroke-width="3"/>'+
 '<g class="yd-head"><path d="M80 52C66 52 60 64 60 76 60 94 68 102 80 102 92 102 100 94 100 76 100 64 94 52 80 52Z" fill="url(#okP)" stroke="#9a9284" stroke-width="1"/>'+
 '<path d="M58 78C50 46 64 38 80 38 96 38 110 46 102 78 100 62 94 56 82 56 64 58 60 64 58 78Z" fill="#050307"/><path d="M62 70C58 96 64 124 56 150M98 70C102 96 96 124 104 150" fill="none" stroke="#050307" stroke-width="9" stroke-linecap="round"/>'+
 '<path d="M84 60C78 70 82 82 76 88" stroke="#050307" stroke-width="12" stroke-linecap="round" fill="none"/>'+
 '<circle cx="88" cy="76" r="3.2" fill="#fff" stroke="#14070a" stroke-width="1"/><circle cx="88" cy="76" r="1.5" fill="#050203"/><path d="M82 70Q88 67 94 70" stroke="#14070a" stroke-width="1.2" fill="none"/><path d="M80 92Q86 96 92 92" stroke="#7a1a22" stroke-width="1.6" fill="none" stroke-linecap="round"/></g></g>'+
 '<path d="M24 160Q24 132 40 128H120Q136 132 136 160Z" fill="url(#okW)"/><g stroke="#2a2824" stroke-width="1.2" opacity=".7" fill="none"><path d="M24 148H136M52 128V160M80 128V160M108 128V160"/></g><ellipse cx="80" cy="128" rx="40" ry="6" fill="#050a0c"/>'+
 '<g transform="translate(130 100)"><g class="yd-fl"><circle r="12" fill="#7fe8d0" opacity=".24"/><path d="M0 -10Q5 -3 3.4 2 2 5 0 5-2 5-3.4 2-5-3 0 -10Z" fill="#d0fff4"/></g></g>'})();
 /* ---------- 16. Oni ---------- */
 H.oni='<defs><radialGradient id="onA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff3a2a" stop-opacity=".45"/><stop offset="1" stop-color="#ff3a2a" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="onS" cx=".4" cy=".3" r=".9"><stop offset="0" stop-color="#e2574a"/><stop offset=".6" stop-color="#a02620"/><stop offset="1" stop-color="#4a0d0e"/></radialGradient>'+
 '<linearGradient id="onH" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f6ecc8"/><stop offset="1" stop-color="#8a7a50"/></linearGradient>'+
 '<linearGradient id="onW" x1="0" x2="1"><stop offset="0" stop-color="#6a4a2a"/><stop offset="1" stop-color="#2a1a0e"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="86" r="74" fill="url(#onA)"/>'+
 '<g class="yd-wave"><g transform="translate(18 2) rotate(-22 124 132)"><rect x="118" y="62" width="13" height="88" rx="5.5" fill="url(#onW)" stroke="#120a05" stroke-width="1"/><path d="M114 62Q124 46 135 62Z" fill="#4a3a2a"/><g fill="#8a8a90" stroke="#1a1a1e" stroke-width=".8"><circle cx="118" cy="72" r="3.4"/><circle cx="131" cy="74" r="3.4"/><circle cx="118" cy="88" r="3.4"/><circle cx="131" cy="90" r="3.4"/><circle cx="124.5" cy="58" r="3.4"/></g></g></g>'+
 '<path d="M38 74C26 46 50 22 80 24 110 22 134 46 122 74 114 54 100 48 80 48 60 48 46 54 38 74Z" fill="#0d0a10"/><g stroke="#0d0a10" stroke-width="3" stroke-linecap="round" fill="none"><path d="M44 52L30 40M52 42L44 26M108 42L116 26M116 52L130 40"/></g>'+
 '<path d="M30 160Q32 124 80 118 128 124 130 160Z" fill="url(#onS)"/><path d="M38 134Q80 152 122 134L126 152Q80 170 34 152Z" fill="#e8b23a"/><g stroke="#2a1608" stroke-width="3" stroke-linecap="round"><path d="M52 140L56 152M68 144L70 156M86 146L88 158M102 144L104 156M116 140L118 152"/></g>'+
 '<path d="M58 46Q46 22 60 6Q64 26 72 44Z" fill="url(#onH)" stroke="#5a4a2a" stroke-width="1"/><path d="M102 46Q114 22 100 6Q96 26 88 44Z" fill="url(#onH)" stroke="#5a4a2a" stroke-width="1"/>'+
 '<path d="M44 74C44 46 116 46 116 74 116 102 102 120 80 120 58 120 44 102 44 74Z" fill="url(#onS)"/>'+
 '<path d="M48 66Q64 76 76 66M112 66Q96 76 84 66" fill="none" stroke="#3a0608" stroke-width="4.4" stroke-linecap="round"/>'+
 '<g class="yd-blink2" style="transform-origin:80px 76px"><ellipse cx="63" cy="77" rx="8.4" ry="6" fill="#ffe566" stroke="#3a0608" stroke-width="1.2"/><ellipse cx="97" cy="77" rx="8.4" ry="6" fill="#ffe566" stroke="#3a0608" stroke-width="1.2"/><path d="M63 71v12M97 71v12" stroke="#0a0505" stroke-width="3.4" stroke-linecap="round"/></g>'+
 '<path d="M80 78V92" stroke="#4a0d0e" stroke-width="2.4" stroke-linecap="round"/><path d="M73 94Q80 98 87 94" fill="none" stroke="#3a0608" stroke-width="2.4"/>'+
 '<path d="M56 100Q80 112 104 100 102 116 80 118 58 116 56 100Z" fill="#2a0508"/><g fill="#fff6e0"><path d="M60 102l3 12 3-9ZM100 102l-3 12-3-9ZM72 107l2 7 3-5ZM88 107l-2 7-3-5Z"/></g>';

 /* ---------- 17. Tengu ---------- */
 H.tengu='<defs><radialGradient id="tgA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffb04a" stop-opacity=".38"/><stop offset="1" stop-color="#ffb04a" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="tgS" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#e85a3e"/><stop offset=".6" stop-color="#b02a1e"/><stop offset="1" stop-color="#5a0e0c"/></radialGradient>'+
 '<linearGradient id="tgW" x1="0" x2="1"><stop offset="0" stop-color="#1c1a24"/><stop offset="1" stop-color="#4a4658"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="86" r="74" fill="url(#tgA)"/>'+
 '<g class="yd-sway2"><path d="M70 100Q20 110 6 70 30 78 40 60 34 84 70 88Z" fill="url(#tgW)" stroke="#0c0b12" stroke-width="1.2"/><path d="M90 100Q140 110 154 70 130 78 120 60 126 84 90 88Z" fill="url(#tgW)" stroke="#0c0b12" stroke-width="1.2"/><g stroke="#8a86a0" stroke-width="1" opacity=".6" fill="none"><path d="M12 72Q36 82 60 92M22 80Q44 90 64 96M148 72Q124 82 100 92M138 80Q116 90 96 96"/></g></g>'+
 '<path d="M32 160Q34 126 80 120 126 126 128 160Z" fill="#2a2a3a"/><path d="M56 122L80 150 104 122" fill="none" stroke="#e8e0d0" stroke-width="5" stroke-linejoin="round"/><g fill="#f4efe2" stroke="#9a9484" stroke-width=".8"><circle cx="66" cy="136" r="5.4"/><circle cx="80" cy="144" r="5.4"/><circle cx="94" cy="136" r="5.4"/></g>'+
 '<path d="M34 72C32 38 62 22 80 24 100 24 124 40 122 72 122 98 104 116 80 116 56 116 36 100 34 72Z" fill="#e8e4ee"/><path d="M42 74C42 52 62 40 80 40 100 40 116 52 116 74 116 98 100 112 80 112 60 112 42 98 42 74Z" fill="url(#tgS)"/>'+
 '<path d="M66 44Q80 30 94 44 94 52 80 50 66 52 66 44Z" fill="#0d0a10"/><rect x="76" y="40" width="8" height="12" rx="2" fill="#0d0a10" stroke="#e8e0d0" stroke-width="1.2"/>'+
 '<path d="M52 66Q62 60 74 68M108 66Q98 60 86 68" fill="none" stroke="#f4f0f8" stroke-width="5" stroke-linecap="round"/>'+
 '<g class="yd-blink2" style="transform-origin:80px 76px"><ellipse cx="64" cy="76" rx="6.6" ry="5" fill="#fff6d0" stroke="#2a0a08" stroke-width="1.2"/><ellipse cx="96" cy="76" rx="6.6" ry="5" fill="#fff6d0" stroke="#2a0a08" stroke-width="1.2"/><circle cx="65" cy="76.4" r="2.8" fill="#0a0a0a"/><circle cx="95" cy="76.4" r="2.8" fill="#0a0a0a"/></g>'+
 '<path d="M72 82Q80 78 88 82 86 112 80 130 74 112 72 82Z" fill="url(#tgS)" stroke="#5a0e0c" stroke-width="1.4"/><path d="M80 84V124" stroke="#5a0e0c" stroke-width="1" opacity=".5"/>'+
 '<path d="M62 104Q80 98 98 104" fill="none" stroke="#3a0808" stroke-width="2.2" stroke-linecap="round"/>'+
 '<g class="yd-wave"><g transform="rotate(14 120 120)"><path d="M114 112 120 70 136 70 142 112Z" fill="#f4efe2" stroke="#8a8474" stroke-width="1"/><g stroke="#b8b2a0" stroke-width="1"><path d="M122 112L126 72M128 112L128 72M134 112L131 72"/></g><rect x="125" y="112" width="6" height="34" rx="2" fill="#5a3a1a"/></g></g>';

 /* ---------- 18. Hitotsume-kozo ---------- */
 H.hitotsume='<defs><radialGradient id="hiA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9a6aff" stop-opacity=".34"/><stop offset="1" stop-color="#9a6aff" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="hiE" cx=".45" cy=".4" r=".6"><stop offset="0" stop-color="#ffd8a0"/><stop offset=".5" stop-color="#b8402a"/><stop offset="1" stop-color="#2a0808"/></radialGradient>'+
 '<linearGradient id="hiK" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#4a4a6a"/><stop offset="1" stop-color="#1c1c2e"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="86" r="74" fill="url(#hiA)"/>'+
 '<path d="M36 160Q36 120 80 114 124 120 124 160Z" fill="url(#hiK)"/><path d="M62 116L80 148 98 116" fill="none" stroke="#c8c0e0" stroke-width="3" stroke-linejoin="round"/><path d="M36 146H124" stroke="#2a2a44" stroke-width="2"/>'+
 '<path d="M46 74C46 40 114 40 114 74 114 102 100 116 80 116 60 116 46 102 46 74Z" fill="#e8d4c0" stroke="#5a4636" stroke-width="1.4"/>'+
 '<path d="M52 52Q80 36 108 52" fill="none" stroke="#8a7a68" stroke-width="1" opacity=".6"/>'+
 '<g class="yd-look"><ellipse cx="80" cy="72" rx="24" ry="19" fill="#fff" stroke="#3a1a1a" stroke-width="2"/><circle cx="80" cy="72" r="13" fill="url(#hiE)"/><circle cx="80" cy="72" r="6" fill="#050303"/><circle cx="76" cy="67" r="3" fill="#fff"/></g>'+
 '<g class="yd-lid" style="transform-origin:80px 54px"><path d="M56 70Q80 40 104 70Q80 56 56 70Z" fill="#d4b8a0" stroke="#5a4636" stroke-width="1.2"/></g>'+
 '<path d="M52 104Q80 116 108 104 104 124 80 126 56 124 52 104Z" fill="#3a0a0c"/><g fill="#fff6e8"><path d="M58 106l3 7 3-5ZM96 106l-3 7-3-5Z"/></g>'+
 '<g class="yd-tongue"><path d="M70 116Q80 118 90 116 92 140 80 146 68 140 70 116Z" fill="#d83a4a" stroke="#6a0e18" stroke-width="1.2"/><path d="M80 118V138" stroke="#8a1422" stroke-width="1.2"/></g>'+
 '<g class="yd-sway2"><path d="M128 88V104" stroke="#3a2a1a" stroke-width="1.6"/><path d="M118 104H138L140 128Q128 134 116 128Z" fill="#f4e2b8" stroke="#6a4a1a" stroke-width="1.2"/><circle class="yd-fl" cx="128" cy="118" r="5" fill="#ffd24a" opacity=".85"/></g>';

 /* ---------- 19. Chochin-obake ---------- */
 H.chochin='<defs><radialGradient id="chA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff5a3a" stop-opacity=".5"/><stop offset="1" stop-color="#ff5a3a" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="chL" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#ff9a5a"/><stop offset=".6" stop-color="#d03a24"/><stop offset="1" stop-color="#6a0e0a"/></radialGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="90" r="74" fill="url(#chA)"/>'+
 '<g class="yd-sway"><path d="M80 0V30" stroke="#2a1608" stroke-width="2"/><rect x="58" y="28" width="44" height="10" rx="3" fill="#1a0e08" stroke="#5a4a2a" stroke-width="1"/>'+
 '<path d="M58 38Q30 80 58 128H102Q130 80 102 38Z" fill="url(#chL)" stroke="#2a0a06" stroke-width="1.6"/>'+
 '<g stroke="#2a0a06" stroke-width="2" fill="none" opacity=".8"><path d="M50 56H110M44 76H116M44 96H116M50 116H110"/></g>'+
 '<rect x="58" y="126" width="44" height="10" rx="3" fill="#1a0e08" stroke="#5a4a2a" stroke-width="1"/>'+
 '<g class="yd-blink2" style="transform-origin:80px 68px"><ellipse cx="80" cy="68" rx="19" ry="13" fill="#fff" stroke="#1a0606" stroke-width="2"/><circle cx="80" cy="68" r="8.4" fill="#2a0808"/><circle cx="80" cy="68" r="3.4" fill="#000"/><circle cx="76.4" cy="64" r="2.4" fill="#fff"/></g>'+
 '<path d="M54 94Q80 120 106 94 104 124 80 126 56 124 54 94Z" fill="#2a0508" stroke="#1a0606" stroke-width="1.4"/><g fill="#fff6e0"><path d="M62 98l3 9 3-6ZM98 98l-3 9-3-6Z"/></g></g>'+
 '<g class="yd-tongue" style="transform-origin:80px 110px"><path d="M72 108Q80 112 88 108 92 138 80 150 68 138 72 108Z" fill="#e0405a" stroke="#6a0e18" stroke-width="1.2"/></g>'+
 '<g class="yd-fl"><ellipse cx="80" cy="100" rx="10" ry="5" fill="#ffd24a" opacity=".35"/></g>';

 /* ---------- 20. Nurikabe ---------- */
 H.nurikabe='<defs><radialGradient id="nuA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#8aa0c0" stop-opacity=".3"/><stop offset="1" stop-color="#8aa0c0" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="nuW" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#c4c4d2"/><stop offset=".6" stop-color="#7a7a8c"/><stop offset="1" stop-color="#3c3c4a"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="80" r="74" fill="url(#nuA)"/>'+
 '<g><path d="M30 158V28Q30 12 46 12H114Q130 12 130 28V158Z" fill="url(#nuW)" stroke="#d8d8e8" stroke-width="2"/>'+
 '<g stroke="#2a2a38" stroke-width="1.8" opacity=".85" fill="none"><path d="M30 44H130M30 76H130M30 108H130M30 140H130M62 12V44M98 44V76M62 76V108M98 108V140M62 140V158M46 44V76M80 44V76M114 44V76M46 108V140M80 108V140M114 108V140"/></g>'+
 '<path d="M30 40Q80 66 130 40" fill="none" stroke="#12121a" stroke-width="1" opacity=".4"/></g>'+
 '<g class="yd-look"><ellipse cx="58" cy="60" rx="14" ry="9" fill="#fff6d0" stroke="#0a0a10" stroke-width="2"/><ellipse cx="102" cy="60" rx="14" ry="9" fill="#fff6d0" stroke="#0a0a10" stroke-width="2"/><circle cx="60" cy="61" r="5" fill="#000"/><circle cx="100" cy="61" r="5" fill="#000"/></g>'+
 '<path d="M42 48Q58 56 72 50M118 48Q102 56 88 50" fill="none" stroke="#0a0a10" stroke-width="4.4" stroke-linecap="round"/>'+
 '<path d="M52 98Q80 124 108 98 104 132 80 134 56 132 52 98Z" fill="#1a0608" stroke="#0a0a10" stroke-width="1.6"/><g fill="#e8e4d8"><path d="M58 102l4 12 4-9ZM94 105l4 9 4-12ZM76 108l4 10 4-10Z"/></g>'+
 '<g class="yd-smoke" style="--d:0s" fill="#aab4c8" opacity=".5"><ellipse cx="30" cy="150" rx="22" ry="6"/></g><g class="yd-smoke" style="--d:-2s" fill="#aab4c8" opacity=".5"><ellipse cx="132" cy="152" rx="24" ry="6"/></g>';

 /* ---------- 21. Futakuchi-onna ---------- */
 H.futakuchi='<defs><radialGradient id="fuA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e83a5a" stop-opacity=".36"/><stop offset="1" stop-color="#e83a5a" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="fuK" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#e8e0e8"/><stop offset="1" stop-color="#8a8494"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="86" r="74" fill="url(#fuA)"/>'+
 '<path d="M28 160Q30 118 80 112 130 118 132 160Z" fill="url(#fuK)" stroke="#3a3444" stroke-width="1.2"/><path d="M58 112Q80 126 102 112" fill="none" stroke="#b02a3a" stroke-width="5"/>'+
 '<path d="M44 80C40 44 62 20 80 20 98 20 122 44 116 80 114 104 100 116 80 116 60 116 46 104 44 80Z" fill="#0d0a12"/>'+
 '<g class="yd-sway2" style="transform-origin:80px 110px"><path d="M44 84C36 110 40 140 52 154M116 84C124 110 120 140 108 154M52 90C48 116 54 136 62 150" fill="none" stroke="#0d0a12" stroke-width="7" stroke-linecap="round"/></g>'+
 '<path d="M80 26C74 46 76 62 80 70 84 62 86 46 80 26Z" fill="#050408"/>'+
 '<g><path d="M56 78Q80 62 104 78 100 100 80 102 60 100 56 78Z" fill="#3a0810" stroke="#1a0408" stroke-width="1.6"/><g fill="#fff6e8"><path d="M62 80l3 9 3-6ZM74 76l3 10 3-8ZM86 76l3 8 3-9ZM98 80l-3 9-3-6Z"/></g>'+
 '<g class="yd-tongue" style="transform-origin:80px 90px"><path d="M68 90Q80 96 92 90 94 112 80 120 66 112 68 90Z" fill="#e0405a" stroke="#6a0e18" stroke-width="1.2"/></g></g>'+
 '<g class="yd-hair" style="transform-origin:80px 70px"><path d="M56 96Q36 104 30 128M104 96Q124 104 130 128" fill="none" stroke="#0d0a12" stroke-width="4" stroke-linecap="round"/><circle cx="30" cy="132" r="9" fill="#f4efe2" stroke="#8a8474" stroke-width="1.2"/><circle cx="130" cy="132" r="9" fill="#f4efe2" stroke="#8a8474" stroke-width="1.2"/><path d="M26 130Q30 124 34 130" stroke="#3a3a3a" stroke-width="1" fill="none"/></g>';

 /* ---------- 22. Ittan-momen ---------- */
 H.ittan='<defs><radialGradient id="itA" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#c8d8ff" stop-opacity=".34"/><stop offset="1" stop-color="#c8d8ff" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="itC" x1="0" x2="1"><stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#b8b0a0"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="80" r="74" fill="url(#itA)"/>'+
 '<g fill="#fff" opacity=".85"><circle cx="24" cy="30" r="1.6"/><circle cx="130" cy="22" r="1.4"/><circle cx="144" cy="64" r="1.2"/><circle cx="18" cy="118" r="1.3"/></g>'+
 '<circle cx="124" cy="36" r="14" fill="#f0ecd8" opacity=".9"/><circle cx="119" cy="32" r="3" fill="#cfc8ae"/>'+
 '<g class="yd-hop2"><path d="M12 112Q30 84 52 96 72 108 94 82 114 58 148 76 144 100 120 92 100 84 82 110 60 134 36 122 22 116 12 112Z" fill="url(#itC)" stroke="#6a6458" stroke-width="1.4" stroke-linejoin="round"/>'+
 '<g stroke="#a89f8c" stroke-width="1" opacity=".7" fill="none"><path d="M30 106Q50 100 70 112M60 124Q80 112 98 92M104 76Q124 72 138 82"/></g>'+
 '<g class="yd-blink2" style="transform-origin:112px 78px"><ellipse cx="116" cy="78" rx="8" ry="6" fill="#fff" stroke="#1a1a1a" stroke-width="1.6"/><circle cx="118" cy="78" r="3.6" fill="#050505"/></g>'+
 '<path d="M106 90Q118 98 130 90" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/><path d="M100 70Q108 66 114 70M126 70Q132 66 138 70" fill="none" stroke="#1a1a1a" stroke-width="2.2" stroke-linecap="round"/>'+
 '<path d="M14 112Q4 120 8 132M22 116Q14 128 20 138" fill="none" stroke="#e8e0d0" stroke-width="3.4" stroke-linecap="round" class="yd-whisk"/></g>'+
 '<g fill="#12121a" opacity=".85"><path d="M0 160V140L14 132 26 140V160ZM40 160V146H66V160ZM120 160V138L134 128 148 138V160Z"/></g>';

 /* ---------- 23. Gashadokuro ---------- */
 H.gasha='<defs><radialGradient id="gaM" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe0c0" stop-opacity=".5"/><stop offset="1" stop-color="#ffe0c0" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="gaB" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f4f0e0"/><stop offset=".6" stop-color="#b8b09a"/><stop offset="1" stop-color="#5a5446"/></linearGradient></defs>'+
 '<circle class="yd-pulse" cx="80" cy="64" r="70" fill="url(#gaM)"/>'+
 '<g class="yd-head" style="transform-origin:80px 100px"><path d="M40 66C40 30 66 14 80 14 94 14 120 30 120 66 120 82 112 90 106 94V108H54V94C48 90 40 82 40 66Z" fill="url(#gaB)" stroke="#2a261a" stroke-width="1.6"/>'+
 '<g stroke="#5a5446" stroke-width="1" fill="none" opacity=".7"><path d="M52 34Q64 28 74 32M96 28Q108 30 112 42M80 14V30"/></g>'+
 '<ellipse cx="62" cy="62" rx="13" ry="15" fill="#0a0806"/><ellipse cx="98" cy="62" rx="13" ry="15" fill="#0a0806"/><circle class="yd-pulse2" cx="62" cy="64" r="4" fill="#ff3a2a"/><circle class="yd-pulse2" cx="98" cy="64" r="4" fill="#ff3a2a"/>'+
 '<path d="M80 74L72 90H88Z" fill="#0a0806"/>'+
 '<path d="M54 94H106V112H54Z" fill="#e8e2cc" stroke="#2a261a" stroke-width="1.4"/><g stroke="#2a261a" stroke-width="1.4"><path d="M62 94V112M70 94V112M78 94V112M86 94V112M94 94V112M102 94V112"/></g><path d="M54 100H106" stroke="#0a0806" stroke-width="1.4"/></g>'+
 '<path d="M22 160Q22 124 54 122H106Q138 124 138 160" fill="url(#gaB)" stroke="#2a261a" stroke-width="1.4"/><g stroke="#2a261a" stroke-width="1.6" fill="none" opacity=".8"><path d="M44 134Q80 148 116 134M40 146Q80 160 120 146"/></g>'+
 '<g fill="#050408" opacity=".9"><path d="M0 160V150L10 142 20 150V160ZM132 160V148L144 138 156 148V160Z"/></g>';

 window.YK_HD=H;
})();
