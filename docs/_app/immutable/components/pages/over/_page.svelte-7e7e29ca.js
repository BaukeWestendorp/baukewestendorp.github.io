import {
	S as I,
	i as M,
	s as q,
	a as k,
	k as c,
	q as E,
	H as D,
	h as a,
	c as _,
	l as v,
	m as f,
	r as y,
	M as G,
	n as l,
	b as p,
	F as m,
	C as w,
	E as O
} from '../../../chunks/paths-3bdbd21e.js';
function W(B) {
	let r, s, u, d, t, n, z, j, o, g;
	return {
		c() {
			(r = k()),
				(s = c('h2')),
				(u = E('Over Mij')),
				(d = k()),
				(t = c('div')),
				(n = c('img')),
				(j = k()),
				(o = c('p')),
				(g =
					E(`Je had hoogstwaarschijnlijk al zo'n vermoeden: ik ben Bauke Westendorp. Al heel mijn leven woon
		in het weinigzijdige maar vertrouwde Drachten, alhoewel mijn vroegtijdige studentenhartje al een
		tijd een oogje op het prachtige Groningen heeft. Ik kan me onvoorwaardelijk vermaken met muziek,
		foto, video, kunst en voornamelijk programmeren met een mespuntje zwarte peper.`)),
				this.h();
		},
		l(e) {
			D('svelte-1nd7dvz', document.head).forEach(a), (r = _(e)), (s = v(e, 'H2', {}));
			var x = f(s);
			(u = y(x, 'Over Mij')), x.forEach(a), (d = _(e)), (t = v(e, 'DIV', { class: !0 }));
			var h = f(t);
			(n = v(h, 'IMG', { src: !0, alt: !0, class: !0 })),
				(j = _(h)),
				(o = v(h, 'P', { class: !0 }));
			var b = f(o);
			(g = y(
				b,
				`Je had hoogstwaarschijnlijk al zo'n vermoeden: ik ben Bauke Westendorp. Al heel mijn leven woon
		in het weinigzijdige maar vertrouwde Drachten, alhoewel mijn vroegtijdige studentenhartje al een
		tijd een oogje op het prachtige Groningen heeft. Ik kan me onvoorwaardelijk vermaken met muziek,
		foto, video, kunst en voornamelijk programmeren met een mespuntje zwarte peper.`
			)),
				b.forEach(a),
				h.forEach(a),
				this.h();
		},
		h() {
			(document.title = 'Bauke Westendorp: Over'),
				G(n.src, (z = O + '/pages/over/bauke.jpg')) || l(n, 'src', z),
				l(n, 'alt', 'Bauke'),
				l(n, 'class', 'svelte-1g1onxg'),
				l(o, 'class', 'svelte-1g1onxg'),
				l(t, 'class', 'over');
		},
		m(e, i) {
			p(e, r, i), p(e, s, i), m(s, u), p(e, d, i), p(e, t, i), m(t, n), m(t, j), m(t, o), m(o, g);
		},
		p: w,
		i: w,
		o: w,
		d(e) {
			e && a(r), e && a(s), e && a(d), e && a(t);
		}
	};
}
class C extends I {
	constructor(r) {
		super(), M(this, r, null, W, q, {});
	}
}
export { C as default };
