import {
	S as D,
	i as S,
	s as V,
	k as v,
	q as I,
	a as k,
	l as d,
	m as p,
	r as L,
	h as r,
	c as x,
	n as h,
	E as H,
	b as N,
	F as o,
	C as B,
	G as W,
	w as z,
	H as F,
	x as G,
	y as J,
	I as K,
	J as M,
	K as R,
	f as w,
	t as C,
	z as T
} from '../../chunks/paths-3bdbd21e.js';
function U(y) {
	let t, n, a, s, c, i, $, m, _;
	return {
		c() {
			(t = v('nav')),
				(n = v('ul')),
				(a = v('li')),
				(s = v('a')),
				(c = I('expositie')),
				(i = k()),
				($ = v('li')),
				(m = v('a')),
				(_ = I('over mij')),
				this.h();
		},
		l(E) {
			t = d(E, 'NAV', { class: !0 });
			var u = p(t);
			n = d(u, 'UL', { class: !0 });
			var g = p(n);
			a = d(g, 'LI', {});
			var l = p(a);
			s = d(l, 'A', { href: !0 });
			var e = p(s);
			(c = L(e, 'expositie')), e.forEach(r), l.forEach(r), (i = x(g)), ($ = d(g, 'LI', {}));
			var f = p($);
			m = d(f, 'A', { href: !0 });
			var b = p(m);
			(_ = L(b, 'over mij')), b.forEach(r), f.forEach(r), g.forEach(r), u.forEach(r), this.h();
		},
		h() {
			h(s, 'href', H + '/'),
				h(m, 'href', H + '/over'),
				h(n, 'class', 'svelte-10sccse'),
				h(t, 'class', 'svelte-10sccse');
		},
		m(E, u) {
			N(E, t, u), o(t, n), o(n, a), o(a, s), o(s, c), o(n, i), o(n, $), o($, m), o(m, _);
		},
		p: B,
		i: B,
		o: B,
		d(E) {
			E && r(t);
		}
	};
}
class O extends D {
	constructor(t) {
		super(), S(this, t, null, U, V, {});
	}
}
function P(y) {
	let t, n, a, s, c, i, $, m, _, E, u;
	_ = new O({});
	const g = y[1].default,
		l = W(g, y, y[0], null);
	return {
		c() {
			(t = v('meta')),
				(n = k()),
				(a = v('div')),
				(s = v('header')),
				(c = v('h1')),
				(i = v('a')),
				($ = I('Bauke Westendorp')),
				(m = k()),
				z(_.$$.fragment),
				(E = k()),
				l && l.c(),
				this.h();
		},
		l(e) {
			const f = F('svelte-13ns0kv', document.head);
			(t = d(f, 'META', { name: !0, content: !0 })),
				f.forEach(r),
				(n = x(e)),
				(a = d(e, 'DIV', { class: !0 }));
			var b = p(a);
			s = d(b, 'HEADER', { class: !0 });
			var A = p(s);
			c = d(A, 'H1', { class: !0 });
			var j = p(c);
			i = d(j, 'A', { href: !0, class: !0 });
			var q = p(i);
			($ = L(q, 'Bauke Westendorp')),
				q.forEach(r),
				j.forEach(r),
				(m = x(A)),
				G(_.$$.fragment, A),
				A.forEach(r),
				(E = x(b)),
				l && l.l(b),
				b.forEach(r),
				this.h();
		},
		h() {
			h(t, 'name', 'theme-color'),
				h(t, 'content', '#29bb8e'),
				h(i, 'href', H + '/'),
				h(i, 'class', 'svelte-e433v5'),
				h(c, 'class', 'svelte-e433v5'),
				h(s, 'class', 'svelte-e433v5'),
				h(a, 'class', 'layout svelte-e433v5');
		},
		m(e, f) {
			o(document.head, t),
				N(e, n, f),
				N(e, a, f),
				o(a, s),
				o(s, c),
				o(c, i),
				o(i, $),
				o(s, m),
				J(_, s, null),
				o(a, E),
				l && l.m(a, null),
				(u = !0);
		},
		p(e, [f]) {
			l && l.p && (!u || f & 1) && K(l, g, e, e[0], u ? R(g, e[0], f, null) : M(e[0]), null);
		},
		i(e) {
			u || (w(_.$$.fragment, e), w(l, e), (u = !0));
		},
		o(e) {
			C(_.$$.fragment, e), C(l, e), (u = !1);
		},
		d(e) {
			r(t), e && r(n), e && r(a), T(_), l && l.d(e);
		}
	};
}
function Q(y, t, n) {
	let { $$slots: a = {}, $$scope: s } = t;
	return (
		(y.$$set = (c) => {
			'$$scope' in c && n(0, (s = c.$$scope));
		}),
		[s, a]
	);
}
class Y extends D {
	constructor(t) {
		super(), S(this, t, Q, P, V, {});
	}
}
export { Y as default };
