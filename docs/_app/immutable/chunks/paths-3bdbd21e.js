function E() {}
function G(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function q(t) {
	return t();
}
function T() {
	return Object.create(null);
}
function p(t) {
	t.forEach(q);
}
function B(t) {
	return typeof t == 'function';
}
function ut(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let g;
function ot(t, e) {
	return g || (g = document.createElement('a')), (g.href = e), t === g.href;
}
function I(t) {
	return Object.keys(t).length === 0;
}
function J(t, ...e) {
	if (t == null) return E;
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ft(t, e, n) {
	t.$$.on_destroy.push(J(e, n));
}
function at(t, e, n, i) {
	if (t) {
		const r = H(t, e, n, i);
		return t[0](r);
	}
}
function H(t, e, n, i) {
	return t[1] && i ? G(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function _t(t, e, n, i) {
	if (t[2] && i) {
		const r = t[2](i(n));
		if (e.dirty === void 0) return r;
		if (typeof r == 'object') {
			const o = [],
				c = Math.max(e.dirty.length, r.length);
			for (let u = 0; u < c; u += 1) o[u] = e.dirty[u] | r[u];
			return o;
		}
		return e.dirty | r;
	}
	return e.dirty;
}
function dt(t, e, n, i, r, o) {
	if (r) {
		const c = H(e, n, i, o);
		t.p(c, r);
	}
}
function ht(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
let w = !1;
function K() {
	w = !0;
}
function R() {
	w = !1;
}
function W(t, e, n, i) {
	for (; t < e; ) {
		const r = t + ((e - t) >> 1);
		n(r) <= i ? (t = r + 1) : (e = r);
	}
	return t;
}
function Q(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const l = [];
		for (let s = 0; s < e.length; s++) {
			const a = e[s];
			a.claim_order !== void 0 && l.push(a);
		}
		e = l;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let r = 0;
	for (let l = 0; l < e.length; l++) {
		const s = e[l].claim_order,
			a = (r > 0 && e[n[r]].claim_order <= s ? r + 1 : W(1, r, (y) => e[n[y]].claim_order, s)) - 1;
		i[l] = n[a] + 1;
		const f = a + 1;
		(n[f] = l), (r = Math.max(f, r));
	}
	const o = [],
		c = [];
	let u = e.length - 1;
	for (let l = n[r] + 1; l != 0; l = i[l - 1]) {
		for (o.push(e[l - 1]); u >= l; u--) c.push(e[u]);
		u--;
	}
	for (; u >= 0; u--) c.push(e[u]);
	o.reverse(), c.sort((l, s) => l.claim_order - s.claim_order);
	for (let l = 0, s = 0; l < c.length; l++) {
		for (; s < o.length && c[l].claim_order >= o[s].claim_order; ) s++;
		const a = s < o.length ? o[s] : null;
		t.insertBefore(c[l], a);
	}
}
function U(t, e) {
	if (w) {
		for (
			Q(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function mt(t, e, n) {
	w && !n ? U(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function V(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function pt(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function X(t) {
	return document.createElement(t);
}
function S(t) {
	return document.createTextNode(t);
}
function yt() {
	return S(' ');
}
function gt() {
	return S('');
}
function xt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function bt(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Y(t) {
	return Array.from(t.childNodes);
}
function Z(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function L(t, e, n, i, r = !1) {
	Z(t);
	const o = (() => {
		for (let c = t.claim_info.last_index; c < t.length; c++) {
			const u = t[c];
			if (e(u)) {
				const l = n(u);
				return l === void 0 ? t.splice(c, 1) : (t[c] = l), r || (t.claim_info.last_index = c), u;
			}
		}
		for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
			const u = t[c];
			if (e(u)) {
				const l = n(u);
				return (
					l === void 0 ? t.splice(c, 1) : (t[c] = l),
					r ? l === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = c),
					u
				);
			}
		}
		return i();
	})();
	return (o.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), o;
}
function tt(t, e, n, i) {
	return L(
		t,
		(r) => r.nodeName === e,
		(r) => {
			const o = [];
			for (let c = 0; c < r.attributes.length; c++) {
				const u = r.attributes[c];
				n[u.name] || o.push(u.name);
			}
			o.forEach((c) => r.removeAttribute(c));
		},
		() => i(e)
	);
}
function $t(t, e, n) {
	return tt(t, e, n, X);
}
function et(t, e) {
	return L(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => S(e),
		!0
	);
}
function Et(t) {
	return et(t, ' ');
}
function wt(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function Nt(t, e, n, i) {
	n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function vt(t, e) {
	const n = [];
	let i = 0;
	for (const r of e.childNodes)
		if (r.nodeType === 8) {
			const o = r.textContent.trim();
			o === `HEAD_${t}_END`
				? ((i -= 1), n.push(r))
				: o === `HEAD_${t}_START` && ((i += 1), n.push(r));
		} else i > 0 && n.push(r);
	return n;
}
function At(t, e) {
	return new t(e);
}
let m;
function h(t) {
	m = t;
}
function O() {
	if (!m) throw new Error('Function called outside component initialization');
	return m;
}
function St(t) {
	O().$$.on_mount.push(t);
}
function jt(t) {
	O().$$.after_update.push(t);
}
const d = [],
	M = [],
	b = [],
	D = [],
	P = Promise.resolve();
let v = !1;
function z() {
	v || ((v = !0), P.then(F));
}
function Ct() {
	return z(), P;
}
function A(t) {
	b.push(t);
}
const N = new Set();
let x = 0;
function F() {
	const t = m;
	do {
		for (; x < d.length; ) {
			const e = d[x];
			x++, h(e), nt(e.$$);
		}
		for (h(null), d.length = 0, x = 0; M.length; ) M.pop()();
		for (let e = 0; e < b.length; e += 1) {
			const n = b[e];
			N.has(n) || (N.add(n), n());
		}
		b.length = 0;
	} while (d.length);
	for (; D.length; ) D.pop()();
	(v = !1), N.clear(), h(t);
}
function nt(t) {
	if (t.fragment !== null) {
		t.update(), p(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A);
	}
}
const $ = new Set();
let _;
function Tt() {
	_ = { r: 0, c: [], p: _ };
}
function Mt() {
	_.r || p(_.c), (_ = _.p);
}
function it(t, e) {
	t && t.i && ($.delete(t), t.i(e));
}
function Dt(t, e, n, i) {
	if (t && t.o) {
		if ($.has(t)) return;
		$.add(t),
			_.c.push(() => {
				$.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	} else i && i();
}
function kt(t) {
	t && t.c();
}
function qt(t, e) {
	t && t.l(e);
}
function rt(t, e, n, i) {
	const { fragment: r, after_update: o } = t.$$;
	r && r.m(e, n),
		i ||
			A(() => {
				const c = t.$$.on_mount.map(q).filter(B);
				t.$$.on_destroy ? t.$$.on_destroy.push(...c) : p(c), (t.$$.on_mount = []);
			}),
		o.forEach(A);
}
function ct(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(p(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function lt(t, e) {
	t.$$.dirty[0] === -1 && (d.push(t), z(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Bt(t, e, n, i, r, o, c, u = [-1]) {
	const l = m;
	h(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: [],
		props: o,
		update: E,
		not_equal: r,
		bound: T(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (l ? l.$$.context : [])),
		callbacks: T(),
		dirty: u,
		skip_bound: !1,
		root: e.target || l.$$.root
	});
	c && c(s.root);
	let a = !1;
	if (
		((s.ctx = n
			? n(t, e.props || {}, (f, y, ...j) => {
					const C = j.length ? j[0] : y;
					return (
						s.ctx &&
							r(s.ctx[f], (s.ctx[f] = C)) &&
							(!s.skip_bound && s.bound[f] && s.bound[f](C), a && lt(t, f)),
						y
					);
			  })
			: []),
		s.update(),
		(a = !0),
		p(s.before_update),
		(s.fragment = i ? i(s.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			K();
			const f = Y(e.target);
			s.fragment && s.fragment.l(f), f.forEach(V);
		} else s.fragment && s.fragment.c();
		e.intro && it(t.$$.fragment), rt(t, e.target, e.anchor, e.customElement), R(), F();
	}
	h(l);
}
class Ht {
	$destroy() {
		ct(this, 1), (this.$destroy = E);
	}
	$on(e, n) {
		if (!B(n)) return E;
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const r = i.indexOf(n);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !I(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
let k = '',
	st = '';
function Lt(t) {
	(k = t.base), (st = t.assets || k);
}
export {
	Ct as A,
	Lt as B,
	E as C,
	st as D,
	k as E,
	U as F,
	at as G,
	vt as H,
	dt as I,
	ht as J,
	_t as K,
	ft as L,
	ot as M,
	xt as N,
	pt as O,
	Ht as S,
	yt as a,
	mt as b,
	Et as c,
	Mt as d,
	gt as e,
	it as f,
	Tt as g,
	V as h,
	Bt as i,
	jt as j,
	X as k,
	$t as l,
	Y as m,
	bt as n,
	St as o,
	Nt as p,
	S as q,
	et as r,
	ut as s,
	Dt as t,
	wt as u,
	At as v,
	kt as w,
	qt as x,
	rt as y,
	ct as z
};
