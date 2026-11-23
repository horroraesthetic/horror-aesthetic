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
  '<path d="M80 18C46 22 18 48 14 88Q30 78 38 88 48 78 58 88 68 78 80 88 92 78 102 88 112 78 122 88 130 78 146 88 142 48 114 22 80 18Z" fill="url(#kkP)"/>'+
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
 '<g class="yd-tail"><path d="M50 146C20 146 12 112 26 92 32 84 38 88 34 96" fill="none" stroke="#0c0714" stroke-width="9" stroke-linecap="round"/><path d="M50 146C20 146 12 112 26 92" fill="none" stroke="#4b3f66" stroke-width="1" opacity=".6" transform="translate(-2 -1)"/><g class="yd-fl" transform="translate(33 90)"><circle r="12" fill="url(#bkB)"/><path d="M0 -10Q5 -4 3.4 1.4 2 4.4 0 4.4-2 4.4-3.4 1.4-5-4 0 -10Z" fill="#effffb"/></g></g>'+
 '<g class="yd-tail2"><path d="M54 150C30 160 8 140 8 116" fill="none" stroke="#0c0714" stroke-width="8" stroke-linecap="round"/><g class="yd-fl" style="animation-delay:-.7s" transform="translate(8 112)"><circle r="12" fill="url(#bkB)"/><path d="M0 -10Q5 -4 3.4 1.4 2 4.4 0 4.4-2 4.4-3.4 1.4-5-4 0 -10Z" fill="#effffb"/></g></g>'+
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
 '<g class="yd-fl" transform="translate(136 124)"><circle r="14" fill="url(#jzF)"/><rect x="-2.4" y="0" width="4.8" height="12" fill="#efe6d2"/><path d="M0 -10Q5 -3 3 1.4 1.8 3.4 0 3.4-1.8 3.4-3 1.4-5-3 0 -10Z" fill="#ffb347"/></g>'+
 '<g class="yd-fl" style="animation-delay:-1.2s" transform="translate(24 70)"><circle r="9" fill="url(#jzF)" opacity=".4"/></g>';
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
 window.YK_HD=H;
})();
