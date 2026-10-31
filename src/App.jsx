import React, { useEffect, useState } from 'react';
import { INK, O, P, Y, G, K, R, KINDS, STORES } from './data.js';

const DISPLAY = "'Bricolage Grotesque',sans-serif";
const BODY = "'DM Sans',sans-serif";
const MUTED = '#5b5160';
const STORAGE_KEY = 'ponte-sent';

const fmtFrom = s => {
  const n = s.props.filter(x => x.num).map(x => x.num);
  return n.length ? 'a partir de ' + R(Math.min(...n)) : 'Permuta';
};

export default function App() {
  const [view, setView] = useState('list');
  const [sid, setSid] = useState(0);
  const [filter, setFilter] = useState('Todas');
  const [open, setOpen] = useState(null);
  const [sent, setSent] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { return {}; }
  });

  useEffect(() => {
    document.body.style.overflow = open != null && view === 'store' ? 'hidden' : '';
  }, [open, view]);

  const go = (v, id) => {
    setView(v);
    if (id != null) setSid(id);
    setOpen(null);
    window.scrollTo(0, 0);
  };

  const cats = ['Todas', ...Array.from(new Set(STORES.map(s => s.category)))];
  const cur = STORES[sid];
  const key = i => cur.name + '-' + i;

  const props = cur.props.map((x, i) => {
    const k = KINDS[x.kind];
    const isSent = !!sent[key(i)];
    return { ...x, kind: k.l, bg: k.bg, fg: k.fg, status: isSent ? '✓ Proposta enviada' : 'Disponível', stColor: isSent ? '#0a7a55' : MUTED, i };
  });
  const op = props[open != null ? open : 0];
  const opSent = open != null && !!sent[key(open)];

  const accept = () => {
    const next = { ...sent, [key(open)]: true };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch (e) {}
    setSent(next);
  };

  const pal = [O, P, Y, G, K];
  const examples = cur.ex.map((e, i) => {
    const c = pal[(sid + i) % 5];
    return { handle: e[0], type: e[1], views: e[2] + ' views', ini: e[0][1].toUpperCase(), color: c, fg: (c === O || c === P) ? '#fff' : INK, rot: [-2, 1.5, -1, 2][i] };
  });

  const stores = STORES.map((s, i) => ({ ...s, i })).filter(s => filter === 'Todas' || s.category === filter);

  return (
    <div style={{ minHeight: '100vh', background: '#FFF4E0', color: INK, fontFamily: BODY, fontSize: 16, lineHeight: 1.5 }}>
      <header style={{ borderBottom: '2.5px solid ' + INK, background: '#FFF4E0', position: 'sticky', top: 0, zIndex: 20 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div onClick={() => go('list')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{ width: 40, height: 40, background: O, border: '2.5px solid ' + INK, borderRadius: 12, display: 'grid', placeItems: 'center', transform: 'rotate(-4deg)' }}>
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
                <path d="M2 12C3 5 7 2 11 2s8 3 9 10" />
                <path d="M6 12c.8-3 2.6-4.5 5-4.5s4.2 1.5 5 4.5" />
              </svg>
            </div>
            <span style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 30, letterSpacing: '-.04em', lineHeight: 1 }}>ponte</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ background: INK, color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 18px', borderRadius: 999, whiteSpace: 'nowrap', boxShadow: '3px 3px 0 ' + O }}>@ju.testa</div>
          </div>
        </div>
      </header>

      {view === 'list' && (
        <main style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px 80px' }}>
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', maxWidth: '100%', background: Y, border: '2.5px solid ' + INK, borderRadius: 999, whiteSpace: 'nowrap', padding: '5px 14px', fontSize: 14, fontWeight: 700, transform: 'rotate(-2deg)', boxShadow: '3px 3px 0 ' + INK }}>✦ propostas abertas hoje</div>
            <h1 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(44px,8vw,92px)', lineHeight: 0.95, letterSpacing: '-.05em', margin: '22px 0 0' }}>
              Lojas querendo<br />
              <span style={{ display: 'inline-block', background: O, color: '#fff', border: '2.5px solid ' + INK, borderRadius: 16, padding: '0 .2em .08em', boxShadow: '5px 5px 0 ' + INK, transform: 'rotate(-1.5deg)', marginTop: 8 }}>aparecer.</span>
            </h1>
            <p style={{ color: MUTED, fontSize: 19, margin: '28px auto 0', maxWidth: 560, textWrap: 'pretty' }}>Escolha uma loja, veja quanto ela paga por conteúdo e aceite a proposta que fizer sentido para você.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', margin: '40px 0 32px' }}>
            {cats.map(c => {
              const active = filter === c;
              return (
                <button key={c} onClick={() => setFilter(c)} style={{ font: "700 15px 'DM Sans',sans-serif", cursor: 'pointer', border: '2.5px solid ' + INK, borderRadius: 999, whiteSpace: 'nowrap', padding: '8px 18px', background: active ? INK : '#fff', color: active ? '#fff' : INK, boxShadow: active ? '3px 3px 0 ' + O : '3px 3px 0 ' + INK }}>{c}</button>
              );
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,340px),1fr))', gap: 28 }}>
            {stores.map(s => (
              <div key={s.name} className="store-card" onClick={() => go('store', s.i)} style={{ cursor: 'pointer', background: '#fff', border: '2.5px solid ' + INK, borderRadius: 24, boxShadow: '6px 6px 0 ' + INK, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: s.logoBg, height: 200, borderBottom: '2.5px solid ' + INK, position: 'relative', overflow: 'hidden' }}>
                  <img src={s.logo} alt={'Logo ' + s.name} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                  <div style={{ position: 'absolute', left: 16, top: 16, background: '#fff', color: INK, border: '2.5px solid ' + INK, borderRadius: 999, whiteSpace: 'nowrap', padding: '3px 12px', fontSize: 13, fontWeight: 700, transform: 'rotate(-3deg)' }}>{s.category}</div>
                </div>
                <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: '-.035em', lineHeight: 1.05 }}>{s.name}</h3>
                  <div style={{ color: MUTED, fontSize: 14 }}>{s.city} · {s.followers} seguidores</div>
                  <p style={{ margin: '6px 0 0', fontSize: 15, textWrap: 'pretty' }}>{s.tagline}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: MUTED }}>{s.props.length} propostas</div>
                      <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 24, letterSpacing: '-.03em' }}>{fmtFrom(s)}</div>
                    </div>
                    <div style={{ background: INK, color: '#fff', width: 42, height: 42, borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 20 }}>→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {view === 'store' && (
        <main style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 20px 80px' }}>
          <button className="back-btn" onClick={() => go('list')} style={{ font: "700 15px 'DM Sans',sans-serif", cursor: 'pointer', background: 'none', border: 'none', padding: '6px 0', color: INK, display: 'inline-flex', gap: 8, alignItems: 'center' }}>← Todas as lojas</button>

          <section style={{ marginTop: 14, background: cur.color, color: cur.fg, border: '2.5px solid ' + INK, borderRadius: 28, boxShadow: '7px 7px 0 ' + INK, padding: 'clamp(20px,4vw,40px)', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
            <div style={{ width: 150, height: 150, flex: 'none', background: '#fff', border: '2.5px solid ' + INK, borderRadius: 18, boxShadow: '4px 4px 0 ' + INK, transform: 'rotate(-4deg)', overflow: 'hidden', color: INK }}>
              <img src={cur.logo} alt={'Logo ' + cur.name} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: 15 }} />
            </div>
            <div style={{ flex: '1 1 340px', minWidth: 0 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ background: '#fff', color: INK, border: '2.5px solid ' + INK, borderRadius: 999, whiteSpace: 'nowrap', padding: '2px 12px', fontSize: 13, fontWeight: 700 }}>{cur.category}</span>
                <span style={{ background: INK, color: '#fff', border: '2.5px solid ' + INK, borderRadius: 999, whiteSpace: 'nowrap', padding: '2px 12px', fontSize: 13, fontWeight: 700 }}>{cur.city}</span>
              </div>
              <h1 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 'clamp(40px,7vw,76px)', letterSpacing: '-.05em', lineHeight: 0.95, margin: '12px 0 10px' }}>{cur.name}</h1>
              <p style={{ margin: 0, fontSize: 18, maxWidth: 640, textWrap: 'pretty' }}>{cur.about}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 20, alignItems: 'center' }}>
                <a href="#" onClick={e => e.preventDefault()} style={{ background: INK, color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15, padding: '10px 18px', borderRadius: 999, whiteSpace: 'nowrap', boxShadow: '3px 3px 0 #fff', border: '2px solid ' + INK }}>Instagram · {cur.handle} ↗</a>
                <span style={{ fontWeight: 700, fontSize: 15 }}>{cur.followers} seguidores</span>
              </div>
            </div>
          </section>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 48, alignItems: 'flex-start' }}>
            <section style={{ flex: '2 1 480px', minWidth: 0 }}>
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 40, letterSpacing: '-.04em', lineHeight: 1, margin: '0 0 6px' }}>Propostas</h2>
              <p style={{ margin: '0 0 20px', color: MUTED }}>Clique numa proposta para ver os pré-requisitos e aceitar.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {props.map(x => (
                  <div key={x.i} className="prop-card" onClick={() => setOpen(x.i)} style={{ cursor: 'pointer', background: '#fff', border: '2.5px solid ' + INK, borderRadius: 20, boxShadow: '5px 5px 0 ' + INK, padding: '18px 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 18px' }}>
                    <div style={{ flex: '1 1 220px', minWidth: 0 }}>
                      <span style={{ display: 'inline-block', background: x.bg, color: x.fg, border: '2.5px solid ' + INK, borderRadius: 999, whiteSpace: 'nowrap', padding: '1px 12px', fontSize: 13, fontWeight: 700, transform: 'rotate(-2deg)' }}>{x.kind}</span>
                      <div style={{ fontWeight: 700, fontSize: 18, marginTop: 8, textWrap: 'pretty' }}>{x.title}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 34, letterSpacing: '-.04em', lineHeight: 1 }}>{x.value}</div>
                      <div style={{ fontSize: 13, color: MUTED }}>{x.unit}</div>
                    </div>
                    <div style={{ flex: 'none', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px dashed #1A141C33', paddingTop: 12, fontSize: 14, fontWeight: 700 }}>
                      <span style={{ color: x.stColor }}>{x.status}</span><span>Ver pré-requisitos →</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ background: Y, border: '2.5px solid ' + INK, borderRadius: 20, boxShadow: '5px 5px 0 ' + INK, padding: 20 }}>
                <h3 style={{ margin: '0 0 12px', fontFamily: DISPLAY, fontWeight: 800, fontSize: 26, letterSpacing: '-.03em' }}>Conteúdo que a loja curte</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cur.likes.map(t => (
                    <span key={t} style={{ background: '#fff', border: '2px solid ' + INK, borderRadius: 999, whiteSpace: 'nowrap', padding: '3px 12px', fontSize: 14, fontWeight: 700 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: '#fff', border: '2.5px solid ' + INK, borderRadius: 20, boxShadow: '5px 5px 0 ' + INK, padding: 20 }}>
                <h3 style={{ margin: '0 0 10px', fontFamily: DISPLAY, fontWeight: 800, fontSize: 26, letterSpacing: '-.03em' }}>Evite</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {cur.avoid.map(t => (
                    <div key={t} style={{ display: 'flex', gap: 10, fontSize: 15 }}><span style={{ color: O, fontWeight: 700 }}>✕</span><span>{t}</span></div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <section style={{ marginTop: 56 }}>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 40, letterSpacing: '-.04em', lineHeight: 1, margin: '0 0 6px' }}>Exemplos de outros influenciadores</h2>
            <p style={{ margin: '0 0 24px', color: MUTED }}>Conteúdos que a loja já publicou com parceiros. Imagens são espaços reservados.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,200px),1fr))', gap: 22 }}>
              {examples.map(e => (
                <a key={e.handle} href="#" className="example" onClick={ev => ev.preventDefault()} style={{ textDecoration: 'none', color: INK, display: 'block', transform: `rotate(${e.rot}deg)` }}>
                  <div style={{ background: e.color, border: '2.5px solid ' + INK, borderRadius: 20, boxShadow: '5px 5px 0 ' + INK, aspectRatio: '9/14', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 12 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#fff', border: '2px solid ' + INK, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>{e.ini}</div>
                      <span style={{ fontWeight: 700, fontSize: 14, color: e.fg }}>{e.handle}</span>
                    </div>
                    <div style={{ alignSelf: 'center', width: 54, height: 54, borderRadius: '50%', background: '#fff', border: '2.5px solid ' + INK, display: 'grid', placeItems: 'center', fontSize: 20, paddingLeft: 4 }}>▶</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 6 }}>
                      <span style={{ background: '#fff', border: '2px solid ' + INK, borderRadius: 10, padding: '2px 10px', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>{e.type}</span>
                      <span style={{ fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap', color: e.fg }}>{e.views}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
      )}

      {open != null && view === 'store' && (
        <div onClick={() => setOpen(null)} style={{ position: 'fixed', inset: 0, background: '#1A141Cb3', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#FFF4E0', border: '2.5px solid ' + INK, borderRadius: 28, boxShadow: '8px 8px 0 ' + INK, width: '100%', maxWidth: 560, maxHeight: '92vh', overflow: 'auto', padding: 'clamp(20px,4vw,32px)', animation: 'pop .22s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <span style={{ background: op.bg, color: op.fg, border: '2.5px solid ' + INK, borderRadius: 999, whiteSpace: 'nowrap', padding: '2px 14px', fontSize: 14, fontWeight: 700, transform: 'rotate(-2deg)' }}>{op.kind}</span>
              <button onClick={() => setOpen(null)} style={{ width: 38, height: 38, borderRadius: '50%', border: '2.5px solid ' + INK, background: '#fff', font: "700 16px 'DM Sans',sans-serif", cursor: 'pointer' }}>✕</button>
            </div>
            <div style={{ fontSize: 14, color: MUTED, marginTop: 16 }}>{cur.name}</div>
            <h3 style={{ margin: '2px 0 0', fontFamily: DISPLAY, fontWeight: 800, fontSize: 32, letterSpacing: '-.04em', lineHeight: 1.05, textWrap: 'pretty' }}>{op.title}</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 48, letterSpacing: '-.05em', lineHeight: 1, color: O }}>{op.value}</span>
              <span style={{ color: MUTED }}>{op.unit}</span>
            </div>
            <p style={{ margin: '14px 0 0', textWrap: 'pretty' }}>{op.detail}</p>

            {!opSent && (
              <>
                <h4 style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 22, letterSpacing: '-.03em', margin: '24px 0 10px' }}>Pré-requisitos</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {op.reqs.map(r => (
                    <div key={r} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#fff', border: '2px solid ' + INK, borderRadius: 14, padding: '10px 14px' }}>
                      <span style={{ flex: 'none', width: 22, height: 22, borderRadius: '50%', background: G, border: '2px solid ' + INK, display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700 }}>✓</span>
                      <span style={{ fontSize: 15 }}>{r}</span>
                    </div>
                  ))}
                </div>
                <button className="accept-btn" onClick={accept} style={{ marginTop: 24, width: '100%', font: "700 18px 'DM Sans',sans-serif", cursor: 'pointer', background: O, color: '#fff', border: '2.5px solid ' + INK, borderRadius: 16, padding: 16, boxShadow: '4px 4px 0 ' + INK }}>Aceitar proposta e enviar →</button>
                <div style={{ textAlign: 'center', fontSize: 13, color: MUTED, marginTop: 10 }}>A loja recebe seu perfil @ju.testa e confirma em até 48 h.</div>
              </>
            )}

            {opSent && (
              <>
                <div style={{ marginTop: 24, background: G, border: '2.5px solid ' + INK, borderRadius: 18, padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span style={{ flex: 'none', width: 44, height: 44, borderRadius: '50%', background: '#fff', border: '2.5px solid ' + INK, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 20 }}>✓</span>
                  <div>
                    <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 24, letterSpacing: '-.03em' }}>Proposta enviada!</div>
                    <div style={{ fontSize: 15 }}>Avisamos você quando a loja responder.</div>
                  </div>
                </div>
                <button onClick={() => setOpen(null)} style={{ marginTop: 16, width: '100%', font: "700 16px 'DM Sans',sans-serif", cursor: 'pointer', background: INK, color: '#fff', border: '2.5px solid ' + INK, borderRadius: 16, padding: 14 }}>Voltar à loja</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
