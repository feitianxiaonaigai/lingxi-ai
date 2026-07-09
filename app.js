
// ════════════════════════════════════════
//  I18N — 界面文案国际化（中/英/西）
//  范围：界面框架文案 + AI输出语言指令
//  暂不含：塔罗牌义/饰品描述/十神解释等"知识库"内容（后续再补）
// ════════════════════════════════════════
const I18N={
  zh:{
    home_tagline:'星轨与干支自有其序<br><em>叩问命局</em>，知其所往，方能从容自渡',
    home_enter:'步入命盘',
    daily_energy_title:"Today's Energy",
    daily_lucky_number:'幸运数字',

    choose_title:'你想从哪里开始',
    card_taro_name:'塔罗仪式',card_taro_desc:'静心抽牌<br>让潜意识为当下困惑指路',
    card_bazi_name:'八字命盘',card_bazi_desc:'报上生辰，推演五行流转<br>看清命局根基',
    back:'← 返回',

    taro_title:'塔罗仪式',taro_hint_top:'凝神静气，从牌阵中抽取三张',
    taro_hint_start:'点击牌堆，开始洗牌',taro_hint_shuffling:'牌正在洗混中…',
    taro_hint_ready:'牌已洗好——点击抽取三张',taro_hint_drawn:'已抽 {n} / 3 张',
    taro_hint_done:'三张牌已抽出',taro_ai_btn:'✦ 灵犀深度解读',taro_ai_btn_done:'✦ 已获得深度解读',taro_ai_sensing:'感应中…',
    taro_shuffle_again:'重新洗牌',back_choose:'← 返回选择',

    bazi_title:'八字命盘',bazi_hint:'输入真实出生信息，感应命局流转',
    f_year:'出生年份',f_month:'出生月份',f_day:'出生日期',f_hour:'出生时辰（时）',
    f_min:'分钟',f_tz:'时区（UTC）',adv_toggle_on:'✦ 真太阳时校正（提升排盘精度）▴',adv_toggle_off:'✦ 真太阳时校正（提升排盘精度）▾',
    f_lng:'出生地经度（东经为正）',
    f_lng_hint:'留空则默认使用东经120°（北京时间标准经度），不做真太阳时校正。填写出生地精确经度，可将时辰校正到接近当地真实太阳时刻，尤其对东西经度差较大的地区（如新疆、西藏）更为关键。',
    btn_calc:'✦ 推演命盘 ✦',

    wx_head:'五行强弱分布',fate_label:'命格概述',
    analysis_shishen:'十神分析 · 点击展开',analysis_score:'命局评分',
    btn_reading:'深入一生解读 →',btn_share:'↗ 分享命盘',btn_chat:'✦ 选择 AI 命理师',
    back_recalc:'← 重新推演',back_result:'← 返回命盘',

    harmony_eyebrow:'Energy Balance',harmony_title:'命局调和',harmony_sub:'不是推荐商品，是帮你找回失衡的那一部分能量',
    harmony_sec1:'你的五行状态',harmony_lack:'目前最需要补充',harmony_boost:'建议增强',
    harmony_sec2:'Recommended Resonance Objects · 契合能量的饰品',
    harmony_sec3:'你的幸运元素',harmony_reminder:'真正改变命运的不是饰品，而是行动。<br>它们只是提醒你、陪伴你走这一段路的信物。',
    harmony_btn:'✦ 命局调和 · Harmony',

    share_eyebrow:'Share Your Chart',share_title:'分享命盘',share_sub:'保存图片，或分享给想让ta看看的人',
    share_download:'⬇ 保存图片',share_native:'↗ 分享',share_copy:'复制链接',
    share_x:'分享到 X',share_pin:'分享到 Pinterest',share_qr_hint:'扫码，体验你自己的专属命盘',

    chat_title:'AI 命理师',chat_sub:'选择一位命理师，进入你的专属对话',
    chat_empty:'我已经知道你的命盘了，不用重复输入生辰。<br>可以直接问我任何困惑。',
    chat_suggest1:'我该不该换工作？',chat_suggest2:'今年会遇到合适的人吗？',chat_suggest3:'我该不该换城市生活？',
    chat_placeholder:'输入你的问题…',

    reading_sub_suffix:' · 灵魂指引',
    mode_life:'一生概览',mode_now:'当下指引',mode_shadow:'暗面疗愈',mode_career:'事业分析',
    mode_wealth:'财富分析',mode_love:'感情分析',mode_marriage:'婚姻分析',mode_health:'健康建议',
    mode_talent:'天赋分析',mode_career_fit:'适合职业',mode_growth:'成长建议',mode_future:'未来运势',
    wx_min_label:'目前最缺',wx_max_label:'目前最旺',wx_advice_label:'调和建议：适度增强',wx_advice_suffix:'的能量，会让命局更顺一些。',
    unlock_title:'解锁你的完整年度运势报告',unlock_desc:'流年趋势 · 事业财富感情深度解析 · 可保存PDF<br>一次性解锁，永久查看',unlock_btn:'✦ 解锁完整版 · $9.90',
    ai_lang_instruction:'',ai_lang_instruction_future:''
  },
  en:{
    home_tagline:'The stars and stems follow their own order.<br><em>Ask your chart</em>, know where you\'re headed, and walk it with ease.',
    home_enter:'Enter Your Chart',
    daily_energy_title:"Today's Energy",
    daily_lucky_number:'Lucky Number',

    choose_title:'Where would you like to start?',
    card_taro_name:'Tarot Ritual',card_taro_desc:'Draw with a quiet mind<br>let your intuition guide you through what\'s on your mind',
    card_bazi_name:'Birth Chart',card_bazi_desc:'Share your birth details<br>see how the five elements shape your foundation',
    back:'← Back',

    taro_title:'Tarot Ritual',taro_hint_top:'Take a breath, and draw three cards',
    taro_hint_start:'Tap the deck to start shuffling',taro_hint_shuffling:'Shuffling…',
    taro_hint_ready:'Ready — tap to draw three cards',taro_hint_drawn:'{n} / 3 drawn',
    taro_hint_done:'All three cards drawn',taro_ai_btn:'✦ Deeper Reading',taro_ai_btn_done:'✦ Reading Unlocked',taro_ai_sensing:'Sensing…',
    taro_shuffle_again:'Shuffle Again',back_choose:'← Back to Choices',

    bazi_title:'Birth Chart',bazi_hint:'Enter your real birth details to sense your chart',
    f_year:'Year',f_month:'Month',f_day:'Day',f_hour:'Hour',
    f_min:'Minute',f_tz:'Timezone (UTC)',adv_toggle_on:'✦ True Solar Time Correction (for precision) ▴',adv_toggle_off:'✦ True Solar Time Correction (for precision) ▾',
    f_lng:'Birthplace Longitude (East is positive)',
    f_lng_hint:'Leave blank to default to 120°E (Beijing time meridian), no correction applied. Entering the exact longitude corrects the hour to true local solar time — especially important for places far from the standard meridian.',
    btn_calc:'✦ Cast Your Chart ✦',

    wx_head:'Five Elements Balance',fate_label:'Chart Overview',
    analysis_shishen:'Ten Gods · Tap to Expand',analysis_score:'Chart Score',
    btn_reading:'Full Life Reading →',btn_share:'↗ Share Chart',btn_chat:'✦ Choose Advisor',
    back_recalc:'← Recalculate',back_result:'← Back to Chart',

    harmony_eyebrow:'Energy Balance',harmony_title:'Harmony',harmony_sub:'Not a product recommendation — a way to find the energy you\'re missing',
    harmony_sec1:'Your Elemental State',harmony_lack:'Currently Lacking',harmony_boost:'Recommended Boost',
    harmony_sec2:'Recommended Resonance Objects',
    harmony_sec3:'Your Lucky Elements',harmony_reminder:'What truly changes fate isn\'t an object — it\'s action.<br>These are simply reminders, companions for the journey.',
    harmony_btn:'✦ Harmony · Energy Balance',

    share_eyebrow:'Share Your Chart',share_title:'Share Your Chart',share_sub:'Save the image, or share it with someone you\'d like to show',
    share_download:'⬇ Save Image',share_native:'↗ Share',share_copy:'Copy Link',
    share_x:'Share to X',share_pin:'Share to Pinterest',share_qr_hint:'Scan to explore your own chart',

    chat_title:'AI Advisor',chat_sub:'Ask anything, based on your chart',
    chat_empty:'I already know your chart — no need to enter your birth details again.<br>Ask me anything on your mind.',
    chat_suggest1:'Should I change my job?',chat_suggest2:'Will I meet someone this year?',chat_suggest3:'Should I move to a new city?',
    chat_placeholder:'Type your question…',

    reading_sub_suffix:' · Soul Guidance',
    mode_life:'Life Overview',mode_now:'Present Guidance',mode_shadow:'Shadow Healing',mode_career:'Career',
    mode_wealth:'Wealth',mode_love:'Love',mode_marriage:'Marriage',mode_health:'Health',
    mode_talent:'Talent',mode_career_fit:'Career Fit',mode_growth:'Growth',mode_future:'Future Trends',
    wx_min_label:'Currently Lacking',wx_max_label:'Currently Strongest',wx_advice_label:'Suggestion: strengthen',wx_advice_suffix:' energy to bring more balance to your chart.',
    unlock_title:'Unlock Your Full Annual Fortune Report',unlock_desc:'Yearly trends · In-depth career, wealth & love analysis · Save as PDF<br>One-time unlock, lifetime access',unlock_btn:'✦ Unlock Full Version · $9.90',
    ai_lang_instruction:'\n\n(Please respond in English. Keep the same persona, structure and analysis logic.)',ai_lang_instruction_future:'\n\n(Please respond in English for all sentence content, but keep the structural markers exactly as-is in Chinese: ##year## headers and the labels 事业/财富/感情/建议 followed by a colon must NOT be translated — only translate the text that comes after the colon.)'
  },
  es:{
    home_tagline:'Los astros y los signos siguen su propio orden.<br><em>Consulta tu carta</em>, conoce tu camino, y avanza con serenidad.',
    home_enter:'Entra a tu Carta',
    daily_energy_title:"Today's Energy",
    daily_lucky_number:'Número de la Suerte',

    choose_title:'¿Por dónde quieres empezar?',
    card_taro_name:'Ritual de Tarot',card_taro_desc:'Saca cartas con calma<br>deja que tu intuición te guíe',
    card_bazi_name:'Carta Natal',card_bazi_desc:'Comparte tu fecha de nacimiento<br>descubre cómo los cinco elementos moldean tu base',
    back:'← Atrás',

    taro_title:'Ritual de Tarot',taro_hint_top:'Respira hondo y saca tres cartas',
    taro_hint_start:'Toca el mazo para barajar',taro_hint_shuffling:'Barajando…',
    taro_hint_ready:'Listo — toca para sacar tres cartas',taro_hint_drawn:'{n} / 3 sacadas',
    taro_hint_done:'Las tres cartas están sobre la mesa',taro_ai_btn:'✦ Lectura Profunda',taro_ai_btn_done:'✦ Lectura Desbloqueada',taro_ai_sensing:'Percibiendo…',
    taro_shuffle_again:'Barajar de Nuevo',back_choose:'← Volver a Elegir',

    bazi_title:'Carta Natal',bazi_hint:'Introduce tus datos reales de nacimiento',
    f_year:'Año',f_month:'Mes',f_day:'Día',f_hour:'Hora',
    f_min:'Minuto',f_tz:'Zona Horaria (UTC)',adv_toggle_on:'✦ Corrección de Hora Solar Verdadera ▴',adv_toggle_off:'✦ Corrección de Hora Solar Verdadera ▾',
    f_lng:'Longitud del lugar de nacimiento (Este es positivo)',
    f_lng_hint:'Déjalo en blanco para usar 120°E (meridiano de Beijing) por defecto, sin corrección. Ingresar la longitud exacta corrige la hora a la hora solar local real — especialmente importante lejos del meridiano estándar.',
    btn_calc:'✦ Calcular tu Carta ✦',

    wx_head:'Balance de los Cinco Elementos',fate_label:'Resumen de tu Carta',
    analysis_shishen:'Diez Dioses · Toca para Expandir',analysis_score:'Puntuación de la Carta',
    btn_reading:'Lectura Completa de Vida →',btn_share:'↗ Compartir Carta',btn_chat:'✦ Elegir asesor',
    back_recalc:'← Recalcular',back_result:'← Volver a la Carta',

    harmony_eyebrow:'Energy Balance',harmony_title:'Armonía',harmony_sub:'No es una recomendación de productos, es una forma de recuperar la energía que te falta',
    harmony_sec1:'Tu Estado Elemental',harmony_lack:'Actualmente te falta',harmony_boost:'Se recomienda reforzar',
    harmony_sec2:'Objetos de Resonancia Recomendados',
    harmony_sec3:'Tus Elementos de la Suerte',harmony_reminder:'Lo que realmente cambia el destino no es un objeto, es la acción.<br>Estos son solo recordatorios, compañeros en tu camino.',
    harmony_btn:'✦ Armonía · Energy Balance',

    share_eyebrow:'Share Your Chart',share_title:'Comparte tu Carta',share_sub:'Guarda la imagen o compártela con quien quieras',
    share_download:'⬇ Guardar Imagen',share_native:'↗ Compartir',share_copy:'Copiar Enlace',
    share_x:'Compartir en X',share_pin:'Compartir en Pinterest',share_qr_hint:'Escanea para explorar tu propia carta',

    chat_title:'Asesor de IA',chat_sub:'Pregunta lo que quieras, según tu carta',
    chat_empty:'Ya conozco tu carta — no hace falta que repitas tu fecha de nacimiento.<br>Pregúntame lo que quieras.',
    chat_suggest1:'¿Debería cambiar de trabajo?',chat_suggest2:'¿Conoceré a alguien especial este año?',chat_suggest3:'¿Debería mudarme de ciudad?',
    chat_placeholder:'Escribe tu pregunta…',

    reading_sub_suffix:' · Guía del Alma',
    mode_life:'Visión de Vida',mode_now:'Guía Actual',mode_shadow:'Sanación de Sombra',mode_career:'Carrera',
    mode_wealth:'Riqueza',mode_love:'Amor',mode_marriage:'Matrimonio',mode_health:'Salud',
    mode_talent:'Talento',mode_career_fit:'Profesión Ideal',mode_growth:'Crecimiento',mode_future:'Tendencias Futuras',
    wx_min_label:'Actualmente falta',wx_max_label:'Actualmente predomina',wx_advice_label:'Sugerencia: reforzar',wx_advice_suffix:' para un mayor equilibrio en tu carta.',
    unlock_title:'Desbloquea tu Informe Anual Completo',unlock_desc:'Tendencias anuales · Análisis profundo de carrera, riqueza y amor · Guarda en PDF<br>Desbloqueo único, acceso de por vida',unlock_btn:'✦ Desbloquear Versión Completa · $9.90',
    ai_lang_instruction:'\n\n(Por favor responde en español. Mantén la misma personalidad, estructura y lógica de análisis.)',ai_lang_instruction_future:'\n\n(Por favor responde en español para todo el contenido de las frases, pero mantén los marcadores estructurales exactamente en chino: los encabezados ##year## y las etiquetas 事业/财富/感情/建议 seguidas de dos puntos NO deben traducirse — solo traduce el texto que sigue después de los dos puntos.)'
  }
};
let currentLang='zh';
try{ currentLang=localStorage.getItem('lx_lang')||'zh'; }catch(e){}

function t(key){
  const dict=I18N[currentLang]||I18N.zh;
  return dict[key]!==undefined?dict[key]:(I18N.zh[key]!==undefined?I18N.zh[key]:key);
}
function applyI18n(){
  document.documentElement.lang=currentLang==='zh'?'zh-CN':currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    el.innerHTML=t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    el.placeholder=t(el.getAttribute('data-i18n-ph'));
  });
  document.querySelectorAll('.lang-pill').forEach(p=>{
    p.classList.toggle('active',p.dataset.lang===currentLang);
  });
}
function setLang(lang){
  if(!I18N[lang])return;
  currentLang=lang;
  try{ localStorage.setItem('lx_lang',lang); }catch(e){}
  applyI18n();
  // 部分内容是JS动态渲染的（不是靠data-i18n静态占位），语言切换后需要重新渲染当前页面
  if(currentBazi){
    if(document.getElementById('s-result').classList.contains('active')){
      renderChartAnalysis(currentBazi,currentBazi.analysis);
    }
    if(document.getElementById('s-harmony').classList.contains('active'))initHarmonyPage();
    if(document.getElementById('s-reading').classList.contains('active')){
      const tabsEl=document.getElementById('modeTabs');
      if(tabsEl)tabsEl.innerHTML=MODE_LIST.map(m=>`<div class="mode-tab" onclick="switchMode('${m.id}')" id="tab-${m.id}">${t('mode_'+m.id)}</div>`).join('');
      updateTabUI(currentMode);
    }
    if(document.getElementById('s-chat').classList.contains('active'))initChatPage();
  }
  if(document.getElementById('s-taro').classList.contains('active')){
    const hintEl=document.getElementById('taroHint');
    if(hintEl&&taroState==='idle')hintEl.textContent=t('taro_hint_start');
  }
}


const bgC=document.getElementById('bg'),bgX=bgC.getContext('2d');
let bgW,bgH,bgStars=[];
function resizeBg(){bgW=bgC.width=innerWidth;bgH=bgC.height=innerHeight;}
function initBgStars(){bgStars=[];for(let i=0;i<130;i++)bgStars.push({x:Math.random()*bgW,y:Math.random()*bgH,r:Math.random()*1.4+0.25,ph:Math.random()*Math.PI*2,sp:Math.random()*0.004+0.001});}
function drawBg(t){
  bgX.clearRect(0,0,bgW,bgH);
  const g=bgX.createRadialGradient(bgW/2,bgH*.28,0,bgW/2,bgH/2,bgW*.85);
  g.addColorStop(0,currentElBg||'#0d1228');g.addColorStop(.55,'#070a14');g.addColorStop(1,'#030508');
  bgX.fillStyle=g;bgX.fillRect(0,0,bgW,bgH);
  bgStars.forEach(s=>{const a=.1+.75*(.5+.5*Math.sin(s.ph+t*s.sp*100));bgX.beginPath();bgX.arc(s.x,s.y,s.r,0,Math.PI*2);bgX.fillStyle=`rgba(210,220,255,${a})`;bgX.fill();});
}
resizeBg();initBgStars();
window.addEventListener('resize',()=>{resizeBg();initBgStars();});

// ════════════════════════════════════════
//  PARTICLE SYSTEM — 五行自适应（每种五行拥有独立的粒子形态）
//  水：雨滴 / 涟漪 / 波纹光点   木：叶片 / 藤蔓 / 光晕
//  火：火焰 / 火星 / 流光       金：碎片 / 镜面闪光 / 反光扫线
//  土：沙尘 / 岩石 / 光晕
// ════════════════════════════════════════
const pC=document.getElementById('particles'),pX=pC.getContext('2d');
let particles=[],currentTheme='default',currentElBg='#0d1228';

function resizeP(){pC.width=innerWidth;pC.height=innerHeight;}
resizeP();window.addEventListener('resize',resizeP);

function aHex(a){a=Math.max(0,Math.min(1,a));return Math.round(a*255).toString(16).padStart(2,'0');}
function rndColor(cfg){return cfg.colors[Math.floor(Math.random()*cfg.colors.length)];}

const KINDS={
  // ── 水 ──
  raindrop:{
    spawn(cfg){return{kind:'raindrop',x:Math.random()*innerWidth,y:-20-Math.random()*100,vy:2.2+Math.random()*1.6,vx:(Math.random()-.5)*.3,len:9+Math.random()*9,c:rndColor(cfg),maxA:.5+Math.random()*.3,maxL:130+Math.random()*80};},
    update(p){p.x+=p.vx;p.y+=p.vy;},
    draw(ctx,p){ctx.strokeStyle=p.c+aHex(p.alpha);ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(p.x,p.y-p.len);ctx.lineTo(p.x,p.y);ctx.stroke();}
  },
  ripple:{
    spawn(cfg){return{kind:'ripple',x:Math.random()*innerWidth,y:innerHeight*0.3+Math.random()*innerHeight*0.6,c:rndColor(cfg),maxA:.35+Math.random()*.2,maxL:110+Math.random()*60,maxR:24+Math.random()*20};},
    update(p){},
    draw(ctx,p){const t=p.life/p.maxL;ctx.strokeStyle=p.c+aHex(p.alpha*(1-t));ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x,p.y,t*p.maxR,0,Math.PI*2);ctx.stroke();}
  },
  wave:{
    spawn(cfg){return{kind:'wave',x:Math.random()*innerWidth,y:Math.random()*innerHeight,vy:(Math.random()-.5)*.4,r:Math.random()*2+.5,c:rndColor(cfg),maxA:Math.random()*.4+.1,maxL:200+Math.random()*200,wb:Math.random()*Math.PI*2,ws:Math.random()*.03};},
    update(p){p.wb+=p.ws;p.x+=Math.sin(p.wb)*.6;p.y+=p.vy;},
    draw(ctx,p){ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c+aHex(p.alpha);ctx.fill();}
  },
  // ── 木 ──
  leaf:{
    spawn(cfg){return{kind:'leaf',x:Math.random()*innerWidth,y:-20-Math.random()*80,vy:.5+Math.random()*.5,vx:(Math.random()-.5)*.3,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*.03,size:4+Math.random()*3,c:rndColor(cfg),maxA:.5+Math.random()*.3,maxL:260+Math.random()*160,wb:Math.random()*Math.PI*2,ws:.02+Math.random()*.02};},
    update(p){p.wb+=p.ws;p.x+=Math.sin(p.wb)*.5+p.vx;p.y+=p.vy;p.rot+=p.rotSpeed;},
    draw(ctx,p){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.c+aHex(p.alpha);ctx.beginPath();ctx.moveTo(0,-p.size);ctx.quadraticCurveTo(p.size*.8,0,0,p.size);ctx.quadraticCurveTo(-p.size*.8,0,0,-p.size);ctx.fill();ctx.restore();}
  },
  vine:{
    spawn(cfg){return{kind:'vine',x:Math.random()*innerWidth,y:Math.random()*innerHeight,vy:-.15-Math.random()*.15,rot:Math.random()*Math.PI*2,size:6+Math.random()*5,c:rndColor(cfg),maxA:.25+Math.random()*.2,maxL:220+Math.random()*160};},
    update(p){p.y+=p.vy;p.rot+=.006;},
    draw(ctx,p){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.strokeStyle=p.c+aHex(p.alpha);ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-p.size,0);ctx.quadraticCurveTo(0,-p.size*.8,p.size,0);ctx.stroke();ctx.restore();}
  },
  glow:{
    spawn(cfg){return{kind:'glow',x:Math.random()*innerWidth,y:Math.random()*innerHeight,vy:(Math.random()-.5)*.2,vx:(Math.random()-.5)*.2,size:8+Math.random()*10,c:rndColor(cfg),maxA:.18+Math.random()*.12,maxL:220+Math.random()*200,wb:Math.random()*Math.PI*2,ws:.015};},
    update(p){p.wb+=p.ws;p.x+=Math.sin(p.wb)*.3+p.vx*.2;p.y+=p.vy;},
    draw(ctx,p){const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size);g.addColorStop(0,p.c+aHex(p.alpha));g.addColorStop(1,p.c+'00');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();}
  },
  // ── 火 ──
  flame:{
    spawn(cfg){return{kind:'flame',x:Math.random()*innerWidth,y:innerHeight+20+Math.random()*40,vy:-(1.2+Math.random()*1),size:5+Math.random()*4,c:rndColor(cfg),maxA:.55+Math.random()*.3,maxL:130+Math.random()*90,wb:Math.random()*Math.PI*2,ws:.06+Math.random()*.04,flick:0};},
    update(p){p.wb+=p.ws;p.x+=Math.sin(p.wb)*1.1;p.y+=p.vy;p.flick=Math.sin(p.life*.4)*.4;},
    draw(ctx,p){const s=p.size*(1+p.flick*.3);ctx.save();ctx.translate(p.x,p.y);ctx.fillStyle=p.c+aHex(p.alpha);ctx.beginPath();ctx.moveTo(0,-s*1.6);ctx.quadraticCurveTo(s,-s*.3,s*.5,s*.6);ctx.quadraticCurveTo(0,s*1.1,-s*.5,s*.6);ctx.quadraticCurveTo(-s,-s*.3,0,-s*1.6);ctx.fill();ctx.restore();}
  },
  spark:{
    spawn(cfg){return{kind:'spark',x:Math.random()*innerWidth,y:innerHeight+10,vy:-(2.6+Math.random()*2),vx:(Math.random()-.5)*1.4,r:.6+Math.random()*.8,c:rndColor(cfg),maxA:.7+Math.random()*.3,maxL:55+Math.random()*40};},
    update(p){p.x+=p.vx;p.y+=p.vy;p.vx*=.98;},
    draw(ctx,p){ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c+aHex(p.alpha);ctx.fill();}
  },
  streak:{
    spawn(cfg){return{kind:'streak',x:Math.random()*innerWidth,y:innerHeight+20,vy:-(2+Math.random()*1.4),len:16+Math.random()*14,c:rndColor(cfg),maxA:.4+Math.random()*.25,maxL:90+Math.random()*60};},
    update(p){p.y+=p.vy;},
    draw(ctx,p){const g=ctx.createLinearGradient(p.x,p.y,p.x,p.y-p.len);g.addColorStop(0,p.c+aHex(p.alpha));g.addColorStop(1,p.c+'00');ctx.strokeStyle=g;ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x,p.y-p.len);ctx.stroke();}
  },
  // ── 金 ──
  shard:{
    spawn(cfg){return{kind:'shard',x:Math.random()*innerWidth,y:Math.random()*innerHeight,vy:(Math.random()-.5)*.3,vx:(Math.random()-.5)*.3,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*.05,size:3+Math.random()*2.5,c:rndColor(cfg),maxA:.4+Math.random()*.3,maxL:200+Math.random()*160};},
    update(p){p.x+=p.vx;p.y+=p.vy;p.rot+=p.rotSpeed;},
    draw(ctx,p){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.c+aHex(p.alpha);ctx.beginPath();ctx.moveTo(0,-p.size);ctx.lineTo(p.size*.7,0);ctx.lineTo(0,p.size);ctx.lineTo(-p.size*.7,0);ctx.closePath();ctx.fill();ctx.restore();}
  },
  glint:{
    spawn(cfg){return{kind:'glint',x:Math.random()*innerWidth,y:Math.random()*innerHeight,c:rndColor(cfg),maxA:.9,maxL:38+Math.random()*20};},
    update(p){},
    draw(ctx,p){const t=p.life/p.maxL;const s=(t<.5?t*2:(1-t)*2)*6+1;ctx.save();ctx.translate(p.x,p.y);ctx.strokeStyle=p.c+aHex(p.alpha);ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-s,0);ctx.lineTo(s,0);ctx.moveTo(0,-s);ctx.lineTo(0,s);ctx.stroke();ctx.restore();}
  },
  reflect:{
    spawn(cfg){return{kind:'reflect',x:Math.random()*innerWidth,y:Math.random()*innerHeight*.6,vx:2.6+Math.random()*1.6,len:36+Math.random()*20,c:rndColor(cfg),maxA:.6+Math.random()*.3,maxL:50+Math.random()*24};},
    update(p){p.x+=p.vx;},
    draw(ctx,p){const g=ctx.createLinearGradient(p.x-p.len,p.y,p.x+p.len,p.y);g.addColorStop(0,p.c+'00');g.addColorStop(.5,p.c+aHex(p.alpha));g.addColorStop(1,p.c+'00');ctx.strokeStyle=g;ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(p.x-p.len,p.y+p.len*.3);ctx.lineTo(p.x+p.len,p.y-p.len*.3);ctx.stroke();}
  },
  // ── 土 ──
  dust:{
    spawn(cfg){return{kind:'dust',x:Math.random()*innerWidth,y:-10-Math.random()*60,vy:.25+Math.random()*.25,vx:(Math.random()-.5)*.2,r:.5+Math.random()*.8,c:rndColor(cfg),maxA:.3+Math.random()*.2,maxL:260+Math.random()*200};},
    update(p){p.x+=p.vx;p.y+=p.vy;},
    draw(ctx,p){ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c+aHex(p.alpha);ctx.fill();}
  },
  rock:{
    spawn(cfg){return{kind:'rock',x:Math.random()*innerWidth,y:-20-Math.random()*80,vy:.5+Math.random()*.4,rot:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*.015,size:2.5+Math.random()*2,c:rndColor(cfg),maxA:.4+Math.random()*.25,maxL:220+Math.random()*160};},
    update(p){p.y+=p.vy;p.rot+=p.rotSpeed;},
    draw(ctx,p){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.c+aHex(p.alpha);ctx.beginPath();ctx.moveTo(-p.size,-p.size*.5);ctx.lineTo(p.size*.6,-p.size);ctx.lineTo(p.size,p.size*.4);ctx.lineTo(-p.size*.2,p.size);ctx.closePath();ctx.fill();ctx.restore();}
  }
};

const THEMES={
  water:{colors:['#3A7BD5','#6AAFF0','#1A4A8A','#90C8FF'],kinds:[{k:'raindrop',w:3},{k:'ripple',w:1},{k:'wave',w:2}],bgColor:'#060d1e'},
  wood: {colors:['#3A8A55','#6AB87A','#1A5535','#90D0A0'],kinds:[{k:'leaf',w:3},{k:'vine',w:1},{k:'glow',w:2}],bgColor:'#050e08'},
  fire: {colors:['#D95A30','#F08050','#A03010','#FFB080'],kinds:[{k:'flame',w:2},{k:'spark',w:3},{k:'streak',w:1.5}],bgColor:'#160500'},
  metal:{colors:['#A0A8C0','#D0D8F0','#7080A0','#F0F4FF'],kinds:[{k:'shard',w:2.5},{k:'glint',w:1.5},{k:'reflect',w:.6}],bgColor:'#080a14'},
  earth:{colors:['#C09050','#D8B070','#905520','#E8C890'],kinds:[{k:'dust',w:3},{k:'rock',w:1},{k:'glow',w:1.5}],bgColor:'#0e0800'},
  default:{colors:['#D4AF6A','#A99AE8','#7FC4A4'],kinds:[{k:'glow',w:1}],bgColor:'#0d1228'}
};

function pickKind(cfg){
  const total=cfg.kinds.reduce((s,k)=>s+k.w,0);
  let r=Math.random()*total;
  for(const k of cfg.kinds){ if(r<k.w) return k.k; r-=k.w; }
  return cfg.kinds[0].k;
}

function spawnP(){
  const cfg=THEMES[currentTheme]||THEMES.default;
  const kindName=pickKind(cfg);
  const p=KINDS[kindName].spawn(cfg);
  p.life=0;p.alpha=0;
  return p;
}
function updateP(){
  if(Math.random()<.18)particles.push(spawnP());
  particles=particles.filter(p=>{
    p.life++;
    const t=p.life/p.maxL;
    p.alpha=t<.15?p.maxA*(t/.15):t>.75?p.maxA*(1-(t-.75)/.25):p.maxA;
    const kd=KINDS[p.kind];
    if(kd&&kd.update)kd.update(p);
    return p.life<p.maxL;
  });
  if(particles.length>150)particles.splice(0,particles.length-150);
}
function drawP(){
  pX.clearRect(0,0,pC.width,pC.height);
  particles.forEach(p=>{const kd=KINDS[p.kind];if(kd)kd.draw(pX,p);});
}

// ════════════════════════════════════════
//  MAIN LOOP — extended by DN system below
// ════════════════════════════════════════
// rAF is started after DN.init()

// ════════════════════════════════════════
//  Today's Energy — 每日能量（同一天所有访客看到相同结果，次日自动更新）
// ════════════════════════════════════════
function mulberry32(seed){
  return function(){
    seed|=0;seed=seed+0x6D2B79F5|0;
    let t=Math.imul(seed^seed>>>15,1|seed);
    t=t+Math.imul(t^t>>>7,61|t)^t;
    return ((t^t>>>14)>>>0)/4294967296;
  };
}
function seedFromDate(str){
  let h=0;for(let i=0;i<str.length;i++){h=(h*31+str.charCodeAt(i))|0;}
  return h;
}
const DAILY_COLORS=[
  {name:'藏青',hex:'#2C3E6B'},{name:'赤陶橙',hex:'#D97A4A'},{name:'鼠尾草绿',hex:'#7FA37F'},
  {name:'雾灰紫',hex:'#8B7BA8'},{name:'琥珀黄',hex:'#D4A85A'},{name:'月光银',hex:'#B8BDD0'},
  {name:'珊瑚粉',hex:'#E8A0A0'},{name:'墨黑',hex:'#3A3A44'}
];
const DAILY_ENERGY=['直觉敏锐','创造力旺盛','适合沉淀','宜主动出击','人际能量强','适合独处充电','决断力提升','宜温柔以待'];
const DAILY_REMINDERS=[
  '今天适合把犹豫的事往前推一步。','放慢一点，答案会自己浮现。','该说的话，今天说出口会更顺。',
  '留一点时间给自己，别都给别人。','小小的坚持，今天会有回响。','遇到摩擦，先深呼吸三秒。',
  '今天适合断舍离一件拖延已久的事。','相信第一直觉，它比你想的更准。','对自己温柔一点，今天已经很好了。',
  '今天的耐心，会换来明天的从容。'
];
function initDailyEnergy(){
  const now=new Date();
  const dateStr=`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
  const rand=mulberry32(seedFromDate(dateStr));
  const color=DAILY_COLORS[Math.floor(rand()*DAILY_COLORS.length)];
  const number=1+Math.floor(rand()*9);
  const energy=DAILY_ENERGY[Math.floor(rand()*DAILY_ENERGY.length)];
  const reminder=DAILY_REMINDERS[Math.floor(rand()*DAILY_REMINDERS.length)];
  const colorEl=document.getElementById('dailyColor');
  if(colorEl)colorEl.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${color.hex};margin-right:6px;vertical-align:middle"></span>${color.name}`;
  const numEl=document.getElementById('dailyNumberChip');
  if(numEl)numEl.textContent=t('daily_lucky_number')+' '+number;
  const lineEl=document.getElementById('dailyLine');
  if(lineEl)lineEl.textContent=energy+' · '+reminder;
}
initDailyEnergy();
applyI18n();

// ════════════════════════════════════════
//  NAVIGATION
// ════════════════════════════════════════
const SM={home:'s-home',choose:'s-choose',taro:'s-taro',bazi:'s-bazi',result:'s-result',reading:'s-reading',jewel:'s-jewel',harmony:'s-harmony',share:'s-share',chat:'s-chat'};
function goto(id){
  playPageSound();
  if(['home','choose','taro','bazi'].includes(id)&&chartEntered)setChartEntered(false);
  if(id==='chat')currentAdvisorKey=null;
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active','fade-in'));
  const el=document.getElementById(SM[id]||id);
  if(!el)return;
  el.classList.add('active');void el.offsetWidth;el.classList.add('fade-in');el.scrollTop=0;
  if(id==='taro')initTaro();
  if(id==='reading')initReadingPage();
  if(id==='harmony')initHarmonyPage();
  if(id==='share')initSharePage();
  if(id==='chat')initChatPage();
}

document.addEventListener('pointerdown',e=>{
  if(e.target.closest('button,.pcard,.lang-pill,.back-link,.mode-tab,.share-btn,.chat-suggest-chip,.jewel-link,.resonance-card,.advisor-card,.advisor-back-btn,.advisor-enter-dialogue,.jewel-buy-btn'))playButtonSound();
});

function toggleAdv(){
  const panel=document.getElementById('advPanel');
  const toggleEl=document.getElementById('advToggle');
  const show=!panel.classList.contains('show');
  panel.classList.toggle('show');
  toggleEl.textContent=t(show?'adv_toggle_on':'adv_toggle_off');
}

// ════════════════════════════════════════
//  付费意愿验证 — Stripe Payment Link
//  在 Stripe 后台 (Payment Links) 免代码创建一个收款链接，
//  把生成的网址粘贴到下面的 STRIPE_PAYMENT_LINK 常量里即可。
//  这里只做"点击跳转到 Stripe 收银台"的最小验证，不涉及真正的内容解锁逻辑。
// ════════════════════════════════════════
const STRIPE_PAYMENT_LINK='https://buy.stripe.com/REPLACE_ME'; // TODO: 替换成你自己的 Stripe Payment Link
function openUnlock(){
  if(STRIPE_PAYMENT_LINK.includes('REPLACE_ME')){
    alert('还没配置 Stripe 收款链接。\n\n去 Stripe 后台 → Payment Links 创建一个链接，然后把网址填进代码里的 STRIPE_PAYMENT_LINK 常量。');
    return;
  }
  window.open(STRIPE_PAYMENT_LINK,'_blank');
}

// ════════════════════════════════════════
//  五行主题切换
// ════════════════════════════════════════
function applyElementTheme(elKey,animText,showReveal){
  const cfg=THEMES[elKey]||THEMES.default;
  currentTheme=elKey;
  currentElBg=cfg.bgColor;
  particles=[];

  [...document.body.classList].forEach(cls=>{if(cls.startsWith('el-'))document.body.classList.remove(cls);});
  document.body.classList.add('el-'+elKey);

  // Only show the old reveal ring for non-initial theme changes (e.g. language toggle re-renders)
  if(showReveal){
    const mask=document.getElementById('reveal-mask');
    const ring=document.getElementById('revealRing');
    const txt=document.getElementById('revealText');
    mask.classList.add('active');
    txt.textContent=animText||'';
    ring.classList.remove('go');txt.classList.remove('show');
    void ring.offsetWidth;
    ring.classList.add('go');txt.classList.add('show');
    setTimeout(()=>{mask.classList.remove('active');ring.classList.remove('go');txt.classList.remove('show');},1600);
  }
}

// ════════════════════════════════════════
//  饰品数据 — 八字入口走古风禅意，塔罗入口走现代西方
// ════════════════════════════════════════
const BAZI_JEWELRY={
  水:[
    {id:'b-water-1',name:'黑曜石转运珠手串',nameEn:'Obsidian Bracelet',color:'#3A7BD5',element:'水',
      desc:'温润黑曜石内敛锋芒，助水命人收束思绪、稳定心神，是静水深流之下的定海珠。',
      rating:5,improves:'情绪波动、思虑过多、缺乏安全感',wearTime:'心绪不宁、需要专注决策时',wearPosition:'左手手腕',duration:'长期佩戴，每月满月夜可置于月光下净化'},
    {id:'b-water-2',name:'和田玉平安扣',nameEn:'Hetian Jade Pendant',color:'#6AAFF0',element:'水',
      desc:'古法雕琢的玉扣，寓意柔中带刚，助水命人在变化流转之中，寻得一份安定与从容。',
      rating:4,improves:'漂泊感、变动过多、人际中的紧绷感',wearTime:'出行、面试、重要会面前',wearPosition:'贴身佩戴于胸前',duration:'长期佩戴，玉养人也需人养玉'}
  ],
  木:[
    {id:'b-wood-1',name:'菩提子禅意手串',nameEn:'Bodhi Seed Mala',color:'#4A9B6A',element:'木',
      desc:'天然菩提子，日日盘养如同养心，助木命人涵养性情，如春木抽枝，生生不息。',
      rating:4,improves:'急躁易怒、缺乏耐心、精力涣散',wearTime:'晨间冥想、静心阅读时',wearPosition:'左手手腕',duration:'长期盘玩，包浆越久能量越沉淀'},
    {id:'b-wood-2',name:'翡翠竹节手镯',nameEn:'Jade Bamboo Bangle',color:'#6AB87A',element:'木',
      desc:'竹节造型寓意节节高升，温润翡翠是木命人事业与心境的双重加持。',
      rating:5,improves:'事业停滞感、成长焦虑',wearTime:'开工、谈判、新阶段开启时',wearPosition:'惯用手手腕',duration:'长期佩戴，视作陪伴成长的信物'}
  ],
  火:[
    {id:'b-fire-1',name:'朱砂如意手链',nameEn:'Cinnabar Ruyi Bracelet',color:'#D95A30',element:'火',
      desc:'朱砂自古镇心安神，助火命人收敛外放的锋芒，让热情走得更远、更稳。',
      rating:4,improves:'情绪上头、冲动决策、失眠多梦',wearTime:'情绪激动、夜晚难以平静时',wearPosition:'左手手腕，忌长期泡水',duration:'短期佩戴调节情绪，稳定后可转为常戴'},
    {id:'b-fire-2',name:'红玛瑙桃花坠',nameEn:'Red Agate Pendant',color:'#F08050',element:'火',
      desc:'温润红玛瑙，助火命人在炽热与耐心之间找到平衡，滋养情感根基。',
      rating:4,improves:'感情中的忽冷忽热、缺乏耐心经营',wearTime:'约会、重要情感对话前',wearPosition:'贴身佩戴于心口附近',duration:'长期佩戴，感情稳定后仍可作为日常护身'}
  ],
  金:[
    {id:'b-metal-1',name:'银饰貔貅吊坠',nameEn:'Silver Pixiu Pendant',color:'#B8BDD0',element:'金',
      desc:'貔貅自古招财纳福，银质清冽果决，与金命人干脆利落的气场相合。',
      rating:5,improves:'优柔寡断、财运流失感',wearTime:'开工、签约、投资决策前',wearPosition:'贴身佩戴，貔貅头朝外',duration:'长期佩戴，定期用清水冲洗保持灵性'},
    {id:'b-metal-2',name:'白水晶六字真言珠串',nameEn:'Clear Quartz Mantra Beads',color:'#D0D8F0',element:'金',
      desc:'通透白水晶涤荡杂念，助金命人在果断之余，多一分清明与柔软。',
      rating:4,improves:'思虑过重、过度苛责自己或他人',wearTime:'需要理清思路、静心复盘时',wearPosition:'左手手腕',duration:'长期佩戴，建议每月月圆夜净化一次'}
  ],
  土:[
    {id:'b-earth-1',name:'黄玉福字牌',nameEn:'Yellow Jade Blessing Tablet',color:'#C49050',element:'土',
      desc:'温厚黄玉如大地般承载万物，助土命人愈发稳固扎实的根基。',
      rating:4,improves:'过度操心、责任压力过重',wearTime:'肩负重要责任、需要扛住压力时',wearPosition:'贴身佩戴于胸前',duration:'长期佩戴，如大地般沉淀陪伴'},
    {id:'b-earth-2',name:'金曜石聚宝盆手串',nameEn:'Golden Sheen Obsidian Bracelet',color:'#D8B070',element:'土',
      desc:'寓意聚财纳福，与土命人踏实厚重的气质相得益彰。',
      rating:4,improves:'守财困难、努力却难见回报的挫败感',wearTime:'理财、经营决策、发薪日',wearPosition:'左手手腕',duration:'长期佩戴，建议避免剧烈碰撞'}
  ]
};

const TARO_JEWELRY=[
  {id:'t-1',name:'月光石戒指',color:'#A99AE8',desc:'象征直觉与新月能量，适合正处在选择路口、渴望倾听内心声音的你。'},
  {id:'t-2',name:'玫瑰石英项链',color:'#E8A0B8',desc:'爱与自我疗愈之石，温柔包裹心轮，适合正在经历情感课题的你。'},
  {id:'t-3',name:'黑曜石护身手链',color:'#8A8AA0',desc:'强大的能量屏障，助你抵御外界的负能量干扰，稳固当下的行动力。'},
  {id:'t-4',name:'拉长石耳坠',color:'#7FC4C4',desc:'唤醒潜藏的蜕变力量，适合正处于转折与重生阶段的你。'},
  {id:'t-5',name:'太阳石手链',color:'#F0A050',desc:'点燃生命力与自信，是照亮前路、驱散犹疑的能量之石。'}
];

const ALL_JEWELS={};
Object.values(BAZI_JEWELRY).forEach(list=>list.forEach(i=>ALL_JEWELS[i.id]={...i,style:'bazi'}));
TARO_JEWELRY.forEach(i=>ALL_JEWELS[i.id]={...i,style:'taro'});

// 将文本中出现的饰品名替换为可点击的彩色链接
function wrapJewelryText(text,items,origin){
  let result=text;
  const sorted=[...items].sort((a,b)=>b.name.length-a.name.length);
  sorted.forEach(item=>{
    if(result.includes(item.name)){
      const span=`<span class="jewel-link" style="color:${item.color}" onclick="showJewelry('${item.id}','${origin}')">${item.name}</span>`;
      result=result.split(item.name).join(span);
    }
  });
  return result;
}

let jewelReturn='choose';
function showJewelry(id,origin){
  const item=ALL_JEWELS[id];
  if(!item)return;
  jewelReturn=origin==='advisor'?'chat':(origin||'choose');
  const iconEl=document.getElementById('jewelIcon');
  iconEl.textContent='💎';
  iconEl.style.filter=`drop-shadow(0 0 22px ${item.color})`;
  const nameEl=document.getElementById('jewelName');
  nameEl.textContent=item.name;nameEl.style.color=item.color;
  let image=document.getElementById('jewelImage');
  if(!image){
    image=document.createElement('div');
    image.id='jewelImage';
    image.className='jewel-image';
    nameEl.insertAdjacentElement('afterend',image);
  }
  image.style.setProperty('--jewel-color',item.color);
  image.innerHTML=`<span>${item.name.slice(0,2)}</span>`;
  document.getElementById('jewelStyleTag').textContent=origin==='advisor'?'命理师递来的信物 · 可后续购买':(item.style==='bazi'?'古法工艺 · 东方禅意':'疗愈水晶 · 现代西方');
  document.getElementById('jewelDesc').textContent=item.desc;
  const tagsEl=document.getElementById('jewelTags');
  const tags=item.style==='bazi'?[item.element+'命相合','五行调和','东方禅意']:['能量疗愈','现代设计','直觉指引'];
  tagsEl.innerHTML=tags.map(t=>`<span class="jewel-tag-chip" style="border-color:${item.color};color:${item.color}">${t}</span>`).join('');
  let commerce=document.getElementById('jewelCommerce');
  if(!commerce){
    commerce=document.createElement('div');
    commerce.id='jewelCommerce';
    commerce.className='jewel-commerce';
    document.getElementById('jewelTags').insertAdjacentElement('afterend',commerce);
  }
  const price=item.price||(item.rating>=5?'$49.00':'$39.00');
  commerce.innerHTML=`
    <div class="jewel-advisor-note">它不替你做决定，只提醒你在关键时刻别散。</div>
    <div class="jewel-price" style="color:${item.color}">${price}</div>
    <button class="jewel-buy-btn" style="--jewel-color:${item.color}" type="button">购买入口预留</button>
  `;
  document.getElementById('jewelBack').textContent=origin==='taro'?'← 返回塔罗解读':origin==='harmony'?'← 返回命局调和':origin==='advisor'?'← 返回命理师对话':'← 返回命局解读';
  goto('jewel');
}

function initHarmonyPage(){
  if(!currentBazi)return;
  const lackEl=Object.entries(currentBazi.wxPct).reduce((a,b)=>a[1]<=b[1]?a:b)[0];
  const boostEl=currentBazi.favorable[0];
  document.getElementById('harmonyLack').textContent=lackEl;
  document.getElementById('harmonyBoost').textContent=boostEl;
  document.getElementById('harmonyReason').textContent=WX_LACK_REASON[boostEl]||WX_LACK_REASON[lackEl]||'';

  const jList=BAZI_JEWELRY[boostEl]||[];
  const rl=document.getElementById('resonanceList');rl.innerHTML='';
  jList.forEach(item=>{
    const card=document.createElement('div');card.className='resonance-card';
    card.innerHTML=`
      <div class="resonance-head">
        <div><div class="resonance-name" style="color:${item.color}">${item.name}</div><div class="resonance-name-en">${item.nameEn||''}</div></div>
        <div class="resonance-rating">${starsHtml(item.rating||4)}</div>
      </div>
      <div class="resonance-desc">${item.desc}</div>
      <div class="resonance-meta">
        <div class="resonance-meta-item"><div class="resonance-meta-label">改善什么</div><div class="resonance-meta-value">${item.improves||'—'}</div></div>
        <div class="resonance-meta-item"><div class="resonance-meta-label">佩戴时机</div><div class="resonance-meta-value">${item.wearTime||'—'}</div></div>
        <div class="resonance-meta-item"><div class="resonance-meta-label">佩戴位置</div><div class="resonance-meta-value">${item.wearPosition||'—'}</div></div>
        <div class="resonance-meta-item"><div class="resonance-meta-label">佩戴建议</div><div class="resonance-meta-value">${item.duration||'—'}</div></div>
      </div>`;
    card.onclick=()=>showJewelry(item.id,'harmony');
    rl.appendChild(card);
  });

  const lucky=WUXING_LUCKY[boostEl]||WUXING_LUCKY['水'];
  const lg=document.getElementById('luckyGrid');lg.innerHTML='';
  [
    {icon:'🎨',label:'幸运颜色',value:lucky.color},
    {icon:'🔢',label:'幸运数字',value:lucky.number},
    {icon:'🧭',label:'幸运方向',value:lucky.direction},
    {icon:'🌿',label:'幸运植物',value:lucky.plant},
    {icon:'🕯️',label:'幸运香氛',value:lucky.scent},
    {icon:'⚙️',label:'幸运金属',value:lucky.metal}
  ].forEach(c=>{
    const el=document.createElement('div');el.className='lucky-card';
    el.innerHTML=`<span class="lucky-card-icon">${c.icon}</span><div class="lucky-card-label">${c.label}</div><div class="lucky-card-value">${c.value}</div>`;
    lg.appendChild(el);
  });
}

// ════════════════════════════════════════
//  分享系统 — Canvas绘制分享卡片 + 保存/原生分享/兜底链接
// ════════════════════════════════════════
function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight){
  const chars=text.split('');
  let line='';
  let curY=y;
  const lines=[];
  chars.forEach(ch=>{
    const test=line+ch;
    if(ctx.measureText(test).width>maxWidth&&line){
      lines.push(line);
      line=ch;
    }else{
      line=test;
    }
  });
  if(line)lines.push(line);
  lines.forEach(l=>{ctx.fillText(l,x,curY);curY+=lineHeight;});
  return curY;
}

function getShareQuote(){
  if(readingCache&&readingCache.life){
    const m=readingCache.life.match(/《(.+?)》/);
    if(m)return m[1];
  }
  return currentBazi&&currentBazi.info?currentBazi.info.desc.slice(0,24)+'…':'知其所往，方能从容自渡。';
}

function drawShareCard(){
  if(!currentBazi)return;
  const canvas=document.getElementById('shareCanvas');
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  const el=currentBazi.dayMasterEl;
  const ec=WX_COLORS[el]||'#D4AF6A';
  const bgDark=(THEMES[EL_INFO[el].key]&&THEMES[EL_INFO[el].key].bgColor)||'#0d1228';

  // 背景
  const grad=ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,bgDark);
  grad.addColorStop(1,'#030508');
  ctx.fillStyle=grad;
  ctx.fillRect(0,0,W,H);

  // 边框
  ctx.strokeStyle=ec+'55';
  ctx.lineWidth=2;
  ctx.strokeRect(24,24,W-48,H-48);

  // 顶部 eyebrow
  ctx.fillStyle=ec+'cc';
  ctx.font='italic 16px "Cormorant Garamond",serif';
  ctx.textAlign='center';
  ctx.fillText('D E S T I N Y   ·   D E C O D E D',W/2,90);

  // 标题
  ctx.fillStyle='#E8E9F2';
  ctx.font='700 44px "Noto Serif SC",serif';
  ctx.fillText('灵犀命盘',W/2,150);

  // 五行icon
  ctx.font='90px sans-serif';
  ctx.fillText(currentBazi.info.icon,W/2,290);

  // 日主名
  ctx.fillStyle=ec;
  ctx.font='700 40px "Noto Serif SC",serif';
  ctx.fillText(TG[currentBazi.dayTG]+'·'+currentBazi.info.name+'命',W/2,360);

  ctx.fillStyle='rgba(232,233,242,0.5)';
  ctx.font='16px "Noto Sans SC",sans-serif';
  ctx.fillText(currentBazi.info.sub,W/2,392);

  // 四柱
  ctx.font='600 26px "Noto Serif SC",serif';
  const pillars=currentBazi.pillars;
  const pW=W/4;
  pillars.forEach((p,i)=>{
    const cx=pW*i+pW/2;
    ctx.fillStyle=i===2?ec:'rgba(232,233,242,0.75)';
    ctx.fillText(p.t,cx,450);
    ctx.fillStyle='rgba(232,233,242,0.4)';
    ctx.font='400 20px "Noto Serif SC",serif';
    ctx.fillText(p.d,cx,480);
    ctx.font='600 26px "Noto Serif SC",serif';
  });

  // 五行迷你条
  const wxKeys=Object.keys(currentBazi.wxPct);
  const barY=540,barH=8,barGap=26,barX=70,barW=W-140;
  wxKeys.forEach((k,i)=>{
    const y=barY+i*barGap;
    ctx.fillStyle='rgba(255,255,255,0.08)';
    ctx.fillRect(barX,y,barW,barH);
    const pct=currentBazi.wxPct[k]/100;
    ctx.fillStyle=WX_COLORS[k];
    ctx.fillRect(barX,y,barW*pct,barH);
    ctx.fillStyle='rgba(232,233,242,0.6)';
    ctx.font='14px "Noto Sans SC",sans-serif';
    ctx.textAlign='left';
    ctx.fillText(k,barX-30<0?barX:barX,y-4);
    ctx.textAlign='center';
  });

  // 金句
  ctx.fillStyle=ec;
  ctx.font='italic 22px "Cormorant Garamond",serif';
  ctx.textAlign='center';
  const quote=getShareQuote();
  wrapCanvasText(ctx,quote,W/2,720,W-140,32);

  // 底部
  ctx.fillStyle='rgba(232,233,242,0.3)';
  ctx.font='13px "Noto Sans SC",sans-serif';
  ctx.fillText('via 灵犀命盘 · 扫码体验你的专属命盘',W/2,H-50);
}

function initSharePage(){
  if(!currentBazi)return;
  drawShareCard();
  const url=location.href;
  const qr=document.getElementById('shareQr');
  qr.src='https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+encodeURIComponent(url);
  const quote=getShareQuote();
  const shareText=`我的灵犀命盘：${TG[currentBazi.dayTG]}·${currentBazi.info.name}命 — ${quote}`;
  document.getElementById('shareXLink').href='https://twitter.com/intent/tweet?text='+encodeURIComponent(shareText)+'&url='+encodeURIComponent(url);
  document.getElementById('sharePinLink').href='https://pinterest.com/pin/create/button/?url='+encodeURIComponent(url)+'&description='+encodeURIComponent(shareText);
}

function downloadShareCard(){
  const canvas=document.getElementById('shareCanvas');
  const link=document.createElement('a');
  link.download='灵犀命盘.png';
  link.href=canvas.toDataURL('image/png');
  link.click();
}

async function nativeShareCard(){
  const quote=getShareQuote();
  const shareText=currentBazi?`我的灵犀命盘：${TG[currentBazi.dayTG]}·${currentBazi.info.name}命 — ${quote}`:'灵犀命盘';
  if(navigator.share){
    try{
      await navigator.share({title:'灵犀命盘',text:shareText,url:location.href});
    }catch(e){ /* 用户取消分享，静默处理 */ }
  }else{
    copyShareLink();
  }
}

function copyShareLink(){
  navigator.clipboard?.writeText(location.href).then(()=>{
    alert('链接已复制');
  }).catch(()=>{
    alert('复制失败，请手动复制地址栏链接');
  });
}

// ════════════════════════════════════════
//  十位 AI 命理师 · 选择与对话
// ════════════════════════════════════════
const ADVISOR_DATA=[
  {key:'jia',tg:'甲',element:'木',name:'青岚',title:'青岚 · 甲木命理师',icon:'🌲',world:'春林、风过树梢',tone:'像林间风一样清醒，适合谈成长、事业方向与长期选择。',sound:'森林风、树梢摩擦、远处枝叶轻响',themeClass:'advisor-wood-jia',line:'风穿过树梢，答案也会慢慢显形。'},
  {key:'yi',tg:'乙',element:'木',name:'扶苏',title:'扶苏 · 乙木命理师',icon:'🌿',world:'花枝、庭院微风',tone:'温柔细腻，适合谈关系、情绪、自我修复与柔软的力量。',sound:'庭院微风、花枝轻摆、露水滴落',themeClass:'advisor-wood-yi',line:'柔软不是退让，是知道如何继续生长。'},
  {key:'bing',tg:'丙',element:'火',name:'明曜',title:'明曜 · 丙火命理师',icon:'☀️',world:'日照、暖光流动',tone:'明亮直接，适合谈表达、机会、行动力与被看见。',sound:'暖风、日照空气感、轻微火星',themeClass:'advisor-fire-bing',line:'真正的光，不必急着证明自己。'},
  {key:'ding',tg:'丁',element:'火',name:'烛微',title:'烛微 · 丁火命理师',icon:'🕯️',world:'烛火、夜灯微响',tone:'安静陪伴，适合谈灵感、内心、亲密关系与夜里的问题。',sound:'烛火轻响、木芯细响、安静空间感',themeClass:'advisor-fire-ding',line:'微光也能照见一整条路。'},
  {key:'wu',tg:'戊',element:'土',name:'崇山',title:'崇山 · 戊土命理师',icon:'⛰️',world:'群山、低沉风声',tone:'沉稳有力，适合谈责任、事业根基、压力与长期稳定。',sound:'山谷风、低频大地、远处回声',themeClass:'advisor-earth-wu',line:'山不催你，但会让你站稳。'},
  {key:'ji',tg:'己',element:'土',name:'云畴',title:'云畴 · 己土命理师',icon:'🌾',world:'田野、虫鸣微风',tone:'包容温润，适合谈生活节奏、滋养、家庭与现实安排。',sound:'田野风、轻虫鸣、稻浪细声',themeClass:'advisor-earth-ji',line:'答案会像作物一样，在时间里成熟。'},
  {key:'geng',tg:'庚',element:'金',name:'砺白',title:'砺白 · 庚金命理师',icon:'🏔️',world:'寒山、金石回响',tone:'清醒锋利，适合谈决断、边界、竞争与破局。',sound:'寒山风、金石回响、清冷空气',themeClass:'advisor-metal-geng',line:'锋芒不是为了伤人，是为了分清方向。'},
  {key:'xin',tg:'辛',element:'金',name:'清商',title:'清商 · 辛金命理师',icon:'🔔',world:'月下器物、清铃',tone:'精致敏锐，适合谈审美、价值、人际分寸与内在秩序。',sound:'清铃、玉石轻碰、月下空间感',themeClass:'advisor-metal-xin',line:'清澈的声音，会留下最远的回响。'},
  {key:'ren',tg:'壬',element:'水',name:'玄澜',title:'玄澜 · 壬水命理师',icon:'🌊',world:'大江、浪声',tone:'辽阔流动，适合谈迁移、格局、自由、变化与远方。',sound:'大江浪声、远潮、深水低频',themeClass:'advisor-water-ren',line:'水势向前，未必需要立刻靠岸。'},
  {key:'gui',tg:'癸',element:'水',name:'听雨',title:'听雨 · 癸水命理师',icon:'🌧️',world:'小雨、湖面涟漪',tone:'安静洞察，适合谈情绪、直觉、关系细节与隐秘答案。',sound:'细雨、湖面涟漪、水滴落下',themeClass:'advisor-water-gui',line:'雨落在湖面，也落在你尚未说出口的心事里。'}
];
const ADVISOR_OPENINGS={
  jia:[
    '你不是长得慢，你是一直在替别人遮风。',
    '风已经吹到树梢了。你心里那件事，其实不该再拖。',
    '你看起来能扛很多，其实最累的是没人问你想不想扛。',
    '你不是没有方向，你只是还没允许自己离开旧土。',
    '有些枝叶该剪掉了，不然真正要长的地方会见不到光。'
  ],
  yi:[
    '你不是心软，你是太会替别人找理由。',
    '那个人伤你的地方，不在离开，在他明知道你会疼还继续试探。',
    '你一直在绕开锋利的事，可藤蔓也有自己的边界。',
    '你不是想太多，你只是早就闻到风向变了。',
    '你心里那朵花不是枯了，是被放在了不该待的地方。'
  ],
  bing:[
    '你不是没人看见，是你把光给了不值得的人。',
    '今年最要紧的不是等机会，是别再替别人降温。',
    '你心里有火，但你一直在装作不烫。',
    '有些人靠近你，不是因为爱光，是想借光。',
    '你不是输在冲动，是输在明明看见了还不肯转身。'
  ],
  ding:[
    '你不是不在意，你只是习惯把难过说得很轻。',
    '夜深的时候你最清醒，所以别再骗自己那件事没影响。',
    '你要的不是热闹，是有人听懂你没说完的半句。',
    '那盏灯一直亮着，但你不能总拿自己去照别人。',
    '真正困住你的不是过去，是你还替过去留着位置。'
  ],
  wu:[
    '你不是没情绪，你只是把自己修成了一座山。',
    '有些责任不是你的，但你已经背得太久了。',
    '你以为稳住就会没事，其实有些事要先放下才稳。',
    '山风很重，像你一直没说出口的那句话。',
    '你压得住场面，可你不能一直压住自己。'
  ],
  ji:[
    '你不是不委屈，你只是太会把别人安顿好。',
    '有些人不是需要你照顾，是习惯了消耗你的温柔。',
    '你心里那块地荒了很久，不是没人来，是你一直没留给自己。',
    '别急着原谅。先看看你这次到底失去了什么。',
    '你最该接住的人，其实是那个一直在撑着的自己。'
  ],
  geng:[
    '你不是太冷，你只是早就看穿了那套说辞。',
    '该断的东西，再漂亮也别留在手里割自己。',
    '你心里已经有答案，只是还差一个狠心的动作。',
    '有些关系不是修不好，是一开始就不该让它靠近。',
    '这一次别讲情面。讲清楚，才是真的给自己留路。'
  ],
  xin:[
    '你不是挑剔，你只是听得出话里的杂音。',
    '有些人配不上你的认真，不是你太敏感。',
    '你早就知道哪里不对，只是那一点体面让你没拆穿。',
    '清铃响了一下。你该把心从那场虚假的热闹里收回来。',
    '真正贵的东西，从来不需要反复证明自己。'
  ],
  ren:[
    '你不是想逃，你只是待在太小的地方太久了。',
    '大水要走的时候，拦是拦不住的。你也一样。',
    '你心里那阵潮已经涨上来了，别再装作岸还很远。',
    '有些答案不是想出来的，是走出去才会出现。',
    '你真正怕的不是变化，是变化后再也不能回头。'
  ],
  gui:[
    '你不是没感觉，你只是一直忍着没说。',
    '这段关系最伤你的，不是离开，是你明明看见了还不肯停。',
    '你心里早有答案，你只是想确认一次，自己是不是看错了。',
    '雨已经落下来了。别再替那个不撑伞的人淋湿自己。',
    '你真正放不下的不是人，是那次你没被好好对待。'
  ]
};
const ADVISOR_JEWELRY={
  jia:{default:'b-wood-2',career:'b-wood-2',love:'b-wood-1',mind:'b-wood-1',cut:'b-metal-2',money:'b-earth-2'},
  yi:{default:'b-wood-1',love:'b-fire-2',mind:'b-wood-1',career:'b-wood-2',cut:'b-metal-2',money:'b-earth-2'},
  bing:{default:'b-fire-1',love:'b-fire-2',career:'b-wood-2',mind:'b-fire-1',cut:'b-metal-2',money:'b-earth-2'},
  ding:{default:'b-fire-1',love:'b-fire-2',mind:'b-water-1',career:'b-wood-2',cut:'b-metal-2',money:'b-earth-2'},
  wu:{default:'b-earth-1',career:'b-earth-1',money:'b-earth-2',mind:'b-water-1',love:'b-fire-2',cut:'b-metal-2'},
  ji:{default:'b-earth-1',love:'b-fire-2',mind:'b-water-1',career:'b-earth-2',cut:'b-metal-2',money:'b-earth-2'},
  geng:{default:'b-metal-1',cut:'b-metal-2',career:'b-metal-1',money:'b-earth-2',mind:'b-water-1',love:'b-fire-2'},
  xin:{default:'b-metal-2',love:'b-fire-2',mind:'b-metal-2',career:'b-metal-1',cut:'b-metal-2',money:'b-metal-1'},
  ren:{default:'b-water-2',career:'b-water-2',mind:'b-water-1',love:'b-fire-2',cut:'b-metal-2',money:'b-earth-2'},
  gui:{default:'b-water-1',love:'b-water-2',mind:'b-water-1',career:'b-metal-2',cut:'b-metal-2',money:'b-earth-2'}
};
const ADVISOR_PRESENCE={
  jia:'青岚立在春林深处，风过枝梢，他没有回头，只等你把真正的问题说出来。',
  yi:'扶苏坐在花枝庭院里，露水落下的声音很轻，她却听得见你没说完的那半句。',
  bing:'明曜站在日轮下，光从他身后铺开，像要把你一直躲着的答案照出来。',
  ding:'烛微守着一盏夜灯，火影在墙上轻晃，适合说那些白天不敢承认的话。',
  wu:'崇山立在群山之间，风很低，他不急着开口，却能压住你心里的乱。',
  ji:'云畴在田野薄雾里等你，近地的风慢慢吹过，像终于有人接住你的疲惫。',
  geng:'砺白站在寒山石壁前，声音不重，但每一句都像替你切开一条路。',
  xin:'清商在月下器物旁抬眼，银铃轻响，她最擅长看穿那些漂亮的假话。',
  ren:'玄澜从夜航的江面深处走来，浪声很远，他知道你真正想去哪里。',
  gui:'听雨立在湖边雨雾里，水面一圈圈散开，她安静，却能一句话扎进心里。'
};
const ADVISOR_BY_KEY=Object.fromEntries(ADVISOR_DATA.map(a=>[a.key,a]));
let currentAdvisorKey=null;
let advisorChatStores={};
let advisorChatMeta={};
let currentAdvisorOpening='';
let chatHistory=[]; // 仅存user/assistant轮次，不含system，渲染与发送时会自动补上system
let chatBaziKey=null; // 用于判断命盘是否变了，变了要重置对话
let chatSending=false;

function getCurrentAdvisor(){
  if(currentAdvisorKey&&ADVISOR_BY_KEY[currentAdvisorKey])return ADVISOR_BY_KEY[currentAdvisorKey];
  const key=currentBazi?DAY_MASTER_KEYS[currentBazi.dayTG]:'gui';
  return ADVISOR_BY_KEY[key]||ADVISOR_BY_KEY.gui;
}

function randomPick(list){
  return list[Math.floor(Math.random()*list.length)];
}

function pickAdvisorOpening(advisor){
  return randomPick(ADVISOR_OPENINGS[advisor.key]||ADVISOR_OPENINGS.gui);
}

function getAdvisorMeta(key){
  if(!advisorChatMeta[key])advisorChatMeta[key]={questionCount:0,jewelInjected:false,introSeen:false};
  return advisorChatMeta[key];
}

function detectQuestionTopic(text){
  if(/感情|关系|喜欢|复合|分手|婚|对象|暧昧|爱|桃花|他|她/.test(text))return 'love';
  if(/工作|事业|跳槽|上司|同事|offer|职业|项目|升职|换工作/.test(text))return 'career';
  if(/财|钱|投资|收入|副业|生意|买房|赚钱|存款/.test(text))return 'money';
  if(/焦虑|睡|心神|累|情绪|难受|失眠|害怕|内耗|压力/.test(text))return 'mind';
  if(/放下|断|离开|边界|结束|拉黑|纠缠|分开|割舍/.test(text))return 'cut';
  return 'default';
}

function pickAdvisorJewel(advisor,text){
  const topic=detectQuestionTopic(text);
  const config=ADVISOR_JEWELRY[advisor.key]||ADVISOR_JEWELRY.gui;
  const id=config[topic]||config.default;
  return ALL_JEWELS[id]||ALL_JEWELS[config.default]||ALL_JEWELS['b-water-1'];
}

function buildAdvisorJewelSentence(advisor,text,count){
  const item=pickAdvisorJewel(advisor,text);
  const topic=detectQuestionTopic(text);
  const sentences={
    love:`这类关系最怕你一直替对方圆场。先把自己的气稳住，${item.name}适合贴身戴，别让心又被一句话牵走。`,
    career:`你现在缺的不是更用力，是把节奏压稳。${item.name}可以当成一个提醒：该出手时出手，该收住时收住。`,
    money:`财气不是追出来的，是守得住才算数。${item.name}先帮你定住手里的气，再谈下一步怎么开。`,
    mind:`你现在最缺的不是安慰，是稳气。${item.name}先戴一阵，把心神收回来，很多答案才会露出来。`,
    cut:`这一步要干净，别拖泥带水。${item.name}适合放在身边，提醒你该断的东西不要再回头确认。`,
    default:`我先递你一件信物，${item.name}。不是让它替你改变命运，是提醒你别再把自己的气交出去。`
  };
  return {item,sentence:sentences[topic]||sentences.default,count};
}

function decorateAdvisorReply(reply,originalText){
  const advisor=getCurrentAdvisor();
  const meta=getAdvisorMeta(advisor.key);
  let text=String(reply||'').trim();
  let items=[];
  if(!meta.jewelInjected&&meta.questionCount<=5&&(meta.questionCount>=2||detectQuestionTopic(originalText)!=='default'||meta.questionCount===5)){
    const rec=buildAdvisorJewelSentence(advisor,originalText,meta.questionCount);
    text+=(text?'\n\n':'')+rec.sentence;
    items=[rec.item];
    meta.jewelInjected=true;
  }
  return {text,html:items.length?wrapJewelryText(escapeHtml(text).replace(/\n/g,'<br>'),items,'advisor'):null};
}

function chatSystemPrompt(){
  const b=currentBazi;
  const advisor=getCurrentAdvisor();
  const base=`你是${advisor.name}，一位${advisor.tg}${advisor.element}命理师。你的世界是「${advisor.world}」，声音气质是「${advisor.sound}」。开场气息是：${currentAdvisorOpening||advisor.line}。你说话像懂命局、也懂人心的真人命理师，不像客服，不像 ChatGPT，不说自己是 AI。回答控制在120字以内。先说结论，再补一刀，留下一个让人想继续问的钩子。禁止使用这些词：从你的命盘来看、综合分析、你的八字显示、建议你、可能意味着。语气遵循：${advisor.tone}`+t('ai_lang_instruction');
  if(!b)return base;
  return base+`\n\n用户的命局资料（已经算好，不需要再问生辰）：${baziSummary(b)}\n回答时把五行、十神、喜用神藏进判断里，不要机械解释。不要写标题，不要分点太多，像当面说话。`;
}

function initChatPage(){
  const key=currentBazi?(currentBazi.y+'-'+currentBazi.m+'-'+currentBazi.d+'-'+currentBazi.h):null;
  if(key!==chatBaziKey){
    chatHistory=[];
    advisorChatStores={};
    advisorChatMeta={};
    currentAdvisorOpening='';
    currentAdvisorKey=null;
    chatBaziKey=key;
  }
  if(!currentAdvisorKey){
    renderAdvisorSelection();
    return;
  }
  renderAdvisorDetail();
}

function advisorCardHtml(a){
  const active=currentBazi&&DAY_MASTER_KEYS[currentBazi.dayTG]===a.key;
  return `<button class="advisor-card ${a.themeClass}${active?' is-native':''}" onclick="selectAdvisor('${a.key}')">
    <span class="advisor-card-icon">${a.icon}</span>
    <span class="advisor-card-name">${a.name}</span>
    <span class="advisor-card-role">${a.tg}${a.element}命理师</span>
    <span class="advisor-card-world">${a.world}</span>
    ${active?'<span class="advisor-native-tag">你的日主</span>':''}
  </button>`;
}

function renderAdvisorSelection(){
  const screen=document.getElementById('s-chat');
  screen.className='screen active fade-in advisor-screen advisor-select-screen';
  screen.removeAttribute('data-advisor');
  currentAdvisorKey=null;
  chatSending=false;
  const current=currentBazi?ADVISOR_BY_KEY[DAY_MASTER_KEYS[currentBazi.dayTG]]:null;
  screen.innerHTML=`
    <div class="advisor-select-hero">
      <div class="advisor-kicker">Destiny Guardians</div>
      <div class="advisor-select-title">选择你的 AI 命理师</div>
      <div class="advisor-select-sub">${current?`你的日主是${current.tg}${current.element}，也可以先见见${current.name}。`:'十位命理师各自守着一方命运世界。'}</div>
    </div>
    <div class="advisor-grid">${ADVISOR_DATA.map(advisorCardHtml).join('')}</div>
    <div class="back-link" onclick="goto('result')" style="margin-top:24px" data-i18n="back_result">← 返回命盘</div>
  `;
}

async function applyAdvisorWorld(advisor){
  document.body.dataset.advisorWorld=advisor.key;
  document.documentElement.style.setProperty('--advisor-accent',WX_COLORS[advisor.element]||'#D4AF6A');
  if(!chartEntered)setChartEntered(true);
  const profile={
    dayMaster:advisor.key,
    elements:{wood:.2,fire:.2,earth:.2,metal:.2,water:.2},
    timePhase:DN?.phase==='dawn'?'day':(DN?.phase||'night'),
    chartEntered:true,
    themeConfig:await loadThemeConfig(advisor.key)
  };
  const theme=buildElementalTheme(profile);
  renderElementalTheme(theme);
  getElementalScene().start(theme);
  if(soundEnabled)playElementalSoundscape({dayTG:DAY_MASTER_KEYS.indexOf(advisor.key),wxPct:{木:20,火:20,土:20,金:20,水:20}});
}

function selectAdvisor(key){
  currentAdvisorKey=key;
  chatHistory=advisorChatStores[key]||[];
  const advisor=getCurrentAdvisor();
  currentAdvisorOpening=pickAdvisorOpening(advisor);
  getAdvisorMeta(key);
  renderAdvisorDetail();
  applyAdvisorWorld(advisor);
}

function enterAdvisorDialogue(){
  const advisor=getCurrentAdvisor();
  getAdvisorMeta(advisor.key).introSeen=true;
  renderAdvisorDetail();
}

function renderAdvisorDetail(){
  const advisor=getCurrentAdvisor();
  const meta=getAdvisorMeta(advisor.key);
  if(!currentAdvisorOpening)currentAdvisorOpening=pickAdvisorOpening(advisor);
  const introMode=!meta.introSeen&&chatHistory.length===0;
  const screen=document.getElementById('s-chat');
  screen.className=`screen active fade-in advisor-screen advisor-detail-screen ${advisor.themeClass}`;
  screen.dataset.advisor=advisor.key;
  const suggest1=advisor.element==='木'?'我现在应该向哪里生长？':advisor.element==='火'?'我该不该主动一点？':advisor.element==='土'?'我怎样才能更稳定？':advisor.element==='金'?'我该如何做决定？':'我该顺流还是改变方向？';
  const suggest2=advisor.element==='水'?'这段关系我该怎么判断？':'今年事业有什么提醒？';
  screen.innerHTML=`
    <div class="advisor-world-stage">
      <div class="advisor-scene-depth"></div>
      <div class="advisor-person" aria-hidden="true"><span>${advisor.icon}</span></div>
      <div class="advisor-ripple r1"></div>
      <div class="advisor-ripple r2"></div>
    </div>
    <div class="advisor-entry-card ${introMode?'':'is-passed'}">
      <div class="advisor-entry-kicker">${advisor.world}</div>
      <div class="advisor-entry-name">${advisor.name}</div>
      <div class="advisor-presence-line">${ADVISOR_PRESENCE[advisor.key]}</div>
      <div class="advisor-entry-line">${currentAdvisorOpening}</div>
      <button class="advisor-enter-dialogue" onclick="enterAdvisorDialogue()">坐下来说</button>
    </div>
    <div class="advisor-chat-panel ${introMode?'advisor-chat-hidden':''}">
      <div class="advisor-detail-hero">
        <button class="advisor-back-btn" onclick="renderAdvisorSelection()">←</button>
        <div class="advisor-avatar">${advisor.icon}</div>
        <div>
          <div class="chat-title">${advisor.title}</div>
          <div class="chat-sub">${advisor.line}</div>
        </div>
      </div>
      <div class="advisor-mood-line">${currentAdvisorOpening}</div>
      <div class="advisor-sound-line">声景：${advisor.sound}</div>
      <div class="chat-messages" id="chatMessages"></div>
      <div class="chat-suggests" id="chatSuggests">
        <div class="chat-suggest-chip" onclick="sendChatSuggestText('${suggest1}')">${suggest1}</div>
        <div class="chat-suggest-chip" onclick="sendChatSuggestText('${suggest2}')">${suggest2}</div>
        <div class="chat-suggest-chip" onclick="sendChatSuggestText('我的命盘现在最需要注意什么？')">我的命盘现在最需要注意什么？</div>
      </div>
      <div class="chat-input-bar">
        <input class="chat-input" id="chatInput" type="text" placeholder="把问题说给${advisor.name}听…" onkeydown="if(event.key==='Enter')sendChatMessage()">
        <button class="chat-send-btn" id="chatSendBtn" onclick="sendChatMessage()">➤</button>
      </div>
    </div>
    <div class="back-link" onclick="goto('result')" style="margin-top:14px" data-i18n="back_result">← 返回命盘</div>
  `;
  if(!introMode){
    renderChatMessages();
    setTimeout(()=>document.getElementById('chatInput')?.focus(),100);
  }
}

function renderChatMessages(){
  const box=document.getElementById('chatMessages');
  if(!box)return;
  const advisor=getCurrentAdvisor();
  if(chatHistory.length===0){
    box.innerHTML=`<div class="chat-empty-hint">${advisor.name}已经在这里。<br>不用重复输入生辰，直接说你的问题。</div>`;
    return;
  }
  box.innerHTML=chatHistory.map(m=>
    `<div class="chat-bubble-row ${m.role}"><div class="chat-bubble">${m.role==='assistant'&&m.html?m.html:escapeHtml(m.content).replace(/\n/g,'<br>')}</div></div>`
  ).join('');
  box.scrollTop=box.scrollHeight;
}
function escapeHtml(s){
  const d=document.createElement('div');d.textContent=s;return d.innerHTML;
}

function sendChatSuggest(key){
  document.getElementById('chatInput').value=t(key);
  sendChatMessage();
}
function sendChatSuggestText(text){
  const input=document.getElementById('chatInput');
  if(!input)return;
  input.value=text;
  sendChatMessage();
}

async function sendChatMessage(){
  if(chatSending)return;
  const input=document.getElementById('chatInput');
  const text=input.value.trim();
  if(!text)return;
  input.value='';
  const advisor=getCurrentAdvisor();
  getAdvisorMeta(advisor.key).questionCount++;
  chatHistory.push({role:'user',content:text});
  renderChatMessages();

  const box=document.getElementById('chatMessages');
  const loadingRow=document.createElement('div');
  loadingRow.className='chat-bubble-row assistant';
  loadingRow.innerHTML='<div class="chat-bubble loading"><div class="chat-loading-dot"></div><div class="chat-loading-dot"></div><div class="chat-loading-dot"></div></div>';
  box.appendChild(loadingRow);
  box.scrollTop=box.scrollHeight;

  chatSending=true;
  document.getElementById('chatSendBtn').disabled=true;
  try{
    const messages=[{role:'system',content:chatSystemPrompt()},...chatHistory.map(m=>({role:m.role,content:m.content}))];
    const reply=await callClaudeChat(messages);
    const decorated=decorateAdvisorReply(reply,text);
    chatHistory.push({role:'assistant',content:decorated.text,html:decorated.html});
    if(currentAdvisorKey)advisorChatStores[currentAdvisorKey]=chatHistory;
    renderChatMessages();
  }catch(e){
    loadingRow.remove();
    chatHistory.push({role:'assistant',content:'（网络异常，没能收到回复：'+(e.message||'请稍后重试')+'）'});
    if(currentAdvisorKey)advisorChatStores[currentAdvisorKey]=chatHistory;
    renderChatMessages();
  }finally{
    chatSending=false;
    document.getElementById('chatSendBtn').disabled=false;
  }
}


// ════════════════════════════════════════
const TAROT=[
  {name:'愚者',icon:'🌟',meaning:'新的开始，无畏探索',pos:'过去',reading:'你正站在一段全新旅程的起点。放下对结果的执念，以开放的心拥抱未知——这正是命运垂青的时刻。'},
  {name:'魔术师',icon:'✨',meaning:'意志与创造力',pos:'现在',reading:'你拥有改变现状所需的一切资源，关键在于是否有勇气将潜能化为行动。此刻正是你掌握命运的时刻。'},
  {name:'女祭司',icon:'🌙',meaning:'内在直觉与隐藏知识',pos:'未来',reading:'答案早已存在于你的内心深处。此时应当向内观照，让直觉引领你穿越表面的迷雾。'},
  {name:'皇后',icon:'🌸',meaning:'丰盛与自然力量',reading:'丰盛正向你涌来。无论感情还是事业，只要你愿意耐心培育，种子终将结出饱满的果实。'},
  {name:'皇帝',icon:'👑',meaning:'权威与秩序',reading:'是时候建立清晰的边界与规则了。以稳定的力量主导局面，你将赢得他人的尊重。'},
  {name:'教皇',icon:'🔮',meaning:'传统智慧与精神指引',reading:'寻求前辈的智慧或与信念深处的自我对话。此刻所需的指引，往往藏于经典之中。'},
  {name:'恋人',icon:'💫',meaning:'选择与心灵结合',reading:'你正面临重要抉择。遵从心中最真实的声音，而非外界的期待——这个选择将深远影响你的命途。'},
  {name:'战车',icon:'⚡',meaning:'意志力与胜利',reading:'全力冲刺的时机已到。集中意志，排除内心矛盾，向目标全速前进，胜利已在眼前。'},
  {name:'力量',icon:'🦁',meaning:'韧性与温柔掌控',reading:'真正的力量并非来自强迫，而是来自内心的从容。以温柔而坚定的方式面对挑战，方能持久。'},
  {name:'隐者',icon:'🕯️',meaning:'内省与独处智慧',reading:'此刻需要暂时从喧嚣中抽身，在宁静中审视内心。独处并非孤独，而是积蓄力量的必要过程。'},
  {name:'命运之轮',icon:'🎡',meaning:'周期循环与命运转折',reading:'命运的齿轮正在转动。好坏只是暂时，保持内心稳定，乘势而上，这是你乘风而起的机遇。'},
  {name:'正义',icon:'⚖️',meaning:'公平、真相与因果',reading:'你的过去行动正在收获应有的回报。保持正直，诚实面对自己与他人，命运将给予公正的回应。'},
  {name:'倒吊人',icon:'💧',meaning:'放手与视角转变',reading:'主动暂停，从不同角度审视困境。有时候，放弃掌控才是真正的力量——答案将在等待中浮现。'},
  {name:'死神',icon:'🌹',meaning:'蜕变与终结',reading:'一段旅程走到尽头，但这并非悲剧——而是华丽蜕变的前兆。让旧事物离去，为新生腾出空间。'},
  {name:'节制',icon:'🌊',meaning:'平衡、调和与耐心',reading:'保持耐心，寻求各方面的平衡与调和。操之过急只会适得其反，水到渠成才是此刻最大的智慧。'},
  {name:'恶魔',icon:'🔗',meaning:'物质束缚与阴暗诱惑',reading:'审视那些让你深陷泥潭的执着与恐惧。那些束缚，很多只是幻觉——松开双手，你本可以自由。'},
  {name:'星星',icon:'⭐',meaning:'希望、灵感与疗愈',reading:'最黑暗的时刻已经过去，希望的星光正在照临。相信自己，保持纯粹的初心，疗愈正在悄然发生。'},
  {name:'月亮',icon:'🌕',meaning:'幻觉、恐惧与潜意识',reading:'表面之下有某些东西尚未浮出水面。信任你的直觉，但也要辨别哪些是真实，哪些只是恐惧的幻象。'},
  {name:'太阳',icon:'☀️',meaning:'喜悦、成功与生命力',reading:'充满活力的阳光时代正在到来。尽情展现真实的自我，属于你的荣耀时刻就在前方。'},
  {name:'审判',icon:'🎺',meaning:'觉醒、召唤与重生',reading:'内心深处的召唤正在响起。是时候正视过去，做出关键选择，以全新的自我回应命运的呼唤。'},
  {name:'世界',icon:'🌍',meaning:'圆满完成与宇宙合一',reading:'一个完整的循环在此落幕。你已成为了你需要成为的那个人，带着智慧踏入下一段征途。'},
  {name:'权杖王牌',icon:'🔥',meaning:'创业激情与新生命力',reading:'一股强大的创造能量正在涌动。现在是启动新计划的最佳时机，相信你内心的热情，它将成为最有力的引擎。'},
];

let taroState='idle',drawnIdx=[],shuffling=false;
let drawnCards=[];

function initTaro(){
  taroState='idle';drawnIdx=[];shuffling=false;drawnCards=[];
  taroReadingCache=null;
  renderDeck();
  document.getElementById('drawnCards').innerHTML='';
  const r=document.getElementById('taroReading');r.classList.remove('show');r.innerHTML='';
  document.getElementById('taroHint').textContent=t('taro_hint_start');
  document.getElementById('btnShuffle').style.display='none';
  const aiBtn=document.getElementById('taroAiBtn');
  aiBtn.classList.remove('show');
  aiBtn.textContent=t('taro_ai_btn');
  aiBtn.disabled=false;aiBtn.style.opacity='';aiBtn.style.cursor='';
  document.getElementById('taroAiResult').classList.remove('show');
  document.getElementById('taroAiText').innerHTML='';
}

function renderDeck(){
  const st=document.getElementById('cardStack');st.innerHTML='';
  const pos=[{x:-18,y:-6,r:-8},{x:-8,y:-3,r:-3},{x:0,y:0,r:0},{x:8,y:-3,r:3},{x:18,y:-6,r:8}];
  pos.forEach((p,i)=>{const c=document.createElement('div');c.className='stacked';c.style.cssText=`transform:translate(calc(-50% + ${p.x}px),calc(-50% + ${p.y}px)) rotate(${p.r}deg);z-index:${i}`;c.innerHTML='<div class="back-symbol">✦</div>';st.appendChild(c);});
  st.style.cursor='pointer';st.onclick=()=>startShuffle();
}

function startShuffle(){
  if(shuffling)return;shuffling=true;
  const st=document.getElementById('cardStack');
  const cards=[...st.querySelectorAll('.stacked')];
  document.getElementById('taroHint').textContent=t('taro_hint_shuffling');
  particles=[];currentTheme='default';
  cards.forEach((c,i)=>{const ang=Math.random()*360,dist=140+Math.random()*80;const dx=Math.cos(ang*Math.PI/180)*dist,dy=Math.sin(ang*Math.PI/180)*dist;c.style.transition=`transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i*.06}s`;const bx=[-18,-8,0,8,18],by=[-6,-3,0,-3,-6];c.style.transform=`translate(calc(-50% + ${bx[i]+dx}px),calc(-50% + ${by[i]+dy}px)) rotate(${Math.random()*720-360}deg)`;});
  setTimeout(()=>{cards.forEach((c,i)=>{const bx=[-18,-8,0,8,18],by=[-6,-3,0,-3,-6],br=[-8,-3,0,3,8];c.style.transition=`transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i*.07}s`;c.style.transform=`translate(calc(-50% + ${bx[i]}px),calc(-50% + ${by[i]}px)) rotate(${br[i]}deg)`;});setTimeout(()=>{shuffling=false;taroState='ready';document.getElementById('taroHint').textContent=t('taro_hint_ready');st.onclick=()=>drawCard();},700);},700);
}

function drawCard(){
  if(taroState!=='ready'||drawnIdx.length>=3)return;
  let idx;do{idx=Math.floor(Math.random()*TAROT.length);}while(drawnIdx.includes(idx));
  drawnIdx.push(idx);drawnCards.push(TAROT[idx]);
  const card=TAROT[idx];
  const cont=document.getElementById('drawnCards');
  const el=document.createElement('div');el.className='drawn-card';
  el.innerHTML=`<div class="drawn-card-inner"><div class="card-back-face">✦</div><div class="card-face"><div class="cicon">${card.icon}</div><div class="cname">${card.name}</div><div class="cmeaning">${card.meaning}</div></div></div>`;
  cont.appendChild(el);setTimeout(()=>el.classList.add('flipped'),80);
  if(drawnIdx.length===3){
    taroState='done';document.getElementById('taroHint').textContent=t('taro_hint_done');
    setTimeout(()=>showTaroBase(),1200);
    document.getElementById('btnShuffle').style.display='inline-block';
    document.getElementById('cardStack').onclick=null;
  }else{document.getElementById('taroHint').textContent=t('taro_hint_drawn').replace('{n}',drawnIdx.length);}
}

function showTaroBase(){
  const pos=['过去','现在','未来'];
  const r=document.getElementById('taroReading');
  r.innerHTML=drawnIdx.map((i,n)=>`<div style="margin-bottom:12px"><strong>${pos[n]} · ${TAROT[i].name}：</strong>${TAROT[i].reading}</div>`).join('');
  r.classList.add('show');
  document.getElementById('taroAiBtn').classList.add('show');
}

function shuffleDeck(){initTaro();setTimeout(()=>startShuffle(),300);}

let taroReadingCache=null;
async function getTaroReading(){
  const btn=document.getElementById('taroAiBtn');
  const box=document.getElementById('taroAiResult');
  const txt=document.getElementById('taroAiText');

  // 每次抽牌只生成一次解读，已生成则直接展示缓存结果
  if(taroReadingCache){
    box.classList.add('show');
    txt.innerHTML=taroReadingCache;
    return;
  }

  btn.textContent=t('taro_ai_sensing');btn.disabled=true;
  box.classList.add('show');
  txt.innerHTML='<div style="opacity:0.4;font-size:12px;letter-spacing:0.15em;text-align:center;padding:20px 0">灵犀正在解读牌意…</div>';
  const pos=['过去','现在','未来'];
  const cardDesc=drawnIdx.map((i,n)=>`${pos[n]}位置：${TAROT[i].name}（${TAROT[i].meaning}）`).join('，');
  const jNames=TARO_JEWELRY.map(i=>i.name).join('、');
  const prompt=`你是一位温暖而深邃的塔罗解读者，风格"疗愈灵魂"，擅长用一句钩子般的开场瞬间抓住人心。用户抽到三张牌：${cardDesc}。

请以第二人称"你"，用诗意而真实的语言给出解读，控制在240字以内：

先独立一行给出一句制造悬念或好奇心的"引子"（不超过20字，不要加任何标题符号），再把三张牌串联成一个完整的故事/能量流动（不要逐张分析）。
结尾自然带出一件契合此刻能量的水晶饰品建议——从以下选项中选一件最贴切的，原样使用饰品名称（不要改写、不要加书名号）：${jNames}。用带一点悬念的语气引导ta想进一步了解这件饰品，不要说教或强行推销。
最后单独一行给出一句金句，用书名号《》括起。
用中文回答。${t('ai_lang_instruction')}`;
  try{
    const raw=await callClaude(prompt);
    const quoteMatch=raw.match(/《(.+?)》/);
    let body=raw,quote='';
    if(quoteMatch){quote=quoteMatch[0];body=raw.replace(quoteMatch[0],'').trim();}
    const lines=body.split('\n').map(l=>l.trim()).filter(Boolean);
    let hook='';
    if(lines.length>1){hook=lines[0];body=lines.slice(1).join('\n');}
    body=wrapJewelryText(body,TARO_JEWELRY,'taro');
    const html=`${hook?`<div class="ai-hook">${hook}</div>`:''}<div class="ai-text">${body.replace(/\n/g,'<br>')}</div>${quote?`<div class="ai-quote">${quote}</div>`:''}`;
    txt.innerHTML=html;
    taroReadingCache=html;
    btn.textContent=t('taro_ai_btn_done');
    btn.disabled=true;btn.style.opacity='0.5';btn.style.cursor='default';
    return;
  }catch(e){txt.innerHTML=`<div style="opacity:0.4;font-size:12px;text-align:center;padding:20px 0">网络异常：${e.message||'请检查连接后重试'}</div>`;}
  btn.textContent=t('taro_ai_btn');btn.disabled=false;btn.style.opacity='';btn.style.cursor='';
}

// ════════════════════════════════════════
//  BAZI ENGINE — 专业排盘引擎
//  节气(Meeus太阳视黄经迭代解算) · 真太阳时(经度+均时差)
//  十神 · 藏干 · 纳音 · 十二长生 · 五行旺衰 · 喜用神/忌神
// ════════════════════════════════════════
const TG=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const DZ=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const TG_EL=['木','木','火','火','土','土','金','金','水','水'];
const DZ_EL=['水','土','木','木','土','火','火','土','金','金','土','水'];
const MTG=[2,4,6,8,0,2,4,6,8,0]; // 年干->寅月天干（五虎遁）
const HTG=[0,2,4,6,8,0,2,4,6,8]; // 日干->子时天干（五鼠遁）

// ---- 儒略日 ----
function dateToJD(dateUTC){return dateUTC.getTime()/86400000+2440587.5;}
function jdToDate(jd){return new Date((jd-2440587.5)*86400000);}
function norm360(x){x=x%360;if(x<0)x+=360;return x;}

// ---- Meeus 太阳视黄经（低精度，误差约±10分钟内） ----
function apparentSolarLongitude(jd){
  const T=(jd-2451545.0)/36525;
  const L0=280.46646+36000.76983*T+0.0003032*T*T;
  const M=357.52911+35999.05029*T-0.0001537*T*T;
  const Mrad=M*Math.PI/180;
  const C=(1.914602-0.004817*T-0.000014*T*T)*Math.sin(Mrad)
    +(0.019993-0.000101*T)*Math.sin(2*Mrad)
    +0.000289*Math.sin(3*Mrad);
  const trueLong=L0+C;
  const Omega=125.04-1934.136*T;
  return norm360(trueLong-0.00569-0.00478*Math.sin(Omega*Math.PI/180));
}
const APPROX_MD=[[1,6],[1,20],[2,4],[2,19],[3,6],[3,21],[4,5],[4,20],[5,6],[5,21],[6,6],[6,21],
  [7,7],[7,23],[8,8],[8,23],[9,8],[9,23],[10,8],[10,23],[11,7],[11,22],[12,7],[12,22]];
function findSolarTermJD(year,termIndex){
  const targetLong=norm360((termIndex-5)*15);
  const [am,ad]=APPROX_MD[termIndex];
  let jd=dateToJD(new Date(Date.UTC(year,am-1,ad,0,0,0)));
  for(let i=0;i<10;i++){
    const curLong=apparentSolarLongitude(jd);
    let diff=targetLong-curLong;
    diff=((diff+180)%360+360)%360-180;
    if(Math.abs(diff)<1e-7)break;
    jd+=diff/0.9856;
  }
  return jd;
}
function getSolarTermDateUTC(year,termIndex){return jdToDate(findSolarTermJD(year,termIndex));}

// 12"节"（月柱分界）对应地支：立春->寅 惊蛰->卯 清明->辰 立夏->巳 芒种->午 小暑->未
// 立秋->申 白露->酉 寒露->戌 立冬->亥 大雪->子 小寒->丑
const JIE_IDX=[0,2,4,6,8,10,12,14,16,18,20,22];
const JIE_TO_DZ={2:2,4:3,6:4,8:5,10:6,12:7,14:8,16:9,18:10,20:11,22:0,0:1};
function getJieListAround(year){
  let list=[];
  [year-1,year,year+1].forEach(y=>{JIE_IDX.forEach(idx=>list.push({date:getSolarTermDateUTC(y,idx),dz:JIE_TO_DZ[idx]}));});
  list.sort((a,b)=>a.date-b.date);
  return list;
}
function getMonthJie(birthUTC,year){
  const list=getJieListAround(year);
  let cur=null;
  for(let i=0;i<list.length;i++){if(list[i].date<=birthUTC)cur=list[i];else break;}
  return cur;
}
function getLichunOf(year){return getSolarTermDateUTC(year,2);}

// ---- 真太阳时：经度校正 + 均时差 ----
function equationOfTimeMinutes(date){
  const start=Date.UTC(date.getUTCFullYear(),0,1);
  const N=Math.floor((date-start)/86400000)+1;
  const B=(2*Math.PI/365)*(N-81);
  return 9.87*Math.sin(2*B)-7.53*Math.cos(B)-1.5*Math.sin(B);
}
function trueSolarTime(y,m,d,h,mi,tzOffset,longitude){
  const stdUTC=Date.UTC(y,m-1,d,h,mi,0)-tzOffset*3600000;
  const stdDate=new Date(stdUTC);
  const eot=equationOfTimeMinutes(stdDate);
  const lonCorrection=4*(longitude-tzOffset*15);
  const deltaMinutes=lonCorrection+eot;
  return {date:new Date(stdUTC+deltaMinutes*60000),deltaMinutes,stdDate};
}

// ---- 日柱（儒略日模60法） ----
function toJD_civil(y,m,d){const a=Math.floor((14-m)/12),yr=y+4800-a,mo=m+12*a-3;return d+Math.floor((153*mo+2)/5)+365*yr+Math.floor(yr/4)-Math.floor(yr/100)+Math.floor(yr/400)-32045;}
const DAY_OFF=11;
function dayGZ(y,m,d){const n=((toJD_civil(y,m,d)-DAY_OFF)%60+60)%60;return{tg:n%10,dz:n%12};}

// ---- 藏干（本气/中气/余气及权重） ----
const CANGGAN={
  子:[['癸',1]],丑:[['己',.6],['癸',.2],['辛',.2]],寅:[['甲',.6],['丙',.3],['戊',.1]],卯:[['乙',1]],
  辰:[['戊',.6],['乙',.3],['癸',.1]],巳:[['丙',.6],['戊',.3],['庚',.1]],午:[['丁',.7],['己',.3]],
  未:[['己',.6],['丁',.3],['乙',.1]],申:[['庚',.6],['壬',.3],['戊',.1]],酉:[['辛',1]],
  戌:[['戊',.6],['辛',.3],['丁',.1]],亥:[['壬',.7],['甲',.3]]
};

// ---- 纳音（六十甲子） ----
const NAYIN=['海中金','炉中火','大林木','路旁土','剑锋金','山头火','涧下水','城头土','白蜡金','杨柳木',
  '泉中水','屋上土','霹雳火','松柏木','长流水','沙中金','山下火','平地木','壁上土','金箔金',
  '覆灯火','天河水','大驿土','钗钏金','桑柘木','大溪水','沙中土','天上火','石榴木','大海水'];
function getNayin(tgIdx,dzIdx){for(let n=0;n<60;n++){if(n%10===tgIdx&&n%12===dzIdx)return NAYIN[Math.floor(n/2)];}return '';}

// ---- 十神 ----
const SHENG={木:'火',火:'土',土:'金',金:'水',水:'木'}; // 我生
const KE={木:'土',土:'水',水:'火',火:'金',金:'木'};    // 我克
function isYang(i){return i%2===0;}
function getShiShen(dayTgIdx,targetTgIdx){
  const dayEl=TG_EL[dayTgIdx],tgtEl=TG_EL[targetTgIdx];
  const same=isYang(dayTgIdx)===isYang(targetTgIdx);
  if(tgtEl===dayEl)return same?'比肩':'劫财';
  if(SHENG[dayEl]===tgtEl)return same?'食神':'伤官';
  if(SHENG[tgtEl]===dayEl)return same?'偏印':'正印';
  if(KE[dayEl]===tgtEl)return same?'偏财':'正财';
  if(KE[tgtEl]===dayEl)return same?'七杀':'正官';
  return '';
}
function tgIdxByChar(c){return TG.indexOf(c);}

// ---- 十二长生 ----
const CS_ORDER=['长生','沐浴','冠带','临官','帝旺','衰','病','死','墓','绝','胎','养'];
const CS_START={0:{dz:11,dir:1},1:{dz:6,dir:-1},2:{dz:2,dir:1},3:{dz:9,dir:-1},4:{dz:2,dir:1},5:{dz:9,dir:-1},6:{dz:5,dir:1},7:{dz:0,dir:-1},8:{dz:8,dir:1},9:{dz:3,dir:-1}};
function getChangSheng(tgIdx,dzIdx){
  const {dz:sd,dir}=CS_START[tgIdx];
  const off=dir===1?((dzIdx-sd+12)%12):((sd-dzIdx+12)%12);
  return CS_ORDER[off];
}

// ---- 完整排盘核心函数 ----
function computeBaziEngine({y,m,d,h,mi=0,tzOffset=8,longitude=120}){
  const {date:trueDate,deltaMinutes,stdDate}=trueSolarTime(y,m,d,h,mi,tzOffset,longitude);
  const ty=trueDate.getUTCFullYear(),tm=trueDate.getUTCMonth()+1,td=trueDate.getUTCDate();
  const thH=trueDate.getUTCHours();

  // 年柱：以立春为界
  const lichun=getLichunOf(ty);
  let effYear=ty;
  if(trueDate<lichun)effYear=ty-1;
  const yearTG=((effYear-1984)%10+10)%10;
  const yearDZ=((effYear-1984)%12+12)%12;

  // 月柱：以12节为界
  const jie=getMonthJie(trueDate,ty);
  const monthDZ=jie.dz;
  const monthOrder=(monthDZ-2+12)%12; // 寅=0
  const monthTG=(MTG[yearTG]+monthOrder)%10;

  // 日柱：23点后进位次日（晚子时），时柱
  let dayY=ty,dayM=tm,dayD=td,hourDzIdx;
  if(thH>=23){
    const nd=new Date(Date.UTC(ty,tm-1,td+1));
    dayY=nd.getUTCFullYear();dayM=nd.getUTCMonth()+1;dayD=nd.getUTCDate();
    hourDzIdx=0;
  }else{
    hourDzIdx=Math.floor((thH+1)/2)%12;
  }
  const {tg:dayTG,dz:dayDZ}=dayGZ(dayY,dayM,dayD);
  const hourTG=(HTG[dayTG]+hourDzIdx)%10;

  const raw=[
    {label:'年柱',tgIdx:yearTG,dzIdx:yearDZ},
    {label:'月柱',tgIdx:monthTG,dzIdx:monthDZ},
    {label:'日柱',tgIdx:dayTG,dzIdx:dayDZ},
    {label:'时柱',tgIdx:hourTG,dzIdx:hourDzIdx},
  ];
  const pillars=raw.map((p,i)=>({
    ...p,t:TG[p.tgIdx],d:DZ[p.dzIdx],te:TG_EL[p.tgIdx],de:DZ_EL[p.dzIdx],
    nayin:getNayin(p.tgIdx,p.dzIdx),
    canggan:CANGGAN[DZ[p.dzIdx]],
    changsheng:getChangSheng(dayTG,p.dzIdx),
    shishen: i===2 ? '日主' : getShiShen(dayTG,p.tgIdx)
  }));
  pillars.forEach(p=>{p.cangganShishen=p.canggan.map(([ch,w])=>({gan:ch,weight:w,shishen:getShiShen(dayTG,tgIdxByChar(ch))}));});

  // ---- 五行加权旺衰（月支得令加成 + 藏干权重） ----
  const wx={水:0,木:0,火:0,金:0,土:0};
  pillars.forEach((p,i)=>{
    wx[p.te]+= (i===1?1.1:1.0);
    p.canggan.forEach(([ch,w])=>{
      const el=TG_EL[tgIdxByChar(ch)];
      wx[el]+=w*(i===1?1.5:1.0);
    });
  });
  const wxTotal=Object.values(wx).reduce((a,b)=>a+b,0)||1;
  const wxPct={};
  Object.keys(wx).forEach(k=>wxPct[k]=Math.round(wx[k]/wxTotal*1000)/10);

  // ---- 身强身弱（扶抑法） ----
  const dayMasterEl=TG_EL[dayTG];
  const genOf=Object.entries(SHENG).find(([k,v])=>v===dayMasterEl)[0]; // 生我者→印
  const iGen=SHENG[dayMasterEl];   // 我生者→食伤
  const iKe=KE[dayMasterEl];       // 我克者→财
  const keI=Object.entries(KE).find(([k,v])=>v===dayMasterEl)[0];      // 克我者→官杀
  const supportScore=wx[dayMasterEl]+wx[genOf];
  const drainScore=wx[iGen]+wx[iKe]+wx[keI];
  const strengthRatio=supportScore/(supportScore+drainScore);
  let bodyStrength;
  if(strengthRatio>=0.58)bodyStrength='身强';
  else if(strengthRatio<=0.42)bodyStrength='身弱';
  else bodyStrength='中和';

  // ---- 喜用神 / 忌神（扶抑法简化推定） ----
  let favorable,unfavorable;
  if(bodyStrength==='身强'){
    favorable=[iGen,iKe,keI].sort((a,b)=>wx[a]-wx[b]).slice(0,2);
    unfavorable=[dayMasterEl,genOf];
  }else if(bodyStrength==='身弱'){
    favorable=[genOf,dayMasterEl];
    unfavorable=[iGen,iKe,keI].sort((a,b)=>wx[b]-wx[a]).slice(0,2);
  }else{
    const sorted=Object.entries(wx).sort((a,b)=>a[1]-b[1]);
    favorable=sorted.slice(0,2).map(e=>e[0]);
    unfavorable=sorted.slice(-2).map(e=>e[0]);
  }

  return {
    input:{y,m,d,h,mi,tzOffset,longitude},
    trueSolar:{date:trueDate,deltaMinutes,stdDate},
    effYear,lichun,jieUsed:jie,
    pillars,dayTG,dayDZ,dayMasterEl,
    wx,wxPct,
    bodyStrength,strengthRatio:Math.round(strengthRatio*1000)/10,
    favorable,unfavorable
  };
}

// ════════════════════════════════════════
//  命盘分析升级 — 十神强弱 · 五行平衡建议 · 命局评分
// ════════════════════════════════════════
const TEN_GODS=['比肩','劫财','食神','伤官','正财','偏财','正官','七杀','正印','偏印'];
const TEN_GOD_DESC={
  比肩:'同类相伴，代表自我、平辈与朋友，象征独立自主、靠自己站稳脚跟的能力。',
  劫财:'看似分享实则争夺的能量，提醒你在财务与人际的边界上多一分清醒。',
  食神:'才华与享受的自然流露，代表创造力、口福与温和从容的表达欲。',
  伤官:'锋芒外露的表达欲，才华横溢但需要学会收敛，避免言语无意间伤人伤己。',
  正财:'稳定踏实的经营与积累能力，也代表对家庭与伴侣沉甸甸的责任感。',
  偏财:'灵活变通的财运，善于把握机会与人脉，象征额外的惊喜与流动的资源。',
  正官:'规则与责任感的化身，代表事业上按部就班的晋升与自律的定力。',
  七杀:'压力与挑战并存的能量，逼着你走出舒适区，成就非凡但也要提防冒进。',
  正印:'来自长辈或贵人的庇护与滋养，代表学识、名誉与内心深处的安全感。',
  偏印:'独特而深邃的智慧，敏锐直觉与钻研精神兼备，但也容易多思多虑。'
};

function computeTenGodScores(pillars){
  const scores={}; TEN_GODS.forEach(g=>scores[g]=0);
  pillars.forEach((p,i)=>{
    if(i!==2){ scores[p.shishen]+=(i===1?1.1:1.0); }
    p.cangganShishen.forEach(c=>{ scores[c.shishen]+=c.weight*(i===1?1.5:1.0); });
  });
  return scores;
}
function scoreToStars(score,total){
  const pct=total>0?score/total*100:0;
  return Math.max(1,Math.min(5,1+Math.floor(pct/8)));
}
function computeStabilityScore(wxPct){
  const vals=Object.values(wxPct);
  const mean=20;
  const variance=vals.reduce((s,v)=>s+Math.pow(v-mean,2),0)/vals.length;
  const std=Math.sqrt(variance);
  return Math.max(35,Math.min(96,Math.round(100-std*1.8)));
}
function computeLifeScores(tenGodScores,total,strengthRatio,wxPct){
  const wealth=scoreToStars(tenGodScores['正财']+tenGodScores['偏财'],total);
  const career=scoreToStars(tenGodScores['正官']+tenGodScores['七杀']+tenGodScores['食神']+tenGodScores['伤官'],total);
  const mentor=scoreToStars(tenGodScores['正印']+tenGodScores['偏印'],total);
  const stability=computeStabilityScore(wxPct);
  const health=Math.max(1,Math.min(5,Math.round(stability/20)));
  const loveSubA=scoreToStars(tenGodScores['正财']+tenGodScores['偏财']+tenGodScores['正官']+tenGodScores['七杀'],total);
  const loveSubB=Math.max(1,Math.min(5,5-Math.floor(Math.abs(strengthRatio-50)/12)));
  const love=Math.round((loveSubA+loveSubB)/2);
  return {事业:career,财富:wealth,爱情:love,健康:health,贵人:mentor};
}
function starsHtml(n){
  let s='';
  for(let i=1;i<=5;i++) s+= i<=n ? '★' : '<span class="dim">★</span>';
  return s;
}
function stabilityTagText(score){
  if(score>=80)return '根基稳固，命局五行流转顺畅，遇事更容易化险为夷。';
  if(score>=60)return '整体平稳，偶有起伏，是靠自己调节就能走顺的节奏。';
  return '五行偏枯，起伏会更明显一些，耐心和自我觉察是你的定海石。';
}

function computeChartAnalysis(engine){
  const tenGodScores=computeTenGodScores(engine.pillars);
  const total=Object.values(tenGodScores).reduce((a,b)=>a+b,0)||1;
  const stability=computeStabilityScore(engine.wxPct);
  const lifeScores=computeLifeScores(tenGodScores,total,engine.strengthRatio,engine.wxPct);
  return {tenGodScores,total,stability,lifeScores};
}

function renderChartAnalysis(engine,analysis){
  // 五行平衡建议
  const entries=Object.entries(engine.wxPct);
  const minEl=entries.reduce((a,b)=>a[1]<=b[1]?a:b);
  const maxEl=entries.reduce((a,b)=>a[1]>=b[1]?a:b);
  document.getElementById('wxAdvice').innerHTML=`
    <div class="wx-advice-row">${t('wx_min_label')}: <b>${minEl[0]}</b> (${minEl[1]}%)</div>
    <div class="wx-advice-row">${t('wx_max_label')}: <b>${maxEl[0]}</b> (${maxEl[1]}%)</div>
    <div class="wx-advice-row">${t('wx_advice_label')} <b>${engine.favorable.join('、')}</b> ${t('wx_advice_suffix')}</div>
  `;

  // 十神分析（按分数从高到低排序，展示全部十项）
  const sorted=TEN_GODS.map(g=>({name:g,score:analysis.tenGodScores[g]})).sort((a,b)=>b.score-a.score);
  const sl=document.getElementById('shishenList');sl.innerHTML='';
  sorted.forEach(item=>{
    const stars=scoreToStars(item.score,analysis.total);
    const row=document.createElement('div');row.className='shishen-row';
    row.innerHTML=`<div class="shishen-row-head"><div class="shishen-name">${item.name}</div><div style="display:flex;align-items:center"><div class="shishen-stars">${starsHtml(stars)}</div><div class="shishen-arrow">▾</div></div></div><div class="shishen-desc">${TEN_GOD_DESC[item.name]}</div>`;
    row.onclick=()=>row.classList.toggle('open');
    sl.appendChild(row);
  });

  // 命局评分
  document.getElementById('stabilityNum').innerHTML=`${analysis.stability}<span>/100</span>`;
  document.getElementById('stabilityTag').textContent=stabilityTagText(analysis.stability);
  const ls=document.getElementById('lifeScoreList');ls.innerHTML='';
  Object.entries(analysis.lifeScores).forEach(([name,stars])=>{
    const row=document.createElement('div');row.className='life-score-row';
    row.innerHTML=`<div class="life-score-name">${name}</div><div class="life-score-stars">${starsHtml(stars)}</div>`;
    ls.appendChild(row);
  });
}

const EL_INFO={
  '水':{key:'water',icon:'🌊',label:'水',name:'水',sub:'Water · 深邃流动，智慧内敛',
    animText:'🌊 壬癸水命 — 感知升腾',
    desc:'水命之人，心思细腻，智慧深邃。善于观察、洞悉人心，在静水深流中蓄积无尽力量。宜从事需要创意与洞察的领域，一旦方向确定，能以柔克刚，成就非凡。感情上细腻而内敛，需要给自己多一份敞开的勇气。'},
  '木':{key:'wood',icon:'🌿',label:'木',name:'木',sub:'Wood · 生机蓬勃，向阳而生',
    animText:'🌿 甲乙木命 — 生机萌动',
    desc:'木命之人，充满生机，进取心强。如春木般蓬勃向上，富有理想与仁心。善于规划、条理清晰，在团队中常扮演协调与推动的角色。感情真诚，重情义，但需注意不要过于固执己见。'},
  '火':{key:'fire',icon:'🔥',label:'火',name:'火',sub:'Fire · 热情似火，光耀四方',
    animText:'🔥 丙丁火命 — 烈焰升腾',
    desc:'火命之人，热情奔放，行动力极强。富有感染力与领导魅力，能在短时间内凝聚人心、激发行动。适合舞台、销售、创业等充满活力的领域。感情上炽热而投入，但需注意持久力与冷静判断。'},
  '金':{key:'metal',icon:'⚡',label:'金',name:'金',sub:'Metal · 刚毅果决，锋芒内蕴',
    animText:'⚡ 庚辛金命 — 金光乍现',
    desc:'金命之人，意志坚定，执行力强。做事雷厉风行，原则性强，不轻易妥协。适合需要严谨判断的领域，如法律、工程与金融。感情上忠诚而直接，但有时需要学习表达柔软的一面。'},
  '土':{key:'earth',icon:'🏔',label:'土',name:'土',sub:'Earth · 稳实厚重，守护根基',
    animText:'🏔 戊己土命 — 厚土承载',
    desc:'土命之人，踏实可靠，重情重义。如大地般厚重，是朋友与家人最坚实的依靠。在稳定的环境中能发挥最大潜力，适合管理、教育与服务行业。感情长久而忠实，是最值得信赖的伴侣。'}
};

const WX_COLORS={水:'#3A7BD5',木:'#3A8A55',火:'#D95A30',金:'#A0A8C0',土:'#C09050'};

// ════════════════════════════════════════
//  Harmony · 命局调和 — 幸运元素 & 调和文案
// ════════════════════════════════════════
const WUXING_LUCKY={
  水:{color:'藏青 · 墨黑 · 灰蓝',number:'1、6',direction:'北方',plant:'富贵竹 · 黑金刚菩提',scent:'雪松 · 乳香',metal:'银 · 铂金'},
  木:{color:'森绿 · 青碧',number:'3、8',direction:'东方',plant:'绿萝 · 薄荷',scent:'檀木 · 雪松',metal:'黄铜 · 原木镶银'},
  火:{color:'赤红 · 橙',number:'2、7',direction:'南方',plant:'红掌 · 太阳花',scent:'橙花 · 肉桂',metal:'红铜 · 玫瑰金'},
  土:{color:'土黄 · 驼色',number:'5、10',direction:'中央 · 西南',plant:'多肉 · 黄金葛',scent:'广藿香 · 檀香',metal:'黄金 · 陶瓷镶嵌'},
  金:{color:'银白 · 乳白',number:'4、9',direction:'西方',plant:'白掌 · 茉莉',scent:'白麝香 · 鼠尾草',metal:'白银 · 白金'}
};
const WX_LACK_REASON={
  水:'水主智慧与流动，缺水时容易思虑过度却难以沉淀，也容易在人际中过度紧绷。适度补水，能让你重新找回柔软应变的能力。',
  木:'木主生长与舒展，缺木时容易缺乏行动的初始动力，计划多但推进乏力。适度补木，能唤醒你向上生长的本能。',
  火:'火主热情与表达，缺火时容易显得内敛甚至疏离，难以被外界看见你的光芒。适度补火，能让你更敢于展现真实的自己。',
  土:'土主稳定与承载，缺土时容易根基不稳，情绪和生活节奏都容易被外界带偏。适度补土，能给你踏实落地的力量。',
  金:'金主决断与边界，缺金时容易优柔寡断，也容易在关系里没有原则地退让。适度补金，能让你的决定更干脆利落。'
};

// ════════════════════════════════════════
//  五行沉浸式主题系统
// ════════════════════════════════════════
const DAY_MASTER_KEYS=['jia','yi','bing','ding','wu','ji','geng','xin','ren','gui'];
const ELEMENT_CN_TO_EN={木:'wood',火:'fire',土:'earth',金:'metal',水:'water'};
const ELEMENT_EN_TO_CN={wood:'木',fire:'火',earth:'土',metal:'金',water:'水'};
const SCENE_TYPE_BY_DAY_MASTER={
  jia:'forest',yi:'vine',bing:'solar',ding:'candle',wu:'mountain',ji:'field',geng:'metalMountain',xin:'jadeMoon',ren:'ocean',gui:'rainLake'
};

const ELEMENTAL_THEMES={
  jia:{themeId:'forest_tree',dominantElement:'wood',accent:'#74B88A',accent2:'#2D6A45',glow:'rgba(116,184,138,0.36)',speed:'18s',
    gradient:'linear-gradient(180deg,#10231c 0%,#183729 42%,#0a1511 100%)',
    texture:'linear-gradient(90deg,rgba(167,120,76,.12) 1px,transparent 1px),radial-gradient(circle at 24% 20%,rgba(131,189,122,.2),transparent 28%)',
    vines:'linear-gradient(115deg,transparent 0 42%,rgba(126,184,137,.22) 43%,transparent 45%),linear-gradient(72deg,transparent 0 56%,rgba(90,138,95,.16) 57%,transparent 59%)',
    lines:'linear-gradient(90deg,rgba(119,92,62,.16) 1px,transparent 8px)',wave:'radial-gradient(ellipse at 50% 100%,rgba(30,80,48,.32),transparent 58%)',
    particles:'radial-gradient(circle,rgba(161,220,151,.32) 0 1px,transparent 2px)',particleSize:'170px 170px',
    sound:{loops:['/sounds/themes/jia/forest-wind.mp3','/sounds/themes/jia/leaves.mp3'],events:['/sounds/events/jia/leaf-rustle.mp3'],synth:'forest'}},
  yi:{themeId:'grass_vine',dominantElement:'wood',accent:'#8FD6A3',accent2:'#4B9E66',glow:'rgba(143,214,163,0.34)',speed:'14s',
    gradient:'linear-gradient(180deg,#13261d 0%,#234432 46%,#0d1713 100%)',
    texture:'radial-gradient(circle at 28% 18%,rgba(210,255,214,.18),transparent 4%),radial-gradient(circle at 68% 32%,rgba(235,255,232,.14),transparent 3%)',
    vines:'linear-gradient(128deg,transparent 0 48%,rgba(152,222,164,.28) 49%,transparent 51%),linear-gradient(38deg,transparent 0 58%,rgba(94,160,100,.2) 59%,transparent 61%)',
    lines:'radial-gradient(ellipse at 10% 80%,rgba(135,210,154,.18),transparent 42%)',wave:'radial-gradient(ellipse at 50% 100%,rgba(68,128,79,.22),transparent 58%)',
    particles:'radial-gradient(circle,rgba(218,255,223,.42) 0 1px,transparent 2px)',particleSize:'140px 150px',
    sound:{loops:['/sounds/themes/yi/grass.mp3','/sounds/themes/yi/dew.mp3'],events:['/sounds/events/yi/dew-drop.mp3','/sounds/events/yi/grass-touch.mp3'],synth:'vine'}},
  bing:{themeId:'solar_flame',dominantElement:'fire',accent:'#F2B45E',accent2:'#D85B2A',glow:'rgba(242,180,94,0.42)',speed:'12s',
    gradient:'linear-gradient(180deg,#3b170b 0%,#7a2d16 38%,#130807 100%)',
    texture:'radial-gradient(circle at 76% 18%,rgba(255,221,140,.48),transparent 26%),radial-gradient(circle at 48% 76%,rgba(255,95,38,.18),transparent 44%)',
    vines:'none',lines:'linear-gradient(115deg,transparent 0 50%,rgba(255,190,95,.18) 51%,transparent 53%)',
    wave:'radial-gradient(ellipse at 50% 100%,rgba(255,111,45,.2),transparent 62%)',particles:'radial-gradient(circle,rgba(255,201,113,.5) 0 1px,transparent 2px)',particleSize:'130px 130px',
    sound:{loops:['/sounds/themes/bing/fire.mp3','/sounds/themes/bing/warm-wind.mp3'],events:['/sounds/events/bing/spark.mp3'],synth:'flame'}},
  ding:{themeId:'candle_lantern',dominantElement:'fire',accent:'#E6A86F',accent2:'#A44A2C',glow:'rgba(230,168,111,0.38)',speed:'16s',
    gradient:'linear-gradient(180deg,#1d0d0a 0%,#4a2017 48%,#080405 100%)',
    texture:'radial-gradient(circle at 58% 32%,rgba(255,194,120,.34),transparent 19%),radial-gradient(ellipse at 50% 85%,rgba(120,46,24,.24),transparent 48%)',
    vines:'none',lines:'linear-gradient(90deg,transparent 0 48%,rgba(255,206,142,.14) 49%,transparent 51%)',
    wave:'radial-gradient(ellipse at 50% 92%,rgba(255,144,72,.16),transparent 55%)',particles:'radial-gradient(circle,rgba(255,190,120,.36) 0 1px,transparent 2px)',particleSize:'150px 160px',
    sound:{loops:['/sounds/themes/ding/candle.mp3','/sounds/themes/ding/incense.mp3'],events:['/sounds/events/ding/candle-jump.mp3'],synth:'candle'}},
  wu:{themeId:'mountain_earth',dominantElement:'earth',accent:'#C7A06B',accent2:'#7E6347',glow:'rgba(199,160,107,0.34)',speed:'22s',
    gradient:'linear-gradient(180deg,#1d1a16 0%,#4a3b2f 48%,#0c0a08 100%)',
    texture:'linear-gradient(145deg,transparent 0 45%,rgba(210,180,130,.14) 46%,transparent 48%),radial-gradient(ellipse at 50% 78%,rgba(98,78,60,.38),transparent 48%)',
    vines:'none',lines:'linear-gradient(160deg,transparent 0 52%,rgba(210,180,130,.2) 53%,transparent 55%)',
    wave:'radial-gradient(ellipse at 50% 100%,rgba(96,74,54,.42),transparent 60%)',particles:'radial-gradient(circle,rgba(215,185,140,.24) 0 1px,transparent 2px)',particleSize:'190px 190px',
    sound:{loops:['/sounds/themes/wu/valley-wind.mp3','/sounds/themes/wu/earth-low.mp3'],events:['/sounds/events/wu/distant-bell.mp3'],synth:'mountain'}},
  ji:{themeId:'garden_soil',dominantElement:'earth',accent:'#C8A873',accent2:'#8A7048',glow:'rgba(200,168,115,0.32)',speed:'20s',
    gradient:'linear-gradient(180deg,#1c1b12 0%,#4a4328 50%,#0d0c08 100%)',
    texture:'radial-gradient(circle at 32% 34%,rgba(191,161,94,.18),transparent 4%),linear-gradient(90deg,rgba(148,111,65,.12) 1px,transparent 1px)',
    vines:'linear-gradient(120deg,transparent 0 60%,rgba(154,165,82,.14) 61%,transparent 63%)',
    lines:'linear-gradient(0deg,transparent 0 48%,rgba(205,175,122,.14) 49%,transparent 51%)',wave:'radial-gradient(ellipse at 50% 100%,rgba(100,84,45,.28),transparent 58%)',
    particles:'radial-gradient(circle,rgba(223,198,142,.25) 0 1px,transparent 2px)',particleSize:'180px 150px',
    sound:{loops:['/sounds/themes/ji/field-wind.mp3','/sounds/themes/ji/soil-low.mp3'],events:['/sounds/events/ji/garden-rustle.mp3'],synth:'garden'}},
  geng:{themeId:'metal_mountain',dominantElement:'metal',accent:'#C5CCD6',accent2:'#727B88',glow:'rgba(197,204,214,0.34)',speed:'24s',
    gradient:'linear-gradient(180deg,#151a20 0%,#303743 48%,#07090d 100%)',
    texture:'linear-gradient(132deg,transparent 0 46%,rgba(220,230,245,.22) 47%,transparent 48%),radial-gradient(ellipse at 62% 72%,rgba(90,96,108,.36),transparent 45%)',
    vines:'none',lines:'linear-gradient(112deg,transparent 0 50%,rgba(225,232,240,.24) 51%,transparent 52%),linear-gradient(70deg,transparent 0 66%,rgba(150,160,170,.18) 67%,transparent 68%)',
    wave:'radial-gradient(ellipse at 50% 100%,rgba(70,78,92,.3),transparent 60%)',particles:'radial-gradient(circle,rgba(230,238,248,.28) 0 1px,transparent 2px)',particleSize:'170px 180px',
    sound:{loops:['/sounds/themes/geng/metal-resonance.mp3','/sounds/themes/geng/cold-chime.mp3'],events:['/sounds/events/geng/metal-hit.mp3'],synth:'metal'}},
  xin:{themeId:'jade_moon',dominantElement:'metal',accent:'#D9E2E4',accent2:'#8FA5A8',glow:'rgba(217,226,228,0.36)',speed:'19s',
    gradient:'linear-gradient(180deg,#101821 0%,#263844 45%,#070b10 100%)',
    texture:'radial-gradient(circle at 68% 22%,rgba(235,246,245,.42),transparent 22%),radial-gradient(circle at 35% 58%,rgba(170,225,210,.14),transparent 24%)',
    vines:'none',lines:'linear-gradient(105deg,transparent 0 48%,rgba(230,242,240,.22) 49%,transparent 50%),linear-gradient(150deg,transparent 0 62%,rgba(190,220,220,.16) 63%,transparent 64%)',
    wave:'radial-gradient(ellipse at 50% 100%,rgba(120,150,158,.2),transparent 58%)',particles:'radial-gradient(circle,rgba(242,252,250,.48) 0 1px,transparent 2px)',particleSize:'120px 140px',
    sound:{loops:['/sounds/themes/xin/jade.mp3','/sounds/themes/xin/silver-bell.mp3'],events:['/sounds/events/xin/jade-tap.mp3','/sounds/events/xin/tiny-bell.mp3'],synth:'jade'}},
  ren:{themeId:'ocean_tide',dominantElement:'water',accent:'#5FA8E8',accent2:'#17477A',glow:'rgba(95,168,232,0.38)',speed:'15s',
    gradient:'linear-gradient(180deg,#071321 0%,#0f3761 44%,#03101d 100%)',
    texture:'radial-gradient(ellipse at 50% 82%,rgba(72,150,220,.3),transparent 44%),linear-gradient(180deg,rgba(110,180,235,.12),transparent 38%)',
    vines:'none',lines:'linear-gradient(102deg,transparent 0 50%,rgba(130,190,240,.15) 51%,transparent 53%)',
    wave:'repeating-radial-gradient(ellipse at 50% 110%,rgba(122,190,240,.28) 0 2px,transparent 3px 28px)',particles:'radial-gradient(circle,rgba(130,200,255,.32) 0 1px,transparent 2px)',particleSize:'150px 150px',
    sound:{loops:['/sounds/themes/ren/ocean-tide.mp3','/sounds/themes/ren/deep-water.mp3'],events:['/sounds/events/ren/wave-hit.mp3'],synth:'ocean'}},
  gui:{themeId:'mist_lake',dominantElement:'water',accent:'#82B8E8',accent2:'#345F88',glow:'rgba(130,184,232,0.34)',speed:'20s',
    gradient:'linear-gradient(180deg,#08131d 0%,#16314b 48%,#050b12 100%)',
    texture:'radial-gradient(ellipse at 46% 72%,rgba(150,196,220,.24),transparent 42%),linear-gradient(180deg,rgba(210,230,240,.08),transparent 50%)',
    vines:'none',lines:'linear-gradient(90deg,transparent 0 50%,rgba(175,215,235,.12) 51%,transparent 52%)',
    wave:'repeating-radial-gradient(ellipse at 50% 95%,rgba(150,210,240,.2) 0 1px,transparent 2px 22px)',particles:'radial-gradient(circle,rgba(190,225,242,.36) 0 1px,transparent 2px)',particleSize:'150px 160px',
    sound:{loops:['/sounds/themes/gui/rain.mp3','/sounds/themes/gui/lake.mp3','/sounds/themes/gui/mist-low.mp3'],events:['/sounds/events/gui/water-drop.mp3'],synth:'lake'}}
};

const themeConfigCache={};
let chartEntered=false,currentElementalTheme=null,motionEnabled=true,elementalScene=null;
try{motionEnabled=localStorage.getItem('lx_motion')!=='reduced';}catch(e){}
document.body.classList.toggle('motion-reduced',!motionEnabled);

function fallbackThemeConfig(dayMaster){
  const base=ELEMENTAL_THEMES[dayMaster]||ELEMENTAL_THEMES.gui;
  const sceneType=SCENE_TYPE_BY_DAY_MASTER[dayMaster]||'rainLake';
  const motionByScene={
    forest:{speed:.75,particles:56,wind:.42,leafDensity:34,mist:.18,lowMotionParticles:16},
    vine:{speed:.68,particles:52,wind:.34,leafDensity:42,droplets:18,lowMotionParticles:14},
    solar:{speed:.82,particles:48,heat:.48,flame:.52,clouds:4,lowMotionParticles:12},
    candle:{speed:.58,particles:36,smoke:.46,flame:.34,lowMotionParticles:10},
    mountain:{speed:.42,particles:28,mist:.46,mountainLayers:5,birds:2,lowMotionParticles:8},
    field:{speed:.5,particles:34,fieldWaves:.5,smoke:.28,windmill:.18,lowMotionParticles:10},
    metalMountain:{speed:.62,particles:42,clouds:5,snow:.32,glints:.35,lowMotionParticles:12},
    jadeMoon:{speed:.48,particles:38,moonlight:.42,stream:.38,glints:.42,lowMotionParticles:10},
    ocean:{speed:.7,particles:42,waves:.68,clouds:4,tide:.5,lowMotionParticles:12},
    rainLake:{speed:.58,particles:64,rain:.62,ripples:.54,mist:.42,lowMotionParticles:18}
  };
  return {
    gan:dayMaster,
    themeId:base.themeId,
    sceneType,
    dominantElement:base.dominantElement,
    colors:{skyTop:'#08131d',skyMid:'#16314b',skyBottom:'#050b12',accent:base.accent,accent2:base.accent2,glow:base.glow},
    motion:motionByScene[sceneType]||motionByScene.rainLake,
    sound:{
      base:[{src:base.sound.loops?.[0]||'',volume:.06}],
      element:(base.sound.loops||[]).slice(1).map(src=>({src,volume:.06})),
      harmony:[],
      events:(base.sound.events||[]).map(src=>({src,volume:.07,minDelay:12,maxDelay:35})),
      synth:base.sound.synth
    }
  };
}

async function loadThemeConfig(dayMaster){
  if(themeConfigCache[dayMaster])return themeConfigCache[dayMaster];
  try{
    const res=await fetch(`themes/${dayMaster}.json`,{cache:'no-store'});
    if(!res.ok)throw new Error(String(res.status));
    themeConfigCache[dayMaster]=await res.json();
  }catch(e){
    console.warn('Theme config fallback used:',dayMaster,e.message||e);
    themeConfigCache[dayMaster]=fallbackThemeConfig(dayMaster);
  }
  return themeConfigCache[dayMaster];
}

function baziToThemeProfile(bazi){
  const elements={};
  Object.entries(ELEMENT_CN_TO_EN).forEach(([cn,en])=>{elements[en]=(bazi.wxPct?.[cn]||0)/100;});
  return {
    dayMaster:DAY_MASTER_KEYS[bazi.dayTG]||'gui',
    elements,
    timePhase:DN?.phase==='dawn'?'day':(DN?.phase||'night'),
    chartEntered:true
  };
}

function buildElementalTheme(profile){
  const base=ELEMENTAL_THEMES[profile.dayMaster]||ELEMENTAL_THEMES.gui;
  const cfg=profile.themeConfig||fallbackThemeConfig(profile.dayMaster);
  const entries=Object.entries(profile.elements||{});
  const weak=entries.reduce((a,b)=>a[1]<=b[1]?a:b,['water',0])[0];
  const strong=entries.reduce((a,b)=>a[1]>=b[1]?a:b,['water',0])[0];
  const dominantElement=cfg.dominantElement||base.dominantElement;
  const dominantPower=profile.elements?.[dominantElement]||0.2;
  const weakWarmth=weak==='fire'?'radial-gradient(circle at 82% 34%,rgba(236,168,94,.2),transparent 20%)':'none';
  const earthEdge=strong==='earth'?'radial-gradient(ellipse at 50% 100%,rgba(156,124,82,.32),transparent 42%)':'none';
  const metalSheen=strong==='metal'?'linear-gradient(118deg,transparent 0 56%,rgba(225,235,238,.2) 57%,transparent 58%)':'none';
  const c=cfg.colors||{};
  const gradient=`linear-gradient(180deg,${c.skyTop||'#08131d'} 0%,${c.skyMid||base.accent2} 48%,${c.skyBottom||'#050b12'} 100%)`;
  const cssVars={
    '--et-bg':gradient,
    '--et-gradient':gradient,
    '--et-accent':c.accent||base.accent,
    '--et-accent-soft':c.glow||base.glow,
    '--et-glow':c.glow||base.glow,
    '--et-speed':base.speed,
    '--et-texture':`${base.texture},${weakWarmth},${earthEdge},${metalSheen}`,
    '--et-texture-opacity':String(0.18+dominantPower*0.22),
    '--et-vines':base.vines,
    '--et-vine-opacity':String(dominantElement==='wood'?0.18+dominantPower*0.45:0.08),
    '--et-lines':base.lines,
    '--et-line-opacity':String(dominantElement==='metal'?0.22+dominantPower*0.38:0.13+(profile.elements?.metal||0)*0.26),
    '--et-wave':base.wave,
    '--et-wave-opacity':String(dominantElement==='water'?0.22+dominantPower*0.4:0.10+(profile.elements?.water||0)*0.22),
    '--et-particles':base.particles,
    '--et-particle-size':base.particleSize,
    '--et-particle-opacity':String(0.18+Math.max(profile.elements?.fire||0,profile.elements?.metal||0)*0.34),
    '--et-orb-x':weak==='fire'?'82%':base.dominantElement==='water'?'72%':'64%',
    '--et-orb-y':weak==='fire'?'34%':base.dominantElement==='fire'?'22%':'28%'
  };
  return {
    themeId:cfg.themeId||base.themeId,
    dominantElement,
    weakElement:weak,
    strongElement:strong,
    background:{gradient,texture:base.texture},
    decorations:[
      {type:dominantElement==='wood'?'vine':dominantElement==='water'?'wave':dominantElement==='fire'?'glow':dominantElement==='earth'?'terrain':'metalLine',strength:dominantPower},
      {type:`${weak}_balancer`,strength:profile.elements?.[weak]||0}
    ],
    motion:{...(cfg.motion||{}),float:dominantPower},
    soundscape:cfg.sound||base.sound,
    sceneConfig:cfg,
    cssVars
  };
}

function renderElementalTheme(theme){
  const root=document.documentElement;
  Object.entries(theme.cssVars).forEach(([k,v])=>root.style.setProperty(k,v));
  document.body.dataset.elementalTheme=theme.themeId;
  currentElementalTheme=theme;
}

class ElementalSceneRenderer{
  constructor(canvas){
    this.canvas=canvas;
    this.ctx=canvas.getContext('2d');
    this.items=[];
    this.ripples=[];
    this.theme=null;
    this.running=false;
    this.frame=0;
    this.last=0;
    this.resize=()=>this.setSize();
    window.addEventListener('resize',this.resize);
    this.setSize();
  }
  setSize(){
    const d=Math.min(devicePixelRatio||1,2);
    this.w=innerWidth;this.h=innerHeight;this.dpr=d;
    this.canvas.width=Math.floor(this.w*d);this.canvas.height=Math.floor(this.h*d);
    this.canvas.style.width=this.w+'px';this.canvas.style.height=this.h+'px';
    this.ctx.setTransform(d,0,0,d,0,0);
  }
  start(theme){
    this.theme=theme;
    this.seedItems();
    this.running=true;
    this.last=performance.now();
    requestAnimationFrame(t=>this.draw(t));
  }
  stop(){
    this.running=false;
    this.ctx.clearRect(0,0,this.w,this.h);
  }
  seedItems(){
    const m=this.theme.motion||{};
    const n=motionEnabled?(m.particles||40):(m.lowMotionParticles||10);
    this.items=[];
    for(let i=0;i<n;i++)this.items.push(this.makeItem(i));
    this.ripples=[];
  }
  makeItem(i){
    return {x:Math.random()*this.w,y:Math.random()*this.h,vx:(Math.random()-.5),vy:.2+Math.random(),r:1+Math.random()*3,a:.18+Math.random()*.5,ph:Math.random()*Math.PI*2,sp:.3+Math.random()*.8,i};
  }
  colors(){
    const c=this.theme.sceneConfig.colors;
    return {top:c.skyTop,mid:c.skyMid,bottom:c.skyBottom,accent:c.accent,accent2:c.accent2,glow:c.glow};
  }
  bg(c){
    const g=this.ctx.createLinearGradient(0,0,0,this.h);
    g.addColorStop(0,c.top);g.addColorStop(.52,c.mid);g.addColorStop(1,c.bottom);
    this.ctx.fillStyle=g;this.ctx.fillRect(0,0,this.w,this.h);
  }
  draw(t){
    if(!this.running)return;
    const dt=Math.min(40,t-this.last);this.last=t;
    const c=this.colors(),ctx=this.ctx,scene=this.theme.sceneConfig.sceneType;
    this.bg(c);
    if(scene==='forest')this.drawForest(ctx,t,dt,c);
    else if(scene==='vine')this.drawVine(ctx,t,dt,c);
    else if(scene==='solar')this.drawSolar(ctx,t,dt,c);
    else if(scene==='candle')this.drawCandle(ctx,t,dt,c);
    else if(scene==='mountain')this.drawMountain(ctx,t,dt,c);
    else if(scene==='field')this.drawField(ctx,t,dt,c);
    else if(scene==='metalMountain')this.drawMetalMountain(ctx,t,dt,c);
    else if(scene==='jadeMoon')this.drawJadeMoon(ctx,t,dt,c);
    else if(scene==='ocean')this.drawOcean(ctx,t,dt,c);
    else this.drawRainLake(ctx,t,dt,c);
    this.frame=requestAnimationFrame(tt=>this.draw(tt));
  }
  softOrb(ctx,x,y,r,color,a){
    const g=ctx.createRadialGradient(x,y,0,x,y,r);
    g.addColorStop(0,color.replace('0.34',a).replace('0.38',a).replace('0.42',a).replace('0.32',a));
    g.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
  }
  drawLeaves(ctx,t,c,scale=1){
    const wind=(this.theme.motion.wind||.3)*scale;
    this.items.forEach(p=>{
      p.x+=Math.sin(t*.00035+p.ph)*wind*.35;
      p.y+=Math.cos(t*.0002+p.ph)*.04;
      if(p.x<-20)p.x=this.w+20;if(p.x>this.w+20)p.x=-20;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(Math.sin(t*.001+p.ph)*.3);
      ctx.fillStyle=`rgba(160,220,150,${p.a*.38})`;
      ctx.beginPath();ctx.ellipse(0,0,3*scale,9*scale,0,0,Math.PI*2);ctx.fill();
      ctx.restore();
    });
  }
  drawForest(ctx,t,dt,c){
    this.softOrb(ctx,this.w*.66,this.h*.2,this.w*.34,c.glow,.28);
    for(let i=0;i<9;i++){
      const x=i*this.w/8+Math.sin(t*.0002+i)*12;
      ctx.fillStyle=`rgba(31,24,18,${.28+i*.015})`;
      ctx.fillRect(x-8,this.h*.18,16,this.h*.82);
      ctx.fillStyle=`rgba(74,130,80,${.16+i*.02})`;
      ctx.beginPath();ctx.ellipse(x,this.h*.22,90,130,Math.sin(i),0,Math.PI*2);ctx.fill();
    }
    for(let i=0;i<5;i++){
      ctx.strokeStyle=`rgba(255,230,160,${.035+i*.01})`;ctx.lineWidth=28+i*10;
      ctx.beginPath();ctx.moveTo(this.w*(.45+i*.08),0);ctx.lineTo(this.w*(.22+i*.11),this.h);ctx.stroke();
    }
    this.drawLeaves(ctx,t,c,1);
  }
  drawVine(ctx,t,dt,c){
    this.drawLeaves(ctx,t,c,.75);
    ctx.strokeStyle='rgba(125,210,145,.22)';ctx.lineWidth=2;
    for(let i=0;i<7;i++){
      ctx.beginPath();
      for(let y=-40;y<this.h+40;y+=24){
        const x=this.w*(i/6)+Math.sin(y*.012+t*.00045+i)*28;
        y===-40?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    this.items.slice(0,12).forEach(p=>{
      p.y+=.55+(this.theme.motion.speed||.6)*.3;if(p.y>this.h*.78){this.ripples.push({x:p.x,y:p.y,r:1,a:.5});p.y=-20;p.x=Math.random()*this.w;}
      ctx.fillStyle=`rgba(220,255,230,${p.a*.5})`;ctx.beginPath();ctx.arc(p.x,p.y,1.4,0,Math.PI*2);ctx.fill();
    });
    this.drawRipples(ctx,'rgba(195,255,220,');
  }
  drawSolar(ctx,t,dt,c){
    this.softOrb(ctx,this.w*.72,this.h*.24,this.w*.38,c.glow,.42);
    for(let i=0;i<5;i++){ctx.fillStyle=`rgba(255,190,100,${.035+i*.018})`;ctx.beginPath();ctx.ellipse(this.w*(.2+i*.18+Math.sin(t*.0001+i)*.02),this.h*(.18+i*.04),170,38,0,0,Math.PI*2);ctx.fill();}
    this.drawFlames(ctx,t,this.w*.54,this.h*.78,90,c);
    this.items.forEach(p=>{p.y-=.28+p.sp*.18;if(p.y<0){p.y=this.h;p.x=Math.random()*this.w;}ctx.fillStyle=`rgba(255,204,120,${p.a*.45})`;ctx.beginPath();ctx.arc(p.x,p.y,p.r*.7,0,Math.PI*2);ctx.fill();});
  }
  drawCandle(ctx,t,dt,c){
    this.softOrb(ctx,this.w*.5,this.h*.48,this.w*.36,c.glow,.34);
    this.drawFlames(ctx,t,this.w*.5,this.h*.55,56,c);
    for(let i=0;i<8;i++){const y=this.h*.55-i*52-(t*.018+i*30)%52;ctx.strokeStyle=`rgba(230,210,190,${.06-i*.004})`;ctx.lineWidth=18-i;ctx.beginPath();ctx.moveTo(this.w*.5+Math.sin(t*.0008+i)*18,y);ctx.bezierCurveTo(this.w*.45,y-38,this.w*.55,y-70,this.w*.5,y-110);ctx.stroke();}
  }
  drawFlames(ctx,t,x,y,s,c){
    for(let i=0;i<4;i++){const flick=Math.sin(t*.004+i)*s*.1;ctx.fillStyle=i?`rgba(255,120,50,${.12/i})`:'rgba(255,220,135,.5)';ctx.beginPath();ctx.moveTo(x,y-s-flick);ctx.quadraticCurveTo(x+s*.45,y-s*.15,x,y+s*.15);ctx.quadraticCurveTo(x-s*.42,y-s*.18,x,y-s-flick);ctx.fill();}
  }
  drawMountainBase(ctx,t,c,metal=false){
    const layers=this.theme.motion.mountainLayers||5;
    for(let l=0;l<layers;l++){
      const y=this.h*(.42+l*.11),amp=this.h*(.16-l*.018);
      ctx.fillStyle=metal?`rgba(150,165,178,${.13+l*.08})`:`rgba(120,92,64,${.14+l*.08})`;
      ctx.beginPath();ctx.moveTo(0,this.h);
      for(let x=0;x<=this.w+80;x+=80){ctx.lineTo(x,y-Math.sin(x*.008+l)*amp*(.35+Math.sin(x*.002+l)*.25));}
      ctx.lineTo(this.w,this.h);ctx.closePath();ctx.fill();
    }
  }
  drawMountain(ctx,t,dt,c){
    this.drawMountainBase(ctx,t,c,false);
    for(let i=0;i<5;i++){ctx.fillStyle=`rgba(210,220,210,${.06+i*.012})`;ctx.beginPath();ctx.ellipse((t*.01+i*this.w*.25)%(this.w+200)-100,this.h*(.28+i*.08),180,28,0,0,Math.PI*2);ctx.fill();}
    this.drawTinyBirds(ctx,t,.16);
  }
  drawField(ctx,t,dt,c){
    for(let y=this.h*.55;y<this.h;y+=18){ctx.strokeStyle=`rgba(190,170,95,${.08+(y/this.h)*.18})`;ctx.lineWidth=10;ctx.beginPath();for(let x=0;x<this.w;x+=24){const yy=y+Math.sin(x*.025+t*.001)*8; x?ctx.lineTo(x,yy):ctx.moveTo(x,yy);}ctx.stroke();}
    for(let i=0;i<4;i++){ctx.strokeStyle=`rgba(220,210,180,${.05+i*.015})`;ctx.lineWidth=14-i*2;ctx.beginPath();const x=this.w*(.18+i*.2);ctx.moveTo(x,this.h*.65);ctx.bezierCurveTo(x-40,this.h*.45,x+35,this.h*.35,x,this.h*.2);ctx.stroke();}
    this.drawWindmill(ctx,t,this.w*.82,this.h*.48);
  }
  drawWindmill(ctx,t,x,y){
    ctx.strokeStyle='rgba(230,220,190,.18)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-18,y+88);ctx.moveTo(x,y);ctx.lineTo(x+18,y+88);ctx.stroke();
    ctx.save();ctx.translate(x,y);ctx.rotate(t*.00025);for(let i=0;i<4;i++){ctx.rotate(Math.PI/2);ctx.fillStyle='rgba(230,220,190,.12)';ctx.fillRect(0,-3,48,6);}ctx.restore();
  }
  drawMetalMountain(ctx,t,dt,c){
    this.drawMountainBase(ctx,t,c,true);
    for(let i=0;i<6;i++){ctx.fillStyle=`rgba(210,225,240,${.04+i*.01})`;ctx.beginPath();ctx.ellipse((t*.026+i*this.w*.22)%(this.w+220)-110,this.h*(.18+i*.045),160,22,0,0,Math.PI*2);ctx.fill();}
    this.items.forEach(p=>{p.y+=.22+p.sp*.12;if(p.y>this.h){p.y=-10;p.x=Math.random()*this.w;}ctx.fillStyle=`rgba(230,240,255,${p.a*.35})`;ctx.fillRect(p.x,p.y,1.2,3.5);});
    this.drawGlints(ctx,t,c);
  }
  drawJadeMoon(ctx,t,dt,c){
    this.softOrb(ctx,this.w*.68,this.h*.22,this.w*.25,c.glow,.34);
    this.drawMountainBase(ctx,t,c,true);
    ctx.strokeStyle='rgba(185,235,230,.2)';ctx.lineWidth=18;ctx.beginPath();for(let x=0;x<this.w;x+=24){const y=this.h*.72+Math.sin(x*.018+t*.001)*10; x?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();
    this.drawGlints(ctx,t,c);
  }
  drawOcean(ctx,t,dt,c){
    for(let i=0;i<8;i++){const y=this.h*(.52+i*.065)+Math.sin(t*.0007+i)*8;ctx.strokeStyle=`rgba(120,190,240,${.08+i*.018})`;ctx.lineWidth=14+i*2;ctx.beginPath();for(let x=-40;x<this.w+40;x+=30){const yy=y+Math.sin(x*.018+t*.0012+i)*10; x>-40?ctx.lineTo(x,yy):ctx.moveTo(x,yy);}ctx.stroke();}
    for(let i=0;i<4;i++){ctx.fillStyle=`rgba(185,210,230,${.035+i*.01})`;ctx.beginPath();ctx.ellipse((t*.018+i*this.w*.3)%(this.w+220)-110,this.h*(.16+i*.06),170,26,0,0,Math.PI*2);ctx.fill();}
  }
  drawRainLake(ctx,t,dt,c){
    this.items.forEach(p=>{
      p.y+=2.2+(this.theme.motion.rain||.5)*2;p.x+=Math.sin(t*.0004+p.ph)*.25;
      if(p.y>this.h*.82){this.ripples.push({x:p.x,y:this.h*.78+Math.random()*30,r:1,a:.45});p.y=-20;p.x=Math.random()*this.w;}
      ctx.strokeStyle=`rgba(185,220,240,${p.a*.42})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-4,p.y+18);ctx.stroke();
    });
    this.drawRipples(ctx,'rgba(170,220,245,');
    for(let i=0;i<4;i++){ctx.fillStyle=`rgba(200,220,230,${.05+i*.012})`;ctx.beginPath();ctx.ellipse((t*.009+i*this.w*.28)%(this.w+220)-110,this.h*(.28+i*.08),190,32,0,0,Math.PI*2);ctx.fill();}
  }
  drawRipples(ctx,prefix){
    this.ripples=this.ripples.filter(r=>{r.r+=.7;r.a*=.965;ctx.strokeStyle=`${prefix}${r.a})`;ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(r.x,r.y,r.r*2.4,r.r*.72,0,0,Math.PI*2);ctx.stroke();return r.a>.03&&r.r<120;});
  }
  drawGlints(ctx,t,c){
    this.items.slice(0,16).forEach(p=>{const a=(Math.sin(t*.002+p.ph)+1)/2*p.a*.45;ctx.strokeStyle=`rgba(235,245,245,${a})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x-8,p.y);ctx.lineTo(p.x+8,p.y);ctx.moveTo(p.x,p.y-8);ctx.lineTo(p.x,p.y+8);ctx.stroke();});
  }
  drawTinyBirds(ctx,t,a){
    for(let i=0;i<(this.theme.motion.birds||0);i++){const x=(t*.018+i*this.w*.48)%(this.w+120)-60,y=this.h*(.22+i*.08)+Math.sin(t*.001+i)*8;ctx.strokeStyle=`rgba(230,220,200,${a})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+8,y-5,x+16,y);ctx.moveTo(x,y);ctx.quadraticCurveTo(x-8,y-5,x-16,y);ctx.stroke();}
  }
}

function getElementalScene(){
  if(!elementalScene)elementalScene=new ElementalSceneRenderer(document.getElementById('elemental-canvas'));
  return elementalScene;
}

function toggleMotion(){
  motionEnabled=!motionEnabled;
  try{localStorage.setItem('lx_motion',motionEnabled?'full':'reduced');}catch(e){}
  document.body.classList.toggle('motion-reduced',!motionEnabled);
  const btn=document.getElementById('motion-toggle');
  if(btn){btn.textContent=motionEnabled?'〰':'—';btn.classList.toggle('reduced',!motionEnabled);}
  if(chartEntered&&currentElementalTheme)getElementalScene().start(currentElementalTheme);
}

function setChartEntered(next){
  chartEntered=next;
  document.body.classList.toggle('chart-entered',next);
  document.body.classList.toggle('pre-chart',!next);
  if(!next){
    currentElementalTheme=null;
    document.body.removeAttribute('data-elemental-theme');
    if(elementalScene)elementalScene.stop();
    playDayNightAmbient();
  }
}

async function enterChartTheme(bazi){
  const profile=baziToThemeProfile(bazi);
  profile.themeConfig=await loadThemeConfig(profile.dayMaster);
  const theme=buildElementalTheme(profile);
  renderElementalTheme(theme);
  setChartEntered(true);
  getElementalScene().start(theme);
  playElementalSoundscape(bazi);
}

let currentBazi=null;

function calcBazi(){
  const y=parseInt(document.getElementById('byear').value)||1990;
  const m=parseInt(document.getElementById('bmonth').value)||6;
  const d=parseInt(document.getElementById('bday').value)||15;
  const h=parseInt(document.getElementById('bhour').value)||10;
  const mi=parseInt(document.getElementById('bmin').value)||0;
  const tzOffset=parseFloat(document.getElementById('btz').value);
  const tz=isNaN(tzOffset)?8:tzOffset;
  const lngRaw=document.getElementById('blng').value;
  const longitude=lngRaw===''?tz*15:parseFloat(lngRaw); // 未填经度时按时区中央经线处理（不做真太阳时校正）

  const engine=computeBaziEngine({y,m,d,h,mi,tzOffset:tz,longitude});
  const pillars=engine.pillars;
  const dayTG=engine.dayTG;
  const dayMasterEl=engine.dayMasterEl;
  const wx=engine.wx;
  const info=EL_INFO[dayMasterEl];

  currentBazi={y,m,d,h,mi,tzOffset:tz,longitude,pillars,wx,wxPct:engine.wxPct,dayTG,dayMasterEl,info,
    bodyStrength:engine.bodyStrength,strengthRatio:engine.strengthRatio,
    favorable:engine.favorable,unfavorable:engine.unfavorable,
    trueSolar:engine.trueSolar,effYear:engine.effYear};

  document.getElementById('rGlyph').textContent=info.icon;
  document.getElementById('rGlyph').style.filter=`drop-shadow(0 0 24px ${WX_COLORS[dayMasterEl]})`;
  document.getElementById('rName').textContent=TG[dayTG]+'·'+info.name+'命';
  document.getElementById('rSub').textContent=info.sub;

  const pc=document.getElementById('rPillars');pc.innerHTML='';
  pillars.forEach((p,i)=>{
    const el=document.createElement('div');el.className='pillar'+(i===2?' highlight':'');
    el.innerHTML=`<div class="pillar-label">${p.label}</div><div class="pillar-tian" style="color:${i===2?WX_COLORS[dayMasterEl]:'rgba(232,233,242,0.85)'}">${p.t}</div><div class="pillar-di">${p.d}</div><div class="pillar-shishen">${p.shishen}</div><div class="pillar-nayin">${p.nayin}</div>`;
    pc.appendChild(el);
  });

  const wb=document.getElementById('wxBars');wb.innerHTML='';
  Object.entries(engine.wxPct).forEach(([k,pct])=>{
    const row=document.createElement('div');row.className='wx-row';
    row.innerHTML=`<div class="wx-name">${k}</div><div class="wx-track"><div class="wx-fill" style="background:${WX_COLORS[k]}" data-w="${pct}%"></div></div><div class="wx-pct">${pct}%</div>`;
    wb.appendChild(row);
  });

  document.getElementById('fateText').textContent=info.desc;
  const fc=document.getElementById('fateCard');fc.classList.add('themed');
  const fm=document.getElementById('fateMeta');
  fm.innerHTML=`
    <span class="fate-meta-chip">日主 ${TG[dayTG]}（${dayMasterEl}）</span>
    <span class="fate-meta-chip">命局 ${engine.bodyStrength} · ${engine.strengthRatio}%</span>
    <span class="fate-meta-chip">喜用神 ${engine.favorable.join('·')}</span>
    <span class="fate-meta-chip">忌神 ${engine.unfavorable.join('·')}</span>
  `;

  const analysis=computeChartAnalysis(engine);
  renderChartAnalysis(engine,analysis);
  currentBazi.analysis=analysis;

  applyElementTheme(info.key,info.animText);

  // Launch Universe Forming → Guardian → Result
  launchUniverseForming(currentBazi, ()=>{
    showGuardianScene(currentBazi, async ()=>{
      await enterChartTheme(currentBazi);
      goto('result');
      setTimeout(()=>{document.querySelectorAll('.wx-fill').forEach(f=>{f.style.width=f.dataset.w;});},400);
    });
  });
}

// ════════════════════════════════════════
//  API — 调用自己的后端中转接口 /api/ai（Vercel Serverless Function）。
//  密钥保存在服务器环境变量里，前端完全不接触 Key，也没有 CORS 问题。
// ════════════════════════════════════════
function ensureAiApiAvailable(){
  if(location.protocol==='file:'){
    throw new Error('当前是本地文件预览（file://），没有后端 /api/ai。请用 Vercel 线上地址，或通过本地 HTTP 服务运行项目。');
  }
}

async function callClaude(prompt){
  ensureAiApiAvailable();
  let res;
  try{
    res=await fetch('/api/ai',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({prompt})
    });
  }catch(e){
    throw new Error('无法连接 AI 接口 /api/ai。请确认项目已部署到 Vercel，且环境变量 SILICONFLOW_API_KEY 已配置。');
  }
  const data=await res.json().catch(()=>({}));
  if(!res.ok){
    if(res.status===404)throw new Error('AI 接口尚未部署 — 请先将项目部署到 Vercel，并在环境变量中配置 SILICONFLOW_API_KEY');
    throw new Error(data.error||('API 错误 '+res.status));
  }
  return data.text||'';
}

async function callClaudeChat(messages){
  ensureAiApiAvailable();
  let res;
  try{
    res=await fetch('/api/ai',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({messages})
    });
  }catch(e){
    throw new Error('无法连接 AI 接口 /api/ai。请确认项目已部署到 Vercel，且环境变量 SILICONFLOW_API_KEY 已配置。');
  }
  const data=await res.json().catch(()=>({}));
  if(!res.ok){
    if(res.status===404)throw new Error('AI 接口尚未部署 — 请先将项目部署到 Vercel，并在环境变量中配置 SILICONFLOW_API_KEY');
    throw new Error(data.error||('API 错误 '+res.status));
  }
  return data.text||'';
}

// ════════════════════════════════════════
//  AI 解读页
// ════════════════════════════════════════
let currentMode='life';
let readingCache={};

const MODE_LIST=[
  {id:'life',label:'一生概览'},
  {id:'now',label:'当下指引'},
  {id:'shadow',label:'暗面疗愈'},
  {id:'career',label:'事业分析'},
  {id:'wealth',label:'财富分析'},
  {id:'love',label:'感情分析'},
  {id:'marriage',label:'婚姻分析'},
  {id:'health',label:'健康建议'},
  {id:'talent',label:'天赋分析'},
  {id:'career_fit',label:'适合职业'},
  {id:'growth',label:'成长建议'},
  {id:'future',label:'未来运势'}
];

function initReadingPage(){
  if(!currentBazi)return;
  const info=currentBazi.info;
  document.getElementById('readingIcon').textContent=info.icon;
  document.getElementById('readingIcon').style.filter=`drop-shadow(0 0 16px ${WX_COLORS[currentBazi.dayMasterEl]})`;
  document.getElementById('readingTitle').textContent=TG[currentBazi.dayTG]+'·'+info.name+'命 · 命局解读';

  const tabsEl=document.getElementById('modeTabs');
  tabsEl.innerHTML=MODE_LIST.map(m=>`<div class="mode-tab" onclick="switchMode('${m.id}')" id="tab-${m.id}">${t('mode_'+m.id)}</div>`).join('');

  readingCache={};
  currentMode='life';
  updateTabUI('life');
  loadReading('life');
}

function switchMode(mode){
  if(currentMode===mode)return;
  currentMode=mode;
  updateTabUI(mode);
  if(readingCache[mode]){renderModeResult(mode,readingCache[mode]);}else{loadReading(mode);}
}

function updateTabUI(mode){
  document.querySelectorAll('.mode-tab').forEach(el=>el.classList.remove('active'));
  document.getElementById('tab-'+mode)?.classList.add('active');
  document.getElementById('readingSub').textContent=t('mode_'+mode)+t('reading_sub_suffix');
}

function baziSummary(b){
  const pStr=b.pillars.map(p=>`${p.t}${p.d}(纳音${p.nayin}${p.shishen!=='日主'?'·十神'+p.shishen:''})`).join(' ');
  let extra='';
  if(b.analysis){
    const topGods=Object.entries(b.analysis.tenGodScores).sort((a,b2)=>b2[1]-a[1]).slice(0,2).map(e=>e[0]).join('、');
    const ls=b.analysis.lifeScores;
    extra=`；命局稳定度${b.analysis.stability}/100；十神中${topGods}最突出；五维评分（事业${ls.事业}财富${ls.财富}爱情${ls.爱情}健康${ls.健康}贵人${ls.贵人}，满分5）`;
  }
  return `四柱：${pStr}；日主${TG[b.dayTG]}（${b.dayMasterEl}）；命局判定为「${b.bodyStrength}」（力量占比${b.strengthRatio}%）；喜用神：${b.favorable.join('、')}；忌神：${b.unfavorable.join('、')}${extra}`;
}

// 通用模板：给一个"人设+主题+分段结构"，自动拼出标准格式的prompt（钩子+2-3段+饰品植入+金句）
function buildPrompt(b,{persona,theme,sections,quoteLabel,wordLimit,hookLen,hookHint}){
  const jList=BAZI_JEWELRY[b.dayMasterEl];
  const jNames=jList.map(i=>i.name).join('、');
  const sectionText=sections.map((s,i)=>{
    const jewelNote=i===sections.length-1?`，结尾自然带出一件契合能量的饰品建议——从以下选项中选一件最贴切的，原样使用饰品名称（不要改写、不要加书名号）：${jNames}。用带一点悬念的语气引导ta想进一步了解，不要说教或强行推销`:'';
    return `【${s.title}】${s.desc}${jewelNote}`;
  }).join('\n');
  return `${persona}

用户命盘：${baziSummary(b)}

请给出"${theme}"解读，用第二人称"你"：

先独立一行给出一句抓人眼球、制造悬念的"引子"（不加标题符号，${hookLen}字以内，${hookHint}）。

${sectionText}

给一句"${quoteLabel}"，用书名号《》括起。
全文${wordLimit}字以内，用中文。${t('ai_lang_instruction')}`;
}

const MODE_PROMPTS={
  life:(b)=>buildPrompt(b,{
    persona:'你是一位温暖疗愈、洞见深邃的命理师，风格如同"灵魂的老朋友"——一针见血但有温度，不说教，不迷信，以心理学与命理学的融合视角解读，尤其擅长用一句"钩子"开场瞬间抓住人的好奇心。',
    theme:'一生概览',hookLen:20,hookHint:'比如点出一个ta自己可能都没意识到的特质或矛盾',quoteLabel:'灵魂金句',wordLimit:320,
    sections:[
      {title:'命运底色',desc:'天生的性格底色与生命课题，2-3句话'},
      {title:'人生高光',desc:'什么阶段/领域最容易绽放，2-3句话'},
      {title:'内在功课',desc:'一生需要学习与疗愈的深层课题，2-3句话'}
    ]
  }),
  now:(b)=>buildPrompt(b,{
    persona:'你是一位温暖疗愈的命理师，洞见深邃，如同灵魂的老朋友，擅长用一句钩子瞬间抓住人心。现在是'+new Date().getFullYear()+'年。',
    theme:'当下指引',hookLen:18,hookHint:'暗示当下有什么ta还没察觉的变化',quoteLabel:'当下金句',wordLimit:220,
    sections:[
      {title:'此刻能量',desc:'当下的命局流转给这个人带来什么能量或挑战'},
      {title:'一件事',desc:'此刻最该做的一件事，非常具体'},
      {title:'一个警示',desc:'此刻最该避开的一种模式或行为'}
    ]
  }),
  shadow:(b)=>buildPrompt(b,{
    persona:'你是一位有疗愈能量的命理师，帮助人看见并接纳自己的"暗面"——那些被压抑的、未被允许存在的部分，擅长用一句钩子瞬间戳中人心。',
    theme:'暗面疗愈',hookLen:18,hookHint:'直指一个ta习惯性隐藏的情绪模式',quoteLabel:'疗愈金句',wordLimit:270,
    sections:[
      {title:'你的暗面',desc:'这个命局的人容易压抑或逃避的情绪/模式'},
      {title:'它在保护你',desc:'这个暗面其实在保护什么（正向视角重构）'},
      {title:'疗愈之道',desc:'一个具体而温柔的自我疗愈建议'}
    ]
  }),
  career:(b)=>buildPrompt(b,{
    persona:'你是一位深谙职场与命理的顾问，擅长把八字里的十神信息转译成具体的事业建议，一针见血且实用。',
    theme:'事业分析',hookLen:18,hookHint:'点出ta事业上一个容易被忽视的模式',quoteLabel:'事业金句',wordLimit:280,
    sections:[
      {title:'事业底色',desc:'这个命局的人在事业上天生的驱动力与风格，2-3句话'},
      {title:'机遇窗口',desc:'什么样的机会/领域最容易被ta抓住并做出成绩'},
      {title:'行动建议',desc:'现阶段最该调整或加强的一件具体的事'}
    ]
  }),
  wealth:(b)=>buildPrompt(b,{
    persona:'你是一位洞察财富流动规律的命理顾问，不谈玄乎的发财捷径，只谈踏实可行的财富心态与方法。',
    theme:'财富分析',hookLen:18,hookHint:'点出ta和钱的关系里一个矛盾之处',quoteLabel:'财富金句',wordLimit:260,
    sections:[
      {title:'财富性格',desc:'这个命局的人天生的赚钱/花钱风格，2-3句话'},
      {title:'进财方式',desc:'适合ta的财富积累路径（正财稳健型还是偏财机会型）'},
      {title:'提醒',desc:'财务上最容易踩的一个坑，以及如何避免'}
    ]
  }),
  love:(b)=>buildPrompt(b,{
    persona:'你是一位温柔又直接的情感命理顾问，帮人看清自己在亲密关系里的真实模式，不灌鸡汤。',
    theme:'感情分析',hookLen:18,hookHint:'点出ta在感情里一个自己可能没意识到的惯性',quoteLabel:'感情金句',wordLimit:270,
    sections:[
      {title:'感情模式',desc:'这个命局的人在恋爱中典型的相处风格与吸引力，2-3句话'},
      {title:'吸引力课题',desc:'ta容易被什么样的人吸引，以及背后需要留意的功课'},
      {title:'建议',desc:'让感情更长久健康的一个具体建议'}
    ]
  }),
  marriage:(b)=>buildPrompt(b,{
    persona:'你是一位懂婚姻经营的命理顾问，视角成熟且现实，帮人看清婚姻里的课题而不是制造焦虑。',
    theme:'婚姻分析',hookLen:18,hookHint:'点出ta在婚姻/长期关系里一个核心课题',quoteLabel:'婚姻金句',wordLimit:270,
    sections:[
      {title:'婚姻课题',desc:'这个命局的人在婚姻里最主要需要面对的功课，2-3句话'},
      {title:'伴侣相处之道',desc:'适合ta的伴侣相处方式，怎样的沟通更有效'},
      {title:'建议',desc:'经营长期关系时最值得记住的一件事'}
    ]
  }),
  health:(b)=>buildPrompt(b,{
    persona:'你是一位结合中医五行智慧与现代健康观念的养生顾问，语气温和、不制造恐慌，只给可执行的建议。',
    theme:'健康建议',hookLen:18,hookHint:'点出一个容易被忽视的身体/情绪信号',quoteLabel:'养生金句',wordLimit:260,
    sections:[
      {title:'体质倾向',desc:'根据五行旺衰推断这个命局容易偏向的体质特点，2-3句话（不做医学诊断，仅作生活方式参考）'},
      {title:'易忽视的信号',desc:'ta容易忽略的身体或情绪疲惫信号'},
      {title:'养生建议',desc:'一个具体可执行的日常调理建议'}
    ]
  }),
  talent:(b)=>buildPrompt(b,{
    persona:'你是一位善于发现天赋的命理顾问，擅长从命局里看见一个人自己都没留意到的闪光点。',
    theme:'天赋分析',hookLen:18,hookHint:'点出一个ta可能低估了的自身能力',quoteLabel:'天赋金句',wordLimit:260,
    sections:[
      {title:'天赋所在',desc:'这个命局最突出的先天才能，2-3句话'},
      {title:'尚未被看见的才能',desc:'一个容易被ta自己忽略、其实很有价值的能力'},
      {title:'如何发挥',desc:'怎样的环境或练习方式，能让这份天赋真正发光'}
    ]
  }),
  career_fit:(b)=>buildPrompt(b,{
    persona:'你是一位实用主义的职业规划顾问，结合命理特质给出具体可参考的方向建议，不空谈玄学。',
    theme:'适合职业',hookLen:18,hookHint:'点出一个ta可能没想过但很适合的方向',quoteLabel:'职业金句',wordLimit:270,
    sections:[
      {title:'适合的方向',desc:'根据命局特质，列举2-3个具体适合的行业或职业类型，并简述原因'},
      {title:'不适合的坑',desc:'一种ta可能会被吸引但其实不太适配的工作模式，及原因'},
      {title:'行动指南',desc:'现阶段找方向时最该做的一件具体的事'}
    ]
  }),
  growth:(b)=>buildPrompt(b,{
    persona:'你是一位陪伴式的成长教练，结合命理视角帮人看清自己的成长课题，语气坚定又温柔。',
    theme:'成长建议',hookLen:18,hookHint:'点出一个ta反复遇到的成长瓶颈',quoteLabel:'成长金句',wordLimit:270,
    sections:[
      {title:'成长课题',desc:'这个命局的人一生反复出现的核心成长课题，2-3句话'},
      {title:'卡点',desc:'ta最容易卡住自己的一种思维或行为模式'},
      {title:'突破之道',desc:'一个具体的、能真正推动ta往前一步的建议'}
    ]
  }),

  future:(b)=>{
    const y0=new Date().getFullYear();
    return `你是一位擅长趋势分析的命理顾问，语气理性温和，绝不做绝对化的吉凶预测，只谈"趋势与建议"，帮人做心理准备而不是制造恐慌或过度期待。

用户命盘：${baziSummary(b)}

请给出未来运势的趋势分析，覆盖三个时间段：${y0}年（今年）、${y0+1}年（明年）、${y0+2}-${y0+6}年（未来五年趋势）。

严格按以下格式输出，用##标记每个时间段的标题，标题就写"${y0}年"「${y0+1}年」"未来五年趋势"这几个词本身（不要加书名号）：

##${y0}年##
事业：一句话，具体趋势
财富：一句话，具体趋势
感情：一句话，具体趋势
建议：一句话，具体行动建议

##${y0+1}年##
事业：一句话，具体趋势
财富：一句话，具体趋势
感情：一句话，具体趋势
建议：一句话，具体行动建议

##未来五年趋势##
事业：一句话，长期走向
财富：一句话，长期走向
感情：一句话，长期走向
建议：一句话，长期建议

每一句控制在35字以内，语气温暖务实，强调"趋势"而非"绝对预测"，不用书名号，不加多余的开场白或结尾总结，只输出上面这个结构。用中文。${t('ai_lang_instruction_future')}`;
  }
};

// ════════════════════════════════════════
//  十天干 Guardian — 专属世界导师开场白
// ════════════════════════════════════════
const GUARDIAN_DATA={
  // 甲木
  0:{icon:'🌳',name:'森林守护者',
    lines:['一棵树从不急着长大。','你天生懂得如何扎根——问题只是，你是否允许自己向上生长。','你的命盘里，藏着一股很多人没有的生命力。今天，我们来看看它在等待什么。']},
  // 乙木
  1:{icon:'🌸',name:'花园守护者',
    lines:['藤蔓绕过石头，不是软弱，是智慧。','你以为自己不够强，但你比任何人都懂得如何在缝隙里生长。','进来吧。你的命盘里有一种温柔的韧性，等着你去看见它。']},
  // 丙火
  2:{icon:'☀️',name:'太阳祭司',
    lines:['太阳不会问今天值不值得升起。','你是那种走进房间，别人就感觉到你存在的人。','你的命盘里有光——真正的问题是，你愿意让多少人看见它？']},
  // 丁火
  3:{icon:'🕯️',name:'守灯人',
    lines:['一根蜡烛，足以照亮整个黑暗的房间。','你不像太阳那样耀眼，但你的光更温暖，更持久，更难以忘记。','我已经守着这盏灯等你很久了。进来，我们一起看你的命盘说了什么。']},
  // 戊土
  4:{icon:'🏔️',name:'山岳守护者',
    lines:['山不言语，却承载一切。','你是那种别人依靠你比依靠自己还多的人——但你知道自己真正需要什么吗？','你的命盘像一座山脉。今天，我们从山顶看下去，看看你站在哪里。']},
  // 己土
  5:{icon:'🌾',name:'大地治愈者',
    lines:['大地不会拒绝任何一颗种子。','你的善意是真实的，但有时候你为别人付出太多，忘记了自己也需要被滋养。','进来。你的命盘里有一种厚实的温柔，是时候让它也照顾你自己了。']},
  // 庚金
  6:{icon:'⚔️',name:'剑士',
    lines:['最锋利的刀，来自最漫长的磨砺。','你天生有一种气场——做决定快，执行力强，不轻易妥协。','你的命盘是一把剑。今天，我们来看看它锋刃向哪里，又在等待什么对手。']},
  // 辛金
  7:{icon:'💎',name:'珠宝师',
    lines:['最美的宝石，都经历过最深的地层。','你比大多数人更敏锐，也比大多数人更容易被自己的感受所困扰。','你的命盘如水晶——透彻，多棱，每个角度都折射出不同的光。进来，我们来看看。']},
  // 壬水
  8:{icon:'🌊',name:'海洋守护者',
    lines:['大海从不担心边界。','你的思维跑得比大多数人快——有时候快到连你自己都跟不上。','你的命盘是一片深海。今天，我们潜下去，看看水下面藏着什么。']},
  // 癸水
  9:{icon:'🌧️',name:'湖边隐士',
    lines:['雨不会一次落尽。它会慢慢滋养万物。','你的命运也是如此——不是爆发，而是渗透，是细水长流的力量。','进来吧。湖边的亭子里，我等你很久了。']},
};

// ════════════════════════════════════════
//  UNIVERSE FORMING — 宇宙诞生动画
// ════════════════════════════════════════
let ufAnimFrame=null;
let ufParticles=[];

function launchUniverseForming(baziData,onComplete){
  const overlay=document.getElementById('universe-forming');
  overlay.style.display='flex';
  overlay.style.opacity='0';
  void overlay.offsetWidth;
  overlay.style.transition='opacity 0.5s';
  overlay.style.opacity='1';

  // Setup canvas
  const canvas=document.getElementById('uf-canvas');
  const ctx=canvas.getContext('2d');
  canvas.width=innerWidth;canvas.height=innerHeight;
  window.addEventListener('resize',()=>{canvas.width=innerWidth;canvas.height=innerHeight;});

  // Big bang particles
  ufParticles=[];
  function spawnUFParticle(elKey){
    const colors={木:'#4A9B6A',火:'#D95A30',土:'#C09050',金:'#B0B8D0',水:'#3A7BD5',default:'#D4AF6A'};
    const c=colors[elKey]||colors.default;
    const angle=Math.random()*Math.PI*2;
    const speed=0.5+Math.random()*3;
    return{x:innerWidth/2,y:innerHeight/2,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,
      r:Math.random()*3+0.5,c,alpha:0,maxA:0.6+Math.random()*0.4,
      life:0,maxL:120+Math.random()*180,kind:Math.random()<0.5?'dot':'glow'};
  }

  let ufRunning=true;
  function ufLoop(){
    if(!ufRunning)return;
    ufAnimFrame=requestAnimationFrame(ufLoop);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // starfield
    ctx.fillStyle='rgba(0,0,0,0.15)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // emit
    if(Math.random()<0.35){
      const els=['木','火','土','金','水',null];
      ufParticles.push(spawnUFParticle(els[Math.floor(Math.random()*els.length)]));
    }

    ufParticles=ufParticles.filter(p=>{
      p.life++;
      const t=p.life/p.maxL;
      p.alpha=t<0.2?p.maxA*(t/0.2):t>0.7?p.maxA*(1-(t-0.7)/0.3):p.maxA;
      p.vx*=0.992;p.vy*=0.992;
      p.x+=p.vx;p.y+=p.vy;
      const hex=Math.max(0,Math.min(255,Math.round(p.alpha*255))).toString(16).padStart(2,'0');
      if(p.kind==='glow'){
        const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*4);
        g.addColorStop(0,p.c+hex);g.addColorStop(1,p.c+'00');
        ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.r*4,0,Math.PI*2);ctx.fill();
      }else{
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c+hex;ctx.fill();
      }
      return p.life<p.maxL;
    });
    if(ufParticles.length>400)ufParticles.splice(0,ufParticles.length-400);
  }
  ufLoop();

  // Animate yinyang
  const yy=document.getElementById('uf-yinyang');
  setTimeout(()=>yy.classList.add('show'),200);

  // Elements color based on dayMaster
  const elColors={木:'#4A9B6A',火:'#D95A30',土:'#C09050',金:'#B0B8D0',水:'#3A7BD5'};
  const dayEl=baziData.dayMasterEl;

  // Step sequence
  const steps=[
    {id:'uf-s0',delay:400,sound:'low'},
    {id:'uf-s1',delay:1200,sound:'mid'},
    {id:'uf-s2',delay:2000,sound:'mid'},
    {id:'uf-s3',delay:2800,fn:()=>{
      // Light up yin-yang color
      yy.style.filter=`drop-shadow(0 0 40px ${elColors[dayEl]||'#D4AF6A'}) drop-shadow(0 0 80px ${elColors[dayEl]||'#D4AF6A'}44)`;
    }},
    {id:'uf-s4',delay:3800,fn:()=>{
      // Light up elements one by one
      document.querySelectorAll('.uf-el').forEach((el,i)=>{
        setTimeout(()=>{
          el.classList.add('lit');
          if(el.dataset.el===dayEl) el.classList.add('pulse');
        },i*220);
      });
    }},
    {id:'uf-s5',delay:5400,fn:()=>{
      // Show pillars
      const pp=document.getElementById('uf-pillars');
      if(baziData.pillars){
        pp.innerHTML=baziData.pillars.map(p=>`<div class="uf-pillar"><span style="color:${p.label==='日柱'?elColors[dayEl]:'rgba(212,175,106,0.9)'}">${p.t}</span><span>${p.d}</span></div>`).join('');
        setTimeout(()=>pp.classList.add('show'),100);
      }
    }},
    {id:'uf-s6',delay:7200,fn:()=>{
      yy.style.animation='ufSpin 1.5s linear infinite';
    }},
    {id:'uf-s7',delay:8800,fn:()=>{
      const g=GUARDIAN_DATA[baziData.dayTG]||GUARDIAN_DATA[9];
      document.getElementById('uf-s7').textContent='进入「'+TG[baziData.dayTG]+'·'+baziData.info.name+'命」世界…';
    }},
  ];

  steps.forEach(s=>{
    setTimeout(()=>{
      // hide previous step
      document.querySelectorAll('.uf-step.active').forEach(e=>e.classList.remove('active'));
      document.getElementById(s.id).classList.add('active');
      if(s.fn)s.fn();
    },s.delay);
  });

  // Big flash and transition to guardian
  setTimeout(()=>{
    ufRunning=false;cancelAnimationFrame(ufAnimFrame);
    // Flash
    const flash=document.getElementById('uf-flash');
    flash.style.opacity='1';
    setTimeout(()=>{
      flash.style.transition='opacity 0.8s';
      flash.style.opacity='0';
      overlay.style.opacity='0';
      setTimeout(()=>{
        overlay.style.display='none';
        // reset elements
        yy.classList.remove('show');
        document.querySelectorAll('.uf-el').forEach(e=>{e.classList.remove('lit','pulse');});
        document.querySelectorAll('.uf-step').forEach(e=>e.classList.remove('active'));
        document.getElementById('uf-pillars').classList.remove('show');
        document.getElementById('uf-pillars').innerHTML='';
        onComplete();
      },500);
    },200);
  },10500);
}

// ════════════════════════════════════════
//  GUARDIAN SCENE — 导师开场
// ════════════════════════════════════════
function showGuardianScene(baziData,onDone){
  const dayTG=baziData.dayTG;
  const g=GUARDIAN_DATA[dayTG]||GUARDIAN_DATA[9];
  const el=baziData.dayMasterEl;

  const scene=document.getElementById('guardian-scene');
  document.getElementById('guardian-icon').textContent=g.icon;
  document.getElementById('guardian-icon').style.filter=`drop-shadow(0 0 40px ${WX_COLORS[el]||'#D4AF6A'})`;

  const [l1,l2,l3]=g.lines;
  document.getElementById('guardian-line1').textContent=l1;
  document.getElementById('guardian-line2').textContent=l2||'';
  document.getElementById('guardian-line3').textContent=l3||'';

  // reset
  ['guardian-line1','guardian-line2','guardian-line3','guardian-enter'].forEach(id=>{
    document.getElementById(id).classList.remove('show');
  });

  scene.style.display='flex';
  void scene.offsetWidth;
  scene.classList.add('show');

  setTimeout(()=>document.getElementById('guardian-line1').classList.add('show'),400);
  setTimeout(()=>document.getElementById('guardian-line2').classList.add('show'),1600);
  setTimeout(()=>document.getElementById('guardian-line3').classList.add('show'),2800);
  setTimeout(()=>document.getElementById('guardian-enter').classList.add('show'),4200);

  window._guardianDone=onDone;
}

function closeGuardian(){
  const scene=document.getElementById('guardian-scene');
  scene.style.opacity='0';
  setTimeout(()=>{
    scene.style.display='none';
    scene.classList.remove('show');
    scene.style.opacity='';
    if(window._guardianDone)window._guardianDone();
  },600);
}

// ════════════════════════════════════════
//  WEB AUDIO — quiet spatial ambience
// ════════════════════════════════════════
const AUDIO_LEVELS={ambient:0.15,music:0.08,button:0.30,page:0.20};
let audioCtx=null,audioBus=null,ambientNodes=[],ambientAudioEls=[],ambientEventTimer=null,soundEnabled=true;
const warnedSoundAssets=new Set();

function getAudioCtx(){
  if(!audioCtx){
    try{
      audioCtx=new(window.AudioContext||window.webkitAudioContext)();
      audioBus={
        ambient:audioCtx.createGain(),
        music:audioCtx.createGain(),
        button:audioCtx.createGain(),
        page:audioCtx.createGain()
      };
      audioBus.ambient.gain.value=AUDIO_LEVELS.ambient;
      audioBus.music.gain.value=AUDIO_LEVELS.music;
      audioBus.button.gain.value=AUDIO_LEVELS.button;
      audioBus.page.gain.value=AUDIO_LEVELS.page;
      Object.values(audioBus).forEach(g=>g.connect(audioCtx.destination));
    }catch(e){}
  }
  return audioCtx;
}

function stopAmbient(){
  if(ambientEventTimer){clearTimeout(ambientEventTimer);ambientEventTimer=null;}
  ambientAudioEls.forEach(a=>{try{a.pause();a.src='';}catch(e){}});
  ambientAudioEls=[];
  ambientNodes.forEach(n=>{try{n.stop&&n.stop();n.disconnect&&n.disconnect();}catch(e){}});
  ambientNodes=[];
}

function restartAmbient(buildFn){
  const ctx=getAudioCtx();if(!ctx)return;
  if(ctx.state==='suspended')ctx.resume();
  if(audioBus){
    audioBus.ambient.gain.cancelScheduledValues(ctx.currentTime);
    audioBus.ambient.gain.setTargetAtTime(0,ctx.currentTime,0.45);
  }
  setTimeout(()=>{
    stopAmbient();
    buildFn(ctx);
    if(audioBus){
      audioBus.ambient.gain.cancelScheduledValues(ctx.currentTime);
      audioBus.ambient.gain.setValueAtTime(0,ctx.currentTime);
      audioBus.ambient.gain.linearRampToValueAtTime(AUDIO_LEVELS.ambient,ctx.currentTime+1.8);
    }
  },700);
}

function makeNoiseSource(ctx,filterType,freq,q,gainValue,panValue,lfoDepth=0,lfoRate=0.04){
  const buffer=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;

  const src=ctx.createBufferSource();
  const filter=ctx.createBiquadFilter();
  const gain=ctx.createGain();
  const pan=ctx.createStereoPanner?ctx.createStereoPanner():null;
  src.buffer=buffer;
  src.loop=true;
  filter.type=filterType;
  filter.frequency.value=freq;
  filter.Q.value=q;
  gain.gain.setValueAtTime(0,ctx.currentTime);
  gain.gain.linearRampToValueAtTime(gainValue,ctx.currentTime+2.8);

  src.connect(filter);
  filter.connect(gain);
  if(pan){
    pan.pan.value=panValue;
    gain.connect(pan);
    pan.connect(audioBus.ambient);
  }else{
    gain.connect(audioBus.ambient);
  }

  if(lfoDepth>0){
    const lfo=ctx.createOscillator();
    const lfoGain=ctx.createGain();
    lfo.frequency.value=lfoRate;
    lfoGain.gain.value=lfoDepth;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
    ambientNodes.push(lfo,lfoGain);
  }

  src.start();
  ambientNodes.push(src,filter,gain);
  if(pan)ambientNodes.push(pan);
}

function startAmbientSound(elKey){
  const spaces={
    水:[
      ['lowpass',520,0.55,0.16,-0.2,60,0.035], // rain, soft and distant
      ['lowpass',180,0.45,0.10,0.18,24,0.025], // lake movement
      ['bandpass',260,0.35,0.045,0.0,16,0.018] // optional wind
    ],
    木:[
      ['lowpass',360,0.55,0.12,-0.15,36,0.026],
      ['bandpass',210,0.4,0.075,0.2,20,0.018]
    ],
    火:[
      ['lowpass',300,0.6,0.11,-0.12,28,0.024],
      ['bandpass',170,0.45,0.07,0.18,18,0.016]
    ],
    金:[
      ['lowpass',260,0.5,0.10,-0.18,22,0.02],
      ['bandpass',420,0.35,0.055,0.2,26,0.014]
    ],
    土:[
      ['lowpass',190,0.55,0.12,-0.1,18,0.018],
      ['bandpass',130,0.5,0.07,0.16,14,0.014]
    ]
  };
  if(!soundEnabled)return;
  restartAmbient(ctx=>{
    (spaces[elKey]||spaces['水']).slice(0,3).forEach(cfg=>{
      makeNoiseSource(ctx,cfg[0],cfg[1],cfg[2],cfg[3],cfg[4],cfg[5],cfg[6]);
    });
  });
}

function playDayNightAmbient(){
  if(!soundEnabled||chartEntered)return;
  const phase=DN?.phase||'night';
  const cfg={
    dawn:[['lowpass',320,0.45,0.055,-0.18,20,0.018],['bandpass',170,0.35,0.035,0.2,12,0.014]],
    day:[['lowpass',420,0.42,0.045,-0.12,22,0.016],['bandpass',240,0.35,0.028,0.18,14,0.012]],
    dusk:[['lowpass',260,0.46,0.05,-0.14,18,0.014],['bandpass',150,0.35,0.035,0.12,10,0.012]],
    night:[['lowpass',180,0.5,0.052,-0.1,16,0.012],['bandpass',90,0.35,0.032,0.16,8,0.01]]
  };
  restartAmbient(ctx=>(cfg[phase]||cfg.night).forEach(c=>makeNoiseSource(ctx,c[0],c[1],c[2],c[3],c[4],c[5],c[6])));
}

function makeToneDrone(ctx,freq,type,gainValue,panValue=-0.05,lfoRate=0.03,lfoDepth=4){
  const osc=ctx.createOscillator();
  const gain=ctx.createGain();
  const pan=ctx.createStereoPanner?ctx.createStereoPanner():null;
  const filter=ctx.createBiquadFilter();
  const lfo=ctx.createOscillator();
  const lfoGain=ctx.createGain();
  osc.type=type;
  osc.frequency.value=freq;
  filter.type='lowpass';
  filter.frequency.value=freq*3.2;
  gain.gain.setValueAtTime(0,ctx.currentTime);
  gain.gain.linearRampToValueAtTime(gainValue,ctx.currentTime+2.2);
  lfo.frequency.value=lfoRate;
  lfoGain.gain.value=lfoDepth;
  lfo.connect(lfoGain);lfoGain.connect(osc.frequency);
  osc.connect(filter);filter.connect(gain);
  if(pan){pan.pan.value=panValue;gain.connect(pan);pan.connect(audioBus.ambient);ambientNodes.push(pan);}
  else gain.connect(audioBus.ambient);
  osc.start();lfo.start();
  ambientNodes.push(osc,gain,filter,lfo,lfoGain);
}

function tryLoopAudioAsset(item){
  const path=typeof item==='string'?item:item?.src;
  if(!path)return;
  const audio=new Audio(path);
  audio.loop=true;
  audio.volume=Math.min(0.16,typeof item==='object'?(item.volume||0.08):0.08);
  audio.preload='auto';
  audio.addEventListener('error',()=>{
    if(!warnedSoundAssets.has(path)){
      warnedSoundAssets.add(path);
      console.warn('Missing optional sound asset:',path);
    }
  },{once:true});
  audio.play().then(()=>ambientAudioEls.push(audio)).catch(()=>{
    if(!warnedSoundAssets.has(path)){
      warnedSoundAssets.add(path);
      console.warn('Optional sound asset skipped:',path);
    }
  });
}

function buildSoundscape(theme){
  const synth=theme.soundscape?.synth||({
    forest:'forest',vine:'vine',solar:'flame',candle:'candle',mountain:'mountain',field:'garden',
    metalMountain:'metal',jadeMoon:'jade',ocean:'ocean',rainLake:'lake'
  }[theme.sceneConfig?.sceneType]||'lake');
  const layers={
    forest:[['noise','lowpass',360,.55,.09,-.2,32,.026],['noise','bandpass',210,.36,.05,.22,18,.018],['tone',82,'sine',.012]],
    vine:[['noise','lowpass',520,.45,.075,-.18,44,.028],['noise','bandpass',310,.34,.048,.2,22,.018],['tone',96,'sine',.009]],
    flame:[['noise','bandpass',220,.58,.088,-.18,30,.026],['noise','lowpass',360,.46,.052,.22,18,.014],['tone',130,'triangle',.008]],
    candle:[['noise','bandpass',180,.5,.06,-.08,18,.014],['tone',116,'sine',.01]],
    mountain:[['noise','lowpass',150,.56,.078,-.18,16,.012],['tone',62,'sine',.018],['tone',124,'sine',.006]],
    garden:[['noise','lowpass',220,.5,.068,-.16,18,.014],['noise','bandpass',140,.38,.04,.2,12,.012],['tone',74,'sine',.012]],
    metal:[['noise','bandpass',520,.34,.035,-.18,34,.018],['tone',196,'sine',.012],['tone',392,'sine',.005]],
    jade:[['noise','bandpass',640,.32,.032,-.18,40,.018],['tone',220,'sine',.01],['tone',554,'sine',.004]],
    ocean:[['noise','lowpass',260,.54,.11,-.2,42,.03],['noise','bandpass',110,.44,.072,.18,20,.016],['tone',58,'sine',.018]],
    lake:[['noise','lowpass',420,.5,.095,-.18,34,.026],['noise','bandpass',170,.34,.052,.2,16,.014],['tone',72,'sine',.014]]
  };
  const s=theme.soundscape||{};
  const loops=[...(s.base||[]),...(s.element||[]),...(s.harmony||[]),...(s.loops||[])];
  const events=s.events||[];
  return {synth,layers:layers[synth]||layers.lake,loops,events};
}

function playMicroEvent(theme){
  if(!soundEnabled||!audioCtx||!theme)return;
  const synth=theme.soundscape?.synth||'lake';
  const map={
    vine:[720,0.018,0.22,'sine'],ocean:[96,0.028,0.55,'sine'],jade:[880,0.018,0.35,'sine'],candle:[260,0.018,0.18,'triangle'],
    forest:[420,0.014,0.24,'triangle'],flame:[340,0.018,0.18,'triangle'],mountain:[110,0.022,0.7,'sine'],garden:[220,0.012,0.28,'sine'],metal:[620,0.014,0.42,'sine'],lake:[520,0.016,0.3,'sine']
  };
  const [freq,gain,dur,type]=map[synth]||map.lake;
  const osc=audioCtx.createOscillator();
  const g=audioCtx.createGain();
  osc.type=type;osc.frequency.value=freq*(0.92+Math.random()*0.16);
  g.gain.setValueAtTime(0,audioCtx.currentTime);
  g.gain.linearRampToValueAtTime(gain,audioCtx.currentTime+0.02);
  g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+dur);
  osc.connect(g);g.connect(audioBus.ambient);
  osc.start();osc.stop(audioCtx.currentTime+dur);
}

function playElementalSoundscape(bazi){
  if(!soundEnabled||!bazi)return;
  const theme=currentElementalTheme||buildElementalTheme(baziToThemeProfile(bazi));
  const soundscape=buildSoundscape(theme);
  restartAmbient(ctx=>{
    soundscape.layers.forEach(layer=>{
      if(layer[0]==='noise')makeNoiseSource(ctx,layer[1],layer[2],layer[3],layer[4],layer[5],layer[6],layer[7]);
      if(layer[0]==='tone')makeToneDrone(ctx,layer[1],layer[2],layer[3],-0.04,0.025,3);
    });
    soundscape.loops.forEach(tryLoopAudioAsset);
    const scheduleEvent=()=>{
      const delays=(soundscape.events||[]).map(e=>({min:e.minDelay||12,max:e.maxDelay||35}));
      const pick=delays[Math.floor(Math.random()*Math.max(1,delays.length))]||{min:12,max:35};
      ambientEventTimer=setTimeout(()=>{
        if(Math.random()<0.72)playMicroEvent(theme);
        scheduleEvent();
      },(pick.min+Math.random()*(pick.max-pick.min))*1000);
    };
    scheduleEvent();
  });
}

function playTone(freq,vol,dur,busName='button'){
  if(!soundEnabled)return;
  const ctx=getAudioCtx();if(!ctx)return;
  if(ctx.state==='suspended')ctx.resume();
  const osc=ctx.createOscillator();
  const g=ctx.createGain();
  osc.frequency.value=freq;osc.type='sine';
  g.gain.setValueAtTime(Math.min(vol,0.08),ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);
  osc.connect(g);g.connect((audioBus&&audioBus[busName])||ctx.destination);
  osc.start();osc.stop(ctx.currentTime+dur);
}

function playPageSound(){playTone(164,0.045,0.18,'page');}
function playButtonSound(){playTone(220,0.035,0.12,'button');}

function toggleSound(){
  soundEnabled=!soundEnabled;
  const btn=document.getElementById('sound-toggle');
  if(soundEnabled){
    btn.textContent='🔊';btn.classList.remove('muted');
    if(audioBus)audioBus.ambient.gain.value=AUDIO_LEVELS.ambient;
    if(chartEntered&&currentBazi)playElementalSoundscape(currentBazi);
    else playDayNightAmbient();
  }else{
    btn.textContent='🔇';btn.classList.add('muted');
    stopAmbient();
  }
}

// ════════════════════════════════════════
//  DYNAMIC DAY & NIGHT SYSTEM
//  Uses the visitor's real local browser time and refreshes once per minute.
//  🌅 黎明 05:00-08:00  ☀️ 白天 08:00-17:00  🌇 黄昏 17:00-20:00  🌙 夜晚 20:00-05:00
// ════════════════════════════════════════
const DN={
  // ── 时段定义 ──
  PHASES:{
    dawn:{label:'黎明',emoji:'🌅',start:5,end:8,
      sky:['#5f738c','#8493a4','#a9aaa8','#d6b08b','#f0c58a'],
      sunColor:'#ffe3a8',sunGlow:'rgba(255,190,110,0.55)',
      overlayColor:'rgba(185,205,220,0.12)',overlayOpacity:0.58,skyOpacity:0.88,fogOpacity:0.72,stars:0.12,moon:true},
    day:{label:'白天',emoji:'☀️',start:8,end:17,
      sky:['#74b8ff','#55a7f4','#2f86db','#1769bd'],
      sunColor:'#fff8cf',sunGlow:'rgba(255,240,170,0.58)',
      overlayColor:'rgba(210,235,255,0.12)',overlayOpacity:0.35,skyOpacity:0.94,fogOpacity:0,stars:0,moon:false},
    dusk:{label:'黄昏',emoji:'🌇',start:17,end:20,
      sky:['#f6bd6f','#dc844f','#92506d','#33294d','#11172b'],
      sunColor:'#ff9b43',sunGlow:'rgba(255,130,65,0.62)',
      overlayColor:'rgba(255,145,70,0.20)',overlayOpacity:0.72,skyOpacity:0.9,fogOpacity:0.08,stars:0.16,moon:false},
    night:{label:'夜晚',emoji:'🌙',start:20,end:29,
      sky:['#02040a','#07101d','#0b1630','#050812'],
      sunColor:null,sunGlow:null,
      overlayColor:'rgba(0,5,22,0.46)',overlayOpacity:0.95,skyOpacity:0.88,fogOpacity:0,stars:1,moon:true}
  },

  // ── 状态 ──
  phase:'night',hour:0,minute:0,frac:0,
  dnC:null,dnX:null,
  stars:[],
  sunX:0,sunY:0,moonX:0,moonY:0,
  lastMinute:-1,

  // ── 获取当前时段 ──
  getPhase(h,m){
    const t=h+m/60;
    if(t>=5&&t<8)return 'dawn';
    if(t>=8&&t<17)return 'day';
    if(t>=17&&t<20)return 'dusk';
    return 'night';
  },

  // ── 相位内插值(0~1) ──
  getPhaseFrac(h,m,phase){
    const t=h+m/60,p=DN.PHASES[phase];
    const s=p.start,e=(p.end<=p.start?p.end+24:p.end);
    const tt=(t<s?t+24:t);
    return Math.max(0,Math.min(1,(tt-s)/(e-s)));
  },

  // ── 初始化 ──
  init(){
    DN.dnC=document.getElementById('dn-canvas');
    DN.dnX=DN.dnC.getContext('2d');
    DN.resize();
    DN.initStars();
    window.addEventListener('resize',()=>{DN.resize();DN.initStars();});
    DN.tick();
    setInterval(DN.tick,60000);
  },

  resize(){
    DN.dnC.width=innerWidth;
    DN.dnC.height=innerHeight;
  },

  // ── 星星初始化 ──
  initStars(){
    DN.stars=[];
    const N=200;
    for(let i=0;i<N;i++){
      DN.stars.push({
        x:Math.random()*innerWidth,y:Math.random()*innerHeight*0.75,
        r:Math.random()*1.2+0.2,
        ph:Math.random()*Math.PI*2,sp:Math.random()*0.006+0.001,
        base:Math.random()*0.5+0.3
      });
    }
  },

  // ── 主Tick ──
  tick(){
    const now=new Date();
    DN.hour=now.getHours();
    DN.minute=now.getMinutes();
    const newPhase=DN.getPhase(DN.hour,DN.minute);
    if(newPhase!==DN.phase){DN.phase=newPhase;DN.onPhaseChange();if(!chartEntered)playDayNightAmbient();}
    DN.frac=DN.getPhaseFrac(DN.hour,DN.minute,DN.phase);
    DN.applyWorldState();
    DN.lastMinute=DN.minute;
  },

  // ── 时段切换时 ──
  onPhaseChange(){
    const badge=document.getElementById('dn-time-badge');
    if(badge){badge.style.color='rgba(232,233,242,0.35)';}
  },

  // ── 应用世界状态 ──
  applyWorldState(){
    const p=DN.PHASES[DN.phase];
    const f=DN.frac;
    const W=innerWidth,H=innerHeight;

    // --- 天空渐变 ---
    const skyEl=document.getElementById('dn-sky');
    if(skyEl){
      const stops=p.sky.map((c,i)=>`${c} ${Math.round(i/(p.sky.length-1)*100)}%`).join(',');
      skyEl.style.background=`linear-gradient(180deg,${stops})`;
      skyEl.style.opacity=String(p.skyOpacity);
    }

    // --- 叠层颜色 ---
    const overlay=document.getElementById('dn-overlay');
    if(overlay){
      overlay.style.background=p.overlayColor;
      overlay.style.opacity=String(p.overlayOpacity);
    }

    // --- 晨雾 ---
    const fog=document.getElementById('dn-fog');
    if(fog){
      const fogTarget=p.fogOpacity;
      fog.style.opacity=fogTarget*(DN.phase==='dawn'?(f<0.5?f*2:1-(f-0.5)*2):1);
    }

    // --- 太阳 ---
    const sun=document.getElementById('dn-sun');
    if(sun){
      if(DN.phase==='day'||DN.phase==='dawn'||DN.phase==='dusk'){
        const h=DN.hour+DN.minute/60;
        const dayFrac=Math.max(0,Math.min(1,(h-5)/15));
        const elev=Math.sin(dayFrac*Math.PI);
        DN.sunX=W*(0.12+dayFrac*0.76);
        DN.sunY=H*(0.78-elev*0.58);
        sun.style.display='block';
        const size=DN.phase==='dawn'?92+elev*24:DN.phase==='dusk'?108-elev*20:118+elev*34;
        sun.style.width=sun.style.height=size+'px';
        sun.style.marginLeft=sun.style.marginTop='0';
        sun.style.left=(DN.sunX-size/2)+'px';
        sun.style.top=(DN.sunY-size/2)+'px';
        sun.style.background=`radial-gradient(circle,${p.sunColor} 0%,${p.sunColor}88 40%,transparent 70%)`;
        sun.style.boxShadow=`0 0 ${60+elev*80}px ${20+elev*40}px ${p.sunGlow}`;
        sun.style.opacity=DN.phase==='dawn'?0.55+f*0.4:DN.phase==='dusk'?Math.max(0.34,1-f*0.7):0.96;
        sun.style.filter=`blur(${DN.phase==='dawn'?3-f*2:DN.phase==='dusk'?f*4:0}px)`;
      }else{
        sun.style.display='none';
      }
    }

    // --- 月亮 ---
    const moon=document.getElementById('dn-moon');
    if(moon){
      if(DN.phase==='night'||(DN.phase==='dawn'&&f<0.45)){
        const h=DN.hour+DN.minute/60;
        let mf=(h>=20?h-20:h+4)/9;
        mf=Math.max(0,Math.min(1,mf));
        const elev=Math.sin(mf*Math.PI);
        DN.moonX=W*(0.18+mf*0.64);
        DN.moonY=H*(0.68-elev*0.42);
        moon.style.left=(DN.moonX-32)+'px';
        moon.style.top=(DN.moonY-32)+'px';
        moon.style.display='block';
        const moonFade=DN.phase==='dawn'?Math.max(0,1-f*3.2):1;
        moon.style.opacity=moonFade*0.92;
        moon.style.animation='dnMoonGlow 4s ease-in-out infinite';
      }else{
        moon.style.display='none';
      }
    }

    // --- 时间徽章 ---
    const badge=document.getElementById('dn-time-badge');
    if(badge){
      const hh=String(DN.hour).padStart(2,'0');
      const mm=String(DN.minute).padStart(2,'0');
      badge.textContent=`${p.emoji} ${hh}:${mm}`;
    }
  },

  // ── 绘制专属昼夜画布（星空、月晕、柔光） ──
  draw(time){
    const C=DN.dnX,W=DN.dnC.width,H=DN.dnC.height;
    if(!C)return;
    C.clearRect(0,0,W,H);

    let starAlpha=DN.PHASES[DN.phase].stars||0;
    if(DN.phase==='dawn')starAlpha*=Math.max(0,1-DN.frac*2.6);
    if(DN.phase==='dusk')starAlpha*=Math.max(0,DN.frac*2.2-0.6);

    // ── 星星 ──
    if(starAlpha>0.01){
      DN.stars.forEach(s=>{
        const twinkle=s.base+0.16*Math.sin(s.ph+time*s.sp*80);
        const a=Math.max(0,Math.min(1,twinkle))*starAlpha*0.72;
        C.beginPath();C.arc(s.x,s.y,s.r,0,Math.PI*2);
        C.fillStyle=`rgba(220,230,255,${a})`;C.fill();
      });
    }

    // ── 月晕 ──
    if(starAlpha>0.1&&DN.moonX&&DN.moonY){
      const mg=C.createRadialGradient(DN.moonX,DN.moonY,0,DN.moonX,DN.moonY,160);
      mg.addColorStop(0,`rgba(220,210,170,${0.12*starAlpha})`);
      mg.addColorStop(1,'rgba(220,210,170,0)');
      C.fillStyle=mg;C.beginPath();C.arc(DN.moonX,DN.moonY,160,0,Math.PI*2);C.fill();
    }

    // ── 黎明柔光 ──
    if(DN.phase==='dawn'&&DN.frac>0.2&&DN.sunX){
      const rays=4,rayAlpha=Math.min(0.22,(DN.frac-0.2)*0.34);
      for(let i=0;i<rays;i++){
        const angle=(-0.34+i*0.16);
        const rg=C.createLinearGradient(
          DN.sunX,DN.sunY,
          DN.sunX+Math.cos(angle)*W*0.6,
          DN.sunY+Math.sin(angle)*H*0.5
        );
        rg.addColorStop(0,`rgba(255,218,160,${rayAlpha})`);
        rg.addColorStop(1,'rgba(255,200,120,0)');
        C.strokeStyle=rg;C.lineWidth=20+i*6;
        C.beginPath();C.moveTo(DN.sunX,DN.sunY);
        C.lineTo(DN.sunX+Math.cos(angle)*W*0.6,DN.sunY+Math.sin(angle)*H*0.5);
        C.stroke();
      }
    }

    // ── 黄昏长阴影暗示 ──
    if(DN.phase==='dusk'&&DN.frac>0.3){
      const shadowA=(DN.frac-0.3)*0.22;
      C.fillStyle=`rgba(20,10,40,${shadowA})`;
      C.fillRect(0,H*0.6,W,H*0.4);
    }
  }
};

// ── 重新定义主Loop，加入昼夜绘制 ──
function loop(t){
  requestAnimationFrame(loop);
  drawBg(t/1000);
  DN.draw(t/1000);
  updateP();drawP();
}

// ── 启动（由此触发rAF，替代上面的占位loop） ──
DN.init();
requestAnimationFrame(loop);

async function loadReading(mode){
  if(!currentBazi)return;
  showReadingLoading(true);
  const loadMsgs={
    life:'正在解读你的一生脉络…',now:'感应当下命局流转…',shadow:'触碰你内心深处…',
    career:'梳理你的事业脉络…',wealth:'感应你的财富流动…',love:'解读你的感情模式…',
    marriage:'看见你的婚姻课题…',health:'关照你的身心信号…',talent:'挖掘你的天赋之光…',
    career_fit:'匹配适合你的方向…',growth:'看见你的成长课题…',future:'推演未来的趋势脉络…'
  };
  document.getElementById('loadingText').textContent=loadMsgs[mode]||'正在感应…';
  const prompt=MODE_PROMPTS[mode](currentBazi);
  try{
    const raw=await callClaude(prompt);
    readingCache[mode]=raw;
    renderModeResult(mode,raw);
  }catch(e){
    showReadingLoading(false);
    const c=document.getElementById('readingContent');
    c.innerHTML=`<div style="opacity:0.45;font-size:12px;text-align:center;padding:24px 0;line-height:1.9">
      AI 解读接口暂不可用<br>
      <span style="opacity:0.5;font-size:10px">${e.message||''}</span>
    </div>`;
    c.classList.add('show');
  }
}

function showReadingLoading(show){
  document.getElementById('readingLoading').style.display=show?'flex':'none';
  const c=document.getElementById('readingContent');c.classList.remove('show');c.innerHTML='';
}

function renderModeResult(mode,raw){
  if(mode==='future'){renderFutureReading(raw);}
  else{renderReading(raw);}
}

function renderReading(raw){
  showReadingLoading(false);
  const quoteMatch=raw.match(/《(.+?)》/g);
  let quote='';
  let body=raw;
  if(quoteMatch&&quoteMatch.length>0){
    quote=quoteMatch[quoteMatch.length-1];
    body=raw.replace(quote,'').trim();
  }

  // 提取开场"钩子"引子（第一行且不含【】标题）
  let hook='';
  const rawLines=body.split('\n').map(l=>l.trim()).filter(Boolean);
  if(rawLines.length&&!rawLines[0].startsWith('【')){
    hook=rawLines[0];
    body=body.replace(hook,'').trim();
  }

  // 将饰品名替换为可点击的彩色链接（八字入口 → 东方禅意款）
  const jList=currentBazi?(BAZI_JEWELRY[currentBazi.dayMasterEl]||[]):[];
  body=wrapJewelryText(body,jList,'reading');

  const sections=[];
  const parts=body.split(/【(.+?)】/);
  if(parts.length>1){
    for(let i=1;i<parts.length;i+=2){
      sections.push({title:parts[i],body:(parts[i+1]||'').trim()});
    }
  }else{sections.push({title:'',body:body.trim()});}

  let html='';
  if(hook)html+=`<div class="reading-hook">${hook}</div>`;
  sections.forEach(s=>{
    if(s.title)html+=`<div class="reading-section"><div class="reading-section-title">${s.title}</div><div class="reading-section-body">${s.body.replace(/\n/g,'<br>')}</div></div>`;
    else html+=`<div class="reading-section"><div class="reading-section-body">${s.body.replace(/\n/g,'<br>')}</div></div>`;
  });
  if(quote)html+=`<div class="reading-quote">${quote}</div>`;

  const c=document.getElementById('readingContent');c.innerHTML=html;c.classList.add('show');
}

function renderFutureReading(raw){
  showReadingLoading(false);
  const blocks=raw.split(/##(.+?)##/).filter(s=>s.trim());
  let html='';
  const ICONS={事业:'💼',财富:'💰',感情:'💗',建议:'✦'};
  for(let i=0;i<blocks.length;i+=2){
    const yearLabel=blocks[i].trim();
    const bodyText=(blocks[i+1]||'').trim();
    if(!bodyText){continue;}
    const lines=bodyText.split('\n').map(l=>l.trim()).filter(Boolean);
    html+=`<div class="future-period"><div class="future-year">${yearLabel}</div>`;
    lines.forEach(line=>{
      const m=line.match(/^(事业|财富|感情|建议)[：:]\s*(.+)$/);
      if(m){
        html+=`<div class="future-item"><div class="future-item-label">${ICONS[m[1]]||''} ${m[1]}</div><div class="future-item-text">${m[2]}</div></div>`;
      }else if(line){
        html+=`<div class="future-item"><div class="future-item-text">${line}</div></div>`;
      }
    });
    html+='</div>';
  }
  if(!html){
    html=`<div class="reading-section"><div class="reading-section-body">${raw.replace(/\n/g,'<br>')}</div></div>`;
  }
  const c=document.getElementById('readingContent');c.innerHTML=html;c.classList.add('show');
}



// Next.js source wrapper: inject browser-local date context into every AI call.
(function(){
  function localDateContext(){
    var now=new Date();
    var y=now.getFullYear();
    var m=String(now.getMonth()+1).padStart(2,'0');
    var d=String(now.getDate()).padStart(2,'0');
    var hh=String(now.getHours()).padStart(2,'0');
    var mm=String(now.getMinutes()).padStart(2,'0');
    return '当前浏览器本地日期是 '+y+'-'+m+'-'+d+'，当前本地时间是 '+hh+':'+mm+'。当前年份是 '+y+' 年。所有“今年”必须指 '+y+' 年，“明年”必须指 '+(y+1)+' 年。任何早于 '+y+' 年的年份都已经是过去，绝对不能说成未来、之后、等待时机或接下来。';
  }
  if (typeof callClaude === 'function') {
    var originalCallClaude = callClaude;
    callClaude = function(prompt){ return originalCallClaude(localDateContext()+'\n\n重要：如果回答涉及今年、明年、未来、近期、流年、时机，必须以上面的本地日期为准。\n\n'+prompt); };
  }
  if (typeof callClaudeChat === 'function') {
    var originalCallClaudeChat = callClaudeChat;
    callClaudeChat = function(messages){ return originalCallClaudeChat([{role:'system',content:localDateContext()}].concat(messages||[])); };
  }
})();
