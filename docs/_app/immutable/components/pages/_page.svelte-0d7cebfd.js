import {
	S,
	i as D,
	s as G,
	k as d,
	a as E,
	e as B,
	l as g,
	c as w,
	n as p,
	M as y,
	E as $,
	b as h,
	N as H,
	C,
	h as m,
	q as O,
	m as q,
	r as T,
	F as k,
	H as V,
	f as b,
	d as F,
	t as I,
	O as U,
	w as W,
	x as j,
	y as A,
	z as J,
	g as K
} from '../../chunks/paths-3bdbd21e.js';
function M(c) {
	let t, l, a, f, n, _, u, s, r;
	return {
		c() {
			(t = d('div')), (l = d('img')), (n = E()), (_ = d('button')), (u = O('Close')), this.h();
		},
		l(e) {
			t = g(e, 'DIV', { class: !0 });
			var i = q(t);
			(l = g(i, 'IMG', { src: !0, alt: !0, class: !0 })), (n = w(i)), (_ = g(i, 'BUTTON', {}));
			var o = q(_);
			(u = T(o, 'Close')), o.forEach(m), i.forEach(m), this.h();
		},
		h() {
			y(l.src, (a = $ + '/posts/images/' + c[0].image)) || p(l, 'src', a),
				p(l, 'alt', (f = c[0].image)),
				p(l, 'class', 'svelte-1v1zw4s'),
				p(t, 'class', 'enlargend svelte-1v1zw4s');
		},
		m(e, i) {
			h(e, t, i), k(t, l), k(t, n), k(t, _), k(_, u), s || ((r = H(t, 'click', c[3])), (s = !0));
		},
		p(e, i) {
			i & 1 && !y(l.src, (a = $ + '/posts/images/' + e[0].image)) && p(l, 'src', a),
				i & 1 && f !== (f = e[0].image) && p(l, 'alt', f);
		},
		d(e) {
			e && m(t), (s = !1), r();
		}
	};
}
function L(c) {
	let t,
		l,
		a,
		f,
		n,
		_,
		u,
		s = c[1] && M(c);
	return {
		c() {
			(t = d('img')), (f = E()), s && s.c(), (n = B()), this.h();
		},
		l(r) {
			(t = g(r, 'IMG', { class: !0, src: !0, alt: !0 })),
				(f = w(r)),
				s && s.l(r),
				(n = B()),
				this.h();
		},
		h() {
			p(t, 'class', 'thumbnail svelte-1v1zw4s'),
				y(t.src, (l = $ + '/posts/images/' + c[0].image)) || p(t, 'src', l),
				p(t, 'alt', (a = c[0].image));
		},
		m(r, e) {
			h(r, t, e),
				h(r, f, e),
				s && s.m(r, e),
				h(r, n, e),
				_ || ((u = H(t, 'click', c[2])), (_ = !0));
		},
		p(r, [e]) {
			e & 1 && !y(t.src, (l = $ + '/posts/images/' + r[0].image)) && p(t, 'src', l),
				e & 1 && a !== (a = r[0].image) && p(t, 'alt', a),
				r[1]
					? s
						? s.p(r, e)
						: ((s = M(r)), s.c(), s.m(n.parentNode, n))
					: s && (s.d(1), (s = null));
		},
		i: C,
		o: C,
		d(r) {
			r && m(t), r && m(f), s && s.d(r), r && m(n), (_ = !1), u();
		}
	};
}
function Q(c, t, l) {
	let { post: a } = t,
		f = !1;
	const n = () => l(1, (f = !0)),
		_ = () => l(1, (f = !1));
	return (
		(c.$$set = (u) => {
			'post' in u && l(0, (a = u.post));
		}),
		[a, f, n, _]
	);
}
class R extends S {
	constructor(t) {
		super(), D(this, t, Q, L, G, { post: 0 });
	}
}
function N(c, t, l) {
	const a = c.slice();
	return (a[2] = t[l]), a;
}
function P(c) {
	let t, l;
	return (
		(t = new R({ props: { post: c[2] } })),
		{
			c() {
				W(t.$$.fragment);
			},
			l(a) {
				j(t.$$.fragment, a);
			},
			m(a, f) {
				A(t, a, f), (l = !0);
			},
			p: C,
			i(a) {
				l || (b(t.$$.fragment, a), (l = !0));
			},
			o(a) {
				I(t.$$.fragment, a), (l = !1);
			},
			d(a) {
				J(t, a);
			}
		}
	);
}
function X(c) {
	let t,
		l,
		a,
		f,
		n,
		_,
		u = c[0],
		s = [];
	for (let e = 0; e < u.length; e += 1) s[e] = P(N(c, u, e));
	const r = (e) =>
		I(s[e], 1, 1, () => {
			s[e] = null;
		});
	return {
		c() {
			(t = E()), (l = d('h2')), (a = O('Expositie')), (f = E()), (n = d('div'));
			for (let e = 0; e < s.length; e += 1) s[e].c();
			this.h();
		},
		l(e) {
			V('svelte-1g1e0qn', document.head).forEach(m), (t = w(e)), (l = g(e, 'H2', {}));
			var o = q(l);
			(a = T(o, 'Expositie')), o.forEach(m), (f = w(e)), (n = g(e, 'DIV', { class: !0 }));
			var v = q(n);
			for (let z = 0; z < s.length; z += 1) s[z].l(v);
			v.forEach(m), this.h();
		},
		h() {
			(document.title = 'Bauke Westendorp: Expositie'), p(n, 'class', 'posts svelte-1kwwkpd');
		},
		m(e, i) {
			h(e, t, i), h(e, l, i), k(l, a), h(e, f, i), h(e, n, i);
			for (let o = 0; o < s.length; o += 1) s[o].m(n, null);
			_ = !0;
		},
		p(e, [i]) {
			if (i & 1) {
				u = e[0];
				let o;
				for (o = 0; o < u.length; o += 1) {
					const v = N(e, u, o);
					s[o]
						? (s[o].p(v, i), b(s[o], 1))
						: ((s[o] = P(v)), s[o].c(), b(s[o], 1), s[o].m(n, null));
				}
				for (K(), o = u.length; o < s.length; o += 1) r(o);
				F();
			}
		},
		i(e) {
			if (!_) {
				for (let i = 0; i < u.length; i += 1) b(s[i]);
				_ = !0;
			}
		},
		o(e) {
			s = s.filter(Boolean);
			for (let i = 0; i < s.length; i += 1) I(s[i]);
			_ = !1;
		},
		d(e) {
			e && m(t), e && m(l), e && m(f), e && m(n), U(s, e);
		}
	};
}
function Y(c, t, l) {
	let { data: a } = t,
		f = a.posts;
	return (
		(c.$$set = (n) => {
			'data' in n && l(1, (a = n.data));
		}),
		[f, a]
	);
}
class x extends S {
	constructor(t) {
		super(), D(this, t, Y, X, G, { data: 1 });
	}
}
export { x as default };
