/*! For license information please see out.js.LICENSE.txt */
https: //nettleweb.com/


    /*! Copyright (C) 2024 nettleweb.com; All rights reserved. !*/
    "use strict";

(() => {
    function e(e) {
        return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    }

    function t() {
        return new TransformStream({
            transform(t, n) {
                ! function(t, n) {
                    Wt && t.data instanceof Blob ? t.data.arrayBuffer().then(e).then(n) : qt && (t.data instanceof ArrayBuffer || Gt(t.data)) ? n(e(t.data)) : Jt(t, !1, (e => {
                        Yt || (Yt = new TextEncoder), n(Yt.encode(e))
                    }))
                }(t, (e => {
                    const r = e.length;
                    let o;
                    if (r < 126) o = new Uint8Array(1),
                        new DataView(o.buffer).setUint8(0, r);
                    else if (r < 65536) {
                        o = new Uint8Array(3);
                        const e = new DataView(o.buffer);
                        e.setUint8(0, 126), e.setUint16(1, r)
                    } else {
                        o = new Uint8Array(9);
                        const e = new DataView(o.buffer);
                        e.setUint8(0, 127), e.setBigUint64(1, BigInt(r))
                    }
                    t.data && "string" != typeof t.data && (o[0] |= 128), n.enqueue(o), n.enqueue(e)
                }))
            }
        })
    }

    function n(e) {
        return e.reduce(((e, t) => e + t.length), 0)
    }

    function r(e, t) {
        if (e[0].length === t) return e.shift();
        const n = new Uint8Array(t);
        let r = 0;
        for (let o = 0; o < t; o++) n[o] = e[0][r++],
            r === e[0].length && (e.shift(), r = 0);
        return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
    }

    function o(e) {
        if (e) return function(e) {
            for (var t in o.prototype) e[t] = o.prototype[t];
            return e
        }(e)
    }

    function i(e, ...t) {
        return t.reduce(((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t)), {})
    }

    function a(e, t) {
        t.useNativeTimers ? (e.setTimeoutFn = an.bind(on), e.clearTimeoutFn = sn.bind(on)) : (e.setTimeoutFn = on.setTimeout.bind(on), e.clearTimeoutFn = on.clearTimeout.bind(on))
    }

    function s() {
        return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
    }

    function c() {}

    function l() {
        for (let e in fn.requests) fn.requests.hasOwnProperty(e) && fn.requests[e].abort()
    }

    function d(e) {
        const t = e.xdomain;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!t || hn)) return new XMLHttpRequest
        } catch (e) {}
        if (!t) try {
            return new(on[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function u(e) {
        if (e.length > 8e3) throw "URI too long";
        const t = e,
            n = e.indexOf("["),
            r = e.indexOf("]"); - 1 != n && -1 != r && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
        let o = wn.exec(e || ""),
            i = {},
            a = 14;
        for (; a--;) i[kn[a]] = o[a] || "";
        return -1 != n && -1 != r && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = function(e, t) {
            const n = /\/{2,9}/g,
                r = t.replace(n, "/").split("/");
            return "/" != t.slice(0, 1) && 0 !== t.length || r.splice(0, 1), "/" == t.slice(-1) && r.splice(r.length - 1, 1), r
        }(0, i.path), i.queryKey = function(e, t) {
            const n = {};
            return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(e, t, r) {
                t && (n[t] = r)
            })), n
        }(0, i.query), i
    }

    function h(e) {
        return Sn && (e instanceof ArrayBuffer || Ln(e)) || jn && e instanceof Blob || _n && e instanceof File
    }

    function p(e, t) {
        if (!e || "object" != typeof e) return !1;
        if (Array.isArray(e)) {
            for (let t = 0, n = e.length; t < n; t++)
                if (p(e[t])) return !0;
            return !1
        }
        if (h(e)) return !0;
        if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return p(e.toJSON(), !0);
        for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t) && p(e[t])) return !0;
        return !1
    }

    function f(e) {
        const t = [],
            n = e.data,
            r = e;
        return r.data = m(n, t), r.attachments = t.length, {
            packet: r,
            buffers: t
        }
    }

    function m(e, t) {
        if (!e) return e;
        if (h(e)) {
            const n = {
                _placeholder: !0,
                num: t.length
            };
            return t.push(e), n
        }
        if (Array.isArray(e)) {
            const n = Array(e.length);
            for (let r = 0; r < e.length; r++) n[r] = m(e[r], t);
            return n
        }
        if ("object" == typeof e && !(e instanceof Date)) {
            const n = {};
            for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = m(e[r], t));
            return n
        }
        return e
    }

    function g(e, t) {
        return e.data = b(e.data, t), delete e.attachments, e
    }

    function b(e, t) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
            if ("number" == typeof e.num && e.num >= 0 && e.num < t.length) return t[e.num];
            throw Error("illegal attachments")
        }
        if (Array.isArray(e))
            for (let n = 0; n < e.length; n++) e[n] = b(e[n], t);
        else if ("object" == typeof e)
            for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = b(e[n], t));
        return e
    }

    function y(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function v(e, t, n) {
        return e.on(t, n),
            function() {
                e.off(t, n)
            }
    }

    function w(e) {
        e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
    }

    function k(e, t) {
        "object" == typeof e && (t = e,
            e = void 0);
        const n = function(e, t = "", n) {
                let r = e;
                n = n || "undefined" != typeof location && location, null == e && (e = n.protocol + "//" + n.host), "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e), /^(https?|wss?):\/\//.test(e) || (e = void 0 !== n ? n.protocol + "//" + e : "https://" + e), r = u(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
                const o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + o + ":" + r.port + t, r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port), r
            }(e, (t = t || {}).path || "/socket.io"),
            r = n.source,
            o = n.id,
            i = n.path,
            a = Hn[o] && i in Hn[o].nsps;
        let s;
        return t.forceNew || t["force new connection"] || !1 === t.multiplex || a ? s = new Un(r, t) : (Hn[o] || (Hn[o] = new Un(r, t)), s = Hn[o]), n.query && !t.query && (t.query = n.queryKey), s.socket(n.path, t)
    }

    function E() {
        try {
            return "object" == typeof indexedDB
        } catch (e) {
            return !1
        }
    }

    function C() {
        return new Promise(((e, t) => {
            try {
                let n = !0;
                const r = "validate-browser-context-for-indexeddb-analytics-module",
                    o = self.indexedDB.open(r);
                o.onsuccess = () => {
                    o.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                }, o.onupgradeneeded = () => {
                    n = !1
                }, o.onerror = () => {
                    var e;
                    t((null === (e = o.error) || void 0 === e ? void 0 : e.message) || "")
                }
            } catch (e) {
                t(e)
            }
        }))
    }

    function x(e, t) {
        if (e === t) return !0;
        const n = Object.keys(e),
            r = Object.keys(t);
        for (const o of n) {
            if (!r.includes(o)) return !1;
            const n = e[o],
                i = t[o];
            if (A(n) && A(i)) {
                if (!x(n, i)) return !1
            } else if (n !== i) return !1
        }
        for (const e of r)
            if (!n.includes(e)) return !1;
        return !0
    }

    function A(e) {
        return null !== e && "object" == typeof e
    }

    function T(e, t = er, n = tr) {
        const r = t * Math.pow(n, e),
            o = Math.round(rr * r * (Math.random() - .5) * 2);
        return Math.min(nr, r + o)
    }

    function S(e) {
        return e && e._delegate ? e._delegate : e
    }

    function L(e) {
        return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (br || (br = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
            return e.apply(xr(this), t), j(yr.get(this))
        } : function(...t) {
            return j(e.apply(xr(this), t))
        } : function(t, ...n) {
            const r = e.call(xr(this), t, ...n);
            return wr.set(r, t.sort ? t.sort() : [t]), j(r)
        }
    }

    function I(e) {
        return "function" == typeof e ? L(e) : (e instanceof IDBTransaction && function(e) {
            if (vr.has(e)) return;
            const t = new Promise(((t, n) => {
                const r = () => {
                        e.removeEventListener("complete", o), e.removeEventListener("error", i), e.removeEventListener("abort", i)
                    },
                    o = () => {
                        t(), r()
                    },
                    i = () => {
                        n(e.error || new DOMException("AbortError", "AbortError")), r()
                    };
                e.addEventListener("complete", o), e.addEventListener("error", i), e.addEventListener("abort", i)
            }));
            vr.set(e, t)
        }(e), mr(e, gr || (gr = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, Cr) : e)
    }

    function j(e) {
        if (e instanceof IDBRequest) return function(e) {
            const t = new Promise(((t, n) => {
                const r = () => {
                        e.removeEventListener("success", o), e.removeEventListener("error", i)
                    },
                    o = () => {
                        t(j(e.result)), r()
                    },
                    i = () => {
                        n(e.error), r()
                    };
                e.addEventListener("success", o), e.addEventListener("error", i)
            }));
            return t.then((t => {
                t instanceof IDBCursor && yr.set(t, e)
            })).catch((() => {})), Er.set(t, e), t
        }(e);
        if (kr.has(e)) return kr.get(e);
        const t = I(e);
        return t !== e && (kr.set(e, t), Er.set(t, e)), t
    }

    function _(e, t, {
        blocked: n,
        upgrade: r,
        blocking: o,
        terminated: i
    } = {}) {
        const a = indexedDB.open(e, t),
            s = j(a);
        return r && a.addEventListener("upgradeneeded", (e => {
            r(j(a.result), e.oldVersion, e.newVersion, j(a.transaction), e)
        })), n && a.addEventListener("blocked", (e => n(e.oldVersion, e.newVersion, e))), s.then((e => {
            i && e.addEventListener("close", (() => i())), o && e.addEventListener("versionchange", (e => o(e.oldVersion, e.newVersion, e)))
        })).catch((() => {})), s
    }

    function M(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
        if (Sr.get(t)) return Sr.get(t);
        const n = t.replace(/FromIndex$/, ""),
            r = t !== n,
            o = Tr.includes(n);
        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !Ar.includes(n)) return;
        const i = async function(e, ...t) {
            const i = this.transaction(e, o ? "readwrite" : "readonly");
            let a = i.store;
            return r && (a = a.index(t.shift())), (await Promise.all([a[n](...t), o && i.done]))[0]
        };
        return Sr.set(t, i), i
    }

    function O(e, t) {
        try {
            e.container.addComponent(t)
        } catch (n) {
            Mr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
        }
    }

    function P(e) {
        const t = e.name;
        if (lo.has(t)) return Mr.debug(`There were multiple attempts to register component ${t}.`), !1;
        lo.set(t, e);
        for (const t of so.values()) O(t, e);
        for (const t of co.values()) O(t, e);
        return !0
    }

    function B(e, t) {
        const n = e.container.getProvider("heartbeat").getImmediate({
            optional: !0
        });
        return n && n.triggerHeartbeat(), e.container.getProvider(t)
    }

    function N(e, t = {}) {
        let n = e;
        "object" != typeof t && (t = {
            name: t
        });
        const r = Object.assign({
                name: io,
                automaticDataCollectionEnabled: !1
            }, t),
            o = r.name;
        if ("string" != typeof o || !o) throw uo.create("bad-app-name", {
            appName: o + ""
        });
        if (n || (n = Yn()), !n) throw uo.create("no-options");
        const i = so.get(o);
        if (i) {
            if (x(n, i.options) && x(r, i.config)) return i;
            throw uo.create("duplicate-app", {
                appName: o
            })
        }
        const a = new sr(o);
        for (const e of lo.values()) a.addComponent(e);
        const s = new ho(n, r, a);
        return so.set(o, s), s
    }

    function D(e, t, n) {
        var r;
        let o = null !== (r = ao[e]) && void 0 !== r ? r : e;
        n && (o += "-" + n);
        const i = o.match(/\s|\//),
            a = t.match(/\s|\//);
        if (i || a) {
            const e = [`Unable to register library "${o}" with version "${t}":`];
            return i && e.push(`library name "${o}" contains illegal characters (whitespace or "/")`), i && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void Mr.warn(e.join(" "))
        }
        P(new or(o + "-version", (() => ({
            library: o,
            version: t
        })), "VERSION"))
    }

    function R() {
        return go || (go = _(po, fo, {
            upgrade: (e, t) => {
                if (0 === t) try {
                    e.createObjectStore(mo)
                } catch (e) {}
            }
        }).catch((e => {
            throw uo.create("idb-open", {
                originalErrorMessage: e.message
            })
        }))), go
    }
    async function F(e, t) {
        try {
            const n = (await R()).transaction(mo, "readwrite"),
                r = n.objectStore(mo);
            await r.put(t, U(e)), await n.done
        } catch (e) {
            if (e instanceof Qn) Mr.warn(e.message);
            else {
                const t = uo.create("idb-set", {
                    originalErrorMessage: null == e ? void 0 : e.message
                });
                Mr.warn(t.message)
            }
        }
    }

    function U(e) {
        return `${e.name}!${e.options.appId}`
    }

    function H() {
        return (new Date).toISOString().substring(0, 10)
    }

    function z(e) {
        return qn(JSON.stringify({
            version: 2,
            heartbeats: e
        })).length
    }

    function V(e) {
        return e instanceof Qn && e.code.includes("request-failed")
    }

    function W({
        projectId: e
    }) {
        return `${Ao}/projects/${e}/installations`
    }

    function q(e) {
        return {
            token: e.token,
            requestStatus: 2,
            expiresIn: (t = e.expiresIn, Number(t.replace("s", "000"))),
            creationTime: Date.now()
        };
        var t
    }
    async function G(e, t) {
        const n = (await t.json()).error;
        return So.create("request-failed", {
            requestName: e,
            serverCode: n.code,
            serverMessage: n.message,
            serverStatus: n.status
        })
    }

    function J({
        apiKey: e
    }) {
        return new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-goog-api-key": e
        })
    }

    function K(e, {
        refreshToken: t
    }) {
        const n = J(e);
        return n.append("Authorization", function(e) {
            return `${xo} ${e}`
        }(t)), n
    }
    async function Y(e) {
        const t = await e();
        return t.status >= 500 && t.status < 600 ? e() : t
    }

    function X(e) {
        return new Promise((t => {
            setTimeout(t, e)
        }))
    }

    function Q() {
        try {
            const e = new Uint8Array(17);
            (self.crypto || self.msCrypto).getRandomValues(e),
                e[0] = 112 + e[0] % 16;
            const t = function(e) {
                const t = (n = e, btoa(String.fromCharCode(...n)).replace(/\+/g, "-").replace(/\//g, "_"));
                var n;
                return t.substr(0, 22)
            }(e);
            return Lo.test(t) ? t : Io
        } catch (e) {
            return Io
        }
    }

    function Z(e) {
        return `${e.appName}!${e.appId}`
    }

    function $(e, t) {
        const n = Z(e);
        ee(n, t),
            function(e, t) {
                const n = te();
                n && n.postMessage({
                    key: e,
                    fid: t
                }), ne()
            }(n, t)
    }

    function ee(e, t) {
        const n = jo.get(e);
        if (n)
            for (const e of n) e(t)
    }

    function te() {
        return !_o && "BroadcastChannel" in self && (_o = new BroadcastChannel("[Firebase] FID Change"), _o.onmessage = e => {
            ee(e.data.key, e.data.fid)
        }), _o
    }

    function ne() {
        0 === jo.size && _o && (_o.close(), _o = null)
    }

    function re() {
        return Bo || (Bo = _(Mo, Oo, {
            upgrade: (e, t) => {
                0 === t && e.createObjectStore(Po)
            }
        })), Bo
    }
    async function oe(e, t) {
        const n = Z(e),
            r = (await re()).transaction(Po, "readwrite"),
            o = r.objectStore(Po),
            i = await o.get(n);
        return await o.put(t, n), await r.done, i && i.fid === t.fid || $(e, t.fid), t
    }
    async function ie(e) {
        const t = Z(e),
            n = (await re()).transaction(Po, "readwrite");
        await n.objectStore(Po).delete(t), await n.done
    }
    async function ae(e, t) {
        const n = Z(e),
            r = (await re()).transaction(Po, "readwrite"),
            o = r.objectStore(Po),
            i = await o.get(n),
            a = t(i);
        return void 0 === a ? await o.delete(n) : await o.put(a, n), await r.done, !a || i && i.fid === a.fid || $(e, a.fid), a
    }
    async function se(e) {
        let t;
        const n = await ae(e.appConfig, (n => {
            const r = function(e) {
                    const t = e || {
                        fid: Q(),
                        registrationStatus: 0
                    };
                    return de(t)
                }(n),
                o = function(e, t) {
                    if (0 === t.registrationStatus) {
                        if (!navigator.onLine) return {
                            installationEntry: t,
                            registrationPromise: Promise.reject(So.create("app-offline"))
                        };
                        const n = {
                                fid: t.fid,
                                registrationStatus: 1,
                                registrationTime: Date.now()
                            },
                            r = async function(e, t) {
                                try {
                                    const n = await async function({
                                        appConfig: e,
                                        heartbeatServiceProvider: t
                                    }, {
                                        fid: n
                                    }) {
                                        const r = W(e),
                                            o = J(e),
                                            i = t.getImmediate({
                                                optional: !0
                                            });
                                        if (i) {
                                            const e = await i.getHeartbeatsHeader();
                                            e && o.append("x-firebase-client", e)
                                        }
                                        const a = {
                                                fid: n,
                                                authVersion: xo,
                                                appId: e.appId,
                                                sdkVersion: Co
                                            },
                                            s = {
                                                method: "POST",
                                                headers: o,
                                                body: JSON.stringify(a)
                                            },
                                            c = await Y((() => fetch(r, s)));
                                        if (c.ok) {
                                            const e = await c.json();
                                            return {
                                                fid: e.fid || n,
                                                registrationStatus: 2,
                                                refreshToken: e.refreshToken,
                                                authToken: q(e.authToken)
                                            }
                                        }
                                        throw await G("Create Installation", c)
                                    }(e, t);
                                    return oe(e.appConfig, n)
                                } catch (n) {
                                    throw V(n) && 409 === n.customData.serverCode ? await ie(e.appConfig) : await oe(e.appConfig, {
                                        fid: t.fid,
                                        registrationStatus: 0
                                    }), n
                                }
                            }(e, n);
                        return {
                            installationEntry: n,
                            registrationPromise: r
                        }
                    }
                    return 1 === t.registrationStatus ? {
                        installationEntry: t,
                        registrationPromise: ce(e)
                    } : {
                        installationEntry: t
                    }
                }(e, r);
            return t = o.registrationPromise, o.installationEntry
        }));
        return n.fid === Io ? {
            installationEntry: await t
        } : {
            installationEntry: n,
            registrationPromise: t
        }
    }
    async function ce(e) {
        let t = await le(e.appConfig);
        for (; 1 === t.registrationStatus;) await X(100), t = await le(e.appConfig);
        if (0 === t.registrationStatus) {
            const {
                installationEntry: t,
                registrationPromise: n
            } = await se(e);
            return n || t
        }
        return t
    }

    function le(e) {
        return ae(e, (e => {
            if (!e) throw So.create("installation-not-found");
            return de(e)
        }))
    }

    function de(e) {
        return 1 === (t = e).registrationStatus && t.registrationTime + Eo < Date.now() ? {
            fid: e.fid,
            registrationStatus: 0
        } : e;
        var t
    }
    async function ue({
        appConfig: e,
        heartbeatServiceProvider: t
    }, n) {
        const r = function(e, {
                fid: t
            }) {
                return `${W(e)}/${t}/authTokens:generate`
            }(e, n),
            o = K(e, n),
            i = t.getImmediate({
                optional: !0
            });
        if (i) {
            const e = await i.getHeartbeatsHeader();
            e && o.append("x-firebase-client", e)
        }
        const a = {
                installation: {
                    sdkVersion: Co,
                    appId: e.appId
                }
            },
            s = {
                method: "POST",
                headers: o,
                body: JSON.stringify(a)
            },
            c = await Y((() => fetch(r, s)));
        if (c.ok) return q(await c.json());
        throw await G("Generate Auth Token", c)
    }
    async function he(e, t = !1) {
        let n;
        const r = await ae(e.appConfig, (r => {
            if (!fe(r)) throw So.create("not-registered");
            const o = r.authToken;
            if (!t && function(e) {
                    return 2 === e.requestStatus && ! function(e) {
                        const t = Date.now();
                        return t < e.creationTime || e.creationTime + e.expiresIn < t + To
                    }(e)
                }(o)) return r;
            if (1 === o.requestStatus) return n = async function(e, t) {
                let n = await pe(e.appConfig);
                for (; 1 === n.authToken.requestStatus;) await X(100), n = await pe(e.appConfig);
                const r = n.authToken;
                return 0 === r.requestStatus ? he(e, t) : r
            }(e, t), r; {
                if (!navigator.onLine) throw So.create("app-offline");
                const t = function(e) {
                    const t = {
                        requestStatus: 1,
                        requestTime: Date.now()
                    };
                    return Object.assign(Object.assign({}, e), {
                        authToken: t
                    })
                }(r);
                return n = async function(e, t) {
                    try {
                        const n = await ue(e, t),
                            r = Object.assign(Object.assign({}, t), {
                                authToken: n
                            });
                        return await oe(e.appConfig, r), n
                    } catch (n) {
                        if (!V(n) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode) {
                            const n = Object.assign(Object.assign({}, t), {
                                authToken: {
                                    requestStatus: 0
                                }
                            });
                            await oe(e.appConfig, n)
                        } else await ie(e.appConfig);
                        throw n
                    }
                }(e, t), t
            }
        }));
        return n ? await n : r.authToken
    }

    function pe(e) {
        return ae(e, (e => {
            if (!fe(e)) throw So.create("not-registered");
            const t = e.authToken;
            return 1 === (n = t).requestStatus && n.requestTime + Eo < Date.now() ? Object.assign(Object.assign({}, e), {
                authToken: {
                    requestStatus: 0
                }
            }) : e;
            var n
        }))
    }

    function fe(e) {
        return void 0 !== e && 2 === e.registrationStatus
    }
    async function me(e, t = !1) {
        const n = e;
        return await async function(e) {
            const {
                registrationPromise: t
            } = await se(e);
            t && await t
        }(n), (await he(n, t)).token
    }

    function ge(e) {
        return So.create("missing-app-config-values", {
            valueName: e
        })
    }

    function be(e) {
        if (!e.startsWith(Vo)) {
            const t = qo.create("invalid-gtag-resource", {
                gtagURL: e
            });
            return Wo.warn(t.message), ""
        }
        return e
    }

    function ye(e) {
        return Promise.all(e.map((e => e.catch((e => e)))))
    }

    function ve(e, t) {
        const n = function(e, t) {
                let n;
                return window.trustedTypes && (n = window.trustedTypes.createPolicy(e, t)), n
            }("firebase-js-sdk-policy", {
                createScriptURL: be
            }),
            r = document.createElement("script"),
            o = `${Vo}?l=${e}&id=${t}`;
        r.src = n ? null == n ? void 0 : n.createScriptURL(o) : o, r.async = !0, document.head.appendChild(r)
    }

    function we(e, t, n, r) {
        return async function(o, ...i) {
            try {
                if ("event" === o) {
                    const [r, o] = i;
                    await async function(e, t, n, r, o) {
                        try {
                            let i = [];
                            if (o && o.send_to) {
                                let e = o.send_to;
                                Array.isArray(e) || (e = [e]);
                                const r = await ye(n);
                                for (const n of e) {
                                    const e = r.find((e => e.measurementId === n)),
                                        o = e && t[e.appId];
                                    if (!o) {
                                        i = [];
                                        break
                                    }
                                    i.push(o)
                                }
                            }
                            0 === i.length && (i = Object.values(t)), await Promise.all(i), e("event", r, o || {})
                        } catch (e) {
                            Wo.error(e)
                        }
                    }(e, t, n, r, o)
                } else if ("config" === o) {
                    const [o, a] = i;
                    await async function(e, t, n, r, o, i) {
                        const a = r[o];
                        try {
                            if (a) await t[a];
                            else {
                                const e = (await ye(n)).find((e => e.measurementId === o));
                                e && await t[e.appId]
                            }
                        } catch (e) {
                            Wo.error(e)
                        }
                        e("config", o, i)
                    }(e, t, n, r, o, a)
                } else if ("consent" === o) {
                    const [t, n] = i;
                    e("consent", t, n)
                } else if ("get" === o) {
                    const [t, n, r] = i;
                    e("get", t, n, r)
                } else if ("set" === o) {
                    const [t] = i;
                    e("set", t)
                } else e(o, ...i)
            } catch (e) {
                Wo.error(e)
            }
        }
    }

    function ke(e) {
        return new Headers({
            Accept: "application/json",
            "x-goog-api-key": e
        })
    }
    async function Ee(e, t = Jo, n) {
        const {
            appId: r,
            apiKey: o,
            measurementId: i
        } = e.options;
        if (!r) throw qo.create("no-app-id");
        if (!o) {
            if (i) return {
                measurementId: i,
                appId: r
            };
            throw qo.create("no-api-key")
        }
        const a = t.getThrottleMetadata(r) || {
                backoffCount: 0,
                throttleEndTimeMillis: Date.now()
            },
            s = new Ko;
        return setTimeout((async () => {
            s.abort()
        }), void 0 !== n ? n : Ho), Ce({
            appId: r,
            apiKey: o,
            measurementId: i
        }, a, s, t)
    }
    async function Ce(e, {
        throttleEndTimeMillis: t,
        backoffCount: n
    }, r, o = Jo) {
        var i;
        const {
            appId: a,
            measurementId: s
        } = e;
        try {
            await
            function(e, t) {
                return new Promise(((n, r) => {
                    const o = Math.max(t - Date.now(), 0),
                        i = setTimeout(n, o);
                    e.addEventListener((() => {
                        clearTimeout(i), r(qo.create("fetch-throttle", {
                            throttleEndTimeMillis: t
                        }))
                    }))
                }))
            }(r, t)
        } catch (e) {
            if (s) return Wo.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID " + s + ` provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`), {
                appId: a,
                measurementId: s
            };
            throw e
        }
        try {
            const t = await async function(e) {
                var t;
                const {
                    appId: n,
                    apiKey: r
                } = e, o = {
                    method: "GET",
                    headers: ke(r)
                }, i = zo.replace("{app-id}", n), a = await fetch(i, o);
                if (200 !== a.status && 304 !== a.status) {
                    let e = "";
                    try {
                        const n = await a.json();
                        (null === (t = n.error) || void 0 === t ? void 0 : t.message) && (e = n.error.message)
                    } catch (e) {}
                    throw qo.create("config-fetch-failed", {
                        httpStatus: a.status,
                        responseMessage: e
                    })
                }
                return a.json()
            }(e);
            return o.deleteThrottleMetadata(a), t
        } catch (t) {
            const c = t;
            if (! function(e) {
                    if (!(e instanceof Qn && e.customData)) return !1;
                    const t = Number(e.customData.httpStatus);
                    return 429 === t || 500 === t || 503 === t || 504 === t
                }(c)) {
                if (o.deleteThrottleMetadata(a),
                    s) return Wo.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID " + s + ` provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`), {
                    appId: a,
                    measurementId: s
                };
                throw t
            }
            const l = 503 === Number(null === (i = null == c ? void 0 : c.customData) || void 0 === i ? void 0 : i.httpStatus) ? T(n, o.intervalMillis, Go) : T(n, o.intervalMillis),
                d = {
                    throttleEndTimeMillis: Date.now() + l,
                    backoffCount: n + 1
                };
            return o.setThrottleMetadata(a, d),
                Wo.debug(`Calling attemptFetch again in ${l} millis`), Ce(e, d, r, o)
        }
    }

    function xe(e) {
        Xo = e
    }

    function Ae(e) {
        Yo = e
    }
    async function Te(e, t, n, r, o, i, a) {
        var s;
        const c = Ee(e);
        c.then((t => {
            n[t.measurementId] = t.appId,
                e.options.measurementId && t.measurementId !== e.options.measurementId && Wo.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
        })).catch((e => Wo.error(e))), t.push(c);
        const l = async function() {
            if (!E()) return Wo.warn(qo.create("indexeddb-unavailable", {
                errorInfo: "IndexedDB is not available in this environment."
            }).message), !1;
            try {
                await C()
            } catch (e) {
                return Wo.warn(qo.create("indexeddb-unavailable", {
                    errorInfo: null == e ? void 0 : e.toString()
                }).message), !1
            }
            return !0
        }().then((e => e ? r.getId() : void 0)), [d, u] = await Promise.all([c, l]);
        (function(e) {
            const t = window.document.getElementsByTagName("script");
            for (const n of Object.values(t))
                if (n.src && n.src.includes(Vo) && n.src.includes(e)) return n;
            return null
        })(i) || ve(i, d.measurementId), Xo && (o("consent", "default", Xo), xe(void 0)), o("js", new Date);
        const h = null !== (s = null == a ? void 0 : a.config) && void 0 !== s ? s : {};
        return h[Uo] = "firebase", h.update = !0, null != u && (h[Fo] = u), o("config", d.measurementId, h), Yo && (o("set", Yo), Ae(void 0)), d.measurementId
    }

    function Se() {
        const e = [];
        if (function() {
                const e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
                return "object" == typeof e && void 0 !== e.id
            }() && e.push("This is a browser extension environment."), "undefined" != typeof navigator && navigator.cookieEnabled || e.push("Cookies are not available."), e.length > 0) {
            const t = e.map(((e, t) => `(${t+1}) ${e}`)).join(" "),
                n = qo.create("invalid-analytics-context", {
                    errorInfo: t
                });
            Wo.warn(n.message)
        }
    }

    function Le(e, t, n) {
        Se();
        const r = e.options.appId;
        if (!r) throw qo.create("no-app-id");
        if (!e.options.apiKey) {
            if (!e.options.measurementId) throw qo.create("no-api-key");
            Wo.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ' + e.options.measurementId + ' provided in the "measurementId" field in the local Firebase config.')
        }
        if (null != Zo[r]) throw qo.create("already-exists", {
            id: r
        });
        if (!ii) {
            ! function(e) {
                let t = [];
                Array.isArray(window[e]) ? t = window[e] : window[e] = t
            }(ri);
            const {
                wrappedGtag: e,
                gtagCore: t
            } = function(e, t, n, r, o) {
                let i = function() {
                    window[r].push(arguments)
                };
                return window[o] && "function" == typeof window[o] && (i = window[o]), window[o] = we(i, e, t, n), {
                    gtagCore: i,
                    wrappedGtag: window[o]
                }
            }(Zo, $o, ei, ri, oi);
            ni = e, ti = t, ii = !0
        }
        return Zo[r] = Te(e, $o, ei, t, ti, ri, n), new Qo(e)
    }

    function Ie(e = function(e = io) {
        const t = so.get(e);
        if (!t && e === io && Yn()) return N();
        if (!t) throw uo.create("no-app", {
            appName: e
        });
        return t
    }()) {
        const t = B(e = S(e), Ro);
        return t.isInitialized() ? t.getImmediate() : function(e, t = {}) {
            const n = B(e, Ro);
            if (n.isInitialized()) {
                const e = n.getImmediate();
                if (x(t, n.getOptions())) return e;
                throw qo.create("already-initialized")
            }
            const r = n.initialize({
                options: t
            });
            return r
        }(e)
    }

    function je(e, t, n, r) {
        e = S(e), async function(e, t, n, r, o) {
            if (o && o.global) e("event", n, r);
            else {
                const o = await t;
                e("event", n, Object.assign(Object.assign({}, r), {
                    send_to: o
                }))
            }
        }(ni, Zo[e.app.options.appId], t, n, r).catch((e => Wo.error(e)))
    }

    function _e(e) {
        if ("string" != typeof e || !e) throw Error("expected a non-empty string, got: " + e)
    }

    function Me(e) {
        if ("number" != typeof e) throw Error("expected a number, got: " + e)
    }

    function Oe(e) {
        return function(e, t) {
            const n = new Set,
                r = [];
            for (const o of e) {
                const e = t(o);
                n.has(e) || (n.add(e), r.push(o))
            }
            return r
        }(e, (e => e.unicode))
    }

    function Pe(e, t, n) {
        n.onerror = () => t(n.error), n.onblocked = () => t(Error("IDB blocked")), n.onsuccess = () => e(n.result)
    }
    async function Be(e) {
        const t = await new Promise(((t, n) => {
            const r = indexedDB.open(e, ci);
            Si[e] = r, r.onupgradeneeded = e => {
                e.oldVersion < li && function(e) {
                    function t(t, n, r) {
                        const o = n ? e.createObjectStore(t, {
                            keyPath: n
                        }) : e.createObjectStore(t);
                        if (r)
                            for (const [e, [t, n]] of Object.entries(r)) o.createIndex(e, t, {
                                multiEntry: n
                            });
                        return o
                    }
                    t(ui), t(di, mi, {
                        [fi]: [pi, !0],
                        [vi]: [
                            [bi, yi]
                        ],
                        [Ai]: [Ti, !0]
                    }), t(hi, void 0, {
                        [gi]: [""]
                    })
                }(r.result)
            }, Pe(t, n, r)
        }));
        return t.onclose = () => De(e), t
    }

    function Ne(e, t, n, r) {
        return new Promise(((o, i) => {
            const a = e.transaction(t, n, {
                    durability: "relaxed"
                }),
                s = "string" == typeof t ? a.objectStore(t) : t.map((e => a.objectStore(e)));
            let c;
            r(s, a, (e => {
                    c = e
                })),
                a.oncomplete = () => o(c), a.onerror = () => i(a.error)
        }))
    }

    function De(e) {
        const t = Si[e],
            n = t && t.result;
        if (n) {
            n.close();
            const t = Ii[e];
            if (t)
                for (const e of t) e()
        }
        delete Si[e], delete Li[e], delete Ii[e]
    }

    function Re(e) {
        return e.split(/[\s_]+/).map((e => !e.match(/\w/) || ji.has(e) ? e.toLowerCase() : e.replace(/[)(:,]/g, "").replace(/\u2019/g, "'").toLowerCase())).filter(Boolean)
    }

    function Fe(e) {
        return e.filter(Boolean).map((e => e.toLowerCase())).filter((e => e.length >= _i))
    }

    function Ue(e, t, n, r) {
        e[t](n).onsuccess = e => r && r(e.target.result)
    }

    function He(e, t, n) {
        Ue(e, "get", t, n)
    }

    function ze(e, t, n) {
        Ue(e, "getAll", t, n)
    }

    function Ve(e) {
        e.commit && e.commit()
    }

    function We(e, t) {
        const n = function(e, t) {
                let n = e[0];
                for (let r = 1; r < e.length; r++) {
                    const o = e[r];
                    t(n) > t(o) && (n = o)
                }
                return n
            }(e, (e => e.length)),
            r = [];
        for (const o of n) e.some((e => -1 === e.findIndex((e => t(e) === t(o))))) || r.push(o);
        return r
    }
    async function qe(e, t, n, r) {
        try {
            const o = function(e) {
                const t = e.map((({
                    annotation: e,
                    emoticon: t,
                    group: n,
                    order: r,
                    shortcodes: o,
                    skins: i,
                    tags: a,
                    emoji: s,
                    version: c
                }) => {
                    const l = {
                        annotation: e,
                        group: n,
                        order: r,
                        tags: a,
                        tokens: [...new Set(Fe([...(o || []).map(Re).flat(), ...(a || []).map(Re).flat(), ...Re(e), t]))].sort(),
                        unicode: s,
                        version: c
                    };
                    if (t && (l.emoticon = t), o && (l.shortcodes = o), i) {
                        l.skinTones = [], l.skinUnicodes = [], l.skinVersions = [];
                        for (const {
                                tone: e,
                                emoji: t,
                                version: n
                            }
                            of i) l.skinTones.push(e), l.skinUnicodes.push(t), l.skinVersions.push(n)
                    }
                    return l
                }));
                return t
            }(t);
            await Ne(e, [di, ui], xi, (([e, t], i) => {
                function a() {
                    2 == ++l && function() {
                        if (s !== r || c !== n) {
                            e.clear();
                            for (const t of o) e.put(t);
                            t.put(r, wi), t.put(n, ki), Ve(i)
                        }
                    }()
                }
                let s, c, l = 0;
                He(t, wi, (e => {
                    s = e, a()
                })), He(t, ki, (e => {
                    c = e, a()
                }))
            }))
        } finally {}
    }
    async function Ge(e, t) {
        const n = Fe(Re(t));
        return n.length ? Ne(e, di, Ci, ((e, t, r) => {
            const o = [],
                i = () => {
                    const e = We(o, (e => e.unicode));
                    r(e.sort(((e, t) => e.order < t.order ? -1 : 1)))
                };
            for (let t = 0; t < n.length; t++) {
                const r = n[t],
                    a = t === n.length - 1 ? IDBKeyRange.bound(r, r + "\uffff", !1, !0) : IDBKeyRange.only(r);
                ze(e.index(fi), a, (e => {
                    o.push(e), o.length === n.length && i()
                }))
            }
        })) : []
    }
    async function Je(e, t) {
        const n = await Ge(e, t);
        if (!n.length) {
            const n = e => (e.shortcodes || []).includes(t.toLowerCase());
            return await async function(e, t) {
                return Ne(e, di, Ci, ((e, n, r) => {
                    let o;
                    const i = () => {
                        e.getAll(o && IDBKeyRange.lowerBound(o, !0), 50).onsuccess = e => {
                            const n = e.target.result;
                            for (const e of n)
                                if (o = e.unicode, t(e)) return r(e);
                            if (n.length < 50) return r();
                            i()
                        }
                    };
                    i()
                }))
            }(e, n) || null
        }
        return n.filter((e => {
            const n = (e.shortcodes || []).map((e => e.toLowerCase()));
            return n.includes(t.toLowerCase())
        }))[0] || null
    }

    function Ke(e, t, n) {
        return Ne(e, t, Ci, ((e, t, r) => He(e, n, r)))
    }

    function Ye(e) {
        ! function(e) {
            const t = e && Array.isArray(e),
                n = t && e.length && (!e[0] || Oi.some((t => !(t in e[0]))));
            if (!t || n) throw Error("Custom emojis are in the wrong format")
        }(e);
        const t = (e, t) => e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1,
            n = e.sort(t),
            r = function(e, t) {
                const n = new Map;
                for (const r of e) {
                    const e = t(r);
                    for (const t of e) {
                        let e = n;
                        for (let n = 0; n < t.length; n++) {
                            const r = t.charAt(n);
                            let o = e.get(r);
                            o || (o = new Map, e.set(r, o)), e = o
                        }
                        let o = e.get(Mi);
                        o || (o = [], e.set(Mi, o)), o.push(r)
                    }
                }
                return (e, t) => {
                    let r = n;
                    for (let t = 0; t < e.length; t++) {
                        const n = e.charAt(t),
                            o = r.get(n);
                        if (!o) return [];
                        r = o
                    }
                    if (t) return r.get(Mi) || [];
                    const o = [],
                        i = [r];
                    for (; i.length;) {
                        const e = [...i.shift().entries()].sort(((e, t) => e[0] < t[0] ? -1 : 1));
                        for (const [t, n] of e) t === Mi ? o.push(...n) : i.push(n)
                    }
                    return o
                }
            }(e, (e => {
                const t = new Set;
                if (e.shortcodes)
                    for (const n of e.shortcodes)
                        for (const e of Re(n)) t.add(e);
                return t
            })),
            o = e => r(e, !0),
            i = e => r(e, !1),
            a = new Map,
            s = new Map;
        for (const t of e) {
            s.set(t.name.toLowerCase(), t);
            for (const e of t.shortcodes || []) a.set(e.toLowerCase(), t)
        }
        return {
            all: n,
            search: e => {
                const n = Re(e),
                    r = n.map(((e, t) => (t < n.length - 1 ? o : i)(e)));
                return We(r, (e => e.name)).sort(t)
            },
            byShortcode: e => a.get(e.toLowerCase()),
            byName: e => s.get(e.toLowerCase())
        }
    }

    function Xe(e) {
        if (!e) return e;
        if (Pi && (e = structuredClone(e)), delete e.tokens, e.skinTones) {
            const t = e.skinTones.length;
            e.skins = Array(t);
            for (let n = 0; n < t; n++) e.skins[n] = {
                tone: e.skinTones[n],
                unicode: e.skinUnicodes[n],
                version: e.skinVersions[n]
            };
            delete e.skinTones, delete e.skinUnicodes, delete e.skinVersions
        }
        return e
    }

    function Qe(e, t) {
        if (2 !== Math.floor(e.status / 100)) throw Error("Failed to fetch: " + t + ":  " + e.status)
    }
    async function Ze(e) {
        const t = await fetch(e);
        Qe(t, e);
        const n = t.headers.get("etag"),
            r = await t.json();
        return function(e) {
            if (!e || !Array.isArray(e) || !e[0] || "object" != typeof e[0] || Bi.some((t => !(t in e[0])))) throw Error("Emoji data is in the wrong format")
        }(r), [n, r]
    }
    async function $e(e) {
        let t = function(e) {
            for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = -1; ++o < t;) r[o] = e.charCodeAt(o);
            return n
        }(JSON.stringify(e));
        const n = function(e) {
            for (var t = "", n = new Uint8Array(e), r = n.byteLength, o = -1; ++o < r;) t += String.fromCharCode(n[o]);
            return t
        }(await crypto.subtle.digest("SHA-1", t));
        return btoa(n)
    }
    async function et(e, t) {
        let n, r = await async function(e) {
            const t = await fetch(e, {
                method: "HEAD"
            });
            Qe(t, e);
            const n = t.headers.get("etag");
            return n
        }(t);
        if (!r) {
            const e = await Ze(t);
            r = e[0], n = e[1], r || (r = await $e(n))
        }
        await async function(e, t, n) {
            const [r, o] = await Promise.all([wi, ki].map((t => Ke(e, ui, t))));
            return r === n && o === t
        }(e, t, r) || (n || (n = (await Ze(t))[1]), await qe(e, n, t, r))
    }

    function tt(e) {
        return e.unicode.includes("\u200d")
    }

    function nt(e) {
        const t = Wi(e, "#000"),
            n = Wi(e, "#fff");
        return t && n && qi(t, n)
    }

    function rt(e) {
        e.preventDefault(),
            e.stopPropagation()
    }

    function ot(e, t, n) {
        return (t += e ? -1 : 1) < 0 ? t = n.length - 1 : t >= n.length && (t = 0), t
    }

    function it(e, t) {
        const n = new Set,
            r = [];
        for (const o of e) {
            const e = t(o);
            n.has(e) || (n.add(e), r.push(o))
        }
        return r
    }

    function at(e) {
        {
            const t = document.createRange();
            return t.selectNode(e.firstChild), t.getBoundingClientRect().width
        }
    }

    function st(e, t, n) {
        let r = e.get(t);
        return r || (r = n(), e.set(t, r)), r
    }

    function ct(e) {
        return "" + e
    }

    function lt(e, t) {
        const {
            targetNode: n
        } = t;
        let {
            targetParentNode: r
        } = t, o = !1;
        r ? o = function(e, t) {
            let n = e.firstChild,
                r = 0;
            for (; n;) {
                if (t[r] !== n) return !0;
                n = n.nextSibling, r++
            }
            return r !== t.length
        }(r, e) : (o = !0, t.targetNode = void 0, t.targetParentNode = r = n.parentNode), o && function(e, t) {
            aa ? e.replaceChildren(...t) : (e.innerHTML = "", e.append(...t))
        }(r, e)
    }

    function dt(e) {
        let t = "",
            n = !1,
            r = !1,
            o = -1;
        const i = new Map,
            a = [];
        for (let s = 0, c = e.length; s < c; s++) {
            const l = e[s];
            if (t += l, s === c - 1) break;
            for (let e = 0; e < l.length; e++) switch (l.charAt(e)) {
                case "<":
                    "/" === l.charAt(e + 1) ? a.pop() : (n = !0, a.push(++o));
                    break;
                case ">":
                    n = !1, r = !1;
                    break;
                case "=":
                    r = !0
            }
            const d = st(i, a[a.length - 1], (() => []));
            let u, h, p;
            if (r) {
                const t = /(\S+)="?([^"=]*)$/.exec(l);
                u = t[1], h = t[2], p = /^[^">]*/.exec(e[s + 1])[0]
            }
            const f = {
                attributeName: u,
                attributeValuePre: h,
                attributeValuePost: p,
                expressionIndex: s
            };
            d.push(f), n || r || (t += " ")
        }
        const s = function(e) {
            const t = document.createElement("template");
            return t.innerHTML = e, t
        }(t);
        return {
            template: s,
            elementsToBindings: i
        }
    }

    function ut(e, t, n) {
        for (let r = 0; r < e.length; r++) {
            const o = e[r],
                i = {
                    binding: o,
                    targetNode: o.attributeName ? t : t.firstChild,
                    targetParentNode: void 0,
                    currentExpression: void 0
                };
            n.push(i)
        }
    }

    function ht(e) {
        const {
            template: t,
            elementsToBindings: n
        } = st(ra, e, (() => dt(e))), r = t.cloneNode(!0).content.firstElementChild, o = function(e, t) {
            const n = [];
            let r;
            if (1 === t.size && (r = t.get(0))) ut(r, e, n);
            else {
                const r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
                let o = e,
                    i = -1;
                do {
                    const e = t.get(++i);
                    e && ut(e, o, n)
                } while (o = r.nextNode())
            }
            return n
        }(r, n);
        return function(e) {
            return function(e, t) {
                for (const n of t) {
                    const {
                        targetNode: t,
                        currentExpression: r,
                        binding: {
                            expressionIndex: o,
                            attributeName: i,
                            attributeValuePre: a,
                            attributeValuePost: s
                        }
                    } = n, c = e[o];
                    if (r !== c)
                        if (n.currentExpression = c, i) t.setAttribute(i, a + ct(c) + s);
                        else {
                            let e;
                            Array.isArray(c) ? lt(c, n) : c instanceof Element ? (e = c, t.replaceWith(e)) : t.nodeValue = ct(c), e && (n.targetNode = e)
                        }
                }
            }(e, o), r
        }
    }

    function pt(e, t, n, r, o, i, a, s, c) {
        function l(e, n, r) {
            return f(e, ((e, o) => p`<button role="${n?"option":"menuitem"}" aria-selected="${n?o===t.activeSearchItem:""}" aria-label="${d(e,t.currentSkinTone)}" title="${u(e)}" class="${"emoji"+(n&&o===t.activeSearchItem?" active":"")+(e.unicode?"":" custom-emoji")}" id="${`${r}-${e.id}`}" style="${e.unicode?"":`--custom-emoji-background: url(${JSON.stringify(e.url)})`}">${e.unicode?h(e,t.currentSkinTone):""}</button>`), (e => `${r}-${e.id}`))
        }
        const {
            labelWithSkin: d,
            titleForEmoji: u,
            unicodeWithSkin: h
        } = n, {
            html: p,
            map: f
        } = function(e) {
            const t = st(oa, e, (() => new Map));
            let n = ia;
            return {
                map: function(e, t, r) {
                    return e.map(((e, o) => {
                        const i = n;
                        n = r(e);
                        try {
                            return t(e, o)
                        } finally {
                            n = i
                        }
                    }))
                },
                html: function(e, ...r) {
                    const o = st(t, e, (() => new Map));
                    return st(o, n, (() => ht(e)))(r)
                }
            }
        }(t), m = p`<section data-ref="rootElement" class="picker" aria-label="${t.i18n.regionLabel}" style="${t.pickerStyle||""}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${t.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!(!t.searchMode||!t.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${t.activeSearchItemId?"emo-"+t.activeSearchItemId:""}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${t.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${t.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${t.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${t.skinTonePickerExpanded?"hide-focus":""}" aria-label="${t.skinToneButtonLabel}" title="${t.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${t.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${t.skinToneButtonText||""}</button></div><span id="skintone-description" class="sr-only">${t.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${t.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${t.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${t.i18n.skinTonesLabel}" aria-activedescendant="skintone-${t.activeSkinTone}" aria-hidden="${!t.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${f(t.skinTones,((e,n)=>p`<div id="skintone-${n}" class="emoji ${n===t.activeSkinTone?"active":""}" aria-selected="${n===t.activeSkinTone}" role="option" title="${t.i18n.skinTones[n]}" aria-label="${t.i18n.skinTones[n]}">${e}</div>`),(e=>e))}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${t.groups.length},1fr)" aria-label="${t.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${f(t.groups,(e=>p`<button role="tab" class="nav-button" aria-controls="tab-${e.id}" aria-label="${t.i18n.categories[e.name]}" aria-selected="${!t.searchMode&&t.currentGroup.id===e.id}" title="${t.i18n.categories[e.name]}" data-group-id="${e.id}"><div class="nav-emoji emoji">${e.emoji}</div></button>`),(e=>e.id))}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(t.isRtl?-1:1)*t.currentGroupIndex*100}%)"></div></div><div class="message ${t.message?"":"gone"}" role="alert" aria-live="polite">${t.message||""}</div><div data-ref="tabpanelElement" class="tabpanel ${!t.databaseLoaded||t.message?"gone":""}" role="${t.searchMode?"region":"tabpanel"}" aria-label="${t.searchMode?t.i18n.searchResultsLabel:t.i18n.categories[t.currentGroup.name]}" id="${t.searchMode?"":"tab-"+t.currentGroup.id}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${f(t.currentEmojisWithCategories,((e,n)=>p`<div><div id="menu-label-${n}" class="category ${1===t.currentEmojisWithCategories.length&&""===t.currentEmojisWithCategories[0].category?"gone":""}" aria-hidden="true">${t.searchMode?t.i18n.searchResultsLabel:e.category?e.category:t.currentEmojisWithCategories.length>1?t.i18n.categories.custom:t.i18n.categories[t.currentGroup.name]}</div><div class="emoji-menu ${0===n||t.searchMode||-1!==t.currentGroup.id?"":"visibility-auto"}" style="${"--num-rows: "+Math.ceil(e.emojis.length/t.numColumns)}" data-action="updateOnIntersection" role="${t.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${n}" id="${t.searchMode?"search-results":""}">${l(e.emojis,t.searchMode,"emo")}</div></div>`),(e=>e.category))}</div></div><div class="favorites onscreen emoji-menu ${t.message?"gone":""}" role="menu" aria-label="${t.i18n.favoritesLabel}" data-on-click="onEmojiClick">${l(t.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`, g = (t, n) => {
            for (const r of e.querySelectorAll(`[${t}]`)) n(r, r.getAttribute(t))
        };
        if (c) {
            e.appendChild(m);
            for (const e of ["click", "focusout", "input", "keydown", "keyup"]) g("data-on-" + e, ((t, n) => {
                t.addEventListener(e, r[n])
            }));
            g("data-ref", ((e, t) => {
                i[t] = e
            })), a.addEventListener("abort", (() => {
                e.removeChild(m)
            }))
        }
        g("data-action", ((e, t) => {
            let n = s.get(t);
            n || s.set(t, n = new WeakSet), n.has(e) || (n.add(e), o[t](e))
        }))
    }

    function ft(e, t, n) {
        if (e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++)
            if (!n(e[r], t[r])) return !1;
        return !0
    }

    function mt(e, t) {
        function n() {
            const {
                customEmoji: e,
                database: t
            } = h, n = e || la;
            t.customEmoji !== n && (t.customEmoji = n)
        }

        function r(e) {
            const t = function(e, t, n) {
                let r = !0;
                for (const o of e) {
                    const e = at(n(o));
                    void 0 === ta && (ta = at(t));
                    const i = e / 1.8 < ta;
                    Ki.set(o.unicode, i), i || (r = !1)
                }
                return r
            }(e, l.baselineEmoji, g);
            t ? S() : h.currentEmojis = [...h.currentEmojis]
        }

        function o(e) {
            return !e.unicode || !tt(e) || Ki.get(e.unicode)
        }
        async function i(e) {
            const t = h.emojiVersion || await Ji();
            return e.filter((({
                version: e
            }) => !e || e <= t))
        }
        async function a(e) {
            return function(e, t) {
                const n = e => {
                    const n = {};
                    for (const r of e) "number" == typeof r.tone && r.version <= t && (n[r.tone] = r.unicode);
                    return n
                };
                return e.map((({
                    unicode: e,
                    skins: t,
                    shortcodes: r,
                    url: o,
                    name: i,
                    category: a,
                    annotation: s
                }) => ({
                    unicode: e,
                    name: i,
                    shortcodes: r,
                    url: o,
                    category: a,
                    annotation: s,
                    id: e || i,
                    skins: t && n(t)
                })))
            }(e, h.emojiVersion || await Ji())
        }
        async function s(e) {
            const t = await h.database.getEmojiByUnicodeOrName(e),
                n = [...h.currentEmojis, ...h.currentFavorites].find((t => t.id === e)),
                r = n.unicode && E(n, h.currentSkinTone);
            await h.database.incrementFavoriteEmojiCount(e), b("emoji-click", {
                emoji: t,
                skinTone: h.currentSkinTone,
                ...r && {
                    unicode: r
                },
                ...n.name && {
                    name: n.name
                }
            })
        }

        function c(e) {
            h.currentSkinTone = e, h.skinTonePickerExpanded = !1, m("skintone-button"), b("skin-tone-change", {
                skinTone: e
            }), h.database.setPreferredSkinTone(e)
        }
        const l = {},
            d = new AbortController,
            u = d.signal,
            {
                state: h,
                createEffect: p
            } = function(e) {
                let t, n = !1;
                const r = new Map,
                    o = new Set;
                let i;
                const a = () => {
                        if (n) return;
                        const e = [...o];
                        o.clear();
                        try {
                            for (const t of e) t()
                        } finally {
                            i = !1, o.size && (i = !0, sa(a))
                        }
                    },
                    s = new Proxy({}, {
                        get(e, n) {
                            if (t) {
                                let e = r.get(n);
                                e || (e = new Set, r.set(n, e)), e.add(t)
                            }
                            return e[n]
                        },
                        set(e, t, n) {
                            if (e[t] !== n) {
                                e[t] = n;
                                const s = r.get(t);
                                if (s) {
                                    for (const e of s) o.add(e);
                                    i || (i = !0, sa(a))
                                }
                            }
                            return !0
                        }
                    });
                return e.addEventListener("abort", (() => {
                    n = !0
                })), {
                    state: s,
                    createEffect: e => {
                        const n = () => {
                            const r = t;
                            t = n;
                            try {
                                return e()
                            } finally {
                                t = r
                            }
                        };
                        return n()
                    }
                }
            }(u),
            f = new Map;
        da(h, {
            skinToneEmoji: void 0,
            i18n: void 0,
            database: void 0,
            customEmoji: void 0,
            customCategorySorting: void 0,
            emojiVersion: void 0
        }), da(h, t), da(h, {
            initialLoad: !0,
            currentEmojis: [],
            currentEmojisWithCategories: [],
            rawSearchText: "",
            searchText: "",
            searchMode: !1,
            activeSearchItem: -1,
            message: void 0,
            skinTonePickerExpanded: !1,
            skinTonePickerExpandedAfterAnimation: !1,
            currentSkinTone: 0,
            activeSkinTone: 0,
            skinToneButtonText: void 0,
            pickerStyle: void 0,
            skinToneButtonLabel: "",
            skinTones: [],
            currentFavorites: [],
            defaultFavoriteEmojis: void 0,
            numColumns: 8,
            isRtl: !1,
            currentGroupIndex: 0,
            groups: Ri,
            databaseLoaded: !1,
            activeSearchItemId: void 0
        }), p((() => {
            h.currentGroup !== h.groups[h.currentGroupIndex] && (h.currentGroup = h.groups[h.currentGroupIndex])
        }));
        const m = t => {
                e.getElementById(t).focus()
            },
            g = t => e.getElementById("emo-" + t.id),
            b = (e, t) => {
                l.rootElement.dispatchEvent(new CustomEvent(e, {
                    detail: t,
                    bubbles: !0,
                    composed: !0
                }))
            },
            y = (e, t) => e.id === t.id,
            v = (e, t) => {
                const {
                    category: n,
                    emojis: r
                } = e, {
                    category: o,
                    emojis: i
                } = t;
                return n === o && ft(r, i, y)
            },
            w = e => {
                ft(h.currentEmojis, e, y) || (h.currentEmojis = e)
            },
            k = e => {
                h.searchMode !== e && (h.searchMode = e)
            },
            E = (e, t) => t && e.skins && e.skins[t] || e.unicode,
            C = {
                labelWithSkin: (e, t) => {
                    return (n = [e.name || E(e, t), e.annotation, ...e.shortcodes || la].filter(Boolean), it(n, (e => e))).join(", ");
                    var n
                },
                titleForEmoji: e => e.annotation || (e.shortcodes || la).join(", "),
                unicodeWithSkin: E
            },
            x = {
                onClickSkinToneButton: function(e) {
                    h.skinTonePickerExpanded = !h.skinTonePickerExpanded, h.activeSkinTone = h.currentSkinTone, h.skinTonePickerExpanded && (rt(e), ea((() => m("skintone-list"))))
                },
                onEmojiClick: async function(e) {
                    const {
                        target: t
                    } = e;
                    t.classList.contains("emoji") && (rt(e), s(t.id.substring(4)))
                },
                onNavClick: function(e) {
                    const {
                        target: t
                    } = e, n = t.closest(".nav-button");
                    if (!n) return;
                    const r = parseInt(n.dataset.groupId, 10);
                    l.searchElement.value = "", h.rawSearchText = "", h.searchText = "", h.activeSearchItem = -1,
                        h.currentGroupIndex = h.groups.findIndex((e => e.id === r))
                },
                onNavKeydown: function(e) {
                    const {
                        target: t,
                        key: n
                    } = e, r = t => {
                        t && (rt(e), t.focus())
                    };
                    switch (n) {
                        case "ArrowLeft":
                            return r(t.previousElementSibling);
                        case "ArrowRight":
                            return r(t.nextElementSibling);
                        case "Home":
                            return r(t.parentElement.firstElementChild);
                        case "End":
                            return r(t.parentElement.lastElementChild)
                    }
                },
                onSearchKeydown: function(e) {
                    if (!h.searchMode || !h.currentEmojis.length) return;
                    const t = t => {
                        rt(e),
                            h.activeSearchItem = ot(t, h.activeSearchItem, h.currentEmojis)
                    };
                    switch (e.key) {
                        case "ArrowDown":
                            return t(!1);
                        case "ArrowUp":
                            return t(!0);
                        case "Enter":
                            if (-1 !== h.activeSearchItem) return rt(e), s(h.currentEmojis[h.activeSearchItem].id);
                            h.activeSearchItem = 0
                    }
                },
                onSkinToneOptionsClick: function(e) {
                    const {
                        target: {
                            id: t
                        }
                    } = e, n = t && t.match(/^skintone-(\d)/);
                    n && (rt(e), c(parseInt(n[1], 10)))
                },
                onSkinToneOptionsFocusOut: async function(e) {
                    const {
                        relatedTarget: t
                    } = e;
                    t && "skintone-list" === t.id || (h.skinTonePickerExpanded = !1)
                },
                onSkinToneOptionsKeydown: function(e) {
                    if (!h.skinTonePickerExpanded) return;
                    const t = async t => {
                        rt(e), h.activeSkinTone = t
                    };
                    switch (e.key) {
                        case "ArrowUp":
                            return t(ot(!0, h.activeSkinTone, h.skinTones));
                        case "ArrowDown":
                            return t(ot(!1, h.activeSkinTone, h.skinTones));
                        case "Home":
                            return t(0);
                        case "End":
                            return t(h.skinTones.length - 1);
                        case "Enter":
                            return rt(e), c(h.activeSkinTone);
                        case "Escape":
                            return rt(e), h.skinTonePickerExpanded = !1, m("skintone-button")
                    }
                },
                onSkinToneOptionsKeyup: function(e) {
                    if (h.skinTonePickerExpanded) return " " === e.key ? (rt(e), c(h.activeSkinTone)) : void 0
                },
                onSearchInput: function(e) {
                    h.rawSearchText = e.target.value
                }
            },
            A = {
                calculateEmojiGridStyle: function(e) {
                    ! function(e, t, n) {
                        let r;
                        na ? (r = new ResizeObserver(n), r.observe(e)) : ea(n), t.addEventListener("abort", (() => {
                            r && r.disconnect()
                        }))
                    }(e, u, (() => {
                        {
                            const e = getComputedStyle(l.rootElement),
                                t = parseInt(e.getPropertyValue("--num-columns"), 10),
                                n = "rtl" === e.getPropertyValue("direction");
                            h.numColumns = t, h.isRtl = n
                        }
                    }))
                },
                updateOnIntersection: function(e) {
                    ! function(e, t, n) {
                        {
                            const r = e.closest(".tabpanel");
                            let o = ca.get(r);
                            o || (o = new IntersectionObserver(n, {
                                root: r,
                                rootMargin: "50% 0px 50% 0px",
                                threshold: 0
                            }), ca.set(r, o), t.addEventListener("abort", (() => {
                                o.disconnect()
                            }))), o.observe(e)
                        }
                    }(e, u, (e => {
                        for (const {
                                target: t,
                                isIntersecting: n
                            }
                            of e) t.classList.toggle("onscreen", n)
                    }))
                }
            };
        let T = !0;
        p((() => {
            pt(e, h, C, x, A, l, u, f, T), T = !1
        })), h.emojiVersion || Ji().then((e => {
            e || (h.message = h.i18n.emojiUnsupportedMessage)
        })), p((() => {
            h.database && async function() {
                let e = !1;
                const t = setTimeout((() => {
                    e = !0, h.message = h.i18n.loadingMessage
                }), 1e3);
                try {
                    await h.database.ready(), h.databaseLoaded = !0
                } catch (e) {
                    h.message = h.i18n.networkErrorMessage
                } finally {
                    clearTimeout(t), e && (e = !1, h.message = "")
                }
            }()
        })), p((() => {
            h.pickerStyle = `\n      --num-groups: ${h.groups.length}; \n      --indicator-opacity: ${h.searchMode?0:1}; \n      --num-skintones: 6;`
        })), p((() => {
            h.customEmoji && h.database && n()
        })), p((() => {
            h.customEmoji && h.customEmoji.length ? h.groups !== Di && (h.groups = Di) : h.groups !== Ri && (h.currentGroupIndex && h.currentGroupIndex--, h.groups = Ri)
        })), p((() => {
            !async function() {
                h.databaseLoaded && (h.currentSkinTone = await h.database.getPreferredSkinTone())
            }()
        })), p((() => {
            h.skinTones = [, , , , , , ].fill().map(((e, t) => function(e, t) {
                if (0 === t) return e;
                const n = e.indexOf(Qi);
                return -1 !== n ? e.substring(0, n) + String.fromCodePoint(Zi + t - 1) + e.substring(n) : (e.endsWith(Yi) && (e = e.substring(0, e.length - 1)),
                    e + Xi + String.fromCodePoint($i + t - 1))
            }(h.skinToneEmoji, t)))
        })), p((() => {
            h.skinToneButtonText = h.skinTones[h.currentSkinTone]
        })), p((() => {
            h.skinToneButtonLabel = h.i18n.skinToneLabel.replace("{skinTone}", h.i18n.skinTones[h.currentSkinTone])
        })), p((() => {
            h.databaseLoaded && async function() {
                const {
                    database: e
                } = h, t = (await Promise.all(Hi.map((t => e.getEmojiByUnicodeOrName(t))))).filter(Boolean);
                h.defaultFavoriteEmojis = t
            }()
        })), p((() => {
            h.databaseLoaded && h.defaultFavoriteEmojis && async function() {
                n();
                const {
                    database: e,
                    defaultFavoriteEmojis: t,
                    numColumns: r
                } = h, o = await e.getTopFavoriteEmoji(r), i = await a(it([...o, ...t], (e => e.unicode || e.name)).slice(0, r));
                h.currentFavorites = i
            }()
        })), p((() => {
            !async function() {
                const {
                    searchText: e,
                    currentGroup: t,
                    databaseLoaded: n,
                    customEmoji: r
                } = h;
                if (n)
                    if (e.length >= 2) {
                        const t = await async function(e) {
                            return a(await i(await h.database.getEmojiBySearchQuery(e)))
                        }(e);
                        h.searchText === e && (w(t), k(!0))
                    } else {
                        const {
                            id: e
                        } = t;
                        if (-1 !== e || r && r.length) {
                            const t = await async function(e) {
                                const t = -1 === e ? h.customEmoji : await h.database.getEmojiByGroup(e);
                                return a(await i(t))
                            }(e);
                            h.currentGroup.id === e && (w(t), k(!1))
                        }
                    }
                else h.currentEmojis = [], h.searchMode = !1
            }()
        }));
        const S = () => {
            ea((() => {
                var e;
                (e = l.tabpanelElement) && (e.scrollTop = 0)
            }))
        };
        return p((() => {
            const {
                currentEmojis: e,
                emojiVersion: t
            } = h, n = e.filter((e => e.unicode)).filter((e => tt(e) && !Ki.has(e.unicode)));
            if (!t && n.length) w(e), ea((() => r(n)));
            else {
                const n = t ? e : e.filter(o);
                w(n), S()
            }
        })), p((() => {})), p((() => {
            const e = function() {
                const {
                    searchMode: e,
                    currentEmojis: t
                } = h;
                if (e) return [{
                    category: "",
                    emojis: t
                }];
                const n = new Map;
                for (const e of t) {
                    const t = e.category || "";
                    let r = n.get(t);
                    r || (r = [], n.set(t, r)), r.push(e)
                }
                return [...n.entries()].map((([e, t]) => ({
                    category: e,
                    emojis: t
                }))).sort(((e, t) => h.customCategorySorting(e.category, t.category)))
            }();
            (e => {
                ft(h.currentEmojisWithCategories, e, v) || (h.currentEmojisWithCategories = e)
            })(e)
        })), p((() => {
            h.activeSearchItemId = -1 !== h.activeSearchItem && h.currentEmojis[h.activeSearchItem].id
        })), p((() => {
            const {
                rawSearchText: e
            } = h;
            Fi((() => {
                h.searchText = (e || "").trim(), h.activeSearchItem = -1
            }))
        })), p((() => {
            h.skinTonePickerExpanded ? l.skinToneDropdown.addEventListener("transitionend", (() => {
                h.skinTonePickerExpandedAfterAnimation = !0
            }), {
                once: !0
            }) : h.skinTonePickerExpandedAfterAnimation = !1
        })), {
            $set(e) {
                da(h, e)
            },
            $destroy() {
                d.abort()
            }
        }
    }

    function gt(e) {
        let t = 0,
            n = "";
        for (; t < e.byteLength;) {
            const r = e[t];
            if (128 & r)
                if (192 == (224 & r)) {
                    const o = e[t + 1];
                    n += String.fromCharCode((31 & r) << 6 | 63 & o), t += 2
                } else if (224 == (240 & r)) {
                const o = e[t + 1],
                    i = e[t + 2];
                n += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i), t += 3
            } else if (240 == (248 & r)) {
                const o = (7 & r) << 18 | (63 & e[t + 1]) << 12 | (63 & e[t + 2]) << 6 | 63 & e[t + 3];
                n += o <= 1114111 ? String.fromCodePoint(o) : "\ufffd", t += 4
            } else n += "\ufffd", t += 1;
            else n += String.fromCharCode(r), t += 1
        }
        return n
    }

    function bt(e) {
        try {
            return new DataView(e, 0, 0), !0
        } catch (e) {
            return !1
        }
    }

    function yt(e, t) {
        const n = function(e) {
                const t = [];
                for (const n of Array.from(e, (e => e.codePointAt(0) || 0))) n <= 127 ? t.push(n) : n <= 2047 ? (t.push(n >> 6 | 192),
                    t.push(63 & n | 128)) : n <= 65535 ? (t.push(n >> 12 | 224), t.push(n >> 6 & 63 | 128), t.push(63 & n | 128)) : n <= 1114111 && (t.push(n >> 18 | 240), t.push(n >> 12 & 63 | 128), t.push(n >> 6 & 63 | 128), t.push(63 & n | 128));
                return Uint8Array.from(t)
            }(t),
            r = new DataView(new ArrayBuffer(4), 0, 4);
        r.setUint32(0, n.byteLength, !0), e.write(r), e.write(n)
    }

    function vt(e, t) {
        const n = new DataView(new ArrayBuffer(5), 0, 5);
        n.setUint8(0, 102), n.setUint32(1, t.byteLength, !0), e.write(n), e.write(t)
    }

    function wt(e, t) {
        switch (typeof t) {
            case "string":
                e.write(101), yt(e, t);
                break;
            case "boolean":
                e.write([10, t ? 1 : 0]);
                break;
            case "undefined":
                e.write(0);
                break;
            case "number": {
                if (Number.isSafeInteger(t))
                    if (t >= 0) {
                        if (t <= 255) {
                            const n = new DataView(new ArrayBuffer(2), 0, 2);
                            return n.setUint8(0, 10), n.setUint8(1, t), void e.write(n)
                        }
                        if (t <= 65535) {
                            const n = new DataView(new ArrayBuffer(3), 0, 3);
                            return n.setUint8(0, 11), n.setUint16(1, t, !0), void e.write(n)
                        }
                        if (t <= 4294967295) {
                            const n = new DataView(new ArrayBuffer(5), 0, 5);
                            return n.setUint8(0, 12), n.setUint32(1, t, !0), void e.write(n)
                        }
                    } else {
                        if (t >= -128 && t < 128) {
                            const n = new DataView(new ArrayBuffer(2), 0, 2);
                            return n.setUint8(0, 20), n.setInt8(1, t), void e.write(n)
                        }
                        if (t >= -32768 && t < 32768) {
                            const n = new DataView(new ArrayBuffer(3), 0, 3);
                            return n.setUint8(0, 21), n.setInt16(1, t, !0), void e.write(n)
                        }
                        if (t >= -2147483648 && t < 2147483648) {
                            const n = new DataView(new ArrayBuffer(5), 0, 5);
                            return n.setUint8(0, 22), n.setInt32(1, t, !0), void e.write(n)
                        }
                    } const n = new DataView(new ArrayBuffer(9), 0, 9);
                n.setUint8(0, 33), n.setFloat64(1, t, !0), e.write(n)
            }
            break;
            case "bigint": {
                const n = new DataView(new ArrayBuffer(9), 0, 9);
                t >= 0n ? (n.setUint8(0, 13), n.setBigUint64(1, t, !0)) : (n.setUint8(0, 23), n.setBigUint64(1, t, !0)), e.write(n)
            }
            break;
            case "object":
                null === t ? e.write(255) : Array.isArray(t) ? function(e, t) {
                    const n = new DataView(new ArrayBuffer(5), 0, 5);
                    n.setUint8(0, 99), n.setUint32(1, t.length, !0), e.write(n);
                    for (const n of t) wt(e, n)
                }(e, t) : bt(t) ? vt(e, new Uint8Array(t)) : ArrayBuffer.isView(t) ? vt(e, new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : function(e, t) {
                    if ("function" == typeof t.toJSON) return void wt(e, t.toJSON());
                    const n = Object.keys(t); {
                        const t = new DataView(new ArrayBuffer(5), 0, 5);
                        t.setUint8(0, 100), t.setUint32(1, n.length, !0), e.write(t)
                    }
                    for (const r of n) {
                        const n = t[r];
                        switch (typeof n) {
                            case "bigint":
                            case "number":
                            case "object":
                            case "string":
                            case "boolean":
                            case "undefined":
                                yt(e, r), wt(e, n)
                        }
                    }
                }(e, t)
        }
    }

    function kt(e) {
        const t = e.read();
        switch (t) {
            case 0:
                return;
            case 255:
                return null;
            case 10:
                return e.read();
            case 11:
                return e.readNBytesDV(2).getUint16(0, !0);
            case 12:
                return e.readNBytesDV(4).getUint32(0, !0);
            case 13:
                return e.readNBytesDV(8).getBigUint64(0, !0);
            case 20:
                return e.read() << 8 >> 8;
            case 21:
                return e.readNBytesDV(2).getInt16(0, !0);
            case 22:
                return e.readNBytesDV(4).getInt32(0, !0);
            case 23:
                return e.readNBytesDV(8).getBigInt64(0, !0);
            case 32:
                return e.readNBytesDV(4).getFloat32(0, !0);
            case 33:
                return e.readNBytesDV(8).getFloat64(0, !0);
            case 99:
                return function(e) {
                    const t = e.readNBytesDV(4).getUint32(0, !0),
                        n = Array(t);
                    for (let r = 0; r < t; r++) n[r] = kt(e);
                    return n
                }(e);
            case 100:
                return function(e) {
                    const t = e.readNBytesDV(4).getUint32(0, !0),
                        n = Object.create(null);
                    for (let r = 0; r < t; r++) n[gt(e.readNBytes(e.readNBytesDV(4).getUint32(0, !0)))] = kt(e);
                    return n
                }(e);
            case 101:
                return gt(e.readNBytes(e.readNBytesDV(4).getUint32(0, !0)));
            case 102:
                return e.readNBytes(e.readNBytesDV(4).getUint32(0, !0));
            default:
                throw Error("Parse Error: Invalid data ID: " + t)
        }
    }

    function Et(e) {
        if (!Number.isSafeInteger(e) || e < 1 || e > 40) throw Error(`Invalid version=${e}. Expected number [1..40]`)
    }

    function Ct(e, t) {
        return e.toString(2).padStart(t, "0")
    }

    function xt(e, t) {
        const n = e % t;
        return n >= 0 ? n : t + n
    }

    function At(e, t) {
        return Array(e).fill(t)
    }

    function Tt(...e) {
        let t = 0;
        for (const n of e) t = Math.max(t, n.length);
        const n = [];
        for (let r = 0; r < t; r++)
            for (const t of e) r >= t.length || n.push(t[r]);
        return new Uint8Array(n)
    }

    function St(e, t, n) {
        if (n < 0 || n + t.length > e.length) return !1;
        for (let r = 0; r < t.length; r++)
            if (t[r] !== e[n + r]) return !1;
        return !0
    }

    function Lt() {
        let e, t = 1 / 0;
        return {
            add(n, r) {
                n >= t || (e = r, t = n)
            },
            get: () => e,
            score: () => t
        }
    }

    function It(e) {
        return {
            has: t => e.includes(t),
            decode: t => {
                if (!Array.isArray(t) || t.length && "string" != typeof t[0]) throw Error("alphabet.decode input should be array of strings");
                return t.map((t => {
                    if ("string" != typeof t) throw Error("alphabet.decode: not string element=" + t);
                    const n = e.indexOf(t);
                    if (-1 === n) throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
                    return n
                }))
            },
            encode: t => {
                if (!Array.isArray(t) || t.length && "number" != typeof t[0]) throw Error("alphabet.encode input should be an array of numbers");
                return t.map((t => {
                    if (function(e) {
                            if (!Number.isSafeInteger(e)) throw Error("Wrong integer: " + e)
                        }(t), t < 0 || t >= e.length) throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
                    return e[t]
                }))
            }
        }
    }

    function jt(e, t) {
        const {
            words: n,
            shortBlocks: r,
            numBlocks: o,
            blockLen: i,
            total: a
        } = Ba.capacity(e, t), s = (c = n, {
            encode(e) {
                const t = Da.divisorPoly(c),
                    n = Array.from(e);
                return n.push(...t.slice(0, -1).fill(0)), Uint8Array.from(Da.remainderPoly(n, t))
            },
            decode(e) {
                const t = e.slice(),
                    n = Da.polynomial(Array.from(e));
                let r = At(c, 0),
                    o = !1;
                for (let e = 0; e < c; e++) {
                    const t = Da.evalPoly(n, Da.exp(e));
                    r[r.length - 1 - e] = t, 0 !== t && (o = !0)
                }
                if (!o) return t;
                r = Da.polynomial(r);
                const i = Da.monomial(c, 1),
                    [a, s] = Da.euclidian(i, r, c),
                    l = At(Da.degree(a), 0);
                let d = 0;
                for (let e = 1; e < 256 && d < l.length; e++) 0 === Da.evalPoly(a, e) && (l[d++] = Da.inv(e));
                if (d !== l.length) throw Error("RS.decode: wrong errors number");
                for (let e = 0; e < l.length; e++) {
                    const n = t.length - 1 - Da.log(l[e]);
                    if (n < 0) throw Error("RS.decode: wrong error location");
                    const r = Da.inv(l[e]);
                    let o = 1;
                    for (let t = 0; t < l.length; t++) e !== t && (o = Da.mul(o, Da.add(1, Da.mul(l[t], r))));
                    t[n] = Da.add(t[n], Da.mul(Da.evalPoly(s, r), Da.inv(o)))
                }
                return t
            }
        });
        var c;
        return {
            encode(e) {
                const t = [],
                    n = [];
                for (let a = 0; a < o; a++) {
                    const o = i + (a < r ? 0 : 1);
                    t.push(e.subarray(0, o)), n.push(s.encode(e.subarray(0, o))), e = e.subarray(o)
                }
                const a = Tt(...t),
                    c = Tt(...n),
                    l = new Uint8Array(a.length + c.length);
                return l.set(a), l.set(c, a.length), l
            },
            decode(e) {
                if (e.length !== a) throw Error(`interleave.decode: len(data)=${e.length}, total=${a}`);
                const t = [];
                for (let e = 0; e < o; e++) {
                    const o = e < r;
                    t.push(new Uint8Array(n + i + (o ? 0 : 1)))
                }
                let c = 0;
                for (let n = 0; n < i; n++)
                    for (let r = 0; r < o; r++) t[r][n] = e[c++];
                for (let n = r; n < o; n++) t[n][i] = e[c++];
                for (let a = i; a < i + n; a++)
                    for (let n = 0; n < o; n++) {
                        const o = n < r;
                        t[n][a + (o ? 0 : 1)] = e[c++]
                    }
                const l = [];
                for (const e of t) l.push(...Array.from(s.decode(e)).slice(0, -n));
                return Uint8Array.from(l)
            }
        }
    }

    function _t(e, t, n, r = !1) {
        const o = Ba.size.encode(e);
        let i = new Ia(o + 2);
        const a = new Ia(3).rect(0, 3, !0).border(1, !1).border(1, !0).border(1, !1);
        i = i.embed(0, a).embed({
            x: -a.width,
            y: 0
        }, a).embed({
            x: 0,
            y: -a.height
        }, a), i = i.rectSlice(1, o);
        const s = new Ia(1).rect(0, 1, !0).border(1, !1).border(1, !0),
            c = Ba.alignmentPatterns(e);
        for (const e of c)
            for (const t of c) void 0 === i.data[e][t] && i.embed({
                x: t - 2,
                y: e - 2
            }, s);
        i = i.hLine({
            x: 0,
            y: 6
        }, 1 / 0, (({
            x: e
        }, t) => void 0 === t ? e % 2 == 0 : t)).vLine({
            x: 6,
            y: 0
        }, 1 / 0, (({
            y: e
        }, t) => void 0 === t ? e % 2 == 0 : t)); {
            const e = Ba.formatBits(t, n),
                a = t => !r && 1 == (e >> t & 1);
            for (let e = 0; e < 6; e++) i.data[e][8] = a(e);
            for (let e = 6; e < 8; e++) i.data[e + 1][8] = a(e);
            for (let e = 8; e < 15; e++) i.data[o - 15 + e][8] = a(e);
            for (let e = 0; e < 8; e++) i.data[8][o - e - 1] = a(e);
            for (let e = 8; e < 9; e++) i.data[8][15 - e - 1 + 1] = a(e);
            for (let e = 9; e < 15; e++) i.data[8][15 - e - 1] = a(e);
            i.data[o - 8][8] = !r
        }
        if (e >= 7) {
            const t = Ba.versionBits(e);
            for (let e = 0; e < 18; e += 1) {
                const n = !r && 1 == (t >> e & 1),
                    a = Math.floor(e / 3),
                    s = e % 3 + o - 8 - 3;
                i.data[a][s] = n,
                    i.data[s][a] = n
            }
        }
        return i
    }

    function Mt(e, t, n) {
        const r = e.height,
            o = Na[t];
        let i = -1,
            a = r - 1;
        for (let t = r - 1; t > 0; t -= 2) {
            for (6 == t && (t = 5);; a += i) {
                for (let r = 0; r < 2; r += 1) {
                    const i = t - r;
                    void 0 === e.data[a][i] && n(i, a, o(i, a))
                }
                if (a + i < 0 || a + i >= r) break
            }
            i = -i
        }
    }

    function Ot(e) {
        let t = "numeric";
        for (let n of e)
            if (!Ba.alphabet.numeric.has(n) && (t = "alphanumeric", !Ba.alphabet.alphanumerc.has(n))) return "byte";
        return t
    }

    function Pt(e, t, n, r) {
        let o = "",
            i = n.length;
        if ("numeric" === r) {
            const e = Ba.alphabet.numeric.decode(n.split("")),
                t = e.length;
            for (let n = 0; n < t - 2; n += 3) o += Ct(100 * e[n] + 10 * e[n + 1] + e[n + 2], 10);
            t % 3 == 1 ? o += Ct(e[t - 1], 4) : t % 3 == 2 && (o += Ct(10 * e[t - 2] + e[t - 1], 7))
        } else if ("alphanumeric" === r) {
            const e = Ba.alphabet.alphanumerc.decode(n.split("")),
                t = e.length;
            for (let n = 0; n < t - 1; n += 2) o += Ct(45 * e[n] + e[n + 1], 11);
            t % 2 == 1 && (o += Ct(e[t - 1], 6))
        } else {
            if ("byte" !== r) throw Error("encode: unsupported type"); {
                const e = function(e) {
                    if ("string" != typeof e) throw Error("utf8ToBytes expected string, got " + typeof e);
                    return new Uint8Array((new TextEncoder).encode(e))
                }(n);
                i = e.length, o = Array.from(e).map((e => Ct(e, 8))).join("")
            }
        }
        const {
            capacity: a
        } = Ba.capacity(e, t), s = Ct(i, Ba.lengthBits(e, r));
        let c = Ba.modeBits[r] + s + o;
        if (c.length > a) throw Error("Capacity overflow");
        c += "0".repeat(Math.min(4, Math.max(0, a - c.length))), c.length % 8 && (c += "0".repeat(8 - c.length % 8));
        const l = "1110110000010001";
        for (let e = 0; c.length !== a; e++) c += l[e % 16];
        const d = Uint8Array.from(c.match(/(.{8})/g).map((e => Number("0b" + e))));
        return jt(e, t).encode(d)
    }

    function Bt(e, t, n, r, o = !1) {
        const i = _t(e, t, r, o);
        let a = 0;
        const s = 8 * n.length;
        if (Mt(i, r, ((e, t, r) => {
                let o = !1;
                a < s && (o = !!(n[a >>> 3] >> (7 - a & 7) & 1), a++), i.data[t][e] = o !== r
            })), a !== s) throw Error("QR: bytes left after draw");
        return i
    }

    function Nt(e) {
        const t = e.inverse(),
            n = e => {
                let t = 0;
                for (let n, r = 0, o = 1; r < e.length; r++) n === e[r] && (o++, r !== e.length - 1) || (o >= 5 && (t += o - 5 + 3), n = e[r], o = 1);
                return t
            };
        let r = 0;
        e.data.forEach((e => r += n(e))), t.data.forEach((e => r += n(e)));
        let o = 0,
            i = e.data;
        const a = e.width - 1,
            s = e.height - 1;
        for (let e = 0; e < a; e++)
            for (let t = 0; t < s; t++) {
                const n = e + 1,
                    r = t + 1;
                i[e][t] === i[n][t] && i[n][t] === i[e][r] && i[n][t] === i[n][r] && (o += 3)
            }
        const c = e => {
            const t = [!0, !1, !0, !0, !0, !1, !0],
                n = [!1, !1, !1, !1],
                r = [...t, ...n],
                o = [...n, ...t];
            let i = 0;
            for (let t = 0; t < e.length; t++) St(e, r, t) && (i += 40), St(e, o, t) && (i += 40);
            return i
        };
        let l = 0;
        for (const t of e.data) l += c(t);
        for (const e of t.data) l += c(e);
        let d = 0;
        e.rectRead(0, 1 / 0, ((e, t) => d += t ? 1 : 0));
        const u = d / (e.height * e.width) * 100;
        return r + o + l + 10 * Math.floor(Math.abs(u - 50) / 5)
    }

    function Dt(e, t = "raw", n = {}) {
        const r = void 0 !== n.ecc ? n.ecc : "medium";
        ! function(e) {
            if (!ja.includes(e)) throw Error(`Invalid error correction mode=${e}. Expected: ${ja}`)
        }(r);
        const o = void 0 !== n.encoding ? n.encoding : Ot(e);
        ! function(e) {
            if (!_a.includes(e)) throw Error(`Encoding: invalid mode=${e}. Expected: ${_a}`);
            if ("kanji" === e || "eci" === e) throw Error(`Encoding: ${e} is not supported (yet?).`)
        }(o), void 0 !== n.mask && function(e) {
            if (![0, 1, 2, 3, 4, 5, 6, 7].includes(e) || !Na[e]) throw Error(`Invalid mask=${e}. Expected number [0..7]`)
        }(n.mask);
        let i, a = n.version,
            s = Error("Unknown error");
        if (void 0 !== a) Et(a), i = Pt(a, r, e, o);
        else
            for (let t = 1; t <= 40; t++) try {
                i = Pt(t, r, e, o), a = t;
                break
            } catch (e) {
                s = e
            }
        if (!a || !i) throw s;
        let c = function(e, t, n, r) {
            if (void 0 === r) {
                const o = Lt();
                for (let r = 0; r < Na.length; r++) o.add(Nt(Bt(e, t, n, r, !0)), r);
                r = o.get()
            }
            if (void 0 === r) throw Error("Cannot find mask");
            return Bt(e, t, n, r)
        }(a, r, i, n.mask);
        c.assertDrawn();
        const l = void 0 === n.border ? 2 : n.border;
        if (!Number.isSafeInteger(l)) throw Error("Wrong border type=" + typeof l);
        if (c = c.border(l, !1), void 0 !== n.scale && (c = c.scale(n.scale)), "raw" === t) return c.data;
        if ("ascii" === t) return c.toASCII();
        if ("svg" === t) return c.toSVG();
        if ("gif" === t) return c.toGIF();
        if ("term" === t) return c.toTerm();
        throw Error("Unknown output: " + t)
    }

    function Rt(e, t) {
        return Ds(e, {
            i: 2
        }, t && t.out, t && t.dictionary)
    }
    var Ft = {
        d: (e, t) => {
            for (var n in t) Ft.o(t, n) && !Ft.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }
    };
    Ft.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), Ft.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ft.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var Ut = {};
    Ft.r(Ut), Ft.d(Ut, {
        Decoder: () => Nn,
        Encoder: () => Bn,
        PacketType: () => Pn,
        protocol: () => On
    });
    const Ht = Object.create(null);
    Ht.open = "0", Ht.close = "1", Ht.ping = "2", Ht.pong = "3",
        Ht.message = "4", Ht.upgrade = "5", Ht.noop = "6";
    const zt = Object.create(null);
    Object.keys(Ht).forEach((e => {
        zt[Ht[e]] = e
    }));
    const Vt = {
            type: "error",
            data: "parser error"
        },
        Wt = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob),
        qt = "function" == typeof ArrayBuffer,
        Gt = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
        Jt = ({
            type: e,
            data: t
        }, n, r) => Wt && t instanceof Blob ? n ? r(t) : Kt(t, r) : qt && (t instanceof ArrayBuffer || Gt(t)) ? n ? r(t) : Kt(new Blob([t]), r) : r(Ht[e] + (t || "")),
        Kt = (e, t) => {
            const n = new FileReader;
            return n.onload = function() {
                const e = n.result.split(",")[1];
                t("b" + (e || ""))
            }, n.readAsDataURL(e)
        };
    let Yt;
    const Xt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Qt = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
    for (let e = 0; e < 64; e++) Qt[Xt.charCodeAt(e)] = e;
    const Zt = "function" == typeof ArrayBuffer,
        $t = (e, t) => {
            if ("string" != typeof e) return {
                type: "message",
                data: tn(e, t)
            };
            const n = e.charAt(0);
            return "b" === n ? {
                type: "message",
                data: en(e.substring(1), t)
            } : zt[n] ? e.length > 1 ? {
                type: zt[n],
                data: e.substring(1)
            } : {
                type: zt[n]
            } : Vt
        },
        en = (e, t) => {
            if (Zt) {
                const n = (e => {
                    let t, n, r, o, i, a = .75 * e.length,
                        s = e.length,
                        c = 0;
                    "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                    const l = new ArrayBuffer(a),
                        d = new Uint8Array(l);
                    for (t = 0; t < s; t += 4) n = Qt[e.charCodeAt(t)], r = Qt[e.charCodeAt(t + 1)], o = Qt[e.charCodeAt(t + 2)], i = Qt[e.charCodeAt(t + 3)], d[c++] = n << 2 | r >> 4, d[c++] = (15 & r) << 4 | o >> 2, d[c++] = (3 & o) << 6 | 63 & i;
                    return l
                })(e);
                return tn(n, t)
            }
            return {
                base64: !0,
                data: e
            }
        },
        tn = (e, t) => "blob" === t ? e instanceof Blob ? e : new Blob([e]) : e instanceof ArrayBuffer ? e : e.buffer;
    let nn;
    o.prototype.on = o.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, o.prototype.once = function(e, t) {
        function n() {
            this.off(e, n), t.apply(this, arguments)
        }
        return n.fn = t, this.on(e, n), this
    }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + e];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === t || n.fn === t) {
                r.splice(o, 1);
                break
            } return 0 === r.length && delete this._callbacks["$" + e], this
    }, o.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        for (var t = Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t)
        }
        return this
    }, o.prototype.emitReserved = o.prototype.emit, o.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, o.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    };
    const rn = "function" == typeof Promise && "function" == typeof Promise.resolve ? e => Promise.resolve().then(e) : (e, t) => t(e, 0),
        on = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(),
        an = on.setTimeout,
        sn = on.clearTimeout;
    class cn extends Error {
        constructor(e, t, n) {
            super(e), this.description = t, this.context = n, this.type = "TransportError"
        }
    }
    class ln extends o {
        constructor(e) {
            super(), this.writable = !1, a(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64
        }
        onError(e, t, n) {
            return super.emitReserved("error", new cn(e, t, n)), this
        }
        open() {
            return this.readyState = "opening", this.doOpen(), this
        }
        close() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
        }
        send(e) {
            "open" === this.readyState && this.write(e)
        }
        onOpen() {
            this.readyState = "open", this.writable = !0, super.emitReserved("open")
        }
        onData(e) {
            const t = $t(e, this.socket.binaryType);
            this.onPacket(t)
        }
        onPacket(e) {
            super.emitReserved("packet", e)
        }
        onClose(e) {
            this.readyState = "closed", super.emitReserved("close", e)
        }
        pause(e) {}
        createUri(e, t = {}) {
            return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t)
        }
        _hostname() {
            const e = this.opts.hostname;
            return -1 === e.indexOf(":") ? e : "[" + e + "]"
        }
        _port() {
            return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : ""
        }
        _query(e) {
            const t = function(e) {
                let t = "";
                for (let n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t
            }(e);
            return t.length ? "?" + t : ""
        }
    }
    class dn extends ln {
        constructor() {
            super(...arguments), this._polling = !1
        }
        get name() {
            return "polling"
        }
        doOpen() {
            this._poll()
        }
        pause(e) {
            this.readyState = "pausing";
            const t = () => {
                this.readyState = "paused", e()
            };
            if (this._polling || !this.writable) {
                let e = 0;
                this._polling && (e++, this.once("pollComplete", (function() {
                    --e || t()
                }))), this.writable || (e++, this.once("drain", (function() {
                    --e || t()
                })))
            } else t()
        }
        _poll() {
            this._polling = !0, this.doPoll(), this.emitReserved("poll")
        }
        onData(e) {
            ((e, t) => {
                const n = e.split("\x1e"),
                    r = [];
                for (let e = 0; e < n.length; e++) {
                    const o = $t(n[e], t);
                    if (r.push(o), "error" === o.type) break
                }
                return r
            })(e, this.socket.binaryType).forEach((e => {
                if ("opening" === this.readyState && "open" === e.type && this.onOpen(), "close" === e.type) return this.onClose({
                    description: "transport closed by the server"
                }), !1;
                this.onPacket(e)
            })), "closed" !== this.readyState && (this._polling = !1, this.emitReserved("pollComplete"), "open" === this.readyState && this._poll())
        }
        doClose() {
            const e = () => {
                this.write([{
                    type: "close"
                }])
            };
            "open" === this.readyState ? e() : this.once("open", e)
        }
        write(e) {
            this.writable = !1, ((e, t) => {
                const n = e.length,
                    r = Array(n);
                let o = 0;
                e.forEach(((e, i) => {
                    Jt(e, !1, (e => {
                        r[i] = e, ++o === n && t(r.join("\x1e"))
                    }))
                }))
            })(e, (e => {
                this.doWrite(e, (() => {
                    this.writable = !0, this.emitReserved("drain")
                }))
            }))
        }
        uri() {
            const e = this.opts.secure ? "https" : "http",
                t = this.query || {};
            return !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = s()), this.supportsBinary || t.sid || (t.b64 = 1), this.createUri(e, t)
        }
    }
    let un = !1;
    try {
        un = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (Ns) {}
    const hn = un;
    class pn extends dn {
        constructor(e) {
            if (super(e),
                "undefined" != typeof location) {
                const t = "https:" === location.protocol;
                let n = location.port;
                n || (n = t ? "443" : "80"), this.xd = "undefined" != typeof location && e.hostname !== location.hostname || n !== e.port
            }
        }
        doWrite(e, t) {
            const n = this.request({
                method: "POST",
                data: e
            });
            n.on("success", t), n.on("error", ((e, t) => {
                this.onError("xhr post error", e, t)
            }))
        }
        doPoll() {
            const e = this.request();
            e.on("data", this.onData.bind(this)), e.on("error", ((e, t) => {
                this.onError("xhr poll error", e, t)
            })), this.pollXhr = e
        }
    }
    class fn extends o {
        constructor(e, t, n) {
            super(), this.createRequest = e, a(this, n), this._opts = n, this._method = n.method || "GET", this._uri = t, this._data = void 0 !== n.data ? n.data : null, this._create()
        }
        _create() {
            var e;
            const t = i(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            t.xdomain = !!this._opts.xd;
            const n = this._xhr = this.createRequest(t);
            try {
                n.open(this._method, this._uri, !0);
                try {
                    if (this._opts.extraHeaders) {
                        n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                        for (let e in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(e) && n.setRequestHeader(e, this._opts.extraHeaders[e])
                    }
                } catch (e) {}
                if ("POST" === this._method) try {
                    n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch (e) {}
                try {
                    n.setRequestHeader("Accept", "*/*")
                } catch (e) {}
                null === (e = this._opts.cookieJar) || void 0 === e || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout),
                    n.onreadystatechange = () => {
                        var e;
                        3 === n.readyState && (null === (e = this._opts.cookieJar) || void 0 === e || e.parseCookies(n.getResponseHeader("set-cookie"))), 4 === n.readyState && (200 === n.status || 1223 === n.status ? this._onLoad() : this.setTimeoutFn((() => {
                            this._onError("number" == typeof n.status ? n.status : 0)
                        }), 0))
                    }, n.send(this._data)
            } catch (e) {
                return void this.setTimeoutFn((() => {
                    this._onError(e)
                }), 0)
            }
            "undefined" != typeof document && (this._index = fn.requestsCount++, fn.requests[this._index] = this)
        }
        _onError(e) {
            this.emitReserved("error", e, this._xhr), this._cleanup(!0)
        }
        _cleanup(e) {
            if (void 0 !== this._xhr && null !== this._xhr) {
                if (this._xhr.onreadystatechange = c, e) try {
                    this._xhr.abort()
                } catch (e) {}
                "undefined" != typeof document && delete fn.requests[this._index], this._xhr = null
            }
        }
        _onLoad() {
            const e = this._xhr.responseText;
            null !== e && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup())
        }
        abort() {
            this._cleanup()
        }
    }
    fn.requestsCount = 0, fn.requests = {},
        "undefined" != typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", l) : "function" == typeof addEventListener && addEventListener("onpagehide" in on ? "pagehide" : "unload", l, !1));
    const mn = function() {
            const e = d({
                xdomain: !1
            });
            return e && null !== e.responseType
        }(),
        gn = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
    class bn extends ln {
        get name() {
            return "websocket"
        }
        doOpen() {
            const e = this.uri(),
                t = this.opts.protocols,
                n = gn ? {} : i(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
            this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
            try {
                this.ws = this.createSocket(e, t, n)
            } catch (e) {
                return this.emitReserved("error", e)
            }
            this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
        }
        addEventListeners() {
            this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
            }, this.ws.onclose = e => this.onClose({
                description: "websocket connection closed",
                context: e
            }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e)
        }
        write(e) {
            this.writable = !1;
            for (let t = 0; t < e.length; t++) {
                const n = e[t],
                    r = t === e.length - 1;
                Jt(n, this.supportsBinary, (e => {
                    try {
                        this.doWrite(n, e)
                    } catch (e) {}
                    r && rn((() => {
                        this.writable = !0, this.emitReserved("drain")
                    }), this.setTimeoutFn)
                }))
            }
        }
        doClose() {
            void 0 !== this.ws && (this.ws.close(), this.ws = null)
        }
        uri() {
            const e = this.opts.secure ? "wss" : "ws",
                t = this.query || {};
            return this.opts.timestampRequests && (t[this.opts.timestampParam] = s()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t)
        }
    }
    const yn = on.WebSocket || on.MozWebSocket,
        vn = {
            websocket: class extends bn {
                createSocket(e, t, n) {
                    return gn ? new yn(e, t, n) : t ? new yn(e, t) : new yn(e)
                }
                doWrite(e, t) {
                    this.ws.send(t)
                }
            },
            webtransport: class extends ln {
                get name() {
                    return "webtransport"
                }
                doOpen() {
                    try {
                        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
                    } catch (e) {
                        return this.emitReserved("error", e)
                    }
                    this._transport.closed.then((() => {
                        this.onClose()
                    })).catch((e => {
                        this.onError("webtransport error", e)
                    })), this._transport.ready.then((() => {
                        this._transport.createBidirectionalStream().then((e => {
                            const o = function(e, t) {
                                    nn || (nn = new TextDecoder);
                                    const o = [];
                                    let i = 0,
                                        a = -1,
                                        s = !1;
                                    return new TransformStream({
                                        transform(c, l) {
                                            for (o.push(c);;) {
                                                if (0 === i) {
                                                    if (n(o) < 1) break;
                                                    const e = r(o, 1);
                                                    s = !(128 & ~e[0]), a = 127 & e[0], i = a < 126 ? 3 : 126 === a ? 1 : 2
                                                } else if (1 === i) {
                                                    if (n(o) < 2) break;
                                                    const e = r(o, 2);
                                                    a = new DataView(e.buffer, e.byteOffset, e.length).getUint16(0), i = 3
                                                } else if (2 === i) {
                                                    if (n(o) < 8) break;
                                                    const e = r(o, 8),
                                                        t = new DataView(e.buffer, e.byteOffset, e.length),
                                                        s = t.getUint32(0);
                                                    if (s > 2097151) {
                                                        l.enqueue(Vt);
                                                        break
                                                    }
                                                    a = 4294967296 * s + t.getUint32(4), i = 3
                                                } else {
                                                    if (n(o) < a) break;
                                                    const e = r(o, a);
                                                    l.enqueue($t(s ? e : nn.decode(e), t)), i = 0
                                                }
                                                if (0 === a || a > e) {
                                                    l.enqueue(Vt);
                                                    break
                                                }
                                            }
                                        }
                                    })
                                }(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                                i = e.readable.pipeThrough(o).getReader(),
                                a = t();
                            a.readable.pipeTo(e.writable), this._writer = a.writable.getWriter();
                            const s = () => {
                                i.read().then((({
                                    done: e,
                                    value: t
                                }) => {
                                    e || (this.onPacket(t), s())
                                })).catch((() => {}))
                            };
                            s();
                            const c = {
                                type: "open"
                            };
                            this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`), this._writer.write(c).then((() => this.onOpen()))
                        }))
                    }))
                }
                write(e) {
                    this.writable = !1;
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t],
                            r = t === e.length - 1;
                        this._writer.write(n).then((() => {
                            r && rn((() => {
                                this.writable = !0, this.emitReserved("drain")
                            }), this.setTimeoutFn)
                        }))
                    }
                }
                doClose() {
                    var e;
                    null === (e = this._transport) || void 0 === e || e.close()
                }
            },
            polling: class extends pn {
                constructor(e) {
                    super(e);
                    const t = e && e.forceBase64;
                    this.supportsBinary = mn && !t
                }
                request(e = {}) {
                    return Object.assign(e, {
                        xd: this.xd
                    }, this.opts), new fn(d, this.uri(), e)
                }
            }
        },
        wn = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        kn = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        En = "function" == typeof addEventListener && "function" == typeof removeEventListener,
        Cn = [];
    En && addEventListener("offline", (() => {
        Cn.forEach((e => e()))
    }), !1);
    class xn extends o {
        constructor(e, t) {
            if (super(), this.binaryType = "arraybuffer", this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && "object" == typeof e && (t = e, e = null), e) {
                const n = u(e);
                t.hostname = n.host, t.secure = "https" === n.protocol || "wss" === n.protocol, t.port = n.port, n.query && (t.query = n.query)
            } else t.host && (t.hostname = u(t.host).host);
            a(this, t),
                this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((e => {
                    const t = e.prototype.name;
                    this.transports.push(t), this._transportsByName[t] = e
                })),
                this.opts = Object.assign({
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    addTrailingSlash: !0,
                    rejectUnauthorized: !0,
                    perMessageDeflate: {
                        threshold: 1024
                    },
                    transportOptions: {},
                    closeOnBeforeunload: !1
                }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), "string" == typeof this.opts.query && (this.opts.query = function(e) {
                    let t = {},
                        n = e.split("&");
                    for (let e = 0, r = n.length; e < r; e++) {
                        let r = n[e].split("=");
                        t[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
                    }
                    return t
                }(this.opts.query)), En && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
                    this.transport && (this.transport.removeAllListeners(), this.transport.close())
                }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), "localhost" !== this.hostname && (this._offlineEventListener = () => {
                    this._onClose("transport close", {
                        description: "network connection lost"
                    })
                }, Cn.push(this._offlineEventListener))),
                this.opts.withCredentials && (this._cookieJar = void 0), this._open()
        }
        createTransport(e) {
            const t = Object.assign({}, this.opts.query);
            t.EIO = 4, t.transport = e, this.id && (t.sid = this.id);
            const n = Object.assign({}, this.opts, {
                query: t,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port
            }, this.opts.transportOptions[e]);
            return new this._transportsByName[e](n)
        }
        _open() {
            if (0 === this.transports.length) return void this.setTimeoutFn((() => {
                this.emitReserved("error", "No transports available")
            }), 0);
            const e = this.opts.rememberUpgrade && xn.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket") ? "websocket" : this.transports[0];
            this.readyState = "opening";
            const t = this.createTransport(e);
            t.open(), this.setTransport(t)
        }
        setTransport(e) {
            this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (e => this._onClose("transport close", e)))
        }
        onOpen() {
            this.readyState = "open", xn.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush()
        }
        _onPacket(e) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
                case "open":
                    this.onHandshake(JSON.parse(e.data));
                    break;
                case "ping":
                    this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                    break;
                case "error":
                    const t = Error("server error");
                    t.code = e.data, this._onError(t);
                    break;
                case "message":
                    this.emitReserved("data", e.data), this.emitReserved("message", e.data)
            }
        }
        onHandshake(e) {
            this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), "closed" !== this.readyState && this._resetPingTimeout()
        }
        _resetPingTimeout() {
            this.clearTimeoutFn(this._pingTimeoutTimer);
            const e = this._pingInterval + this._pingTimeout;
            this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn((() => {
                this._onClose("ping timeout")
            }), e), this.opts.autoUnref && this._pingTimeoutTimer.unref()
        }
        _onDrain() {
            this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
        }
        flush() {
            if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                const e = this._getWritablePackets();
                this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush")
            }
        }
        _getWritablePackets() {
            if (!(this._maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
            let e = 1;
            for (let n = 0; n < this.writeBuffer.length; n++) {
                const r = this.writeBuffer[n].data;
                if (r && (e += "string" == typeof(t = r) ? function(e) {
                        let t = 0,
                            n = 0;
                        for (let r = 0, o = e.length; r < o; r++) t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
                        return n
                    }(t) : Math.ceil(1.33 * (t.byteLength || t.size))), n > 0 && e > this._maxPayload) return this.writeBuffer.slice(0, n);
                e += 2
            }
            var t;
            return this.writeBuffer
        }
        _hasPingExpired() {
            if (!this._pingTimeoutTime) return !0;
            const e = Date.now() > this._pingTimeoutTime;
            return e && (this._pingTimeoutTime = 0, rn((() => {
                this._onClose("ping timeout")
            }), this.setTimeoutFn)), e
        }
        write(e, t, n) {
            return this._sendPacket("message", e, t, n), this
        }
        send(e, t, n) {
            return this._sendPacket("message", e, t, n), this
        }
        _sendPacket(e, t, n, r) {
            if ("function" == typeof t && (r = t,
                    t = void 0), "function" == typeof n && (r = n, n = null), "closing" === this.readyState || "closed" === this.readyState) return;
            (n = n || {}).compress = !1 !== n.compress;
            const o = {
                type: e,
                data: t,
                options: n
            };
            this.emitReserved("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
        }
        close() {
            const e = () => {
                    this._onClose("forced close"), this.transport.close()
                },
                t = () => {
                    this.off("upgrade", t), this.off("upgradeError", t), e()
                },
                n = () => {
                    this.once("upgrade", t), this.once("upgradeError", t)
                };
            return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (() => {
                this.upgrading ? n() : e()
            })) : this.upgrading ? n() : e()), this
        }
        _onError(e) {
            if (xn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && "opening" === this.readyState) return this.transports.shift(), this._open();
            this.emitReserved("error", e), this._onClose("transport error", e)
        }
        _onClose(e, t) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), En && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                    const e = Cn.indexOf(this._offlineEventListener); - 1 !== e && Cn.splice(e, 1)
                }
                this.readyState = "closed", this.id = null,
                    this.emitReserved("close", e, t), this.writeBuffer = [], this._prevBufferLen = 0
            }
        }
    }
    xn.protocol = 4;
    class An extends xn {
        constructor() {
            super(...arguments), this._upgrades = []
        }
        onOpen() {
            if (super.onOpen(), "open" === this.readyState && this.opts.upgrade)
                for (let e = 0; e < this._upgrades.length; e++) this._probe(this._upgrades[e])
        }
        _probe(e) {
            function t() {
                a || (a = !0, l(), i.close(), i = null)
            }

            function n() {
                c("transport closed")
            }

            function r() {
                c("socket closed")
            }

            function o(e) {
                i && e.name !== i.name && t()
            }
            let i = this.createTransport(e),
                a = !1;
            xn.priorWebsocketSuccess = !1;
            const s = () => {
                    a || (i.send([{
                        type: "ping",
                        data: "probe"
                    }]), i.once("packet", (e => {
                        if (!a)
                            if ("pong" === e.type && "probe" === e.data) {
                                if (this.upgrading = !0, this.emitReserved("upgrading", i), !i) return;
                                xn.priorWebsocketSuccess = "websocket" === i.name, this.transport.pause((() => {
                                    a || "closed" !== this.readyState && (l(), this.setTransport(i), i.send([{
                                        type: "upgrade"
                                    }]), this.emitReserved("upgrade", i), i = null, this.upgrading = !1, this.flush())
                                }))
                            } else {
                                const e = Error("probe error");
                                e.transport = i.name,
                                    this.emitReserved("upgradeError", e)
                            }
                    })))
                },
                c = e => {
                    const n = Error("probe error: " + e);
                    n.transport = i.name, t(), this.emitReserved("upgradeError", n)
                },
                l = () => {
                    i.removeListener("open", s), i.removeListener("error", c), i.removeListener("close", n), this.off("close", r), this.off("upgrading", o)
                };
            i.once("open", s), i.once("error", c), i.once("close", n), this.once("close", r), this.once("upgrading", o), -1 !== this._upgrades.indexOf("webtransport") && "webtransport" !== e ? this.setTimeoutFn((() => {
                a || i.open()
            }), 200) : i.open()
        }
        onHandshake(e) {
            this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e)
        }
        _filterUpgrades(e) {
            const t = [];
            for (let n = 0; n < e.length; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
            return t
        }
    }
    class Tn extends An {
        constructor(e, t = {}) {
            const n = "object" == typeof e ? e : t;
            (!n.transports || n.transports && "string" == typeof n.transports[0]) && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((e => vn[e])).filter((e => !!e))), super(e, n)
        }
    }
    const Sn = "function" == typeof ArrayBuffer,
        Ln = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
        In = Object.prototype.toString,
        jn = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === In.call(Blob),
        _n = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === In.call(File),
        Mn = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
        On = 5;
    var Pn;
    ! function(e) {
        e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
    }(Pn || (Pn = {}));
    class Bn {
        constructor(e) {
            this.replacer = e
        }
        encode(e) {
            return e.type !== Pn.EVENT && e.type !== Pn.ACK || !p(e) ? [this.encodeAsString(e)] : this.encodeAsBinary({
                type: e.type === Pn.EVENT ? Pn.BINARY_EVENT : Pn.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id
            })
        }
        encodeAsString(e) {
            let t = "" + e.type;
            return e.type !== Pn.BINARY_EVENT && e.type !== Pn.BINARY_ACK || (t += e.attachments + "-"), e.nsp && "/" !== e.nsp && (t += e.nsp + ","), null != e.id && (t += e.id), null != e.data && (t += JSON.stringify(e.data, this.replacer)), t
        }
        encodeAsBinary(e) {
            const t = f(e),
                n = this.encodeAsString(t.packet),
                r = t.buffers;
            return r.unshift(n), r
        }
    }
    class Nn extends o {
        constructor(e) {
            super(), this.reviver = e
        }
        add(e) {
            let t;
            if ("string" == typeof e) {
                if (this.reconstructor) throw Error("got plaintext data when reconstructing a packet");
                t = this.decodeString(e);
                const n = t.type === Pn.BINARY_EVENT;
                n || t.type === Pn.BINARY_ACK ? (t.type = n ? Pn.EVENT : Pn.ACK, this.reconstructor = new Dn(t), 0 === t.attachments && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t)
            } else {
                if (!h(e) && !e.base64) throw Error("Unknown type: " + e);
                if (!this.reconstructor) throw Error("got binary data when not reconstructing a packet");
                t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t))
            }
        }
        decodeString(e) {
            let t = 0;
            const n = {
                type: Number(e.charAt(0))
            };
            if (void 0 === Pn[n.type]) throw Error("unknown packet type " + n.type);
            if (n.type === Pn.BINARY_EVENT || n.type === Pn.BINARY_ACK) {
                const r = t + 1;
                for (;
                    "-" !== e.charAt(++t) && t != e.length;);
                const o = e.substring(r, t);
                if (o != Number(o) || "-" !== e.charAt(t)) throw Error("Illegal attachments");
                n.attachments = Number(o)
            }
            if ("/" === e.charAt(t + 1)) {
                const r = t + 1;
                for (; ++t && "," !== e.charAt(t) && t !== e.length;);
                n.nsp = e.substring(r, t)
            } else n.nsp = "/";
            const r = e.charAt(t + 1);
            if ("" !== r && Number(r) == r) {
                const r = t + 1;
                for (; ++t;) {
                    const n = e.charAt(t);
                    if (null == n || Number(n) != n) {
                        --t;
                        break
                    }
                    if (t === e.length) break
                }
                n.id = Number(e.substring(r, t + 1))
            }
            if (e.charAt(++t)) {
                const r = this.tryParse(e.substr(t));
                if (!Nn.isPayloadValid(n.type, r)) throw Error("invalid payload");
                n.data = r
            }
            return n
        }
        tryParse(e) {
            try {
                return JSON.parse(e, this.reviver)
            } catch (e) {
                return !1
            }
        }
        static isPayloadValid(e, t) {
            switch (e) {
                case Pn.CONNECT:
                    return y(t);
                case Pn.DISCONNECT:
                    return void 0 === t;
                case Pn.CONNECT_ERROR:
                    return "string" == typeof t || y(t);
                case Pn.EVENT:
                case Pn.BINARY_EVENT:
                    return Array.isArray(t) && ("number" == typeof t[0] || "string" == typeof t[0] && -1 === Mn.indexOf(t[0]));
                case Pn.ACK:
                case Pn.BINARY_ACK:
                    return Array.isArray(t)
            }
        }
        destroy() {
            this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
        }
    }
    class Dn {
        constructor(e) {
            this.packet = e, this.buffers = [], this.reconPack = e
        }
        takeBinaryData(e) {
            if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                const e = g(this.reconPack, this.buffers);
                return this.finishedReconstruction(), e
            }
            return null
        }
        finishedReconstruction() {
            this.reconPack = null, this.buffers = []
        }
    }
    const Rn = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
    });
    class Fn extends o {
        constructor(e, t, n) {
            super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, n && n.auth && (this.auth = n.auth),
                this._opts = Object.assign({}, n), this.io._autoConnect && this.open()
        }
        get disconnected() {
            return !this.connected
        }
        subEvents() {
            if (this.subs) return;
            const e = this.io;
            this.subs = [v(e, "open", this.onopen.bind(this)), v(e, "packet", this.onpacket.bind(this)), v(e, "error", this.onerror.bind(this)), v(e, "close", this.onclose.bind(this))]
        }
        get active() {
            return !!this.subs
        }
        connect() {
            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
        }
        open() {
            return this.connect()
        }
        send(...e) {
            return e.unshift("message"), this.emit.apply(this, e), this
        }
        emit(e, ...t) {
            var n, r, o;
            if (Rn.hasOwnProperty(e)) throw Error('"' + e.toString() + '" is a reserved event name');
            if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(t), this;
            const i = {
                type: Pn.EVENT,
                data: t,
                options: {}
            };
            if (i.options.compress = !1 !== this.flags.compress, "function" == typeof t[t.length - 1]) {
                const e = this.ids++,
                    n = t.pop();
                this._registerAckCallback(e, n), i.id = e
            }
            const a = null === (r = null === (n = this.io.engine) || void 0 === n ? void 0 : n.transport) || void 0 === r ? void 0 : r.writable,
                s = this.connected && !(null === (o = this.io.engine) || void 0 === o ? void 0 : o._hasPingExpired());
            return this.flags.volatile && !a || (s ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this
        }
        _registerAckCallback(e, t) {
            var n;
            const r = null !== (n = this.flags.timeout) && void 0 !== n ? n : this._opts.ackTimeout;
            if (void 0 === r) return void(this.acks[e] = t);
            const o = this.io.setTimeoutFn((() => {
                    delete this.acks[e];
                    for (let t = 0; t < this.sendBuffer.length; t++) this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
                    t.call(this, Error("operation has timed out"))
                }), r),
                i = (...e) => {
                    this.io.clearTimeoutFn(o), t.apply(this, e)
                };
            i.withError = !0, this.acks[e] = i
        }
        emitWithAck(e, ...t) {
            return new Promise(((n, r) => {
                const o = (e, t) => e ? r(e) : n(t);
                o.withError = !0, t.push(o), this.emit(e, ...t)
            }))
        }
        _addToQueue(e) {
            let t;
            "function" == typeof e[e.length - 1] && (t = e.pop());
            const n = {
                id: this._queueSeq++,
                tryCount: 0,
                pending: !1,
                args: e,
                flags: Object.assign({
                    fromQueue: !0
                }, this.flags)
            };
            e.push(((e, ...r) => {
                if (n === this._queue[0]) return null !== e ? n.tryCount > this._opts.retries && (this._queue.shift(), t && t(e)) : (this._queue.shift(), t && t(null, ...r)), n.pending = !1, this._drainQueue()
            })), this._queue.push(n), this._drainQueue()
        }
        _drainQueue(e = !1) {
            if (!this.connected || 0 === this._queue.length) return;
            const t = this._queue[0];
            t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags,
                this.emit.apply(this, t.args))
        }
        packet(e) {
            e.nsp = this.nsp, this.io._packet(e)
        }
        onopen() {
            "function" == typeof this.auth ? this.auth((e => {
                this._sendConnectPacket(e)
            })) : this._sendConnectPacket(this.auth)
        }
        _sendConnectPacket(e) {
            this.packet({
                type: Pn.CONNECT,
                data: this._pid ? Object.assign({
                    pid: this._pid,
                    offset: this._lastOffset
                }, e) : e
            })
        }
        onerror(e) {
            this.connected || this.emitReserved("connect_error", e)
        }
        onclose(e, t) {
            this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t), this._clearAcks()
        }
        _clearAcks() {
            Object.keys(this.acks).forEach((e => {
                if (!this.sendBuffer.some((t => t.id + "" === e))) {
                    const t = this.acks[e];
                    delete this.acks[e], t.withError && t.call(this, Error("socket has been disconnected"))
                }
            }))
        }
        onpacket(e) {
            if (e.nsp === this.nsp) switch (e.type) {
                case Pn.CONNECT:
                    e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                    break;
                case Pn.EVENT:
                case Pn.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case Pn.ACK:
                case Pn.BINARY_ACK:
                    this.onack(e);
                    break;
                case Pn.DISCONNECT:
                    this.ondisconnect();
                    break;
                case Pn.CONNECT_ERROR:
                    this.destroy();
                    const t = Error(e.data.message);
                    t.data = e.data.data, this.emitReserved("connect_error", t)
            }
        }
        onevent(e) {
            const t = e.data || [];
            null != e.id && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
        }
        emitEvent(e) {
            if (this._anyListeners && this._anyListeners.length) {
                const t = this._anyListeners.slice();
                for (const n of t) n.apply(this, e)
            }
            super.emit.apply(this, e), this._pid && e.length && "string" == typeof e[e.length - 1] && (this._lastOffset = e[e.length - 1])
        }
        ack(e) {
            const t = this;
            let n = !1;
            return function(...r) {
                n || (n = !0, t.packet({
                    type: Pn.ACK,
                    id: e,
                    data: r
                }))
            }
        }
        onack(e) {
            const t = this.acks[e.id];
            "function" == typeof t && (delete this.acks[e.id], t.withError && e.data.unshift(null), t.apply(this, e.data))
        }
        onconnect(e, t) {
            this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
        }
        emitBuffered() {
            this.receiveBuffer.forEach((e => this.emitEvent(e))), this.receiveBuffer = [], this.sendBuffer.forEach((e => {
                this.notifyOutgoingListeners(e), this.packet(e)
            })), this.sendBuffer = []
        }
        ondisconnect() {
            this.destroy(), this.onclose("io server disconnect")
        }
        destroy() {
            this.subs && (this.subs.forEach((e => e())), this.subs = void 0), this.io._destroy(this)
        }
        disconnect() {
            return this.connected && this.packet({
                type: Pn.DISCONNECT
            }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }
        close() {
            return this.disconnect()
        }
        compress(e) {
            return this.flags.compress = e, this
        }
        get volatile() {
            return this.flags.volatile = !0, this
        }
        timeout(e) {
            return this.flags.timeout = e, this
        }
        onAny(e) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
        }
        prependAny(e) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
        }
        offAny(e) {
            if (!this._anyListeners) return this;
            if (e) {
                const t = this._anyListeners;
                for (let n = 0; n < t.length; n++)
                    if (e === t[n]) return t.splice(n, 1), this
            } else this._anyListeners = [];
            return this
        }
        listenersAny() {
            return this._anyListeners || []
        }
        onAnyOutgoing(e) {
            return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
        }
        prependAnyOutgoing(e) {
            return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
        }
        offAnyOutgoing(e) {
            if (!this._anyOutgoingListeners) return this;
            if (e) {
                const t = this._anyOutgoingListeners;
                for (let n = 0; n < t.length; n++)
                    if (e === t[n]) return t.splice(n, 1), this
            } else this._anyOutgoingListeners = [];
            return this
        }
        listenersAnyOutgoing() {
            return this._anyOutgoingListeners || []
        }
        notifyOutgoingListeners(e) {
            if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                const t = this._anyOutgoingListeners.slice();
                for (const n of t) n.apply(this, e.data)
            }
        }
    }
    w.prototype.duration = function() {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var t = Math.random(),
                    n = Math.floor(t * this.jitter * e);
                e = 1 & Math.floor(10 * t) ? e + n : e - n
            }
            return 0 | Math.min(e, this.max)
        }, w.prototype.reset = function() {
            this.attempts = 0
        },
        w.prototype.setMin = function(e) {
            this.ms = e
        }, w.prototype.setMax = function(e) {
            this.max = e
        }, w.prototype.setJitter = function(e) {
            this.jitter = e
        };
    class Un extends o {
        constructor(e, t) {
            var n;
            super(), this.nsps = {}, this.subs = [], e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.opts = t, a(this, t), this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3),
                this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(null !== (n = t.randomizationFactor) && void 0 !== n ? n : .5), this.backoff = new w({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
            const r = t.parser || Ut;
            this.encoder = new r.Encoder, this.decoder = new r.Decoder, this._autoConnect = !1 !== t.autoConnect, this._autoConnect && this.open()
        }
        reconnection(e) {
            return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection
        }
        reconnectionAttempts(e) {
            return void 0 === e ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
        }
        reconnectionDelay(e) {
            var t;
            return void 0 === e ? this._reconnectionDelay : (this._reconnectionDelay = e, null === (t = this.backoff) || void 0 === t || t.setMin(e), this)
        }
        randomizationFactor(e) {
            var t;
            return void 0 === e ? this._randomizationFactor : (this._randomizationFactor = e,
                null === (t = this.backoff) || void 0 === t || t.setJitter(e), this)
        }
        reconnectionDelayMax(e) {
            var t;
            return void 0 === e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, null === (t = this.backoff) || void 0 === t || t.setMax(e), this)
        }
        timeout(e) {
            return arguments.length ? (this._timeout = e, this) : this._timeout
        }
        maybeReconnectOnOpen() {
            !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }
        open(e) {
            if (~this._readyState.indexOf("open")) return this;
            this.engine = new Tn(this.uri, this.opts);
            const t = this.engine,
                n = this;
            this._readyState = "opening", this.skipReconnect = !1;
            const r = v(t, "open", (function() {
                    n.onopen(), e && e()
                })),
                o = t => {
                    this.cleanup(), this._readyState = "closed", this.emitReserved("error", t), e ? e(t) : this.maybeReconnectOnOpen()
                },
                i = v(t, "error", o);
            if (!1 !== this._timeout) {
                const e = this._timeout,
                    n = this.setTimeoutFn((() => {
                        r(), o(Error("timeout")), t.close()
                    }), e);
                this.opts.autoUnref && n.unref(), this.subs.push((() => {
                    this.clearTimeoutFn(n)
                }))
            }
            return this.subs.push(r), this.subs.push(i), this
        }
        connect(e) {
            return this.open(e)
        }
        onopen() {
            this.cleanup(), this._readyState = "open", this.emitReserved("open");
            const e = this.engine;
            this.subs.push(v(e, "ping", this.onping.bind(this)), v(e, "data", this.ondata.bind(this)), v(e, "error", this.onerror.bind(this)), v(e, "close", this.onclose.bind(this)), v(this.decoder, "decoded", this.ondecoded.bind(this)))
        }
        onping() {
            this.emitReserved("ping")
        }
        ondata(e) {
            try {
                this.decoder.add(e)
            } catch (e) {
                this.onclose("parse error", e)
            }
        }
        ondecoded(e) {
            rn((() => {
                this.emitReserved("packet", e)
            }), this.setTimeoutFn)
        }
        onerror(e) {
            this.emitReserved("error", e)
        }
        socket(e, t) {
            let n = this.nsps[e];
            return n ? this._autoConnect && !n.active && n.connect() : (n = new Fn(this, e, t), this.nsps[e] = n), n
        }
        _destroy(e) {
            const t = Object.keys(this.nsps);
            for (const e of t)
                if (this.nsps[e].active) return;
            this._close()
        }
        _packet(e) {
            const t = this.encoder.encode(e);
            for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options)
        }
        cleanup() {
            this.subs.forEach((e => e())), this.subs.length = 0, this.decoder.destroy()
        }
        _close() {
            this.skipReconnect = !0,
                this._reconnecting = !1, this.onclose("forced close")
        }
        disconnect() {
            return this._close()
        }
        onclose(e, t) {
            var n;
            this.cleanup(), null === (n = this.engine) || void 0 === n || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect()
        }
        reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            const e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"),
                this._reconnecting = !1;
            else {
                const t = this.backoff.duration();
                this._reconnecting = !0;
                const n = this.setTimeoutFn((() => {
                    e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open((t => {
                        t ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", t)) : e.onreconnect()
                    })))
                }), t);
                this.opts.autoUnref && n.unref(), this.subs.push((() => {
                    this.clearTimeoutFn(n)
                }))
            }
        }
        onreconnect() {
            const e = this.backoff.attempts;
            this._reconnecting = !1, this.backoff.reset(),
                this.emitReserved("reconnect", e)
        }
    }
    const Hn = {};
    Object.assign(k, {
        Manager: Un,
        Socket: Fn,
        io: k,
        connect: k
    });
    const zn = function(e) {
            const t = [];
            let n = 0;
            for (let r = 0; r < e.length; r++) {
                let o = e.charCodeAt(r);
                o < 128 ? t[n++] = o : o < 2048 ? (t[n++] = o >> 6 | 192, t[n++] = 63 & o | 128) : 55296 == (64512 & o) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = o >> 18 | 240, t[n++] = o >> 12 & 63 | 128, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128) : (t[n++] = o >> 12 | 224, t[n++] = o >> 6 & 63 | 128, t[n++] = 63 & o | 128)
            }
            return t
        },
        Vn = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
                return this.ENCODED_VALS_BASE + "+/="
            },
            get ENCODED_VALS_WEBSAFE() {
                return this.ENCODED_VALS_BASE + "-_."
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray(e, t) {
                if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                this.init_();
                const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                    r = [];
                for (let t = 0; t < e.length; t += 3) {
                    const o = e[t],
                        i = t + 1 < e.length,
                        a = i ? e[t + 1] : 0,
                        s = t + 2 < e.length,
                        c = s ? e[t + 2] : 0,
                        l = o >> 2,
                        d = (3 & o) << 4 | a >> 4;
                    let u = (15 & a) << 2 | c >> 6,
                        h = 63 & c;
                    s || (h = 64, i || (u = 64)), r.push(n[l], n[d], n[u], n[h])
                }
                return r.join("")
            },
            encodeString(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(zn(e), t)
            },
            decodeString(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                    const t = [];
                    let n = 0,
                        r = 0;
                    for (; n < e.length;) {
                        const o = e[n++];
                        if (o < 128) t[r++] = String.fromCharCode(o);
                        else if (o > 191 && o < 224) {
                            const i = e[n++];
                            t[r++] = String.fromCharCode((31 & o) << 6 | 63 & i)
                        } else if (o > 239 && o < 365) {
                            const i = ((7 & o) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                            t[r++] = String.fromCharCode(55296 + (i >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & i))
                        } else {
                            const i = e[n++],
                                a = e[n++];
                            t[r++] = String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & a)
                        }
                    }
                    return t.join("")
                }(this.decodeStringToByteArray(e, t))
            },
            decodeStringToByteArray(e, t) {
                this.init_();
                const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                    r = [];
                for (let t = 0; t < e.length;) {
                    const o = n[e.charAt(t++)],
                        i = t < e.length ? n[e.charAt(t)] : 0;
                    ++t;
                    const a = t < e.length ? n[e.charAt(t)] : 64;
                    ++t;
                    const s = t < e.length ? n[e.charAt(t)] : 64;
                    if (++t, null == o || null == i || null == a || null == s) throw new Wn;
                    const c = o << 2 | i >> 4;
                    if (r.push(c), 64 !== a) {
                        const e = i << 4 & 240 | a >> 2;
                        if (r.push(e), 64 !== s) {
                            const e = a << 6 & 192 | s;
                            r.push(e)
                        }
                    }
                }
                return r
            },
            init_() {
                if (!this.byteToCharMap_) {
                    this.byteToCharMap_ = {}, this.charToByteMap_ = {},
                        this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                    for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                }
            }
        };
    class Wn extends Error {
        constructor() {
            super(...arguments), this.name = "DecodeBase64StringError"
        }
    }
    const qn = function(e) {
            return function(e) {
                const t = zn(e);
                return Vn.encodeByteArray(t, !0)
            }(e).replace(/\./g, "")
        },
        Gn = function(e) {
            try {
                return Vn.decodeString(e, !0)
            } catch (e) {}
            return null
        },
        Jn = () => function() {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== Ft.g) return Ft.g;
            throw Error("Unable to locate global object.")
        }().__FIREBASE_DEFAULTS__,
        Kn = () => {
            try {
                return Jn() || (() => {
                    if ("undefined" == typeof process || void 0 === process.env) return;
                    const e = process.env.__FIREBASE_DEFAULTS__;
                    return e ? JSON.parse(e) : void 0
                })() || (() => {
                    if ("undefined" == typeof document) return;
                    let e;
                    try {
                        e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                    } catch (e) {
                        return
                    }
                    const t = e && Gn(e[1]);
                    return t && JSON.parse(t)
                })()
            } catch (e) {
                return
            }
        },
        Yn = () => {
            var e;
            return null === (e = Kn()) || void 0 === e ? void 0 : e.config
        };
    class Xn {
        constructor() {
            this.reject = () => {}, this.resolve = () => {},
                this.promise = new Promise(((e, t) => {
                    this.resolve = e, this.reject = t
                }))
        }
        wrapCallback(e) {
            return (t, n) => {
                t ? this.reject(t) : this.resolve(n), "function" == typeof e && (this.promise.catch((() => {})), 1 === e.length ? e(t) : e(t, n))
            }
        }
    }
    class Qn extends Error {
        constructor(e, t, n) {
            super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, Qn.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Zn.prototype.create)
        }
    }
    class Zn {
        constructor(e, t, n) {
            this.service = e, this.serviceName = t,
                this.errors = n
        }
        create(e, ...t) {
            const n = t[0] || {},
                r = `${this.service}/${e}`,
                o = this.errors[e],
                i = o ? function(e, t) {
                    return e.replace($n, ((e, n) => {
                        const r = t[n];
                        return null != r ? r + "" : `<${n}?>`
                    }))
                }(o, n) : "Error",
                a = `${this.serviceName}: ${i} (${r}).`;
            return new Qn(r, a, n)
        }
    }
    const $n = /\{\$([^}]+)}/g,
        er = 1e3,
        tr = 2,
        nr = 144e5,
        rr = .5;
    class or {
        constructor(e, t, n) {
            this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
        }
        setInstantiationMode(e) {
            return this.instantiationMode = e, this
        }
        setMultipleInstances(e) {
            return this.multipleInstances = e, this
        }
        setServiceProps(e) {
            return this.serviceProps = e, this
        }
        setInstanceCreatedCallback(e) {
            return this.onInstanceCreated = e, this
        }
    }
    const ir = "[DEFAULT]";
    class ar {
        constructor(e, t) {
            this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
        }
        get(e) {
            const t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
                const e = new Xn;
                if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                    const n = this.getOrInitializeService({
                        instanceIdentifier: t
                    });
                    n && e.resolve(n)
                } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise
        }
        getImmediate(e) {
            var t;
            const n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
            if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                if (r) return null;
                throw Error(`Service ${this.name} is not available`)
            }
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: n
                })
            } catch (e) {
                if (r) return null;
                throw e
            }
        }
        getComponent() {
            return this.component
        }
        setComponent(e) {
            if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
            if (this.component) throw Error(`Component for ${this.name} has already been provided`);
            if (this.component = e, this.shouldAutoInitialize()) {
                if (function(e) {
                        return "EAGER" === e.instantiationMode
                    }(e)) try {
                    this.getOrInitializeService({
                        instanceIdentifier: ir
                    })
                } catch (e) {}
                for (const [e, t] of this.instancesDeferred.entries()) {
                    const n = this.normalizeInstanceIdentifier(e);
                    try {
                        const e = this.getOrInitializeService({
                            instanceIdentifier: n
                        });
                        t.resolve(e)
                    } catch (e) {}
                }
            }
        }
        clearInstance(e = ir) {
            this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
        }
        async delete() {
            const e = Array.from(this.instances.values());
            await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
        }
        isComponentSet() {
            return null != this.component
        }
        isInitialized(e = ir) {
            return this.instances.has(e)
        }
        getOptions(e = ir) {
            return this.instancesOptions.get(e) || {}
        }
        initialize(e = {}) {
            const {
                options: t = {}
            } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
            if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
            if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
            const r = this.getOrInitializeService({
                instanceIdentifier: n,
                options: t
            });
            for (const [e, t] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
            return r
        }
        onInit(e, t) {
            var n;
            const r = this.normalizeInstanceIdentifier(t),
                o = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
            o.add(e), this.onInitCallbacks.set(r, o);
            const i = this.instances.get(r);
            return i && e(i, r), () => {
                o.delete(e)
            }
        }
        invokeOnInitCallbacks(e, t) {
            const n = this.onInitCallbacks.get(t);
            if (n)
                for (const r of n) try {
                    r(e, t)
                } catch (e) {}
        }
        getOrInitializeService({
            instanceIdentifier: e,
            options: t = {}
        }) {
            let n = this.instances.get(e);
            if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                    instanceIdentifier: (r = e, r === ir ? void 0 : r),
                    options: t
                }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                this.component.onInstanceCreated(this.container, e, n)
            } catch (e) {}
            var r;
            return n || null
        }
        normalizeInstanceIdentifier(e = ir) {
            return this.component ? this.component.multipleInstances ? e : ir : e
        }
        shouldAutoInitialize() {
            return !!this.component && "EXPLICIT" !== this.component.instantiationMode
        }
    }
    class sr {
        constructor(e) {
            this.name = e, this.providers = new Map
        }
        addComponent(e) {
            const t = this.getProvider(e.name);
            if (t.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
            t.setComponent(e)
        }
        addOrOverwriteComponent(e) {
            this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
        }
        getProvider(e) {
            if (this.providers.has(e)) return this.providers.get(e);
            const t = new ar(e, this);
            return this.providers.set(e, t), t
        }
        getProviders() {
            return Array.from(this.providers.values())
        }
    }
    const cr = [];
    var lr;
    ! function(e) {
        e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
    }(lr || (lr = {}));
    const dr = {
            debug: lr.DEBUG,
            verbose: lr.VERBOSE,
            info: lr.INFO,
            warn: lr.WARN,
            error: lr.ERROR,
            silent: lr.SILENT
        },
        ur = lr.INFO,
        hr = {
            [lr.DEBUG]: "log",
            [lr.VERBOSE]: "log",
            [lr.INFO]: "info",
            [lr.WARN]: "warn",
            [lr.ERROR]: "error"
        },
        pr = (e, t) => {
            if (!(t < e.logLevel || ((new Date).toISOString(), hr[t]))) throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)
        };
    class fr {
        constructor(e) {
            this.name = e, this._logLevel = ur, this._logHandler = pr, this._userLogHandler = null, cr.push(this)
        }
        get logLevel() {
            return this._logLevel
        }
        set logLevel(e) {
            if (!(e in lr)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
            this._logLevel = e
        }
        setLogLevel(e) {
            this._logLevel = "string" == typeof e ? dr[e] : e
        }
        get logHandler() {
            return this._logHandler
        }
        set logHandler(e) {
            if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = e
        }
        get userLogHandler() {
            return this._userLogHandler
        }
        set userLogHandler(e) {
            this._userLogHandler = e
        }
        debug(...e) {
            this._userLogHandler && this._userLogHandler(this, lr.DEBUG, ...e), this._logHandler(this, lr.DEBUG, ...e)
        }
        log(...e) {
            this._userLogHandler && this._userLogHandler(this, lr.VERBOSE, ...e), this._logHandler(this, lr.VERBOSE, ...e)
        }
        info(...e) {
            this._userLogHandler && this._userLogHandler(this, lr.INFO, ...e), this._logHandler(this, lr.INFO, ...e)
        }
        warn(...e) {
            this._userLogHandler && this._userLogHandler(this, lr.WARN, ...e), this._logHandler(this, lr.WARN, ...e)
        }
        error(...e) {
            this._userLogHandler && this._userLogHandler(this, lr.ERROR, ...e), this._logHandler(this, lr.ERROR, ...e)
        }
    }
    const mr = (e, t) => t.some((t => e instanceof t));
    let gr, br;
    const yr = new WeakMap,
        vr = new WeakMap,
        wr = new WeakMap,
        kr = new WeakMap,
        Er = new WeakMap;
    let Cr = {
        get(e, t, n) {
            if (e instanceof IDBTransaction) {
                if ("done" === t) return vr.get(e);
                if ("objectStoreNames" === t) return e.objectStoreNames || wr.get(e);
                if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
            }
            return j(e[t])
        },
        set: (e, t, n) => (e[t] = n, !0),
        has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };
    const xr = e => Er.get(e),
        Ar = ["get", "getKey", "getAll", "getAllKeys", "count"],
        Tr = ["put", "add", "delete", "clear"],
        Sr = new Map;
    var Lr;
    Lr = Cr, Cr = {
        ...Lr,
        get: (e, t, n) => M(e, t) || Lr.get(e, t, n),
        has: (e, t) => !!M(e, t) || Lr.has(e, t)
    };
    class Ir {
        constructor(e) {
            this.container = e
        }
        getPlatformInfoString() {
            return this.container.getProviders().map((e => {
                if (function(e) {
                        const t = e.getComponent();
                        return "VERSION" === (null == t ? void 0 : t.type)
                    }(e)) {
                    const t = e.getImmediate();
                    return `${t.library}/${t.version}`
                }
                return null
            })).filter((e => e)).join(" ")
        }
    }
    const jr = "@firebase/app",
        _r = "0.10.15",
        Mr = new fr("@firebase/app"),
        Or = "@firebase/app-compat",
        Pr = "@firebase/analytics-compat",
        Br = "@firebase/analytics",
        Nr = "@firebase/app-check-compat",
        Dr = "@firebase/app-check",
        Rr = "@firebase/auth",
        Fr = "@firebase/auth-compat",
        Ur = "@firebase/database",
        Hr = "@firebase/data-connect",
        zr = "@firebase/database-compat",
        Vr = "@firebase/functions",
        Wr = "@firebase/functions-compat",
        qr = "@firebase/installations",
        Gr = "@firebase/installations-compat",
        Jr = "@firebase/messaging",
        Kr = "@firebase/messaging-compat",
        Yr = "@firebase/performance",
        Xr = "@firebase/performance-compat",
        Qr = "@firebase/remote-config",
        Zr = "@firebase/remote-config-compat",
        $r = "@firebase/storage",
        eo = "@firebase/storage-compat",
        to = "@firebase/firestore",
        no = "@firebase/vertexai",
        ro = "@firebase/firestore-compat",
        oo = "firebase",
        io = "[DEFAULT]",
        ao = {
            [jr]: "fire-core",
            [Or]: "fire-core-compat",
            [Br]: "fire-analytics",
            [Pr]: "fire-analytics-compat",
            [Dr]: "fire-app-check",
            [Nr]: "fire-app-check-compat",
            [Rr]: "fire-auth",
            [Fr]: "fire-auth-compat",
            [Ur]: "fire-rtdb",
            [Hr]: "fire-data-connect",
            [zr]: "fire-rtdb-compat",
            [Vr]: "fire-fn",
            [Wr]: "fire-fn-compat",
            [qr]: "fire-iid",
            [Gr]: "fire-iid-compat",
            [Jr]: "fire-fcm",
            [Kr]: "fire-fcm-compat",
            [Yr]: "fire-perf",
            [Xr]: "fire-perf-compat",
            [Qr]: "fire-rc",
            [Zr]: "fire-rc-compat",
            [$r]: "fire-gcs",
            [eo]: "fire-gcs-compat",
            [to]: "fire-fst",
            [ro]: "fire-fst-compat",
            [no]: "fire-vertex",
            "fire-js": "fire-js",
            [oo]: "fire-js-all"
        },
        so = new Map,
        co = new Map,
        lo = new Map,
        uo = new Zn("app", "Firebase", {
            "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
            "bad-app-name": "Illegal App name: '{$appName}'",
            "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
            "app-deleted": "Firebase App named '{$appName}' already deleted",
            "server-app-deleted": "Firebase Server App has been deleted",
            "no-options": "Need to provide options, when not being deployed to hosting via source.",
            "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
            "invalid-log-argument": "First argument to `onLog` must be null or a function.",
            "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
            "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
            "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
        });
    class ho {
        constructor(e, t, n) {
            this._isDeleted = !1,
                this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new or("app", (() => this), "PUBLIC"))
        }
        get automaticDataCollectionEnabled() {
            return this.checkDestroyed(), this._automaticDataCollectionEnabled
        }
        set automaticDataCollectionEnabled(e) {
            this.checkDestroyed(), this._automaticDataCollectionEnabled = e
        }
        get name() {
            return this.checkDestroyed(), this._name
        }
        get options() {
            return this.checkDestroyed(), this._options
        }
        get config() {
            return this.checkDestroyed(), this._config
        }
        get container() {
            return this._container
        }
        get isDeleted() {
            return this._isDeleted
        }
        set isDeleted(e) {
            this._isDeleted = e
        }
        checkDestroyed() {
            if (this.isDeleted) throw uo.create("app-deleted", {
                appName: this._name
            })
        }
    }
    const po = "firebase-heartbeat-database",
        fo = 1,
        mo = "firebase-heartbeat-store";
    let go = null;
    class bo {
        constructor(e) {
            this.container = e, this._heartbeatsCache = null;
            const t = this.container.getProvider("app").getImmediate();
            this._storage = new yo(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e)))
        }
        async triggerHeartbeat() {
            var e, t;
            try {
                const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                    r = H();
                if (null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) && (this._heartbeatsCache = await this._heartbeatsCachePromise,
                        null == (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats))) return;
                if (this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((e => e.date === r))) return;
                return this._heartbeatsCache.heartbeats.push({
                    date: r,
                    agent: n
                }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
                    const t = new Date(e.date).valueOf();
                    return Date.now() - t <= 2592e6
                })), this._storage.overwrite(this._heartbeatsCache)
            } catch (e) {
                Mr.warn(e)
            }
        }
        async getHeartbeatsHeader() {
            var e;
            try {
                if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length) return "";
                const t = H(),
                    {
                        heartbeatsToSend: n,
                        unsentEntries: r
                    } = function(e, t = 1024) {
                        const n = [];
                        let r = e.slice();
                        for (const o of e) {
                            const e = n.find((e => e.agent === o.agent));
                            if (e) {
                                if (e.dates.push(o.date), z(n) > t) {
                                    e.dates.pop();
                                    break
                                }
                            } else if (n.push({
                                    agent: o.agent,
                                    dates: [o.date]
                                }), z(n) > t) {
                                n.pop();
                                break
                            }
                            r = r.slice(1)
                        }
                        return {
                            heartbeatsToSend: n,
                            unsentEntries: r
                        }
                    }(this._heartbeatsCache.heartbeats),
                    o = qn(JSON.stringify({
                        version: 2,
                        heartbeats: n
                    }));
                return this._heartbeatsCache.lastSentHeartbeatDate = t, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), o
            } catch (e) {
                return Mr.warn(e), ""
            }
        }
    }
    class yo {
        constructor(e) {
            this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
        }
        async runIndexedDBEnvironmentCheck() {
            return !!E() && C().then((() => !0)).catch((() => !1))
        }
        async read() {
            if (await this._canUseIndexedDBPromise) {
                const e = await async function(e) {
                    try {
                        const t = (await R()).transaction(mo),
                            n = await t.objectStore(mo).get(U(e));
                        return await t.done, n
                    } catch (e) {
                        if (e instanceof Qn) Mr.warn(e.message);
                        else {
                            const t = uo.create("idb-get", {
                                originalErrorMessage: null == e ? void 0 : e.message
                            });
                            Mr.warn(t.message)
                        }
                    }
                }(this.app);
                return (null == e ? void 0 : e.heartbeats) ? e : {
                    heartbeats: []
                }
            }
            return {
                heartbeats: []
            }
        }
        async overwrite(e) {
            var t;
            if (await this._canUseIndexedDBPromise) {
                const n = await this.read();
                return F(this.app, {
                    lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                    heartbeats: e.heartbeats
                })
            }
        }
        async add(e) {
            var t;
            if (await this._canUseIndexedDBPromise) {
                const n = await this.read();
                return F(this.app, {
                    lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                    heartbeats: [...n.heartbeats, ...e.heartbeats]
                })
            }
        }
    }
    var vo;
    vo = "", P(new or("platform-logger", (e => new Ir(e)), "PRIVATE")), P(new or("heartbeat", (e => new bo(e)), "PRIVATE")), D(jr, _r, vo), D(jr, _r, "esm2017"), D("fire-js", ""), D("firebase", "11.0.1", "app");
    const wo = "@firebase/installations",
        ko = "0.6.10",
        Eo = 1e4,
        Co = "w:" + ko,
        xo = "FIS_v2",
        Ao = "https://firebaseinstallations.googleapis.com/v1",
        To = 36e5,
        So = new Zn("installations", "Installations", {
            "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
            "not-registered": "Firebase Installation is not registered.",
            "installation-not-found": "Firebase Installation not found.",
            "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
            "app-offline": "Could not process request. Application offline.",
            "delete-pending-registration": "Can't delete installation while there is a pending registration request."
        }),
        Lo = /^[cdef][\w-]{21}$/,
        Io = "",
        jo = new Map;
    let _o = null;
    const Mo = "firebase-installations-database",
        Oo = 1,
        Po = "firebase-installations-store";
    let Bo = null;
    const No = "installations",
        Do = e => {
            const t = B(e.getProvider("app").getImmediate(), No).getImmediate();
            return {
                getId: () => async function(e) {
                    const t = e,
                        {
                            installationEntry: n,
                            registrationPromise: r
                        } = await se(t);
                    return r ? r.catch(console.error) : he(t).catch(console.error), n.fid
                }(t),
                getToken: e => me(t, e)
            }
        };
    P(new or(No, (e => {
        const t = e.getProvider("app").getImmediate(),
            n = function(e) {
                if (!e || !e.options) throw ge("App Configuration");
                if (!e.name) throw ge("App Name");
                const t = ["projectId", "apiKey", "appId"];
                for (const n of t)
                    if (!e.options[n]) throw ge(n);
                return {
                    appName: e.name,
                    projectId: e.options.projectId,
                    apiKey: e.options.apiKey,
                    appId: e.options.appId
                }
            }(t);
        return {
            app: t,
            appConfig: n,
            heartbeatServiceProvider: B(t, "heartbeat"),
            _delete: () => Promise.resolve()
        }
    }), "PUBLIC")), P(new or("installations-internal", Do, "PRIVATE")), D(wo, ko), D(wo, ko, "esm2017");
    const Ro = "analytics",
        Fo = "firebase_id",
        Uo = "origin",
        Ho = 6e4,
        zo = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
        Vo = "https://www.googletagmanager.com/gtag/js",
        Wo = new fr("@firebase/analytics"),
        qo = new Zn("analytics", "Analytics", {
            "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
            "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
            "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
            "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
            "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
            "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
            "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
            "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
            "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
            "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
            "no-client-id": 'The "client_id" field is empty.',
            "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
        }),
        Go = 30,
        Jo = new class {
            constructor(e = {}, t = 1e3) {
                this.throttleMetadata = e,
                    this.intervalMillis = t
            }
            getThrottleMetadata(e) {
                return this.throttleMetadata[e]
            }
            setThrottleMetadata(e, t) {
                this.throttleMetadata[e] = t
            }
            deleteThrottleMetadata(e) {
                delete this.throttleMetadata[e]
            }
        };
    class Ko {
        constructor() {
            this.listeners = []
        }
        addEventListener(e) {
            this.listeners.push(e)
        }
        abort() {
            this.listeners.forEach((e => e()))
        }
    }
    let Yo, Xo;
    class Qo {
        constructor(e) {
            this.app = e
        }
        _delete() {
            return delete Zo[this.app.options.appId], Promise.resolve()
        }
    }
    let Zo = {},
        $o = [];
    const ei = {};
    let ti, ni, ri = "dataLayer",
        oi = "gtag",
        ii = !1;
    const ai = "@firebase/analytics",
        si = "0.10.9";
    P(new or(Ro, ((e, {
        options: t
    }) => Le(e.getProvider("app").getImmediate(), e.getProvider("installations-internal").getImmediate(), t)), "PUBLIC")), P(new or("analytics-internal", (function(e) {
        try {
            const t = e.getProvider(Ro).getImmediate();
            return {
                logEvent: (e, n, r) => je(t, e, n, r)
            }
        } catch (e) {
            throw qo.create("interop-component-reg-failed", {
                reason: e
            })
        }
    }), "PRIVATE")), D(ai, si), D(ai, si, "esm2017");
    const ci = 1,
        li = 1,
        di = "emoji",
        ui = "keyvalue",
        hi = "favorites",
        pi = "tokens",
        fi = "tokens",
        mi = "unicode",
        gi = "count",
        bi = "group",
        yi = "order",
        vi = "group-order",
        wi = "eTag",
        ki = "url",
        Ei = "skinTone",
        Ci = "readonly",
        xi = "readwrite",
        Ai = "skinUnicodes",
        Ti = "skinUnicodes",
        Si = {},
        Li = {},
        Ii = {},
        ji = new Set([":D", "XD", ":'D", "O:)", ":X", ":P", ";P", "XP", ":L", ":Z", ":j", "8D", "XO", "8)", ":B", ":O", ":S", ":'o", "Dx", "X(", "D:", ":C", ">0)", ":3", "</3", "<3", "\\M/", ":E", "8#"]),
        _i = 2,
        Mi = "",
        Oi = ["name", "url"],
        Pi = "undefined" != typeof wrappedJSObject,
        Bi = ["annotation", "emoji", "group", "order", "version"];
    class Ni {
        constructor({
            dataSource: e = "https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",
            locale: t = "en",
            customEmoji: n = []
        } = {}) {
            this.dataSource = e, this.locale = t, this._dbName = "emoji-picker-element-" + this.locale, this._db = void 0, this._lazyUpdate = void 0, this._custom = Ye(n), this._clear = this._clear.bind(this), this._ready = this._init()
        }
        async _init() {
            const e = this._db = await (t = this._dbName, Li[t] || (Li[t] = Be(t)), Li[t]);
            var t;
            ! function(e, t) {
                let n = Ii[e];
                n || (n = Ii[e] = []), n.push(t)
            }(this._dbName, this._clear);
            const n = this.dataSource,
                r = await async function(e) {
                    return !await Ke(e, ui, ki)
                }(e);
            r ? await async function(e, t) {
                let [n, r] = await Ze(t);
                n || (n = await $e(r)), await qe(e, r, t, n)
            }(e, n): this._lazyUpdate = et(e, n)
        }
        async ready() {
            const e = async () => (this._ready || (this._ready = this._init()), this._ready);
            await e(), this._db || await e()
        }
        async getEmojiByGroup(e) {
            return Me(e), await this.ready(), Oe(await async function(e, t) {
                return Ne(e, di, Ci, ((e, n, r) => {
                    const o = IDBKeyRange.bound([t, 0], [t + 1, 0], !1, !0);
                    ze(e.index(vi), o, r)
                }))
            }(this._db, e)).map(Xe)
        }
        async getEmojiBySearchQuery(e) {
            return _e(e), await this.ready(), [...this._custom.search(e), ...Oe(await Ge(this._db, e)).map(Xe)]
        }
        async getEmojiByShortcode(e) {
            _e(e), await this.ready();
            const t = this._custom.byShortcode(e);
            return t || Xe(await Je(this._db, e))
        }
        async getEmojiByUnicodeOrName(e) {
            _e(e), await this.ready();
            const t = this._custom.byName(e);
            return t || Xe(await async function(e, t) {
                return Ne(e, di, Ci, ((e, n, r) => He(e, t, (n => {
                    if (n) return r(n);
                    He(e.index(Ai), t, (e => r(e || null)))
                }))))
            }(this._db, e))
        }
        async getPreferredSkinTone() {
            return await this.ready(), await Ke(this._db, ui, Ei) || 0
        }
        async setPreferredSkinTone(e) {
            return Me(e), await this.ready(),
                function(e, t, n, r) {
                    return Ne(e, t, xi, ((e, t) => {
                        e.put(r, n), Ve(t)
                    }))
                }(this._db, ui, Ei, e)
        }
        async incrementFavoriteEmojiCount(e) {
            return _e(e), await this.ready(), t = this._db, n = e, Ne(t, hi, xi, ((e, t) => He(e, n, (r => {
                e.put((r || 0) + 1, n), Ve(t)
            }))));
            var t, n
        }
        async getTopFavoriteEmoji(e) {
            return Me(e), await this.ready(),
                (await
                    function(e, t, n) {
                        return 0 === n ? [] : Ne(e, [hi, di], Ci, (([e, r], o, i) => {
                            const a = [];
                            e.index(gi).openCursor(void 0, "prev").onsuccess = e => {
                                function o(e) {
                                    if (a.push(e), a.length === n) return i(a);
                                    s.continue()
                                }
                                const s = e.target.result;
                                if (!s) return i(a);
                                const c = s.primaryKey,
                                    l = t.byName(c);
                                if (l) return o(l);
                                He(r, c, (e => {
                                    if (e) return o(e);
                                    s.continue()
                                }))
                            }
                        }))
                    }(this._db, this._custom, e)).map(Xe)
        }
        set customEmoji(e) {
            this._custom = Ye(e)
        }
        get customEmoji() {
            return this._custom.all
        }
        async _shutdown() {
            await this.ready();
            try {
                await this._lazyUpdate
            } catch (e) {}
        }
        _clear() {
            this._db = this._ready = this._lazyUpdate = void 0
        }
        async close() {
            await this._shutdown(), await De(this._dbName)
        }
        async delete() {
            var e;
            await this._shutdown(), await (e = this._dbName, new Promise(((t, n) => {
                De(e), Pe(t, n, indexedDB.deleteDatabase(e))
            })))
        }
    }
    const Di = [
            [-1, "\u2728", "custom"],
            [0, "\u{1f600}", "smileys-emotion"],
            [1, "\u{1f44b}", "people-body"],
            [3, "\u{1f431}", "animals-nature"],
            [4, "\u{1f34e}", "food-drink"],
            [5, "\u{1f3e0}\ufe0f", "travel-places"],
            [6, "\u26bd", "activities"],
            [7, "\u{1f4dd}", "objects"],
            [8, "\u26d4\ufe0f", "symbols"],
            [9, "\u{1f3c1}", "flags"]
        ].map((([e, t, n]) => ({
            id: e,
            emoji: t,
            name: n
        }))),
        Ri = Di.slice(1),
        Fi = "function" == typeof requestIdleCallback ? requestIdleCallback : setTimeout,
        Ui = {
            "\u{1fae8}": 15.1,
            "\u{1fae0}": 14,
            "\u{1f972}": 13.1,
            "\u{1f97b}": 12.1,
            "\u{1f970}": 11,
            "\u{1f929}": 5,
            "\u{1f471}\u200d\u2640\ufe0f": 4,
            "\u{1f923}": 3,
            "\u{1f441}\ufe0f\u200d\u{1f5e8}\ufe0f": 2,
            "\u{1f600}": 1,
            "\u{1f610}\ufe0f": .7,
            "\u{1f603}": .6
        },
        Hi = ["\u{1f60a}", "\u{1f612}", "\u2764\ufe0f", "\u{1f44d}\ufe0f", "\u{1f60d}", "\u{1f602}", "\u{1f62d}", "\u263a\ufe0f", "\u{1f614}", "\u{1f629}", "\u{1f60f}", "\u{1f495}", "\u{1f64c}", "\u{1f618}"],
        zi = '"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',
        Vi = (e, t) => e < t ? -1 : e > t ? 1 : 0,
        Wi = (e, t) => {
            const n = document.createElement("canvas");
            n.width = n.height = 1;
            const r = n.getContext("2d", {
                willReadFrequently: !0
            });
            return r.textBaseline = "top", r.font = "100px " + zi, r.fillStyle = t, r.scale(.01, .01), r.fillText(e, 0, 0), r.getImageData(0, 0, 1, 1).data
        },
        qi = (e, t) => {
            const n = [...e].join(",");
            return n === [...t].join(",") && !n.startsWith("0,0,0,")
        };
    let Gi;
    const Ji = () => (Gi || (Gi = new Promise((e => Fi((() => e(function() {
            const e = Object.entries(Ui);
            try {
                for (const [t, n] of e)
                    if (nt(t)) return n
            } catch (e) {}
            return e[0][1]
        }())))))), Gi),
        Ki = new Map,
        Yi = "\ufe0f",
        Xi = "\ud83c",
        Qi = "\u200d",
        Zi = 127995,
        $i = 57339,
        ea = requestAnimationFrame;
    let ta, na = "function" == typeof ResizeObserver;
    const ra = new WeakMap,
        oa = new WeakMap,
        ia = Symbol("un-keyed"),
        aa = "replaceChildren" in Element.prototype,
        sa = "function" == typeof queueMicrotask ? queueMicrotask : e => Promise.resolve().then(e),
        ca = new WeakMap,
        la = [],
        {
            assign: da
        } = Object;
    var ua = {
        categoriesLabel: "Categories",
        emojiUnsupportedMessage: "Your browser does not support color emoji.",
        favoritesLabel: "Favorites",
        loadingMessage: "Loading\u2026",
        networkErrorMessage: "Could not load emoji.",
        regionLabel: "Emoji picker",
        searchDescription: "When search results are available, press up or down to select and enter to choose.",
        searchLabel: "Search",
        searchResultsLabel: "Search results",
        skinToneDescription: "When expanded, press up or down to select and enter to choose.",
        skinToneLabel: "Choose a skin tone (currently {skinTone})",
        skinTonesLabel: "Skin tones",
        skinTones: ["Default", "Light", "Medium-Light", "Medium", "Medium-Dark", "Dark"],
        categories: {
            custom: "Custom",
            "smileys-emotion": "Smileys and emoticons",
            "people-body": "People and body",
            "animals-nature": "Animals and nature",
            "food-drink": "Food and drink",
            "travel-places": "Travel and places",
            activities: "Activities",
            objects: "Objects",
            symbols: "Symbols",
            flags: "Flags"
        }
    };
    const ha = ["customEmoji", "customCategorySorting", "database", "dataSource", "i18n", "locale", "skinToneEmoji", "emojiVersion"],
        pa = `:host{--emoji-font-family:${zi}}`;
    class fa extends HTMLElement {
        constructor(e) {
            super(), this.attachShadow({
                mode: "open"
            });
            const t = document.createElement("style");
            t.textContent = ':host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}' + pa,
                this.shadowRoot.appendChild(t), this._ctx = {
                    locale: "en",
                    dataSource: "https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",
                    skinToneEmoji: "\u{1f590}\ufe0f",
                    customCategorySorting: Vi,
                    customEmoji: null,
                    i18n: ua,
                    emojiVersion: null,
                    ...e
                };
            for (const e of ha) "database" !== e && Object.prototype.hasOwnProperty.call(this, e) && (this._ctx[e] = this[e], delete this[e]);
            this._dbFlush()
        }
        connectedCallback() {
            this._cmp || (this._cmp = mt(this.shadowRoot, this._ctx))
        }
        disconnectedCallback() {
            sa((() => {
                if (!this.isConnected && this._cmp) {
                    this._cmp.$destroy(), this._cmp = void 0;
                    const {
                        database: e
                    } = this._ctx;
                    e.close().catch((() => {}))
                }
            }))
        }
        static get observedAttributes() {
            return ["locale", "data-source", "skin-tone-emoji", "emoji-version"]
        }
        attributeChangedCallback(e, t, n) {
            this._set(e.replace(/-([a-z])/g, ((e, t) => t.toUpperCase())), "emoji-version" === e ? parseFloat(n) : n)
        }
        _set(e, t) {
            this._ctx[e] = t, this._cmp && this._cmp.$set({
                [e]: t
            }), ["locale", "dataSource"].includes(e) && this._dbFlush()
        }
        _dbCreate() {
            const {
                locale: e,
                dataSource: t,
                database: n
            } = this._ctx;
            n && n.locale === e && n.dataSource === t || this._set("database", new Ni({
                locale: e,
                dataSource: t
            }))
        }
        _dbFlush() {
            sa((() => this._dbCreate()))
        }
    }
    const ma = {};
    for (const e of ha) ma[e] = {
        get() {
            return "database" === e && this._dbCreate(), this._ctx[e]
        },
        set(t) {
            if ("database" === e) throw Error("database is read-only");
            this._set(e, t)
        }
    };
    Object.defineProperties(fa.prototype, ma), customElements.get("emoji-picker") || customElements.define("emoji-picker", fa);
    var ga, ba, ya = function(e, t, n, r, o) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
        },
        va = function(e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        };
    ga = new WeakMap, ba = new WeakMap;
    const wa = class {
        constructor(e, t) {
            ga.set(this, void 0), ba.set(this, void 0), ya(this, ga, ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e), "f"), ya(this, ba, t || 0, "f")
        }
        read() {
            var e, t;
            return va(this, ga, "f")[(ya(this, ba, (t = va(this, ba, "f"), e = t++,
                t), "f"), e)]
        }
        readNBytes(e) {
            return va(this, ga, "f").subarray(va(this, ba, "f"), ya(this, ba, va(this, ba, "f") + e, "f"))
        }
        readNBytesDV(e) {
            const t = va(this, ga, "f").subarray(va(this, ba, "f"), ya(this, ba, va(this, ba, "f") + e, "f"));
            return new DataView(t.buffer, t.byteOffset, t.byteLength)
        }
    };
    var ka, Ea, Ca = function(e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        },
        xa = function(e, t, n, r, o) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
        };
    ka = new WeakMap, Ea = new WeakMap;
    const Aa = class {
            constructor() {
                ka.set(this, []), Ea.set(this, 0)
            }
            write(e) {
                if ("number" == typeof e) Ca(this, ka, "f").push(e), xa(this, Ea, Ca(this, Ea, "f") + 1, "f");
                else if (Array.isArray(e)) {
                    const t = Uint8Array.from(e);
                    Ca(this, ka, "f").push(t), xa(this, Ea, Ca(this, Ea, "f") + t.byteLength, "f")
                } else if (ArrayBuffer.isView(e)) {
                    const t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    Ca(this, ka, "f").push(t), xa(this, Ea, Ca(this, Ea, "f") + t.byteLength, "f")
                } else {
                    const t = new Uint8Array(e);
                    Ca(this, ka, "f").push(t), xa(this, Ea, Ca(this, Ea, "f") + t.byteLength, "f")
                }
            }
            toBuffer() {
                const e = new Uint8Array(Ca(this, Ea, "f"));
                let t = 0;
                for (const n of Ca(this, ka, "f")) "number" != typeof n ? (e.set(n, t), t += n.byteLength) : e[t++] = n;
                return e
            }
        },
        Ta = Object.freeze(Object.create(null, {
            encode: {
                value: function(e) {
                    if ("object" != typeof e || null == e) throw Error("Data must be a non-null object or array.");
                    const t = new Aa;
                    return t.write(Uint8Array.of(128, 99, 98, 106, 102, 2)), wt(t, e), t.toBuffer().buffer
                },
                writable: !1,
                enumerable: !1,
                configurable: !1
            },
            decode: {
                value: function(e) {
                    if (Array.isArray(e) || "function" == typeof e[Symbol.iterator]) e = Uint8Array.from(e);
                    else if (bt(e)) e = new Uint8Array(e);
                    else {
                        if (!ArrayBuffer.isView(e)) throw Error("Data must be a Uint8Array or ArrayBuffer object.");
                        e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                    }
                    if (128 !== e[0] || 99 !== e[1] || 98 !== e[2] || 106 !== e[3] || 102 !== e[4] || 2 !== e[5]) throw Error("Parse Error: Invalid magic value");
                    return kt(new wa(e, 6))
                },
                writable: !1,
                enumerable: !1,
                configurable: !1
            },
            [Symbol.toStringTag]: {
                value: "NettleDB",
                writable: !1,
                enumerable: !1,
                configurable: !1
            }
        })),
        Sa = "object" == typeof globalThis && null != globalThis ? globalThis : "object" == typeof window && null != window ? window : "object" == typeof global && null != global ? global : "object" == typeof self && null != self ? self : Function("return this;")();
    "object" == typeof Sa && null != Sa && Object.defineProperty(Sa, "NettleDB", {
        value: Ta,
        writable: !1,
        enumerable: !1,
        configurable: !1
    });
    const La = Ta;
    class Ia {
        static size(e, t) {
            if ("number" == typeof e && (e = {
                    height: e,
                    width: e
                }),
                !Number.isSafeInteger(e.height) && e.height !== 1 / 0) throw Error(`Bitmap: wrong height=${e.height} (${typeof e.height})`);
            if (!Number.isSafeInteger(e.width) && e.width !== 1 / 0) throw Error(`Bitmap: wrong width=${e.width} (${typeof e.width})`);
            return void 0 !== t && (e = {
                width: Math.min(e.width, t.width),
                height: Math.min(e.height, t.height)
            }), e
        }
        static fromString(e) {
            const t = (e = e.replace(/^\n+/g, "").replace(/\n+$/g, "")).split("\n"),
                n = t.length,
                r = Array(n);
            let o;
            for (const e of t) {
                const t = e.split("").map((e => {
                    if ("X" === e) return !0;
                    if (" " === e) return !1;
                    if ("?" !== e) throw Error("Bitmap.fromString: unknown symbol=" + e)
                }));
                if (o && t.length !== o) throw Error(`Bitmap.fromString different row sizes: width=${o} cur=${t.length}`);
                o = t.length, r.push(t)
            }
            return o || (o = 0), new Ia({
                height: n,
                width: o
            }, r)
        }
        constructor(e, t) {
            const {
                height: n,
                width: r
            } = Ia.size(e);
            this.data = t || Array.from({
                length: n
            }, (() => At(r, void 0))), this.height = n, this.width = r
        }
        point(e) {
            return this.data[e.y][e.x]
        }
        isInside(e) {
            return 0 <= e.x && e.x < this.width && 0 <= e.y && e.y < this.height
        }
        size(e) {
            if (!e) return {
                height: this.height,
                width: this.width
            };
            const {
                x: t,
                y: n
            } = this.xy(e);
            return {
                height: this.height - n,
                width: this.width - t
            }
        }
        xy(e) {
            if ("number" == typeof e && (e = {
                    x: e,
                    y: e
                }), !Number.isSafeInteger(e.x)) throw Error("Bitmap: wrong x=" + e.x);
            if (!Number.isSafeInteger(e.y)) throw Error("Bitmap: wrong y=" + e.y);
            return e.x = xt(e.x, this.width), e.y = xt(e.y, this.height), e
        }
        rect(e, t, n) {
            const {
                x: r,
                y: o
            } = this.xy(e), {
                height: i,
                width: a
            } = Ia.size(t, this.size({
                x: r,
                y: o
            }));
            for (let e = 0; e < i; e++)
                for (let t = 0; t < a; t++) this.data[o + e][r + t] = "function" == typeof n ? n({
                    x: t,
                    y: e
                }, this.data[o + e][r + t]) : n;
            return this
        }
        rectRead(e, t, n) {
            return this.rect(e, t, ((e, t) => (n(e, t), t)))
        }
        hLine(e, t, n) {
            return this.rect(e, {
                width: t,
                height: 1
            }, n)
        }
        vLine(e, t, n) {
            return this.rect(e, {
                width: 1,
                height: t
            }, n)
        }
        border(e = 2, t) {
            const n = this.height + 2 * e,
                r = this.width + 2 * e,
                o = At(e, t),
                i = Array.from({
                    length: e
                }, (() => At(r, t)));
            return new Ia({
                height: n,
                width: r
            }, [...i, ...this.data.map((e => [...o, ...e, ...o])), ...i])
        }
        embed(e, t) {
            return this.rect(e, t.size(), (({
                x: e,
                y: n
            }) => t.data[n][e]))
        }
        rectSlice(e, t = this.size()) {
            const n = new Ia(Ia.size(t, this.size(this.xy(e))));
            return this.rect(e, t, (({
                x: e,
                y: t
            }, r) => n.data[t][e] = r)), n
        }
        inverse() {
            const {
                height: e,
                width: t
            } = this;
            return new Ia({
                height: t,
                width: e
            }).rect({
                x: 0,
                y: 0
            }, 1 / 0, (({
                x: e,
                y: t
            }) => this.data[e][t]))
        }
        scale(e) {
            if (!Number.isSafeInteger(e) || e > 1024) throw Error("Wrong scale factor: " + e);
            const {
                height: t,
                width: n
            } = this;
            return new Ia({
                height: e * t,
                width: e * n
            }).rect({
                x: 0,
                y: 0
            }, 1 / 0, (({
                x: t,
                y: n
            }) => this.data[Math.floor(n / e)][Math.floor(t / e)]))
        }
        clone() {
            return new Ia(this.size()).rect({
                x: 0,
                y: 0
            }, this.size(), (({
                x: e,
                y: t
            }) => this.data[t][e]))
        }
        assertDrawn() {
            this.rectRead(0, 1 / 0, ((e, t) => {
                if ("boolean" != typeof t) throw Error("Invalid color type=" + typeof t)
            }))
        }
        toString() {
            return this.data.map((e => e.map((e => void 0 === e ? "?" : e ? "X" : " ")).join(""))).join("\n")
        }
        toASCII() {
            const {
                height: e,
                width: t,
                data: n
            } = this;
            let r = "";
            for (let o = 0; o < e; o += 2) {
                for (let i = 0; i < t; i++) {
                    const t = n[o][i],
                        a = o + 1 >= e || n[o + 1][i];
                    t || a ? !t && a ? r += "\u2580" : t && !a ? r += "\u2584" : t && a && (r += " ") : r += "\u2588"
                }
                r += "\n"
            }
            return r
        }
        toTerm() {
            const e = "\x1b[0m",
                t = "\x1b[1;47m  " + e,
                n = "\x1b[40m  " + e;
            return this.data.map((e => e.map((e => e ? n : t)).join(""))).join("\n")
        }
        toSVG() {
            let e = `<svg xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
            return this.rectRead(0, 1 / 0, (({
                x: t,
                y: n
            }, r) => {
                r && (e += `<rect x="${t}" y="${n}" width="1" height="1" />`)
            })), e += "</svg>", e
        }
        toGIF() {
            const e = e => [255 & e, e >>> 8 & 255],
                t = [...e(this.width), ...e(this.height)],
                n = [];
            this.rectRead(0, 1 / 0, ((e, t) => n.push(+(!0 === t))));
            const r = 126,
                o = [71, 73, 70, 56, 55, 97, ...t, 246, 0, 0, 255, 255, 255, ...At(381, 0), 44, 0, 0, 0, 0, ...t, 0, 7],
                i = Math.floor(n.length / r);
            for (let e = 0; e < i; e++) o.push(127, 128, ...n.slice(r * e, r * (e + 1)).map((e => +e)));
            return o.push(n.length % r + 1, 128, ...n.slice(i * r).map((e => +e))), o.push(1, 129, 0, 59), new Uint8Array(o)
        }
        toImage(e = !1) {
            const {
                height: t,
                width: n
            } = this.size(), r = new Uint8Array(t * n * (e ? 3 : 4));
            let o = 0;
            for (let i = 0; i < t; i++)
                for (let t = 0; t < n; t++) {
                    const n = this.data[i][t] ? 0 : 255;
                    r[o++] = n, r[o++] = n, r[o++] = n, e || (r[o++] = 255)
                }
            return {
                height: t,
                width: n,
                data: r
            }
        }
    }
    const ja = ["low", "medium", "quartile", "high"],
        _a = ["numeric", "alphanumeric", "byte", "kanji", "eci"],
        Ma = [26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706],
        Oa = {
            low: [7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            medium: [10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
            quartile: [13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            high: [17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
        },
        Pa = {
            low: [1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
            medium: [1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
            quartile: [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
            high: [1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
        },
        Ba = {
            size: {
                encode: e => 21 + 4 * (e - 1),
                decode: e => (e - 17) / 4
            },
            sizeType: e => Math.floor((e + 7) / 17),
            alignmentPatterns(e) {
                if (1 === e) return [];
                const t = Ba.size.encode(e) - 6 - 1,
                    n = t - 6,
                    r = Math.ceil(n / 28);
                let o = Math.floor(n / r);
                o % 2 ? o += 1 : n % r * 2 >= r && (o += 2);
                const i = [6];
                for (let e = 1; e < r; e++) i.push(t - (r - e) * o);
                return i.push(t), i
            },
            ECCode: {
                low: 1,
                medium: 0,
                quartile: 3,
                high: 2
            },
            formatMask: 21522,
            formatBits(e, t) {
                const n = Ba.ECCode[e] << 3 | t;
                let r = n;
                for (let e = 0; e < 10; e++) r = r << 1 ^ 1335 * (r >> 9);
                return (n << 10 | r) ^ Ba.formatMask
            },
            versionBits(e) {
                let t = e;
                for (let e = 0; e < 12; e++) t = t << 1 ^ 7973 * (t >> 11);
                return e << 12 | t
            },
            alphabet: {
                numeric: It("0123456789"),
                alphanumerc: It("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:")
            },
            lengthBits: (e, t) => ({
                numeric: [10, 12, 14],
                alphanumeric: [9, 11, 13],
                byte: [8, 16, 16],
                kanji: [8, 10, 12],
                eci: [0, 0, 0]
            } [t][Ba.sizeType(e)]),
            modeBits: {
                numeric: "0001",
                alphanumeric: "0010",
                byte: "0100",
                kanji: "1000",
                eci: "0111"
            },
            capacity(e, t) {
                const n = Ma[e - 1],
                    r = Oa[t][e - 1],
                    o = Pa[t][e - 1],
                    i = Math.floor(n / o) - r,
                    a = o - n % o;
                return {
                    words: r,
                    numBlocks: o,
                    shortBlocks: a,
                    blockLen: i,
                    capacity: 8 * (n - r * o),
                    total: (r + i) * o + o - a
                }
            }
        },
        Na = [(e, t) => (e + t) % 2 == 0, (e, t) => t % 2 == 0, e => e % 3 == 0, (e, t) => (e + t) % 3 == 0, (e, t) => (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0, (e, t) => e * t % 2 + e * t % 3 == 0, (e, t) => (e * t % 2 + e * t % 3) % 2 == 0, (e, t) => ((e + t) % 2 + e * t % 3) % 2 == 0],
        Da = {
            tables: (() => {
                const e = At(256, 0),
                    t = At(256, 0);
                for (let n = 0, r = 1; n < 256; n++) e[n] = r, t[r] = n, r <<= 1, 256 & r && (r ^= 285);
                return {
                    exp: e,
                    log: t
                }
            })(),
            exp: e => Da.tables.exp[e],
            log(e) {
                if (0 === e) throw Error("GF.log: wrong arg=" + e);
                return Da.tables.log[e] % 255
            },
            mul: (e, t) => 0 === e || 0 === t ? 0 : Da.tables.exp[(Da.tables.log[e] + Da.tables.log[t]) % 255],
            add: (e, t) => e ^ t,
            pow: (e, t) => Da.tables.exp[Da.tables.log[e] * t % 255],
            inv(e) {
                if (0 === e) throw Error("GF.inverse: wrong arg=" + e);
                return Da.tables.exp[255 - Da.tables.log[e]]
            },
            polynomial(e) {
                if (0 == e.length) throw Error("GF.polymomial: wrong length");
                if (0 !== e[0]) return e;
                let t = 0;
                for (; t < e.length - 1 && 0 == e[t]; t++);
                return e.slice(t)
            },
            monomial(e, t) {
                if (e < 0) throw Error("GF.monomial: wrong degree=" + e);
                if (0 == t) return [0];
                let n = At(e + 1, 0);
                return n[0] = t, Da.polynomial(n)
            },
            degree: e => e.length - 1,
            coefficient: (e, t) => e[Da.degree(e) - t],
            mulPoly(e, t) {
                if (0 === e[0] || 0 === t[0]) return [0];
                const n = At(e.length + t.length - 1, 0);
                for (let r = 0; r < e.length; r++)
                    for (let o = 0; o < t.length; o++) n[r + o] = Da.add(n[r + o], Da.mul(e[r], t[o]));
                return Da.polynomial(n)
            },
            mulPolyScalar(e, t) {
                if (0 == t) return [0];
                if (1 == t) return e;
                const n = At(e.length, 0);
                for (let r = 0; r < e.length; r++) n[r] = Da.mul(e[r], t);
                return Da.polynomial(n)
            },
            mulPolyMonomial(e, t, n) {
                if (t < 0) throw Error("GF.mulPolyMonomial: wrong degree");
                if (0 == n) return [0];
                const r = At(e.length + t, 0);
                for (let t = 0; t < e.length; t++) r[t] = Da.mul(e[t], n);
                return Da.polynomial(r)
            },
            addPoly(e, t) {
                if (0 === e[0]) return t;
                if (0 === t[0]) return e;
                let n = e,
                    r = t;
                n.length > r.length && ([n, r] = [r, n]);
                let o = At(r.length, 0),
                    i = r.length - n.length,
                    a = r.slice(0, i);
                for (let e = 0; e < a.length; e++) o[e] = a[e];
                for (let e = i; e < r.length; e++) o[e] = Da.add(n[e - i], r[e]);
                return Da.polynomial(o)
            },
            remainderPoly(e, t) {
                const n = Array.from(e);
                for (let r = 0; r < e.length - t.length + 1; r++) {
                    const e = n[r];
                    if (0 !== e)
                        for (let o = 1; o < t.length; o++) 0 !== t[o] && (n[r + o] = Da.add(n[r + o], Da.mul(t[o], e)))
                }
                return n.slice(e.length - t.length + 1, n.length)
            },
            divisorPoly(e) {
                let t = [1];
                for (let n = 0; n < e; n++) t = Da.mulPoly(t, [1, Da.pow(2, n)]);
                return t
            },
            evalPoly(e, t) {
                if (0 == t) return Da.coefficient(e, 0);
                let n = e[0];
                for (let r = 1; r < e.length; r++) n = Da.add(Da.mul(t, n), e[r]);
                return n
            },
            euclidian(e, t, n) {
                Da.degree(e) < Da.degree(t) && ([e, t] = [t, e]);
                let r = e,
                    o = t,
                    i = [0],
                    a = [1];
                for (; 2 * Da.degree(o) >= n;) {
                    let e = r,
                        t = i;
                    if (r = o, i = a, 0 === r[0]) throw Error("rLast[0] === 0");
                    o = e;
                    let n = [0];
                    const s = Da.inv(r[0]);
                    for (; Da.degree(o) >= Da.degree(r) && 0 !== o[0];) {
                        const e = Da.degree(o) - Da.degree(r),
                            t = Da.mul(o[0], s);
                        n = Da.addPoly(n, Da.monomial(e, t)), o = Da.addPoly(o, Da.mulPolyMonomial(r, e, t))
                    }
                    if (n = Da.mulPoly(n, i), a = Da.addPoly(n, t), Da.degree(o) >= Da.degree(r)) throw Error(`Division failed r: ${o}, rLast: ${r}`)
                }
                const s = Da.coefficient(a, 0);
                if (0 == s) throw Error("sigmaTilde(0) was zero");
                const c = Da.inv(s);
                return [Da.mulPolyScalar(a, c), Da.mulPolyScalar(o, c)]
            }
        },
        Ra = function() {
            for (let e = Object.getPrototypeOf(this); null != e; e = Object.getPrototypeOf(e)) try {
                delete e.constructor
            } catch (e) {}
        },
        Fa = Object.freeze(Object.create(null));
    Object.defineProperty(Ra, "prototype", {
        value: Fa,
        writable: !1,
        enumerable: !1,
        configurable: !1
    }), Object.setPrototypeOf(Ra, null), Object.freeze(Ra);
    const Ua = Ra;
    var Ha, za = function(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
    };
    Ha = new WeakMap;
    const Va = class extends Ua {
        constructor() {
            super(...arguments), Ha.set(this, Object.create(null))
        }
        get size() {
            return Object.keys(za(this, Ha, "f")).length
        }
        has(e) {
            return e in za(this, Ha, "f")
        }
        get(e) {
            return za(this, Ha, "f")[e] || null
        }
        set(e, t) {
            za(this, Ha, "f")[e] = t
        }
        delete(e) {
            return delete za(this, Ha, "f")[e]
        }
        clear() {
            const e = za(this, Ha, "f");
            for (const t of Object.keys(e)) delete e[t]
        }
        keys() {
            return Object.keys(za(this, Ha, "f"))
        }
        values() {
            const e = za(this, Ha, "f"),
                t = [];
            for (const n of Object.keys(e)) t.push(e[n]);
            return t
        }
        entries() {
            const e = za(this, Ha, "f"),
                t = [];
            for (const n of Object.keys(e)) t.push([n, e[n]]);
            return t
        }
    };
    var Wa, qa = function(e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        },
        Ga = function(e, t, n, r, o) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
        };
    Wa = new WeakMap;
    const Ja = class extends Ua {
        get size() {
            return qa(this, Wa, "f").length
        }
        constructor(e) {
            super(), Wa.set(this, void 0), Ga(this, Wa, e, "f")
        }
        has(e) {
            return null != qa(this, Wa, "f").getItem(e)
        }
        get(e) {
            return qa(this, Wa, "f").getItem(e)
        }
        set(e, t) {
            qa(this, Wa, "f").setItem(e, t)
        }
        delete(e) {
            return qa(this, Wa, "f").removeItem(e), !0
        }
        clear() {
            qa(this, Wa, "f").clear()
        }
        keys() {
            const e = qa(this, Wa, "f"),
                t = e.length,
                n = Array(t);
            for (let r = 0; r < t; r++) n[r] = e.key(r);
            return n
        }
        values() {
            const e = qa(this, Wa, "f"),
                t = e.length,
                n = Array(t);
            for (let r = 0; r < t; r++) n[r] = e.getItem(e.key(r));
            return n
        }
        entries() {
            const e = qa(this, Wa, "f"),
                t = e.length,
                n = Array(t);
            for (let r = 0; r < t; r++) {
                const t = e.key(r);
                n[r] = [t, e.getItem(t)]
            }
            return n
        }
    };
    var Ka, Ya, Xa, Qa, Za = function(e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        },
        $a = function(e, t, n, r, o) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
        };
    Ka = new WeakMap, Ya = new WeakMap, Xa = new WeakMap, Qa = new WeakMap;
    const es = class extends Ua {
            get message() {
                return Za(this, Xa, "f")
            }
            get persistent() {
                return Za(this, Qa, "f")
            }
            get localStorage() {
                return Za(this, Ka, "f")
            }
            get sessionStorage() {
                return Za(this, Ya, "f")
            }
            constructor(e) {
                super(), Ka.set(this, void 0),
                    Ya.set(this, void 0), Xa.set(this, void 0), Qa.set(this, void 0);
                try {
                    const {
                        localStorage: t,
                        sessionStorage: n
                    } = e;
                    if (null == t || null == n) throw Error("Required storage interfaces not available.");
                    const r = "___whitespider___",
                        o = Date.now().toString(24);
                    if (t.setItem(r, o), t.getItem(r) !== o) throw Error("Local storage test failed: value mismatch");
                    if (n.setItem(r, o), n.getItem(r) !== o) throw Error("Session storage test failed: value mismatch");
                    $a(this, Ka, new Ja(t), "f"), $a(this, Ya, new Ja(n), "f"), $a(this, Xa, null, "f"),
                        $a(this, Qa, !0, "f")
                } catch (e) {
                    $a(this, Ka, new Va, "f"), $a(this, Ya, new Va, "f"), $a(this, Xa, e + "", "f"), $a(this, Qa, !1, "f")
                }
            }
        },
        ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        ns = {
            encode: function(e) {
                let t = "",
                    n = 0,
                    r = 0;
                for (let o = 0; o < e.length; o++)
                    for (n = n << 8 | e[o], r += 8; r >= 5;) t += ts[n >> r - 5 & 31], r -= 5;
                for (r > 0 && (t += ts[n << 5 - r & 31]); t.length % 8 != 0;) t += "=";
                return t
            },
            decode: function(e) {
                e = e.replace(/=+$/, "");
                const t = [];
                let n = 0,
                    r = 0;
                for (let o = 0; o < e.length; o++) {
                    const i = ts.indexOf(e[o].toUpperCase());
                    if (i < 0) throw Error("Invalid character found in Base32 string.");
                    n = n << 5 | i, r += 5, r >= 8 && (t.push(n >> r - 8 & 255), r -= 8)
                }
                return Uint8Array.from(t)
            }
        };
    Object.setPrototypeOf(ns, null);
    const rs = Object.freeze(ns),
        os = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        is = new Uint8Array(new ArrayBuffer(256), 0, 256);
    for (let e = 0; e < 64; e++) is[os.charCodeAt(e)] = e;
    const as = {
        encode: function(e) {
            const t = e.byteLength;
            let n = "",
                r = "";
            for (let r = 0; r < t; r += 3) {
                const t = e[r] << 16 | e[r + 1] << 8 | e[r + 2];
                n += os[t >> 18 & 63] + os[t >> 12 & 63] + os[t >> 6 & 63] + os[63 & t]
            }
            const o = t % 3;
            return 1 === o ? (r = "==", n = n.slice(0, -2)) : 2 === o && (r = "=", n = n.slice(0, -1)), n + r
        },
        decode: function(e) {
            const t = .75 * e.length - (e.endsWith("==") ? 2 : e.endsWith("=") ? 1 : 0),
                n = new Uint8Array(new ArrayBuffer(t), 0, t);
            let r = 0;
            for (let t = 0; t < e.length; t += 4) {
                const o = is[e.charCodeAt(t)] << 18 | is[e.charCodeAt(t + 1)] << 12 | is[e.charCodeAt(t + 2)] << 6 | is[e.charCodeAt(t + 3)];
                n[r++] = o >> 16 & 255, n[r++] = o >> 8 & 255, n[r++] = 255 & o
            }
            return n
        }
    };
    Object.setPrototypeOf(as, null);
    const ss = Object.freeze(as),
        cs = {
            encode: function(e) {
                const t = [];
                for (const n of Array.from(e, (e => e.codePointAt(0) || 0))) n <= 127 ? t.push(n) : n <= 2047 ? (t.push(n >> 6 | 192), t.push(63 & n | 128)) : n <= 65535 ? (t.push(n >> 12 | 224), t.push(n >> 6 & 63 | 128), t.push(63 & n | 128)) : n <= 1114111 && (t.push(n >> 18 | 240), t.push(n >> 12 & 63 | 128), t.push(n >> 6 & 63 | 128), t.push(63 & n | 128));
                return Uint8Array.from(t)
            },
            decode: function(e) {
                let t = 0,
                    n = "";
                for (; t < e.byteLength;) {
                    const r = e[t];
                    if (128 & r)
                        if (192 == (224 & r)) {
                            const o = e[t + 1];
                            n += String.fromCharCode((31 & r) << 6 | 63 & o), t += 2
                        } else if (224 == (240 & r)) {
                        const o = e[t + 1],
                            i = e[t + 2];
                        n += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i), t += 3
                    } else if (240 == (248 & r)) {
                        const o = (7 & r) << 18 | (63 & e[t + 1]) << 12 | (63 & e[t + 2]) << 6 | 63 & e[t + 3];
                        n += o <= 1114111 ? String.fromCodePoint(o) : "\ufffd", t += 4
                    } else n += "\ufffd", t += 1;
                    else n += String.fromCharCode(r), t += 1
                }
                return n
            }
        };
    Object.setPrototypeOf(cs, null);
    const ls = Object.freeze(cs);
    var ds = Uint8Array,
        us = Uint16Array,
        hs = Int32Array,
        ps = new ds([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        fs = new ds([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        ms = new ds([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        gs = function(e, t) {
            for (var n = new us(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
            var o = new hs(n[30]);
            for (r = 1; r < 30; ++r)
                for (var i = n[r]; i < n[r + 1]; ++i) o[i] = i - n[r] << 5 | r;
            return {
                b: n,
                r: o
            }
        },
        bs = gs(ps, 2),
        ys = bs.b,
        vs = bs.r;
    ys[28] = 258, vs[258] = 28;
    for (var ws = gs(fs, 0), ks = ws.b, Es = (ws.r, new us(32768)), Cs = 0; Cs < 32768; ++Cs) {
        var xs = (43690 & Cs) >> 1 | (21845 & Cs) << 1;
        xs = (61680 & (xs = (52428 & xs) >> 2 | (13107 & xs) << 2)) >> 4 | (3855 & xs) << 4, Es[Cs] = ((65280 & xs) >> 8 | (255 & xs) << 8) >> 1
    }
    var As = function(e, t, n) {
            for (var r = e.length, o = 0, i = new us(t); o < r; ++o) e[o] && ++i[e[o] - 1];
            var a, s = new us(t);
            for (o = 1; o < t; ++o) s[o] = s[o - 1] + i[o - 1] << 1;
            if (n) {
                a = new us(1 << t);
                var c = 15 - t;
                for (o = 0; o < r; ++o)
                    if (e[o])
                        for (var l = o << 4 | e[o], d = t - e[o], u = s[e[o] - 1]++ << d, h = u | (1 << d) - 1; u <= h; ++u) a[Es[u] >> c] = l
            } else
                for (a = new us(r), o = 0; o < r; ++o) e[o] && (a[o] = Es[s[e[o] - 1]++] >> 15 - e[o]);
            return a
        },
        Ts = new ds(288);
    for (Cs = 0; Cs < 144; ++Cs) Ts[Cs] = 8;
    for (Cs = 144; Cs < 256; ++Cs) Ts[Cs] = 9;
    for (Cs = 256; Cs < 280; ++Cs) Ts[Cs] = 7;
    for (Cs = 280; Cs < 288; ++Cs) Ts[Cs] = 8;
    var Ss = new ds(32);
    for (Cs = 0; Cs < 32; ++Cs) Ss[Cs] = 5;
    var Ls = As(Ts, 9, 1),
        Is = As(Ss, 5, 1),
        js = function(e) {
            for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
            return t
        },
        _s = function(e, t, n) {
            var r = t / 8 | 0;
            return (e[r] | e[r + 1] << 8) >> (7 & t) & n
        },
        Ms = function(e, t) {
            var n = t / 8 | 0;
            return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (7 & t)
        },
        Os = function(e) {
            return (e + 7) / 8 | 0
        },
        Ps = function(e, t, n) {
            return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new ds(e.subarray(t, n))
        },
        Bs = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
        Ns = function(e, t, n) {
            var r = Error(t || Bs[e]);
            if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Ns), !n) throw r;
            return r
        },
        Ds = function(e, t, n, r) {
            var o = e.length,
                i = r ? r.length : 0;
            if (!o || t.f && !t.l) return n || new ds(0);
            var a = !n,
                s = a || 2 != t.i,
                c = t.i;
            a && (n = new ds(3 * o));
            var l = function(e) {
                    var t = n.length;
                    if (e > t) {
                        var r = new ds(Math.max(2 * t, e));
                        r.set(n), n = r
                    }
                },
                d = t.f || 0,
                u = t.p || 0,
                h = t.b || 0,
                p = t.l,
                f = t.d,
                m = t.m,
                g = t.n,
                b = 8 * o;
            do {
                if (!p) {
                    d = _s(e, u, 1);
                    var y = _s(e, u + 1, 3);
                    if (u += 3, !y) {
                        var v = e[(j = Os(u) + 4) - 4] | e[j - 3] << 8,
                            w = j + v;
                        if (w > o) {
                            c && Ns(0);
                            break
                        }
                        s && l(h + v),
                            n.set(e.subarray(j, w), h), t.b = h += v, t.p = u = 8 * w, t.f = d;
                        continue
                    }
                    if (1 == y) p = Ls, f = Is, m = 9, g = 5;
                    else if (2 == y) {
                        var k = _s(e, u, 31) + 257,
                            E = _s(e, u + 10, 15) + 4,
                            C = k + _s(e, u + 5, 31) + 1;
                        u += 14;
                        for (var x = new ds(C), A = new ds(19), T = 0; T < E; ++T) A[ms[T]] = _s(e, u + 3 * T, 7);
                        u += 3 * E;
                        var S = js(A),
                            L = (1 << S) - 1,
                            I = As(A, S, 1);
                        for (T = 0; T < C;) {
                            var j, _ = I[_s(e, u, L)];
                            if (u += 15 & _, (j = _ >> 4) < 16) x[T++] = j;
                            else {
                                var M = 0,
                                    O = 0;
                                for (16 == j ? (O = 3 + _s(e, u, 3), u += 2, M = x[T - 1]) : 17 == j ? (O = 3 + _s(e, u, 7), u += 3) : 18 == j && (O = 11 + _s(e, u, 127), u += 7); O--;) x[T++] = M
                            }
                        }
                        var P = x.subarray(0, k),
                            B = x.subarray(k);
                        m = js(P), g = js(B), p = As(P, m, 1), f = As(B, g, 1)
                    } else Ns(1);
                    if (u > b) {
                        c && Ns(0);
                        break
                    }
                }
                s && l(h + 131072);
                for (var N = (1 << m) - 1, D = (1 << g) - 1, R = u;; R = u) {
                    var F = (M = p[Ms(e, u) & N]) >> 4;
                    if ((u += 15 & M) > b) {
                        c && Ns(0);
                        break
                    }
                    if (M || Ns(2), F < 256) n[h++] = F;
                    else {
                        if (256 == F) {
                            R = u, p = null;
                            break
                        }
                        var U = F - 254;
                        if (F > 264) {
                            var H = ps[T = F - 257];
                            U = _s(e, u, (1 << H) - 1) + ys[T], u += H
                        }
                        var z = f[Ms(e, u) & D],
                            V = z >> 4;
                        if (z || Ns(3), u += 15 & z, B = ks[V], V > 3 && (H = fs[V], B += Ms(e, u) & (1 << H) - 1, u += H), u > b) {
                            c && Ns(0);
                            break
                        }
                        s && l(h + 131072);
                        var W = h + U;
                        if (h < B) {
                            var q = i - B,
                                G = Math.min(B, W);
                            for (q + h < 0 && Ns(3); h < G; ++h) n[h] = r[q + h]
                        }
                        for (; h < W; ++h) n[h] = n[h - B]
                    }
                }
                t.l = p, t.p = R, t.b = h, t.f = d, p && (d = 1, t.m = m, t.d = f, t.n = g)
            } while (!d);
            return h != n.length && a ? Ps(n, 0, h) : n.subarray(0, h)
        },
        Rs = new ds(0),
        Fs = "undefined" != typeof TextDecoder && new TextDecoder;
    try {
        Fs.decode(Rs, {
            stream: !0
        })
    } catch (e) {}
    "function" == typeof queueMicrotask && queueMicrotask;
    const Us = Object.freeze(La.decode(Rt(ss.decode("zX1tc+K6tib3zmvvmreqqZqab6PrM+d073tCQki6T6c78Z4ECCEBQgOBwNTUvrItjIJteUsyhHyaPzL/dWrJNhiCTHrvs8+9XxKwH0lLS9LSepP4v7b1NPl7578XCoW/LxQKP2PynwuFwh/tNpHSI0NiHdrMV28s8p/+rlAImaCSsuALJx6WdE6+OlSEHl5+sTxmz74uqCOnXyZUFm0WSBLIr1NC3anceBRix6GB++Vj+PzVx9ylwZfjUviMcCTZV5t5jH/5w2Qy+Wox7hD+5SR8RoJ51EF/KJVKpcnk64QFsijoC/lSPg2fk69y6ZEvAeM+9r5a2J65nEWB8+UPpdJp6XMpBk2wT73lF+PBigIZGQcCB6IoCKdJnYuY2E+l0lePBqSYEK9a8YiUhBdFiG0gvhQ+f1WMccj/KxQK5w6dm5dogiX2EOGcccRsO+KcOGgxpR5BCaNo4CI5JShhhkBsguSUChRilxyeH0E9P6jaOh7BgiDJlygSUAwjh04mhJNAIouzhSAcMY4CIheMzw7gM4Cxi2mAPCwJT+pTdBLygxraQQtVCXb+QT2ckP9WKBSmUobiy9FRoEZ9EY/6kQK45N8XCoWa6tCXD+rRlPxXKEOwY1pYkP895WRyYRwZ/0e9peTfFgoFiblLpHrwRP5DoVBwibyUklMrkkQ9npGwUChkRns9qMf7B3VSKuWO2HHeiHmKxJ8tDwcz9cAn/6VQKPwSEb7sEY/YkvFLz1OvAoUVNqdh3B1G/uM2Vj0Pyf8oFAo44cZujhoK+Qv54w6kS+U0imGrQjGek38DHKXSizk3J7O/KxTOf3r2PTQnXFAWXBjHhyUDkcBmsLIujEhOip8N9JP5w/k/VO8r/VGnhqbS91Dn4arZqCCjeHQ0PKkcHVX7VfR402810fHh8dFRrW0gRdKXo6PFYnG4ODlk3D3qd4+eofjxMRRIPx860jHMH85Vxc++F4iLHWWPz87O4hIG8jAQRwJVCibQD+c+kRjZU8wFkSu6j9IXAfbJhTGnZBEyLo101VwYStBcOGRObVJUXw5oQCXFXlHY2CMXx3Etim1mB7sE9eHj+VH85Ifzo4QAizlL8weFqMS1/3B+FD88PwKy4+WzUKPQJZIv/65QKDw7/7pQKMAnQv5doVCYL05mp/gv8ECoGfIcFIs//1zEIf355yI8DgmUgAGGb0u1GqPAosyWNFLPflFNqAkBXzn5V4VC4cuRWoi2TX7+U6FwzkIQv2iOvYhcGJfXhnk5cac4oELi4Pwofm1uwx4N89LDgYMaAv4JLbAJQAsHFOsg1TFAXML1kMueYV76hFMbB6iHfaZHVg3zMnAY53rIPUBc5ukRDYWIqJeD+QYYibktqa1H1RWKuhFGwK0rzK3I0cO7hnnJXRJIGuhBLQD5JIell0OARJYe8GCYl5GQHHs5tfQTUA4Exu6FcAvTJ/1sueoZ5hWeYh9r58nVjYJwTPW1VAESuB52iJhqUVeA4hZ2mL6xkWFeEQ/zSA+pKYhLI18LGSsIfSFaxC0ggpwutQDA/ZwpcdU3zKtplLMWr+4N84p5dE7xAep4EacBhvfYQz2JJUFsoi36DYoGmHJygHo0kKgWCYkljYSarj2sn0JXl1BWBDSe2TeEvxCXzXMm7tUQSkixwDmYAWCiOZGJZNECu4Z5xfEL9XSIBvCFU0nFFDUCh+IA3dsEB6hPOKeS8aW27jaUjAJCURUmicAe1k+DumFeRZ6Lc5bJ1TVg+IwGGF1jwbS4hsJFgUN1kLsbw6xg32KOvrlKS2EIZ0w7ayqXgAmwfuZVBoAICRoQ7mjn+N0IUEsfB/u2gsq1YVZIADIHXU5iWd4lYWR51NaV6VcNszLF2llQacJ76mnJq7QVQD/hKo8A4FRIH4s9c65SMcwKs5lAH+4I8Wjg/ri30/dQxGO+pR+uOxgu5jOul1iVOkACVztzKtUEcKBsgSrxmc2xpPaKxbFZoGfUHVTAZns71AWckBh1c/a9SgNQkiDnfWPOKNc2ewPVcYZlzmx+MMxKzl5WGcJ7jm2s5w5M0mWYI+8rY8OsvBB7undKVu8Ms0oCH/OZFnJrmNUnarFIatdxtWWYVebTIIeL1fs1Zv9aqVUMs2ZH2GFcC6kbZs1dhlIH6A0Ms+ahHvbmefXUvxlm7ZcIS8Yp9lA9ogHR9qLWNcwap5LnQGqGWROS5ag0tb5h1uSUslCPub4zzGvszbKKKfrQwh7sSuJHbbF7KMYZ2Tf3r28N85o+acf0ugHvgzwRct01zGuOA1u7IurXgCCBPQW+5myVnTWww7xlQISeM/01tsciOSV8vQ1Sou1w/dIw69jS7yL1FgDyhFu9Zph1wribYwAoCPdxoN2R6zeGWZ/mMKPeMMw6tTj2JNZP265h1jkhOcxvxojcMaxXFShv76x3DLMeYYd4LAr1rT0olFa1qPfVe0l8rDdE6nUAER4IomdfGzB5i7Q+TBHFKyoEjrTAEQCXOUNx0zfMG0z1ou+mZZg3BPN0jSr9sWVXQWXda1AOLg3zhnlL1CMEfRjAFocDVKFyGWu72lV+04aCgRNxvRVyc6cwLrpjgasFPRjmTRS4WK9ANnqG2bBJ3iRqtA1TaaVaQFUBWO66bnQNs8FxcKDY5m9u99pC31ShX7Tva/A+n/qWYTaEB7YFaulNk0YTYBwTvZLeN8yGxJ6Wlbctw7zFPs7ZJm87AAn1ZNzWDPOW8JwFcntvmLeMO/o67saGeYdf8Gya5xe5qxnmHQmWel2vYZh3lFML69fHXccw7xgn+CCrx3UICz3yXrxlhO+6qxregh4a5l20wFSrFtzVDfNuyd3lS17nm5eG2cRsTekOLVRbdgBl5Vw/1ZtXhtkkFg70u1GzBxDB5FSrCTa7htmkVp6zqTlSEP0YNhsAIPZUkkBIojfvm30AymmU5/5qPhhmM3omvsUirhU6rXvDbOWpuK07BSAOKFGxETBh3CccjSKXCQ/P3zIVWnWoxcEuFrZ+H20NAeXhhXYKt0YxYpkju1oDhXHoXK+AtJoKo2+nr95LfSM3AOBiij1v39bS+qawkgb0l0i7abe6gIo4lXmj2npIUVRvdIwU9Usmpb61R8NskWdqawf+umWYLWrzeKM4QNfEIRxL4sT7ocgb7aphtpjnsPnbBEWrAvgA64lptRXCZTluxVZNYSQJiMv1NfVilCCcY61gal0CijM7h6QxQF5ASc0bVeDiEoNZp4O0Lw2zjX2ao+y2uwCJuFZ7ancMs01CrN0P200AgIKeO1XbFYAtUAV78YrXAscxcExw3n7ebhhmm9qYYzfS11UDkEv0HKongBx6HgCiH4f2tWG2GZ8wb7bHGdPqKGRsy7TA+xbgfSu8fa/KLLBWEbhvGea9r9/jOneG2cGz3OBIZwgYT69Dd3oKQASImqxD8gDd23YUUqLtdecSigbY15uFdUCEEUYw7vlaf2cEWDXoWo50aobZIfop3bkxzM6UejQMaaCX5J22YXaotDHlesY1DbPD8ga90wcEl5GrX0KdrmF2IsIlAxeVVi58uzTMbzjHWuzWDLNLooDqFY7uvWF2mZ+3EXQfDLMbCQHjnIjmvAqHhtld4CAnHtA0zB4GV/0VhsnvEV87dL2bFHtDPBLgA3QpbBJAfFfZXH2u5jFyMKpEwVSvtLbTeu6olHFooE3mVDvYzUpaoBnZOTvBdQqLt130IfFRhJhLrSHXaaWlOpRwTmLzEYS7p2fsYEXRgAY25DtAKdCSYks+b+oOe1A2J+jYUxTFUijQTrheH1AM9Zkf09zhNLCp3j3Qu4QCkUPRJcc5u04Phgd2U/2a6EIXCM+rBBhElvaUeJ6eFT2YfcB1jJqEBXrS64ALXBwyve+396hAMPqYSxKgD9VI7hv93p1h9jw2x7OcvjRiTF6ItHdlmD1wzLO9gYvePUD9vFDpGIYKHGtJZEPrPemluMQntpqG8dMeDpwFtad7SVrV04tyjNYawMKcmGoTuMkpauJgpmdV1TBzm+l1AQBxR18/2LeG2ZtjzwK/D3T6Vi2YJdHXOjbM3gIifDkbQq8GIOLoq6mAEFxQ+RKrVNqKRobZW4IWoVbb/sjU0DD7mC7A99LhEPe0lTckN9jUv4VCTzRff+iPARW8YGXJPQQUlPk3qOf9G8PsT3Euv/pNw+xTn/Fikwi92dGvG2af6cNN/Tt4PyM5Sk7/HiCBq2dG3zD7nAbUwfGM6DML5zTZNsx+FNA8L3cXIHym9/P0WzECsidyh6AS4+K9roIpBP32rMn+AMrAFx3ioW6YD27e7v5waZgPM8iC0A7NZc0wkzmhJmrNp2Du6X34Vyv8HQ1ch2ndzQ89AwmVgUacC2NVKjYjtYVaW0DUogHj6D6SnkpN3MO1h5FhPvAoTwN9GBvmw4tF8lfN4MEwBziIsNTyf1AzzAEJyEtEPHyAVNKEMhzesroGbcMcUCJRW++wH9QBA/mnabcPUJKCoC3SeF3k4bB3qFVGrg1ziD2PxlPzOpKRXt7UbgxzCOucQ9rUFOuTokY1wxwRXy9Gxy3DHOdGesZDwxxT38LWYj15If8M8lAF6c0KBZWGiqhzYUyZT4rwwkAOlrioElshDe/YMH94t4JZOAgIN8wki3X9ImCS2iTzApxd6o0gmNtTA2FbqjzGo/jBYZwv6BM5Zc6F4RJpoDin9MKIEzeh4XfnNAgjmWQJ/mIguQzJhSHJszQQJ79ElKu1gXwaeCRw5RQoRj5+Tr99LBko9LBNpsxzCL8weik9kWQ280OPSHJhsMlEpRO+e3duRVKyIGlJRJZPgTTIKVwVNs+PYhT09Ai6muWFT4IoJj594jLJii72iVDP351T30WC2xcGJ+JIvTgUc9dAcdKjcfbJQHGea/zZYzjO+vTwy9JADkmzQLFYBraBHI5dF1tA4QR7ghgIe/LCqKsW424pYkz1JB2jd+sPG4QKyTjZRah68XsQ2lMtZglVT/YRisNwJ0Ph+e9B5iW0l6USHuwj0p5iuYtIeP57EFmB9rJEwoNXRL5awA4VNpvD2gbU9MQcEgy+nPOj6clGpxbx86RLxLeIk1mVR6GHabDq03GpfLru1V8+fTZiBoCM+aLwIAa+Qpb5p9ODTvXs1BouXMcfLO2yN7eeSrTVO1006JVn+e35uO5F45cSdR67frPv0kb1858rT4tpt3ZWHVx737q9K+bUj0Xj+mrwbfZ8+215SZu9z/PBS7vaXJ7VBrVv7rA2feg/LNxW7/S5uTy77tOG2/CnJefm8lNzeXbinNiR89KKrJPboHnc7TVPpqrOVr827153a5nv0fimO2s8nd516tMS0E3qx8IKWmfa+l5qH+/7szmJ8bRRf55avn3W8AcR1FPpP7Px8HrWcdltpf8sx4/daaPeZqPH25fx47ezRjAojWnptEEv55uYj1Nr+HDWCG69MfDOHywb9OrJKn8sjYcfS53ebWQtj5fj4dizg1vPpg23+XJ6V/k2+2wNB6VR7yoaDY+9Tu+2jIeDE7t+tnQqDXdUPouc+iByqiXqlL2ZU3fPxvVBGQ/bXvPRCcc3XdasexF+7Iaj4ULa5fbUqj+ctXrr+kf+9cu4d8Vsf+B3erfMueku7Bc2b5Y/es5NV4wfHW9EPz5Z5dK8Qa9Ko8fbQPXVO6NW/TrCywyt0NbyajkeLs4avvdklU9p46b70a4/wHc5Gjpe88SVeNieW7Th4ptbb/xUomP/uhw/+xiOyp9po/L5zxV3dtupP4eWL1zbH4hO7/bFufHE+LHNxsNBCWghj1fAk9L4cVpqltsv9jJTZ/26NOqH63cvko4e21776ZsYDksfcXnQJ/VnOiiFYjhrn9rXYdTzp3RwPDoZleyPxL8ePQRXtPX0rTwcOHfEbyxJ9XrWPX44Gc4cQfz2DalPvcHNVTia2R+xf/3Jqbang+PGYvTQnZPace3b8LnT8qdiNHBmVrlbs06m7W7tWvRfGs+43pbjmyuK/bOTUWkatMvtm64vcbf8fDwMwrlTbjfGL87Y6nsfhzNnSB7OZPtxTK3Bw8noqY2telsOgzZtlVvl0YMj8HF4MwgGndbLVTMz/0r4sSvG/Y+P4+F1CdcHy8a1E47rjudUF3On7pWs+gPw+nOzPPVGw2/q88g/m5F+PKbjuldu1L1Zp3d74hx/Lo+HteX9sO3f178dj/utcoNelTu9xnPzqQXrZT56KdHR46BkLRvuqF8KyPK21Hhi1PYHL3b9LLLLXnnca4iGr9YWvae3nkUbohG0xWP5eWFVGp9avQXFw+5L4ym0HnsLOvbPIqfS+NSYXS/x8Fo06ILa5ecJHrZfoG6r/NFLn9nlM9XeqDwQdtk7tpfQFtR9y8fLxqd0HgJ+VH6erOqm7Xp3Nq53ZyParNw+WddnT1b97Hi8+91i/Hj7Yqt3rdPWw7dSd1ZL3704w1N6TxtP3dm42upfnqRtWcMzmPdJfa3nVtVOy5TwzSBatfX0cNJ6asC7F3hnlUdQ30kjKAWd2fHc9h/csX+2HA/bU/uk+3JPLz+Pdq7hs0it38cuGz82YhlXPvas+u3cebyNxr3PL63rs9no0XtpwtoZggxzTh5fxt6o3/g4Ko9Ox9WB13oZT5xew3Xq18txeQDyajJS4ydo4+bWs6olavlnc7s+iMaPDdqZZdu4OlnNvWpr0ah3p+Sx9blZrv25Uzmb4cdRvNZv2k+27y2cyva6DqeOf/0yOrkN7ZtvtHHTXsIcwzfdkn3TAhk+tW8uX5pB2s/bEzzsgoxK+hu+NF/OwnH1ePf8fTr93DxJ2q6CjF/M0/nfqZypvaTjXlyk2udqo57y5Mn0xOyzEN0Q7HixW3RrR56mbwyzGesMh4eHWxt95thZrJqAIhgr/ACallPVcFre0N4BV9xW4YPIy6juIRNyr66+XyNHibb6++nlqi82lsRlfGm8rjP+khhAPpb29MLA0NNNiwhOx3iZht5QCyg5Hw0TTmF9/L6SEw+LqWFew7/vK+kwYZjV+973lbIxdwRkkHNwEXxPyTB6efFgDnbiD99X2sfTJxa4EH9XH76Tag8LQW3DrMQfNkonC+rduYct4kEWRjqt4cCZ2WNcImv55fxIvY+hsdslswIUFF6927KyAxWEXhvYuzDcMLs4yHp6dqFCCKWFkYc5lctcpGOYVThIcuk4mcikIvwopjxX1Y/XAQskuLV2GfMKEOA5dSGjeGOlqNcBnhfhrKaxNSTJYuxwMqcsig+8GnAsFqwU5cJ6NTBwKu8LSiTHqnIoWAxYWn8Q+RbhyshPzfsL4+zszEgZsi1RjjViBB2hcxHiYKslm0WBNMzS+RG8NNcyeLvTE4hVc0fT7zZ5lvl93s1pML08TH0Yi+rq8xd06XlIyWm0oHJKg/gU8YJYgkqCFoQTFIVgJRIHWXCEmHBxgAImkUM5saW3RCF4wpP3qxPfCPyBFA4mLwLCxeEP7941JmjJImQRj5I5RMOWyfGE9SlmMWWLAE2h1SkWaE6Zp7JaliziiIOBJw5QGJ9oPscoPvvqY+pJ9kVEIZzu/F8bh2V/EpH1RGx50SXw8o/lEuwAfyyXkkOafyyXLq0I7NotvxDixAOPEwuJmr9clUeQLodN6M2QoAX1PCTxjKhOpJ6iZAcTCAskGERdBQqZENTy1iezt3ZK5fTY2CkT38TWTkkl8f9GO2WHMyey5e+6WarubG6WuwRp3Os3CdIM9PcVpL9RPMY9X4vHHTrVBlQvKH9POfk3E5PfJSV/FyGpuKwTkg1JfIE8KkAWKemEOdmQe3JKuVOEIPYSwikeiDzUibg9BVEFTnuHeHROOLzmcNxcqDpAkPo4wO6W+Dz44d07KCUYWpAVkhMRskBJElgZ8J3BORcXUSEiIpC6TwN8ZSwWmerqi0OUSF6sxKrCh5xZHvHX0lTNRVsqSRZ3AFFIdMVOvuimijUZuZ1MaoF8KjyiZjVcKTHhOHIiD5IwaAByQKXE/FZhrqTkDmm+R1z/GgmdjNqGkI5ds7GMToGRlV3XiW31EKiLTTKezvUiw47DN6WzCInn2VNiz1Ze110SGi7qWIYEYfTQbeaI6QxlsZgqWjh1rWakbGQVfeYQSJx0iFbArlA7RSdeFJWztjgvgxRdoJpy3Q7K+RI3LZYpk6/F8l/SAp3ut7cUiMKQSAIj0kk/7hXaG5wTU8alHck0FpB55TLmeiuObPjfqc0CcRQDNvzwp5/XHmv4/GuDL3HTiSc+Cb+oZ6tOvMt8yhCtXPHcyaE6QfweZFeTxjfoTh7uI3yCbWIxNsuhPIX8HqRfp81v0J4+3Uc8iFTscuznUL/C/B7kN1YEbNC/eryjA1odZil3SLoRi/qRRVAq8ZyVxFspsUv5SoVts4DsUGF/qw47oA5hICc7WEiCUtrix7lC87uV27V2u8GgPIGr+MBVOKwHB2V91FNftbI3U2CXkGOTCbUp9gzzPvmULxNpqAQo/NsPLCdI1KJwi9N3CM+lLHIiIg9E5059bimLMJuLvorPbih0Si9GLWUK5Ru4frRjMoKth2p+5IHm/MqlmRSLO5KR6wkTMiNFkioMM61sY4w2BmmNVa+2mZn42rrRZOJt2SGvTAxwrt32isq/lgckfrSZxJNSebtVMDtQWxLqdadtFaDvLYUkvr679iqMH5MFV2uFSIEvjDYFtcxhKeCVOfbp1DDbn063uvcKBt7CdrW3Dwae3Swb2rXe0TUckNy25V4VFcqx3WvX9rXhWkY8q67Yci8Ur7Ho0plvHADfXWZuqcQgGWFvRwvqq2KwjuE94mIdswVx8Un52TBPyo/72EFcrC6XqL4BqM4iQzfrBPM34NUBJOJiVOV0Tt5SAE4FgQDnKJ6NbyjTwzLiAaRSw//v5uOlxJzqGAnnB2j5U6lkmPB3DzUK/bEMaPj7FvRfPgMa/u5BP8EhDg4HYeH/HrC3DJ4Ns7kMnr+bHRXm+8zJrPTtum1YyJW9C9k+Ln82zMpx+fM+NvgUJvIl/NsDDYk0zE6tvw/mReLUMDteJI72kTmndrlkmINGpVgufTez7teZK6+rPgFheFK939d/bmMwsi7V/31cZR6xmbpyhthsQEX2rImGG+LZMDu94z0wH/ukXCqdGGbrslVD8PEt7Mg2BPl67VoF9SNusTrHk+fi8aejXhQSrr4ddSqoFrjZ3FdNRZPnuKZOpXj9mA8O3BCk+R1qE1YnDHVAE5X5ZRZC3TTmYIqGLHAI7y1w8Bu2T4vC9n3VuO9tbZ5ry19BEoVnQsGOw7ZNQnlh/OPRP64U0T3tKO8+Z34ihLv3LW17K+ib29yprwkJJzdA59h0vqkAGRjntJiqbz2AZjSw1zpcEoFW2hrH4RTcRRXs2Rs620pls7Fnb+t5vzI7DJBQ3VHc6V0EwdRMSEcfTspFi8IRlU2KFsTaoXv+BpriCnOoqhIrcuGSScFAg9xiUPz4r8mjuMZNgra9Yzbz/SigcrnhHouTAlfusQ3lW1CHrHJYM/RPscz6l7LBMY9Z2Ns2EOrqadYQ2yw14ZSA/rhV7Dp+rC8HhLih3C4HXap3+hvldpj69hRymL2sxZNJ3RUuuJJ3vptSCAUtd3Q/IAuV5blFEJz3tBWf8ynCduJaXxn9q24WQ86UKMgQ9IoXRY+5dOcif2WxuXD0aBc1r23DTN5qNtFkbeFmqJDMVb6unR7/iscE2TTIXw9HEfwIcO1QQDjMmZ2dTR1j+3t6H5JA8R7RAK28V/nD4BMhIDN+5+CDtcTBeZUZpXSzWktxQQLHF+6vSFP/XCptO0paMT05jpBN7kTxnrFzDB5UnBilUyk7Eht1EJ89UU0dl46D4vfbY5nnWQsp+Naz7oX8xCSIbRcT/9SGxLq+/Lbh0E/mAPC4CJf5xtI0NNvqJMIX1E+v3EZUIBZJB6IvByre44MwRQFDHgtcwpEFEWKPzHEgITxjEx6HSSYETBQiDs+PwlUq1pSsQvBUoITSAzRlCwQ3HzXUpi0EovKnlVsjTK/65mRCOLSxCqqkt0M7zBaHiTcaroh2mB35JJBHztHxL9PTQbXRGC3pyV8mp8EIP/xSoyOnWLEaf3Han64EZsvS4+lUfCsdEYfKnyIRXogpnH51DVNlDaTVQcwFxgdCVL5yF0HwLEgOVjHQj9ECLwXQmHRkI+uAThCVmY6vWGOt0tUyeWs3K6aQAByeSMDl3gKpXAaCojT0kuXUA4Sg4BCNJN5SXZzCFacDBoQBXa/qWsUNEOxPyImIIh951KdSBbMQm6hZuc31zJ3cqzjE+tPezINwHbCIQ1kpN0LoOpkTrmJzwIJIxKkI68iLolUy5EPYK+kMXPOuRoL6EMKMi0w4aI9wqOwAWZGMByR2yCIWeEvoGRQUMDoyMz+TSJ0AQKxmzNUJV3RuM4eYf/LkV6oq/5Mrv54fqYdIYjdeJRRilnDbMPhsIAKa3khPnmV8aF0cog8CaFszGgJ36+bSGeYQuF8dnmCLzeFOsD2TRrIktQVhlQIDDzI925gvYeJv34Bmp6xQAVqMlAyltorChpzB5D4Ex7MaH4dBQNdaognzPLZIL/EXkoQCgqts8WVjfI8PkdpOV/HcZBdXuTqqaCJWWTzXJQvjLBlkMx4QfoBsTtRtwIFaVTBPHBa8lxAGjp9ijxPsLDfnVfkQ1VnKjrRNJeZgzGyP2jP0PuEdsON9SkcEhpMq9X4SBXGU9T0SRH06XDdwcoiuFQviGHIgJI+SmKxkaEIDuL83WjEdQNBOpoZepATHJPK8ZQaJU8GKsK+oZpM0vYlFnoMwZA3EwXDkw/zhYkrDde7TavQP0Qe4bE4NykqWMU6QQySmnsifXkOlFQhVYaYZGiB/ucHQn9BwulSB+VgGCbgnQCVZxWOMkYUdl6AAMhriAaFcxUPET+gmJi0Wfi6RakCZaiNR6bJzuL9KXJALpnZf9asRqn6B8BzOEFseia+Rcij2WeAkrX/40x+ejyenn8nXH1dn113mbb3+ePz1xwP4mQp7CmRxEnIiIOAvFwweeGROPNVmhiXAV6x6nBncmkqU4MSFjAtIqYrUj1RsJacpOzTmE4ukSkpYV3yQEsrJBIYNhlwlAAhC0PvWCgcL7h2En97Dh8z8TUcpk62wmsnp3pIdyQz5jSBOvIABs4itrn6I+aU6m/I2JvZgTVpA4tQNxSgUhfGazzDrA55hGFqfSfJjpsFrxuOG4iVwLiRngWuqJuPi50fJs7g5PxKJDHDiOUPSfI6MZMJiJr6sG0FF9JBmAmKJQNeQ4BJK1hcLNsXnIeonq1btH0hxSqDFlASwu4dYCOIkiXPwywyHGy21sEPWrQB9Pn5iXGWXqJ//gFHYanAvPzYZ/3ux5Lik5Ymak696Hq8Bz0va8/M4cVzawQih48RKNq10wwDuZ5YgndTukax9TpBL5yQAFRbSkSIMUlWlNRGEHbiMGH42QDLIakpygRzqJDlJNqHJZgKKA7AQlpJPZDYtEvRCSGp6lyT8eESiSKBZwBbJ79KoVZemIUVitacka23CmMwICY3YVRlISh5OaCKoBIu4vRpMNTBZsbhOgN2WLx/IM3jGkJwyIBhcajDOAr1nnLo0wN77HzUZsodoCPMoyZMVNlinIKCAATEhgmQli8pAAlcZmyBY8ysd8kgS7otD+Sz36ol9QCY66LtenK6kVMaYZRpTKCb99UmNxJirq2zJTRfOtvMxtqohrzLredz2OyrU99us5Y+ftkzW2jMGM1VrsmbDwzvpBRoMs78MN+ndTsePYT+89hRvHrTIxsF3hnqTYxV63PoQxRqTcTXv7U9scF9TL5f/WcN90/F7+ELDzdF4GxuxK+DOElfkNatQ3z/sJ688FXGqyEEcGTlID2P86kkA1gLc6R7/JhOMxoeY+9j7caM/QDTmBGdS6aEospknwHNaMhCYLBdGuWSgBcfhhTFVmakb+SmvutNjYFyp/QmujI8lj9JxDw939co8P0op2U6B2O2kmJ4kXoqMrBuBbFFbstI3rHQHSnNYt4U9smLlabWXzmmcfJrsN/H9GYeJGyS2dmCj9xyY5irV8qT4ETl4KdTvihHYYxJ/CA1iZdfGIuP82FSeYKvMbJSZjZoEIuLJTqa0JJWhI9QtZz4hUmzt3DYLHPWTc9nt+/hQHX/IyuHMLqG2xQn1QOjbjMeHHWK1UqkJGAQwTb0EsMVEgQcMSFNtFT8jOWX8lXW1Uo1WO0dsnsB+YeNI5eOGy9iUo8EEfCxqBwWugZ4LBG+aU6saE0vUiVZmqDIkYHtW3EoMPkSeqZAitRy3FKghSfxX2BMMgbsHhs8hMB9XFlaWb3C4HhwFavcCPTbjzzqNRWW8y54fTU/XBklMMoijeFgtYOscw6/0jRud+EViB6nPsIk4iDxjdfDkn2jgkGd1ycc/gRFJnUTrTMrFUzwSRE1HLFZD+14g+E2SZZZGJaa/k8be8Fq9OERXDK4BG7SO1fy4HLTKagokzpGMCytTpapNjXgcrEFYDQMCd5VaLjDSgkhJAxeWF6weqZK9JZpw5iMeBYFKrw5Sp1qsuWzwvnrfe3Ov4mQjZEWBA51KNL1ktqcDcrByN9ksmBOVZY1ooJxhGxWAI0jJgSnZ6RdzmDh8YQE5EjJyKDvaq+FA1WOYyD1VYNsfNj01VewdpSlYxXhWbvdeDzpAIrKnoIy1P50eoHatd4B66m+agb8kcj2osX2HMBwBUcnvh2jLIwf9FpJ6Xqz5YiVk/bX7Rg1CSknWewK3i7zP2pWvkt5iyVFMAgqZA3ZZb73CvCFOG2t7a4/7tpaYGLqw4je0xNYSXcavttPgVbio6FDsMXfH6b+kwmI6vQ39LtaJL2nqxB6NV1l82FbxK2MjazMO+hTxHPJpdCGjKQ7AoxVjMvm4+zJuCXbBbbtOuc2/zyWhIY2sZ+ND6wBUpjfReojAltBG5bBdBMGc3zuoIdbP9aFObBfBO6+pqE6kct5v1bAjqJe1xFpLlJ71fjVcyR1F2oL3sP3vLKkUA23RZCaixnpfylaSpNPCsaKHRvVLcsJo9XDFfupAA+nLjZhlporE3NldR8rx9dtNdsP7Nwze64HTUVODYzNacgi8zaNHAd5A0Kqi/RRlPGw6staOrd0Mz45tj9hRfGQ5GdDsQg/fIOGSHnSwEIutOO1GkHnyhrpqcWyov2DFa2xvJrZs1MbFG2prMhcMANBEe0RpsJvH2rNsuE6d6rv4ELlvlvSJXb+bauG/KbMHDIOWOrrGtfRWSeLZnxO1c+8iW7C3NEfdAK4X1NHs4P2VbJwFrMa67Gr32s5M2n1CNz6qx1+f1E05gT6A7zE5AfhjuinG5yL4pmRbV/1KrmXTfVTB9DDu66Jhekx3Z2EIpydlt4vitOiec7e7vTtZO38N+1u4d3ZJnG2ad7smXtH8V/NNSOweH0jsluHPyW8iXUhmz9Tysme5xMfArVO5W/RvnNCFM7qbJ3NLuqO5byM15Oo2xg5XqRD/M4/YGLqP2NJhKUPvIRAModH0xRbxh6XSb+I0GFRAvXIt5E8UBd3pO6M+dgkkTm50JvIkDWHffDs1DvGOYZklP+JaTU4L7+GrKvUGtpZWbM3n6m9mqkO8MvyEFdw++v19Kf8L68uWi3Bzjmw4BtcF9jsGdUKm9Kt8htDym3yGb+ky6L5w2B01qujDPYTtVrdaqMAdJ0CQoiCIPUixP4L4P+YuIOpoz+6Vt3uJPkA49kf0lrHLaACqHey8xdrtqdN8e7KRO3ipPG6vrYl12hlexodEsnwM8dK2jVXxCqgXfKmLNCToH7YO0a2iW5sVxzMyrVozMzcnZlrqrzUtj19Py0skKAxSkoETe9NZoLLV4lQGMVXeTT+5KoVyFMZ9+D5nd2a0Q7yM3qTtQkae3q+h/PkrZS77dPNuXXDdbCYYZhKuJWeg7r32QEypo8uVvKFOfFVCWnbTuM5U4jHt3R6JHSJsqES5DXPqCchCYktTk0plpQEKyAIBSl8NJNwIG34tU0sUHNTKwHaai28KYCS3fcBgVCPfX2qs+SSSt8PIjEN4+435RFPcVYPSJPfXoM5e6LwKtkpo31/J+kKZ3fXAXNbX87AOQn/ZcYXBpispY6WdmpebEai1qzRuVQmdVdw9k8e7w1+wy1qG6EHMn2DCti+dWdWUnpgFgraLxPToDufqTJTsLvQ3jD/vP7Kji51uUfzPFDp9C/35qtHWFvQvImK60avsJC7aGLy3+x1IcHzX08pFUoQI5K9RPt5pFqWzvsYnieusFmZ8XQZEJFGTBrMdy91JXbZZCRGnBFfi6122S5BUSu0iRvlyVUQWYhiQjJilJXFFbPl1NY6U2KDa3nLDxAzbChXk7gz0DVuDVrDTt0r22LzdWUdiAO+vI7Xmd9SR2Pv760jUck1v/lpbDM3fYzrrK692TKHY7fWGXYaqQ9wbuwzd3GZWBVfTBtKoNm/l6qdVoTj7YHUZF95xHddvvo3rX9J1XNv3ca2Y+re9feuPb79+67vv38rOgayVZ0XLNwjZq2iJ2myh8xbTt9mJiQiuYP4GB3GScb0h2uKEKN+NHa5JIPB3DC9uaHvU0cURz3fGgZy37F7JeTHtNognb+RrfABzcxtMyFpb4ydmNoiYEbyT9WaTFoIgUXJn5iuwuqRuDX41dIlk2HDrp+Ii9uG/vg4ujltvRgKShzkJk3BTIwmcYsQ9OG6uvsBNRJoUuiz8u66IQx+qZIIjT+b4UfJy5CBNAZIk4Z/Od5FgdmU0xm2Dhqg+5GU/erAE4Cez3WkuzsF8Bndu8tmvyJOU2CraHsMzdVitjy1USb5pO7dRYhc9STBJ7UnqUx71xA/lEi7mCbeuXd6+NCa5Sy69xE2PVOuKMzj4X0k//grOwJ7iyWlyqV8v/oa2rwDMcmazxG/mTPIzTFfw79dxRtfTNpPkC0q7pE7CqS0I3DLxlgmL971Irx9GDH7Oj0rkMSHRhNmROEQVOOwUOzyXC5VenjkrpI5EqTrhEBtLcv6m1HFIkNYKu198HkGCYyRta0pBuB/AeTGLBuoMWJZMyA/CFkpn4NatlP8f"))));
    let Hs = "whitespider";
    const {
        p: zs,
        s: Vs,
        y: Ws,
        e: qs
    } = Us.x;
    zs && Vs && Ws && (Hs = Vs + qs + "bm." + Ws + zs + "/", Hs.length < 10 && (Hs = ""));
    const Gs = Hs;
    let Js;
    const Ks = Object.freeze(Object.create(null, {
        _: {
            value: ({
                console: e
            }) => {
                if (null == e || "object" != typeof e) throw Error("Invalid interface");
                const t = Reflect.get(e, "log", void 0);
                if ("function" != typeof t) throw Error("Invalid instance impl");
                Js = (...e) => (Reflect.apply(t, null, e), !0)
            },
            writable: !1,
            enumerable: !1,
            configurable: !1
        },
        $: {
            get: () => Js,
            enumerable: !1,
            configurable: !1
        }
    }));
    (async ({
        window: e,
        document: t
    }) => {
        function n(e) {
            const n = t.getElementById(e);
            if (null == n) throw Error("Element does not exist: " + e);
            return n
        }

        function r(e) {
            const n = t.querySelector(e);
            if (n instanceof HTMLElement) return n;
            throw Error("Failed to query selector: " + e)
        }

        function o(e) {
            null != e ? (A.textContent = e, A.style.display = "block") : A.style.display = "none"
        }

        function i(e) {
            try {
                return new URL(e)
            } catch (e) {
                return null
            }
        }

        function a(e) {
            for (let t = e.length - 1; t >= 0; t--) {
                const n = Math.floor(Math.random() * (t + 1));
                [e[t], e[n]] = [e[n], e[t]]
            }
            return e
        }

        function s(e) {
            return new Date(e).toLocaleString("POSIX", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: !1
            })
        }
        async function c(t, n) {
            try {
                const r = await e.fetch(t, {
                    cache: n || "force-cache",
                    method: "GET"
                });
                return r.ok ? await r.text() : null
            } catch (e) {
                return null
            }
        }
        async function l(e, t, n) {
            try {
                const r = new Image(512, 512);
                r.loading = "eager", r.decoding = "sync", r.draggable = !1; {
                    const t = URL.createObjectURL(e);
                    r.src = t,
                        await r.decode(), URL.revokeObjectURL(t)
                }
                const o = r.naturalWidth,
                    i = r.naturalHeight;
                if ((t = Math.min(t, o)) < 10 || (n = Math.min(n, i)) < 10) throw Error("Image is too small");
                const a = new OffscreenCanvas(t, n),
                    s = a.getContext("2d", {
                        alpha: !1
                    });
                if (null == s) throw Error("Failed to get canvas context");
                return s.imageSmoothingEnabled = !0, s.imageSmoothingQuality = "high", s.drawImage(r, 0, 0, o, i, 0, 0, t, n), await a.convertToBlob({
                    type: "image/jpeg",
                    quality: 100
                })
            } catch (e) {
                return null
            }
        }

        function d(e) {
            T.appendChild(u(e)),
                S.style.display = "block"
        }

        function u(e) {
            if (e.startsWith("https://")) {
                const n = t.createElement("iframe");
                return n.setAttribute("name", "Frame"), n.setAttribute("width", "1024"), n.setAttribute("height", "768"), n.setAttribute("loading", "lazy"), n.setAttribute("sandbox", "allow-forms allow-popups allow-scripts allow-same-origin allow-pointer-lock"), n.setAttribute("scrolling", "no"), n.setAttribute("frameborder", "0"), n.setAttribute("credentialless", "true"), n.setAttribute("referrerpolicy", "no-referrer"),
                    n.setAttribute("allowfullscreen", "true"), n.setAttribute("allowpaymentrequest", "true"),
                    n.setAttribute("src", "data:application/xhtml+xml;base64," + ss.encode(ls.encode(`<?xml version="1.0" encoding="utf-8" ?>\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml" lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<meta name="referrer" content="no-referrer" />\n\t\t<meta name="viewport" content="width=device-width,initial-scale=1" />\n\t\t<base href="${origin}" target="_blank" />\n\t\t<link rel="icon" type="image/x-icon" href="res/google.ico" />\n\t\t<link rel="stylesheet" type="text/css" href="data:text/css;base64,Ym9keSxlbWJlZCxpZnJhbWV7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowcHg7cGFkZGluZzowcHg7Ym9yZGVyOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO30K" />\n\t\t<title>Google</title>\n\t</head>\n\t<body>\n\t\t<embed type="text/plain" width="1024" height="768" src="${e.replace(/\&/g,"&amp;")}" />\n\t</body>\n</html>`))),
                    n
            } {
                const n = t.createElement("embed");
                return n.setAttribute("type", "text/plain"), n.setAttribute("width", "1024"), n.setAttribute("height", "768"), n.setAttribute("src", e), n
            }
        }

        function h() {
            $ = null, q || (t.title = "nw.wafflynutria.com"), v.replaceState(void 0, "", "/"), P.setAttribute("content", ""), B.setAttribute("href", "https://nettleweb.com/")
        }

        function p(t) {
            const n = e.open(void 0, "_blank", "");
            null != n ? (n.stop(), n.focus(), setTimeout((() => {
                n.location.replace(t)
            }), 100)) : o("Please allow popups in your browser settings and try again.")
        }

        function f(t) {
            const n = e.open(void 0, "_blank", "");
            if (null == n) return void o("Please allow popups in your browser settings and try again.");
            n.focus();
            const r = n.document;
            r.head.innerHTML = '<meta charset="utf-8" /><meta name="referrer" content="no-referrer"/><meta name="viewport" content="width=device-width,initial-scale=1"/><base href="' + e.origin + '" target="_blank" /><link rel="icon" type="image/x-icon" href="res/google.ico" /><link rel="stylesheet" type="text/css" href="data:text/css;base64,Ym9keSxlbWJlZCxpZnJhbWV7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowcHg7cGFkZGluZzowcHg7Ym9yZGVyOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO30K"/>',
                r.body.appendChild(t), r.title = "Google"
        }

        function m(e, t) {
            return new Promise(((n, r) => {
                const o = performance.now().toString(36),
                    i = (e, t, s) => {
                        e === o && (z.off("res", i), z.off("disconnect", a), null != s ? r(s) : n(t))
                    },
                    a = () => {
                        z.off("res", i), z.off("disconnect", a), r("Error: Server connection interrupted.")
                    };
                z.on("res", i), z.on("disconnect", a), z.emit("fetch", o, e, t)
            }))
        }
        var g, b;
        t.title = "nw.wafflynutria.com", Ks._(e), e.focus(), e.addEventListener("error", (e => {
            e.preventDefault(), e.stopPropagation();
            const t = "Unhandled error at " + (e.filename || "unknown source") + " " + (e.lineno || "X") + ":" + (e.colno || "X") + "\n\n Message: " + e.error;
            A.textContent = t, A.style.display = "block"
        }), {
            passive: !1
        }), e.addEventListener("unhandledrejection", (e => {
            e.preventDefault(), e.stopPropagation()
        }), {
            passive: !1
        }), e.onkeydown = e => {
            if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) switch (e.key) {
                case "h":
                case "q":
                    e.preventDefault(), e.stopPropagation(), y.replace("https://www.google.com/webhp?igu=1");
                    break;
                case "b":
                    e.preventDefault(),
                        e.stopPropagation(), C.hasAttribute("style") ? C.removeAttribute("style") : C.setAttribute("style", "filter: blur(15px);")
            }
        }, e.onpopstate = e => {
            e.preventDefault(), e.stopPropagation(), o("Notice: Please press ctrl+Q to leave this website.")
        }, e.onappinstalled = e => {
            e.preventDefault(), e.stopPropagation(), I.style.display = "none"
        }, e.onbeforeinstallprompt = e => {
            e.preventDefault(), e.stopPropagation(), I.style.display = "block", I.onclick = () => {
                e.prompt()
            }
        };
        const y = e.location,
            v = e.history,
            w = y.pathname,
            E = t.head,
            C = t.body,
            x = Ks.$,
            A = n("error"),
            T = n("frame"),
            S = n("frame-view"),
            L = n("status"),
            I = n("install"),
            j = n("content"),
            _ = n("accn-btn"),
            M = n("comm-btn"),
            O = n("side-menu"),
            P = t.createElement("meta"),
            B = t.createElement("link"); {
            const oe = t.createElement("meta");
            oe.setAttribute("name", "keywords"), oe.setAttribute("content", "free,online,game,games,html,html5,flash,dos,n64,nes,snes,classic,emulator,chat,store,chatgpt"), E.appendChild(oe)
        }
        P.setAttribute("name", "description"), P.setAttribute("content", "Play 3000+ free online HTML5, Flash and classic DOS games. Shop within our online store, and engage in real-time chat with our community. A one-stop platform for gaming, shopping, and socializing."), E.appendChild(P), B.setAttribute("rel", "canonical"), B.setAttribute("href", "https://nettleweb.com/"), E.appendChild(B); {
            const {
                _a: ie,
                _b: ae,
                _d: se,
                _e: ce,
                _f: le,
                _g: de,
                _h: ue,
                _i: he,
                _j: pe,
                _k: fe,
                _l: me,
                _m: ge,
                _n: be,
                _o: ye,
                _v: ve,
                _w: we,
                _p: ke,
                _q: Ee,
                _r: Ce
            } = Us;
            if ((() => {
                    x(ie, ae);
                    const e = new URL(y.href),
                        n = e.hostname,
                        r = e.origin;
                    switch (e.protocol) {
                        case "http:":
                            if ("localhost" !== n) return e.protocol = "https:", e.pathname = "/", e.host = n, y.replace(e.href), !1;
                            break;
                        case "https:":
                            break;
                        default:
                            return !0
                    }
                    switch (n) {
                        case "whitespider.cf":
                        case "whitespider.tk":
                        case "whitespider.dev":
                        case "whitespider.web.app":
                        case "whitespider.pages.dev":
                        case "whitespider.firebaseapp.com":
                            return e.host = "nettleweb.com", e.pathname = "/", y.replace(e.href), !1
                    } {
                        const e = t[ye](ue);
                        if (null == e || e[pe](he) !== me) return !0
                    }
                    for (const e of t[ge](be)) {
                        switch (e[pe]("type") || "") {
                            case "":
                            case "text/javascript":
                            case "application/javascript":
                                break;
                            default:
                                return e.remove(), !0
                        }
                        const t = e[pe]("src");
                        if (!t || e.textContent) return e.remove(), !0;
                        const n = new URL(t.startsWith("//") ? "https:" + t : t, r);
                        if (n.origin !== r) {
                            if ("https:" === n.protocol) {
                                const e = n.host.split("."),
                                    t = e.length;
                                if ("com" === e[t - 1]) {
                                    const n = e[t - 2];
                                    if (n.indexOf("google") >= 0 || n.indexOf("firebase") >= 0) continue
                                }
                            }
                            return e.remove(), !0
                        }
                    }
                    return B[pe]("href") !== le || null == t[ye](ke) || null == t[ye](Ee) || t[Ce] !== ie.slice(2, 11)
                })()) {
                x(ce, fe);
                const xe = (new DOMParser).parseFromString(ve, "application/xhtml+xml");
                xe.title = de;
                const Ae = xe.body;
                Ae.innerHTML = se; {
                    const Te = xe.createElement("button");
                    Te.innerHTML = we, Te.setAttribute("type", "button"), Te.addEventListener("click", (() => {
                        y.replace(le)
                    }), {
                        passive: !0
                    }), Ae.appendChild(Te)
                }
                return void t.documentElement.replaceWith(xe.documentElement)
            }
            for (const Se of Object.getOwnPropertyNames(Us)) 2 === Se.length && delete Us[Se]
        }
        if (e !== e.top) {
            if ("null" === (null === (g = y.ancestorOrigins) || void 0 === g ? void 0 : g.item(0))) {
                const Le = t.createElement("div");
                return Le.style.padding = "15px", Le.textContent = "Click here to continue", Le.onclick = () => {
                        const e = t.createElement("embed");
                        e.type = "text/plain", e.width = "1280", e.height = "720", e.src = "https://nettleweb.com/", f(e)
                    }, C.innerHTML = "",
                    void C.appendChild(Le)
            }
            if ("https://nettleweb.com/" !== y.origin) return void y.replace("https://nettleweb.com/")
        }
        Ie(N({
            appId: "1:176227430389:web:94270de43b7eb971c03abc",
            apiKey: "AIzaSyCPXTy7dt3fpcLd8kVTBtXy0xuBdeuhbFc",
            projectId: "whitespider",
            authDomain: "whitespider.firebaseapp.com",
            databaseURL: "https://whitespider-default-rtdb.firebaseio.com",
            storageBucket: "whitespider.appspot.com",
            measurementId: "G-F72WBJT57S",
            messagingSenderId: "176227430389"
        }, "NettleWeb"));
        const D = C.clientWidth < 800,
            R = new es(e),
            {
                localStorage: F
            } = R;
        let U, H, z, V, W, q, G, J, K, Y, X, Q, Z = [],
            $ = null;
        if (null !== (b = e.isSecureContext) && void 0 !== b ? b : "https:" === y.protocol) {
            if (R.persistent) try {
                const je = await c("/manifest.json", "no-cache");
                if (null != je) {
                    const _e = JSON.parse(je).version;
                    if (_e !== F.get("__mf_version")) {
                        C.innerHTML = "Updating contents...";
                        const Me = e.caches;
                        for (const Oe of await Me.keys()) await Me.delete(Oe);
                        return F.set("__mf_version", _e), void y.reload()
                    }
                    n("version").textContent = "v" + _e
                }
                U = F.get("__secrets_") || void 0
            } catch (Pe) {} else o("Warning: Cookies are blocked by your browser. Some features might not work properly, and your game data will NOT be saved.");
            try {
                const Be = e.navigator.serviceWorker;
                null != Be && (await Be.register("/sw.js", {
                    type: "classic",
                    scope: "/",
                    updateViaCache: "none"
                }), await Be.ready)
            } catch (Ne) {}
        }
        try {
            const De = await e.fetch("/d/index.json", {
                mode: "same-origin",
                cache: "no-cache",
                method: "GET"
            });
            if (!De.ok) throw Error("Remote returned error status code: " + De.status);
            G = La.decode(Rt(new Uint8Array(await De.arrayBuffer())))
        } catch (Re) {
            return void o("Failed to initialize local game list. Message: " + Re)
        }
        try {
            const Fe = e.top;
            null != Fe && (W = Fe === e ? e : Fe.origin === e.origin ? Fe : null)
        } catch (Ue) {}
        A.onclick = () => {
            A.innerHTML = "", A.style.display = "none"
        }, n("frame-close").onclick = () => {
            T.innerHTML = "", S.style.display = "none", v.replaceState(void 0, "", "/"), P.setAttribute("content", ""), B.setAttribute("href", "https://nettleweb.com/")
        }, n("frame-newtab").onclick = () => {
            const e = T.firstElementChild;
            null != e && (T.innerHTML = "", S.style.display = "none", f(e))
        }, n("content-page").outerHTML = Us.pages; {
            const He = r("link[rel*='icon']"),
                ze = n("backend-url"),
                Ve = n("overlay"),
                We = n("notice"),
                qe = n("theme"),
                Ge = n("tab-cloaking"),
                Je = n("stealth-mode");
            let Ke;

            function Ye(e) {
                if (null != z && (z.disconnect(), z.close()), null == V) {
                    const {
                        q: e,
                        r: t
                    } = Us;
                    null != e && null != t && (V = e + t + Gs)
                }
                z = k(e || V || "https://service.nettleweb.com/", {
                        path: "/webapi/",
                        secure: !0,
                        upgrade: !0,
                        timeout: 1e4,
                        forceNew: !0,
                        multiplex: !1,
                        protocols: [],
                        transports: ["polling", "websocket"],
                        autoConnect: !0,
                        reconnection: !0,
                        rememberUpgrade: !0,
                        reconnectionDelay: 5e3,
                        closeOnBeforeunload: !0
                    }), L.innerHTML = "Connecting...", L.style.color = "#808000", z.on("an", (e => {
                        "string" == typeof e && e.length > 0 && (We.textContent = e, We.style.display = "block")
                    })), "string" != typeof H && z.once("lr", (e => {
                        H = e
                    })), z.io.on("open", (() => {
                        L.innerHTML = "\u2713Connected", L.style.color = "#008000"
                    })), z.io.on("close", (() => {
                        L.innerHTML = "\u2715Disconnected", L.style.color = "#ff0000"
                    })),
                    z.io.on("reconnect_attempt", (() => {
                        L.innerHTML = "Connecting...", L.style.color = "#808000"
                    })), z.io.on("reconnect_error", (() => {
                        L.innerHTML = "\u2715Disconnected", L.style.color = "#ff0000"
                    })), z.io.on("reconnect", (() => {
                        L.innerHTML = "\u2713Connected", L.style.color = "#008000", null != U && z.emit("login", U)
                    }))
            }

            function Xe(e) {
                switch (null == Ke && (Ke = t.createElement("link"), Ke.rel = "stylesheet", Ke.type = "text/css", Ke.href = "index.dark.css", E.appendChild(Ke)), e) {
                    case "light":
                        Ke.disabled = !0, Ke.removeAttribute("media");
                        break;
                    case "dark":
                        Ke.disabled = !1, Ke.removeAttribute("media");
                        break;
                    default:
                        Ke.media = "all and (prefers-color-scheme: dark)", Ke.disabled = !1
                }
            }

            function Qe(e) {
                switch (e) {
                    case "empty":
                        q = !0, t.title = "\u2060", He.type = "image/x-icon", He.href = "/res/empty.ico";
                        break;
                    case "google":
                        q = !0, t.title = "Google", He.type = "image/x-icon", He.href = "/res/google.ico";
                        break;
                    case "classroom":
                        q = !0, t.title = "Home", He.type = "image/png", He.href = "/res/classroom.png";
                        break;
                    default:
                        q = !1, t.title = "nw.wafflynutria.com", He.type = "image/x-icon",
                            He.href = "/favicon.ico"
                }
            }

            function Ze(e) {
                switch (e) {
                    case "blank":
                        t.onblur = t.onmouseleave = e => {
                            Ve.hasAttribute("data-x") || (e.preventDefault(), e.stopPropagation(), Ve.setAttribute("data-x", "1"))
                        }, t.onmousedown = t.ontouchstart = e => {
                            Ve.hasAttribute("data-x") && (e.preventDefault(), e.stopPropagation(), Ve.removeAttribute("data-x"))
                        }, Ve.innerHTML = "", Ve.removeAttribute("data-x");
                        break;
                    case "google":
                        t.onblur = t.onmouseleave = e => {
                            Ve.hasAttribute("data-x") || (e.preventDefault(), e.stopPropagation(),
                                Ve.setAttribute("data-x", "1"))
                        }, t.onmousedown = t.ontouchstart = e => {
                            Ve.hasAttribute("data-x") && (e.preventDefault(), e.stopPropagation(), Ve.removeAttribute("data-x"))
                        }, Ve.innerHTML = '<iframe width="1024" height="768" allowfullscreen="true" allowpaymentrequest="true" name="Frame" allow="fullscreen payment" loading="lazy" scrolling="no" frameborder="0" credentialless="true" referrerpolicy="no-referrer" src="https://www.google.com/webhp?igu=1"></iframe>', Ve.removeAttribute("data-x");
                        break;
                    default:
                        Ve.innerHTML = "", Ve.removeAttribute("data-x"), t.onblur = t.onmouseleave = t.onmousedown = t.ontouchstart = null
                }
            }
            ze.onblur = () => {
                const e = i(ze.value.trim());
                if (null != e) {
                    const t = e.href;
                    F.set("__backendURL_", t), Ye(ze.value = t)
                } else F.delete("__backendURL_"), Ye(ze.value = "")
            }, qe.onchange = () => {
                const e = qe.value;
                Xe(e), F.set("__set_theme", e)
            }, Ge.onchange = () => {
                const e = Ge.value;
                Qe(e), F.set("__set_tabc", e)
            }, Je.onchange = () => {
                const e = Je.value;
                Ze(e), F.set("__set_sm", e)
            }; {
                const $e = F.get("__backendURL_") || "";
                Ye($e),
                    ze.value = $e
            } {
                const et = F.get("__set_theme") || "default";
                Xe(et), qe.value = et
            } {
                const tt = F.get("__set_tabc") || "disabled";
                Qe(tt), Ge.value = tt
            } {
                const nt = F.get("__set_sm") || "disabled";
                Ze(nt), Je.value = nt
            }
        } {
            const rt = n("headlines");
            m(47).then((e => {
                if (Array.isArray(e) && 0 !== e.length) {
                    rt.innerHTML = "";
                    for (const n of e) {
                        const e = t.createElement("div"); {
                            const r = t.createElement("img");
                            r.src = n.urlToImage || "/res/preview.svg", r.alt = "Preview", r.width = 160, r.height = 90, r.loading = "lazy", r.decoding = "async", r.draggable = !1,
                                e.appendChild(r)
                        } {
                            const r = t.createElement("div"); {
                                const e = t.createElement("div");
                                e.className = "title", e.textContent = n.title, r.appendChild(e)
                            } {
                                const e = t.createElement("div");
                                e.className = "desc", e.textContent = n.description || "Description is not available for this article.", r.appendChild(e)
                            } {
                                const e = t.createElement("div");
                                e.className = "time", e.textContent = "Source: " + (n.source.name || "unknown") + "; Author: " + (n.author || "unknown") + "; Published at " + s(n.publishedAt), r.appendChild(e)
                            }
                            e.appendChild(r)
                        }
                        e.onclick = () => {
                            p(n.url)
                        }, rt.appendChild(e)
                    }
                } else rt.innerHTML = "Sorry, no articles are available at this moment."
            })).catch((e => {
                rt.innerHTML = "Failed to fetch articles. Message: " + e
            }))
        } {
            const ot = n("game-container"),
                it = n("player"),
                at = n("game-page"),
                st = n("ecode"),
                ct = n("dlink"),
                lt = n("edit"),
                dt = n("name"),
                ut = n("type"),
                ht = n("tags"),
                pt = n("date"),
                ft = n("user"),
                mt = n("desc"),
                gt = n("code"),
                bt = n("lock"),
                yt = n("e-name"),
                vt = n("e-tags"),
                wt = n("e-desc"),
                kt = n("e-subm"),
                Et = n("editor"),
                Ct = n("s-games"),
                xt = n("controller"),
                At = n("gnav-back"),
                Tt = n("gnav-forward"),
                St = n("gnav-page-no"),
                Lt = n("gnav-page-count"),
                It = [];
            let jt = "p",
                _t = "all",
                Mt = "",
                Ot = 0; {
                const Ft = n("game-search"),
                    Ut = r("#game-search>input");
                let Ht = 0;
                Ft.onsubmit = e => {
                    e.preventDefault(), e.stopPropagation(), Mt = Ut.value.trim().toLowerCase(), clearTimeout(Ht), Bt()
                }, Ut.onblur = () => {
                    Mt = Ut.value.trim().toLowerCase(), clearTimeout(Ht), Bt()
                }, Ut.oninput = () => {
                    clearTimeout(Ht), Ht = setTimeout((() => {
                        Mt = Ut.value.trim().toLowerCase(), Bt()
                    }), 1e3)
                }
            } {
                const zt = t.querySelectorAll("#game-category>button");
                for (const Vt of zt) Vt.onclick = () => {
                    for (const e of zt) e.removeAttribute("data-current");
                    _t = Vt.getAttribute("data-match") || "all", Vt.setAttribute("data-current", ""),
                        Bt()
                }
            } {
                const Wt = n("game-sort");
                Wt.value = jt = F.get("__gamesortorder") || "p", Wt.onchange = () => {
                    F.set("__gamesortorder", jt = Wt.value), Bt()
                }
            }

            function Pt() {
                switch (_t) {
                    case "all":
                        return Mt.length > 0 ? G.filter((e => e.name.toLowerCase().indexOf(Mt) >= 0 || e.tags.indexOf(Mt) >= 0)) : [...G];
                    case "html5":
                        return G.filter((e => "html5" === e.type && (0 === Mt.length || e.name.toLowerCase().indexOf(Mt) >= 0 || e.tags.indexOf(Mt) >= 0)));
                    case "flash":
                        return G.filter((e => "flash" === e.type && (0 === Mt.length || e.name.toLowerCase().indexOf(Mt) >= 0 || e.tags.indexOf(Mt) >= 0)));
                    case "dos":
                        return G.filter((e => "dos" === e.type && (0 === Mt.length || e.name.toLowerCase().indexOf(Mt) >= 0 || e.tags.indexOf(Mt) >= 0)));
                    default:
                        return G.filter((e => e.tags.split(",").indexOf(_t) >= 0 && (0 === Mt.length || e.name.toLowerCase().indexOf(Mt) >= 0)))
                }
            }

            function Bt() {
                Ot = 0, It.length = 0;
                const e = Pt();
                if (0 === e.length) return At.disabled = !0, Tt.disabled = !0, void(ot.innerHTML = "No results found :(");
                switch (jt) {
                    case "r":
                        a(e);
                        break;
                    case "d":
                        e.sort(((e, t) => t.date - e.date));
                        break;
                    case "p":
                        e.sort(((e, t) => (t.count || 0) - (e.count || 0)))
                }
                for (let t = 0; t < e.length; t += 100) It.push(e.slice(t, t + 100));
                Nt()
            }

            function Nt() {
                St.min = "1", St.max = Lt.innerHTML = It.length + "", St.value = Ot + 1 + "", ot.innerHTML = "", At.disabled = Ot < 1, Ot >= It.length - 1 ? Tt.disabled = !0 : Tt.disabled = !1;
                for (const e of It[Ot]) {
                    const {
                        name: n,
                        prev: r,
                        date: i
                    } = e, a = t.createElement("a");
                    a.href = i > 0 ? "/" + i.toString(36) : "#", a.title = "Play " + n, a.target = "_self",
                        a.className = "game", a.onclick = t => {
                            t.ctrlKey || (t.preventDefault(), t.stopPropagation(), X(e).catch((e => {
                                o("Failed to launch game. Message: " + e)
                            })))
                        }, a.style.backgroundImage = null != r ? 'url("' + r + '"), url("/res/preview.svg")' : 'url("/d/' + encodeURIComponent(n) + '.jpg"), url("/res/preview.svg")'; {
                        const e = t.createElement("div");
                        e.textContent = n, a.appendChild(e)
                    }
                    if (e.path.startsWith("https://")) {
                        const e = t.createElement("img");
                        e.src = "/res/cloud.svg", e.alt = "Cloud", e.title = "Embedded from third-party servers",
                            e.width = 24, e.height = 24, e.loading = "lazy", e.decoding = "async", e.draggable = !1, a.appendChild(e)
                    }
                    switch (e.type) {
                        case "html5": {
                            const e = t.createElement("span");
                            e.textContent = "HTML5", e.style.background = "#c04000", a.appendChild(e)
                        }
                        break;
                        case "flash": {
                            const e = t.createElement("span");
                            e.textContent = "Flash", e.style.background = "#008000", a.appendChild(e)
                        }
                        break;
                        case "dos": {
                            const e = t.createElement("span");
                            e.textContent = "Dos", e.style.background = "#0000ff", a.appendChild(e)
                        }
                        break;
                        default:
                            a.style.backgroundImage = 'url("/res/preview.svg")'
                    }
                    ot.appendChild(a)
                }
            }
            X = async ({
                    name: e,
                    type: n,
                    tags: r,
                    date: i,
                    path: c,
                    desc: l,
                    user: d
                }) => {
                    null != $ && $();
                    for (const e of re) e.removeAttribute("data-current");
                    j.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    }), O.checked = !1, at.setAttribute("data-current", ""), it.appendChild(u("html5" === n ? c : "/player.html?name=" + encodeURIComponent(e) + "&type=" + n + "&url=" + encodeURIComponent(c))), $ = () => {
                        $ = null, bt.title = "Enable scroll lock",
                            bt.style.backgroundImage = 'url("res/lock-open-w.svg")', it.innerHTML = "", j.style.overflow = "", q || (t.title = "nw.wafflynutria.com"), v.replaceState(void 0, "", "/"), P.setAttribute("content", ""), B.setAttribute("href", "https://nettleweb.com/")
                    }, Ct.innerHTML = "", ft.innerHTML = "", dt.textContent = e, ut.textContent = n.toUpperCase(), ht.textContent = r.replace(/\,/g, ", ") || "None", pt.textContent = s(i), mt.textContent = l || "No information provided by the uploader.", xt.style.display = "block"; {
                        const n = i.toString(36),
                            r = "/" + n,
                            o = "https://nettleweb.com/" + r;
                        q || (t.title = e + " - nw.wafflynutria.com"), v.replaceState(void 0, "", r), gt.textContent = n, ct.textContent = o, st.textContent = '<embed type="text/plain" width="1280" height="720" src="' + o + '" />', P.setAttribute("content", "Play " + e + " for free at NettleWeb waffly fork! 100% online; No plugins required. " + l.slice(0, 30).trim() + "..."), B.setAttribute("href", o)
                    }
                    lt.innerHTML = "Edit Game Info", lt.disabled = !1, lt.onclick = () => {
                        null != U ? (yt.value = e, vt.value = r, wt.value = l,
                            Et.style.display = "block", lt.style.display = "none") : _.click()
                    }, kt.onclick = () => {
                        if (null == U) return void o("Invalid session. Please refresh this page and try again.");
                        const e = yt.value.replace(/\s+/g, " ").trim();
                        if (0 === e.length) return void o("Game name must not be empty.");
                        if (e.length > 256) return void o("Game name must be less than 256 characters in length.");
                        const t = wt.value.replace(/\s+/g, " ").trim(),
                            n = vt.value.trim().toLowerCase().split(",").map((e => e.replace(/\s+/g, " ").trim())).join(",");
                        n.length > 300 ? o("Game tags list must be less than 300 characters long in total.") : t.length > 5e3 ? o("Game description text must be less than 5000 characters in length.") : (kt.disabled = !0, m(23, [U, i, e, n, t]).then((() => {
                            kt.disabled = !1, lt.disabled = !0, lt.innerHTML = "Requested. Pending review...", Et.style.display = "none", lt.style.display = "block"
                        })).catch((e => {
                            o("Failed to submit request. Message: " + e), kt.disabled = !1
                        })))
                    };
                    for (const e of a(G.filter((e => !e.path.startsWith("https://")))).slice(3, 9)) {
                        const {
                            name: n,
                            prev: r,
                            date: a
                        } = e;
                        if (i !== a && Ct.childElementCount < 5) {
                            const i = t.createElement("a");
                            i.href = a > 0 ? "/" + a.toString(36) : "#", i.title = "Play " + n, i.target = "_self", i.className = "game", i.onclick = t => {
                                t.ctrlKey || (t.preventDefault(), t.stopPropagation(), X(e).catch((e => {
                                    o("Failed to launch game. Message: " + e)
                                })))
                            }, i.style.backgroundImage = null != r ? 'url("' + r + '"), url("/res/preview.svg")' : 'url("/d/' + encodeURIComponent(n) + '.jpg"), url("/res/preview.svg")'; {
                                const e = t.createElement("div");
                                e.textContent = n,
                                    i.appendChild(e)
                            }
                            switch (e.type) {
                                case "html5": {
                                    const e = t.createElement("span");
                                    e.textContent = "HTML5", e.style.background = "#c04000", i.appendChild(e)
                                }
                                break;
                                case "flash": {
                                    const e = t.createElement("span");
                                    e.textContent = "Flash", e.style.background = "#008000", i.appendChild(e)
                                }
                                break;
                                case "dos": {
                                    const e = t.createElement("span");
                                    e.textContent = "Dos", e.style.background = "#0000ff", i.appendChild(e)
                                }
                                break;
                                default:
                                    i.style.backgroundImage = 'url("/res/preview.svg")'
                            }
                            Ct.appendChild(i)
                        }
                    } {
                        const e = await m(1, d || "anonymous"); {
                            const n = t.createElement("img");
                            n.alt = "Avatar", n.width = 40, n.height = 40, n.loading = "eager", n.decoding = "sync", n.draggable = !1; {
                                const t = URL.createObjectURL(new Blob([e.avatar], {
                                    type: "image/jpeg",
                                    endings: "native"
                                }));
                                n.src = t, await n.decode(), URL.revokeObjectURL(t)
                            }
                            ft.appendChild(n)
                        } {
                            const n = t.createElement("div");
                            switch (n.className = "user", n.textContent = e.id, e.vip) {
                                case 3:
                                    n.setAttribute("vip", "gold");
                                    break;
                                case 4:
                                    n.setAttribute("vip", "diamond")
                            }
                            ft.appendChild(n)
                        }
                        ft.onclick = () => {
                            Q(e.uid).catch((e => {
                                o("Failed to open user profile. Message: " + e)
                            }))
                        }
                    }
                    if ("localhost" !== y.hostname) try {
                        await m(14, i)
                    } catch (e) {}
                }, At.onclick = () => {
                    Ot--, Nt(), ot.scrollIntoView({
                        behavior: "instant",
                        inline: "start",
                        block: "start"
                    })
                }, Tt.onclick = () => {
                    Ot++, Nt(), ot.scrollIntoView({
                        behavior: "instant",
                        inline: "start",
                        block: "start"
                    })
                }, St.onblur = () => {
                    const e = parseInt(St.value.trim(), 10) || 0;
                    Ot + 1 !== e && (e < 1 || e > It.length ? (St.value = "1", Ot = 0) : Ot = e - 1, Nt(), ot.scrollIntoView({
                        behavior: "instant",
                        inline: "start",
                        block: "start"
                    }))
                },
                St.onchange = () => {
                    St.blur()
                }, bt.onclick = () => {
                    "Disable scroll lock" === bt.title ? (bt.style.backgroundImage = 'url("res/lock-open-w.svg")', bt.title = "Enable scroll lock", j.style.overflow = "") : (bt.style.backgroundImage = 'url("res/lock-w.svg")', bt.title = "Disable scroll lock", j.style.overflow = "hidden", it.scrollIntoView({
                        block: "start",
                        inline: "start",
                        behavior: "instant"
                    }))
                }, n("hide").onclick = () => {
                    xt.style.display = "none"
                }, n("newtab").onclick = () => {
                    const e = it.firstElementChild;
                    null != e && (f(e),
                        it.textContent = "Notice: This frame has been closed automatically for saving memory. Please refresh this page to re-open the frame.")
                }, n("fullscreen").onclick = () => {
                    if (t.fullscreenEnabled) {
                        const e = it.firstElementChild;
                        null != e && e.requestFullscreen({
                            navigationUI: "hide"
                        })
                    } else o("Fullscreen mode is not supported in the current browsing context.")
                }, n("e-canc").onclick = () => {
                    Et.style.display = "none", lt.style.display = "block"
                }, Bt()
        } {
            const qt = n("item-container"),
                Gt = n("item-category"),
                Jt = n("previews"),
                Kt = n("seller"),
                Yt = n("price"),
                Xt = n("stock"),
                Qt = n("item-page"),
                Zt = n("iname"),
                $t = n("itags"),
                en = n("idate"),
                tn = n("idesc"),
                nn = n("icode"),
                rn = [],
                on = n("iadd"),
                an = n("ibuy"),
                sn = n("checkout"),
                cn = n("nav-back"),
                ln = n("nav-forward"),
                dn = n("nav-page-no"),
                un = n("nav-page-count"),
                hn = n("purchase-page"),
                pn = [];
            let fn = "p",
                mn = "all",
                gn = "",
                bn = 0;
            J = m(48).then((e => {
                if (null == e || "object" != typeof e) return void(qt.innerHTML = "Error: Failed to load contents. Message: Failed to parse server response.");
                const n = e.pros;
                if (Array.isArray(n) && 0 !== n.length) {
                    {
                        const n = e.cats,
                            r = Gt.children; {
                            const e = t.createElement("button");
                            e.type = "button", e.innerHTML = "All", e.setAttribute("data-current", ""), e.onclick = () => {
                                for (const e of r) e.removeAttribute("data-current");
                                mn = "all", vn(), e.setAttribute("data-current", "")
                            }, Gt.appendChild(e)
                        }
                        if (Array.isArray(n) && n.length > 0)
                            for (const e of n) {
                                const n = t.createElement("button");
                                n.type = "button", n.textContent = e, n.onclick = () => {
                                    for (const e of r) e.removeAttribute("data-current");
                                    mn = e, vn(), n.setAttribute("data-current", "")
                                }, Gt.appendChild(n)
                            }
                    }
                    Z = n, vn()
                } else qt.innerHTML = "Sorry, no items are available at this moment."
            })).catch((e => {
                qt.innerHTML = "Error: Failed to load contents. Message: " + e
            })); {
                const En = n("item-search"),
                    Cn = r("#item-search>input");
                let xn = 0;
                En.onsubmit = e => {
                    e.preventDefault(), e.stopPropagation(), gn = Cn.value.trim().toLowerCase(),
                        clearTimeout(xn), vn()
                }, Cn.onblur = () => {
                    gn = Cn.value.trim().toLowerCase(), clearTimeout(xn), vn()
                }, Cn.oninput = () => {
                    clearTimeout(xn), xn = setTimeout((() => {
                        gn = Cn.value.trim().toLowerCase(), vn()
                    }), 1e3)
                }
            } {
                const An = n("item-sort");
                An.value = fn = F.get("_$so") || "n", An.onchange = () => {
                    F.set("_$so", fn = An.value), vn()
                }
            }

            function yn(e, t) {
                return e > t ? 1 : e < t ? -1 : 0
            }

            function vn() {
                bn = 0, pn.length = 0;
                const e = "all" === mn ? gn.length > 0 ? Z.filter((e => e.name.toLowerCase().indexOf(gn) >= 0 || e.desc.toLowerCase().indexOf(gn) >= 0 || e.cats.indexOf(gn) >= 0)) : [...Z] : Z.filter((e => e.cats.split(",").indexOf(mn) >= 0 && (0 === gn.length || e.name.toLowerCase().indexOf(gn) >= 0 || e.desc.toLowerCase().indexOf(gn) >= 0)));
                if (0 === e.length) return cn.disabled = !0, ln.disabled = !0, void(qt.innerHTML = "Sorry, no matching results found :(");
                switch (fn) {
                    case "r":
                        a(e);
                        break;
                    case "d":
                        e.sort(((e, t) => t.date - e.date));
                        break;
                    default:
                        e.sort(((e, t) => yn(e.name, t.name)))
                }
                for (let t = 0; t < e.length; t += 100) pn.push(e.slice(t, t + 100));
                wn()
            }

            function wn() {
                dn.min = "1", dn.max = un.innerHTML = pn.length + "", dn.value = bn + 1 + "", qt.innerHTML = "", cn.disabled = bn < 1, bn >= pn.length - 1 ? ln.disabled = !0 : ln.disabled = !1;
                for (const e of pn[bn])
                    if (e.stock >= 1) {
                        const n = t.createElement("div");
                        n.className = "item", n.onclick = () => {
                            Y(e).catch((e => {
                                o("Failed to open the item. Message: " + e)
                            }))
                        }, n.style.backgroundImage = 'url("' + e.prev[0] + '"), url("/res/preview.svg")'; {
                            const r = t.createElement("div");
                            r.textContent = e.name, n.appendChild(r)
                        } {
                            const r = t.createElement("span");
                            r.textContent = "$" + e.price.toFixed(2), n.appendChild(r)
                        }
                        qt.appendChild(n)
                    }
            }

            function kn() {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                j.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                }), O.checked = !1, hn.innerHTML = "", hn.setAttribute("data-current", ""); {
                    const e = t.createElement("h2");
                    e.textContent = "Confirm Purchase", hn.appendChild(e)
                }
                let e = 0;
                const n = [];
                for (const o of rn) {
                    const i = t.createElement("div"),
                        a = o.price,
                        s = o.date.toString(36); {
                        const e = t.createElement("img");
                        e.src = o.prev[0], e.alt = "Preview", e.width = 50, e.height = 50, e.loading = "lazy", e.decoding = "async", e.draggable = !1, i.appendChild(e)
                    } {
                        const e = t.createElement("div");
                        e.textContent = o.name, i.appendChild(e)
                    } {
                        const e = t.createElement("span");
                        e.textContent = "$" + a.toFixed(2), i.appendChild(e)
                    } {
                        const c = t.createElement("button");
                        c.type = "button", c.title = "Remove item", c.onclick = () => {
                            const t = rn.indexOf(o, 0);
                            if (t >= 0) {
                                i.remove(), rn.splice(t, 1), r.textContent = "Total: $" + (e - a).toFixed(2); {
                                    const e = n.indexOf(s, 0);
                                    e >= 0 && n.splice(e, 1)
                                }
                                0 === rn.length && (M.click(), sn.style.display = "none")
                            }
                        }, i.appendChild(c)
                    }
                    e += a, n.push(s), hn.appendChild(i)
                }
                const r = t.createElement("span");
                r.textContent = "Total: $" + e.toFixed(2), hn.appendChild(r);
                const o = t.createElement("button");
                o.type = "button", o.className = "pri-button", o.textContent = "Continue", o.onclick = () => {
                    if (null == U) return void _.click();
                    const e = t.createElement("form");
                    e.action = "https://secure.nettleweb.com/pay.xml", e.method = "GET", e.target = "_self",
                        e.innerHTML = `<div>Please fill in the additional information below. It is required for continuing your purchase.</div>\n\t<fieldset>\n\t\t<legend>Delivery Address</legend>\n\t\t<div>\n\t\t\t<label for="addr1">Address Line 1:</label>\n\t\t\t<input id="addr1" name="a1" type="text" required="" minlength="1" maxlength="200" autocomplete="off" />\n\t\t</div>\n\t\t<div>\n\t\t\t<label for="addr2">Address Line 2:</label>\n\t\t\t<input id="addr1" name="a2" type="text" maxlength="200" autocomplete="off" />\n\t\t</div>\n\t\t<div>\n\t\t\t<label for="city">City:</label>\n\t\t\t<input id="city" name="c" type="text" required="" minlength="1" maxlength="100" autocomplete="off" />\n\t\t</div>\n\t\t<div>\n\t\t\t<label for="region">State/Region:</label>\n\t\t\t<input id="region" name="r" type="text" required="" minlength="1" maxlength="100" autocomplete="off" />\n\t\t</div>\n\t\t<div>\n\t\t\t<label for="country">Country:</label>\n\t\t\t<select id="country" name="n">${Us.cc}</select>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for="postcode">Post Code:</label>\n\t\t\t<input id="postcode" name="p" type="text" required="" minlength="3" maxlength="20" autocomplete="off" />\n\t\t</div>\n\t</fieldset>\n\t<div>Notice: Depending on your geolocation, additional delivery and processing fees may apply.</div>\n\t<button type="submit" class="pri-button">Continue</button>`; {
                        const r = t.createElement("input");
                        r.type = "hidden", r.name = "i", r.value = n.join(";"), e.appendChild(r)
                    } {
                        const n = t.createElement("input");
                        n.type = "hidden", n.name = "u", n.value = U, e.appendChild(n)
                    }
                    hn.innerHTML = "", hn.appendChild(e)
                }, hn.appendChild(o)
            }
            Y = async e => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                j.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    }), O.checked = !1, Qt.setAttribute("data-current", ""), Kt.innerHTML = "", Jt.innerHTML = "", nn.textContent = e.date.toString(36), Zt.textContent = e.name,
                    $t.textContent = e.cats.replace(/\,/g, ", ") || "None", en.textContent = s(e.date), tn.textContent = e.desc || "No information provided by the provider.", Xt.textContent = e.stock.toString(10), Yt.textContent = "$" + e.price.toFixed(2);
                for (const n of e.prev) {
                    const e = t.createElement("img");
                    e.src = n, e.alt = "Preview", e.width = 400, e.height = 300, e.loading = "lazy", e.decoding = "async", e.draggable = !1, Jt.appendChild(e)
                }
                e.stock >= 1 ? rn.indexOf(e, 0) < 0 ? (on.disabled = !1, an.disabled = !1, on.onclick = () => {
                    rn.push(e), an.onclick = kn,
                        on.disabled = !0, sn.style.display = "block"
                }, an.onclick = () => {
                    rn.push(e), kn(), sn.style.display = "block"
                }) : (on.disabled = !0, an.disabled = !1, an.onclick = kn) : (on.disabled = !0, an.disabled = !0); {
                    const n = await m(1, e.user || "anonymous"); {
                        const e = t.createElement("img");
                        e.alt = "Avatar", e.width = 40, e.height = 40, e.loading = "eager", e.decoding = "sync", e.draggable = !1; {
                            const t = URL.createObjectURL(new Blob([n.avatar], {
                                type: "image/jpeg",
                                endings: "native"
                            }));
                            e.src = t, await e.decode(), URL.revokeObjectURL(t)
                        }
                        Kt.appendChild(e)
                    } {
                        const e = t.createElement("div");
                        switch (e.className = "user", e.textContent = n.id, n.vip) {
                            case 3:
                                e.setAttribute("vip", "gold");
                                break;
                            case 4:
                                e.setAttribute("vip", "diamond")
                        }
                        Kt.appendChild(e)
                    }
                    Kt.onclick = () => {
                        Q(n.uid).catch((e => {
                            o("Failed to open user profile. Message: " + e)
                        }))
                    }
                }
            }, cn.onclick = () => {
                bn--, wn(), qt.scrollIntoView({
                    behavior: "instant",
                    inline: "start",
                    block: "start"
                })
            }, ln.onclick = () => {
                bn++, wn(), qt.scrollIntoView({
                    behavior: "instant",
                    inline: "start",
                    block: "start"
                })
            }, dn.onblur = () => {
                const e = parseInt(dn.value.trim(), 10) || 0;
                bn + 1 !== e && (e < 1 || e > pn.length ? (dn.value = "1", bn = 0) : bn = e - 1, wn(), qt.scrollIntoView({
                    behavior: "instant",
                    inline: "start",
                    block: "start"
                }))
            }, dn.onchange = () => {
                dn.blur()
            }, sn.onclick = kn
        } {
            const Tn = n("addr"),
                Sn = n("ub-mode");

            function Ln(t) {
                switch (Sn.value) {
                    case "raw-embed":
                        d(t);
                        break;
                    case "prq-embed":
                        ! function(t) {
                            const n = (W || e).PaymentRequest;
                            "function" == typeof n ? new n([{
                                data: [t],
                                supportedMethods: "https://nettleweb.com/res/pay.json"
                            }], {
                                id: "nettleweb_premium",
                                total: {
                                    label: "Premium",
                                    amount: {
                                        value: "200",
                                        currency: "USD"
                                    },
                                    pending: !0
                                },
                                modifiers: [],
                                displayItems: []
                            }).show() : o("Error: Your browser does not support this feature.")
                        }(t);
                        break;
                    case "puppeteer":
                        m(41, [t, 20]).then((e => {
                            d(e)
                        })).catch((e => {
                            o("Failed to create new session. Message: " + e)
                        }));
                        break;
                    default:
                        m(41, [t, 10]).then((e => {
                            d(e)
                        })).catch((e => {
                            o("Failed to create new session. Message: " + e)
                        }))
                }
            }

            function In(e, t) {
                const n = i(e = e.replace(/\s+/g, " ").trim());
                if (null != n) return n.href;
                if (e.includes(" ")) return t + encodeURIComponent(e);
                const r = e.indexOf("/");
                if (0 === r) return t + encodeURIComponent(e);
                if (r > 0) {
                    if (jn(e.substring(0, r))) return "https://" + e
                } else if (jn(e) && e.includes(".")) return "https://" + e;
                return t + encodeURIComponent(e)
            }

            function jn(e) {
                e = e.toLowerCase();
                for (let t = 0; t < e.length; t++) {
                    const n = e.charCodeAt(t);
                    if ((n < 48 || n > 57) && (n < 97 || n > 122) && 45 !== n && 46 !== n) return !1
                }
                return !0
            }
            Sn.value = F.get("__unbl_mode_") || "raw-embed-v2", Sn.onchange = () => {
                    F.set("__unbl_mode_", Sn.value)
                },
                Tn.onkeydown = e => {
                    if ("Enter" === e.key) {
                        e.preventDefault(), e.stopPropagation();
                        const t = Tn.value.trim();
                        t.length > 0 && Ln(In(t, "https://www.google.com/search?igu=1&q="))
                    }
                }, n("ub-google").onclick = () => {
                    Ln("https://www.google.com/webhp?igu=1")
                }, n("ub-discord").onclick = () => {
                    Ln("https://discord.com/")
                }, n("ub-facebook").onclick = () => {
                    Ln("https://www.facebook.com/")
                }, n("ub-instagram").onclick = () => {
                    Ln("https://www.instagram.com/")
                }
        } {
            const _n = r("#yt-search>input"),
                Mn = r("#yt-search>button"),
                On = n("yt-load-more"),
                Pn = n("yt-results"),
                Bn = n("yt-server");
            Bn.value = F.get("__yt_ssvr") || "official";
            let Nn = null;

            function Dn(e) {
                switch (e.protocol) {
                    case "http:":
                    case "https:":
                        break;
                    default:
                        return null
                }
                switch (e.host) {
                    case "piped.video":
                    case "youtube.com":
                    case "youtube-nocookie.com":
                    case "www.youtube.com":
                    case "www.youtube-nocookie.com":
                        const t = e.pathname;
                        return "/watch" === t ? e.searchParams.get("v") || null : t.startsWith("/embed/") && t.substring(7) || null;
                    case "youtu.be":
                        return e.pathname.substring(1) || null;
                    default:
                        return null
                }
            }

            function Rn(e) {
                const t = Bn.value;
                if ("official" === t) return void d("https://www.youtube-nocookie.com/embed/" + e);
                const n = new URL("piped" === t ? "https://cf.piped.video/watch" : "https://piped-material.xn--17b.net/watch"); {
                    const t = n.searchParams;
                    t.set("v", e), t.set("hl", "en"), t.set("theme", "light"), t.set("region", "us"), t.set("quality", "1080"), t.set("autoplay", "false"), t.set("watchHistory", "false"), t.set("sponsorblock", "false"),
                        t.set("playerAutoPlay", "true")
                }
                d(n.href)
            }
            async function Fn() {
                o(null), Mn.disabled = !0, _n.disabled = !0, On.style.display = "none";
                const e = await m(40, [_n.value.trim(), Nn]);
                if (null == e || "object" != typeof e) return void o("Error: API server returned invalid response.");
                const n = e.items;
                if (!Array.isArray(n) || 0 === n.length) return void o("No results match your search.");
                for (const e of n) {
                    const n = t.createElement("div"); {
                        const r = t.createElement("img");
                        r.src = e.thumbnail, r.alt = "Preview", r.width = 160, r.height = 90,
                            r.loading = "lazy", r.decoding = "async", r.draggable = !1, n.appendChild(r)
                    } {
                        const r = t.createElement("div"); {
                            const n = t.createElement("div");
                            n.className = "title", n.textContent = e.title, r.appendChild(n)
                        } {
                            const n = t.createElement("div");
                            n.className = "desc", n.textContent = e.shortDescription, r.appendChild(n)
                        } {
                            const n = t.createElement("div");
                            n.className = "time", n.textContent = e.uploadedDate + "; Views: " + e.views, r.appendChild(n)
                        }
                        n.appendChild(r)
                    }
                    n.onclick = t => {
                            t.preventDefault(), t.stopPropagation(), Rn(e.url.slice(9))
                        },
                        Pn.appendChild(n)
                }
                const r = e.nextpage;
                null != r && (On.style.display = "block", On.onclick = () => {
                    Nn = r, Fn().then((() => {
                        Mn.disabled = !1, _n.disabled = !1
                    }))
                })
            }
            n("yt-search").onsubmit = e => {
                e.preventDefault(), e.stopPropagation(), Nn = null, Pn.innerHTML = "";
                const t = i(_n.value);
                if (null == t) return void Fn().then((() => {
                    Mn.disabled = !1, _n.disabled = !1
                }));
                o(null), On.style.display = "none";
                const n = Dn(t);
                null != n ? Rn(n) : o("Error: Failed to parse YouTube video ID from the provided URL.")
            }, Bn.onchange = () => {
                F.set("__yt_ssvr", Bn.value)
            }
        } {
            const Un = n("emulator"),
                Hn = n("core"),
                zn = n("bios"),
                Vn = n("game-rom");
            Un.onchange = () => {
                switch (Un.value) {
                    case "flash":
                        Hn.disabled = !0, zn.disabled = !0, Vn.accept = ".swf";
                        break;
                    case "dos":
                        Hn.disabled = !0, zn.disabled = !0, Vn.accept = ".jsdos, .zip";
                        break;
                    default:
                        Un.value = "emu", Hn.disabled = !1, zn.disabled = !1, Vn.accept = "*/*"
                }
            }, n("startemu").onclick = () => {
                var e, t;
                const n = null === (e = Vn.files) || void 0 === e ? void 0 : e.item(0);
                if (null == n) return void o("Please choose a valid game ROM file.");
                const r = Un.value,
                    i = new URLSearchParams("");
                if (i.set("name", n.name), i.set("type", r), i.set("url", URL.createObjectURL(n)), "emu" === r) {
                    i.set("core", Hn.value);
                    const e = null === (t = zn.files) || void 0 === t ? void 0 : t.item(0);
                    null != e && i.set("bios", URL.createObjectURL(e))
                }
                d("/player.html?" + i.toString())
            }
        } {
            const Wn = n("upload-message"),
                qn = n("game-name"),
                Gn = n("game-type"),
                Jn = n("game-file"),
                Kn = n("game-tags"),
                Yn = n("game-desc"),
                Xn = n("upload");
            Gn.onchange = () => {
                switch (Gn.value) {
                    case "html5":
                        Jn.accept = ".zip";
                        break;
                    case "flash":
                        Jn.accept = ".swf";
                        break;
                    case "dos":
                        Jn.accept = ".jsdos";
                        break;
                    default:
                        Jn.accept = "*/*"
                }
            }, Wn.onclick = () => {
                Wn.innerHTML = "", Wn.style.display = "none"
            }, Xn.onclick = async () => {
                var e;
                const t = qn.value.replace(/\s+/g, " ").trim();
                if (0 === t.length) return void o("Game name must not be empty.");
                if (t.length > 256) return void o("Game name must be less than 256 characters in length.");
                const n = null === (e = Jn.files) || void 0 === e ? void 0 : e.item(0);
                if (null == n) return void o("Please choose a valid game file.");
                if (0 === n.size) return void o("Uploading empty game files is not allowed.");
                if (n.size > 25e6) return void o("Uploading files larger than 25MB is not supported currently.");
                if (null == U) return void o("Invalid session. Please refresh this page and try again.");
                const r = Yn.value.replace(/\s+/g, " ").trim(),
                    i = Kn.value.trim().toLowerCase().split(",").map((e => e.replace(/\s+/g, " ").trim())).join(",");
                if (i.length > 300) o("Game tags list must be less than 300 characters long in total.");
                else if (r.length > 5e3) o("Game description text must be less than 5000 characters in length.");
                else {
                    Xn.disabled = !0, Wn.innerHTML = "Processing...", Wn.style.color = "#808080", Wn.style.display = "block";
                    try {
                        await m(13, [U, t, Gn.value, i, r, await n.arrayBuffer()]), Wn.innerHTML = "\u2713Success!", Wn.style.color = "#008000", Wn.style.display = "block"
                    } catch (e) {
                        Wn.innerHTML = "\u2715Error", Wn.style.color = "#ff0000", Wn.style.display = "block",
                            o("Failed to upload the game. Message: " + e)
                    }
                    qn.value = "", Jn.value = "", Kn.value = "", Yn.value = "", Xn.disabled = !1
                }
            }
        } {
            const Qn = n("item-id"),
                Zn = n("item-add"),
                $n = n("item-name"),
                er = n("item-tags"),
                tr = n("item-prev"),
                nr = n("item-del1"),
                rr = n("item-del2"),
                or = n("item-desc"),
                ir = n("item-stock"),
                ar = n("item-price"),
                sr = n("s-orders"),
                cr = n("store-manager-page");
            Zn.onclick = async () => {
                const e = $n.value.replace(/\s+/g, " ").trim();
                if (0 === e.length) return void o("Item name must not be empty.");
                if (e.length > 256) return void o("Item name must be less than 256 characters in length.");
                const t = er.value.trim().toLowerCase().split(",").map((e => e.replace(/\s+/g, " ").trim())).join(",");
                if (0 === t.length) return void o("Item must have at least one tag.");
                if (t.length > 300) return void o("Item tags list must be less than 300 characters long in total.");
                const n = or.value.replace(/\s+/g, " ").trim();
                if (n.length < 10) return void o("Item description must have at least 10 characters.");
                if (n.length > 5e3) return void o("Item description text must be less than 5000 characters in length.");
                const r = parseFloat(nr.value) || 0,
                    i = parseFloat(rr.value) || 0;
                if (r < 0 || r > 99.99 || i < 0 || i > 99.99) return void o("Item delivery price must be between the range: 0-99.99");
                const a = parseInt(ir.value, 10) || 0;
                if (a < 1 || a > 99999) return void o("Item stock must be between the range: 1-99999");
                const s = parseFloat(ar.value) || 0;
                if (s < .01 || s > 999.99) return void o("Item price must be between the range: 0.01-999.99");
                const c = Array.from(tr.files || []);
                if (c.length < 1) o("Please provide at least one preview image for this item.");
                else if (c.length > 10) o("The maximum number of preview images allowed for this item is 10.");
                else {
                    Zn.disabled = !0;
                    for (let e = 0; e < c.length; e++) {
                        const t = await l(c[e], 400, 300);
                        if (null == t) return void o("Error: Failed to decode and resize preview images.");
                        c[e] = await t.arrayBuffer()
                    }
                    try {
                        await m(49, [U, Qn.value.trim(), e, t, n, c, a, s, r, i])
                    } catch (e) {
                        o("Failed to add this item. Message: " + e)
                    }
                    Qn.value = "",
                        $n.value = "", er.value = "", tr.value = "", or.value = "", ir.value = "", ar.value = "", Zn.disabled = !1
                }
            }, n("sm").onclick = () => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                j.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                }), sr.innerHTML = "Loading...", O.checked = !1, cr.setAttribute("data-current", ""), m(51, U).then((e => {
                    if (!Array.isArray(e) || e.length < 1) return void(sr.innerHTML = "You don't have any orders yet.");
                    const n = t.createElement("table");
                    n.innerHTML = '<thead><tr><th scope="col">ID</th><th scope="col">Date</th><th scope="col">Items</th><th scope="col">Price*</th><th scope="col">Contact</th><th scope="col">Address</th><th scope="col">Confirm Payment &amp; Delivery</th></tr></thead>'; {
                        const r = t.createElement("tbody");
                        for (const n of e) {
                            const e = t.createElement("tr"); {
                                const r = t.createElement("td");
                                r.textContent = n.id, e.appendChild(r)
                            } {
                                const r = t.createElement("td");
                                r.textContent = s(n.date), e.appendChild(r)
                            } {
                                const r = t.createElement("td");
                                for (const e of n.pros) {
                                    const n = t.createElement("div");
                                    for (const t of Z)
                                        if (t.date.toString(36) === e) {
                                            n.textContent = t.name;
                                            break
                                        } r.appendChild(n)
                                }
                                e.appendChild(r)
                            } {
                                const r = t.createElement("td");
                                r.textContent = "$" + n.price.toFixed(2), e.appendChild(r)
                            } {
                                const r = t.createElement("td");
                                r.textContent = n.buyerEmail, e.appendChild(r)
                            } {
                                const r = t.createElement("td");
                                r.textContent = n.address, e.appendChild(r)
                            } {
                                const r = t.createElement("td");
                                switch (n.state) {
                                    case 0: {
                                        const e = t.createElement("button");
                                        e.type = "button",
                                            e.textContent = "Confirm", e.onclick = () => {
                                                m(53, [U, n.id]).then((() => {
                                                    r.innerHTML = "Confirmed"
                                                })).catch((e => {
                                                    o("Failed to confirm payment. Message: " + e)
                                                }))
                                            }, r.appendChild(e)
                                    } {
                                        const e = t.createElement("button");
                                        e.type = "button", e.textContent = "Reject", e.onclick = () => {
                                            m(52, [U, n.id, !0]).then((() => {
                                                r.innerHTML = "Rejected"
                                            })).catch((e => {
                                                o("Failed to reject payment. Message: " + e)
                                            }))
                                        }, r.appendChild(e)
                                    }
                                    break;
                                    case 1:
                                        r.innerHTML = "Aborted";
                                        break;
                                    case 2:
                                        r.innerHTML = "Confirmed";
                                        break;
                                    default:
                                        r.innerHTML = "Not Allowed"
                                }
                                e.appendChild(r)
                            }
                            r.appendChild(e)
                        }
                        n.appendChild(r)
                    }
                    sr.innerHTML = "<div>* including additional delivery fee</div>", sr.prepend(n)
                })).catch((e => {
                    o("Failed to fetch order list. Message: " + e)
                }))
            }
        } {
            const lr = n("payu");
            lr.onclick = () => {
                const e = te.value.trim();
                e.length > 1e3 ? o("Payment description must have more than 1000 characters in length.") : (lr.disabled = !0, m(54, [U, e, ee.value]).then((() => {
                    lr.disabled = !1
                })).catch((e => {
                    o("Failed to update payment description. Message: " + e)
                })))
            }
        } {
            const dr = n("picker"),
                ur = n("global"),
                hr = n("friends"),
                pr = n("chatgpt"),
                fr = n("msglist"),
                mr = n("history"),
                gr = n("channels"),
                br = n("ufile"),
                yr = n("messages"),
                vr = yr.children,
                wr = n("channel-name"),
                kr = n("sendmsg"),
                Er = n("chat-btn"),
                Cr = n("community-page"); {
                const xr = n("chat"),
                    Ar = n("sidemenu"),
                    Tr = n("toggle");
                Tr.onclick = () => {
                    "Close" === Tr.title ? (Tr.title = "Menu", xr.style.width = "100%", Ar.style.display = "none") : (Tr.title = "Close", xr.removeAttribute("style"), Ar.removeAttribute("style"))
                }, D && (Tr.title = "Menu",
                    xr.style.width = "100%", Ar.style.display = "none")
            } {
                const Sr = gr.children,
                    Lr = fr.children;
                let Ir, jr = !1;

                function _r({
                    id: e,
                    msg: n,
                    uid: r,
                    vip: i,
                    user: a,
                    icon: s,
                    files: c
                }) {
                    const l = t.createElement("div");
                    l.setAttribute("id", e);
                    const d = t.createElement("div");
                    switch (d.className = "user", d.textContent = a, i) {
                        case 3:
                            d.setAttribute("vip", "gold");
                            break;
                        case 4:
                            d.setAttribute("vip", "diamond")
                    } {
                        const e = t.createElement("img");
                        if (e.alt = "Avatar", e.width = 32, e.height = 32, e.loading = "lazy", e.decoding = "async", e.draggable = !1,
                            "string" != typeof s) {
                            const t = URL.createObjectURL(new Blob([s], {
                                type: "image/jpeg",
                                endings: "native"
                            }));
                            e.addEventListener("load", (() => URL.revokeObjectURL(t)), {
                                once: !0,
                                passive: !0
                            }), e.src = t
                        } else e.src = s;
                        null != r && (e.style.cursor = d.style.cursor = "pointer", e.onclick = d.onclick = () => {
                            Q(r).catch((e => {
                                o("Failed to open user profile. Message: " + e)
                            }))
                        }), l.appendChild(e)
                    } {
                        const e = t.createElement("div");
                        if (e.appendChild(d), n.length > 0) {
                            const r = t.createElement("span");
                            r.textContent = n, e.appendChild(r)
                        }
                        for (const {
                                name: n,
                                type: r,
                                url: o
                            }
                            of c) {
                            {
                                const r = t.createElement("a");
                                r.rel = "noopener nofollow", r.href = o, r.target = "_blank", r.download = "", r.textContent = n || "file", e.appendChild(r)
                            }
                            switch (r.split("/", 2)[0]) {
                                case "image": {
                                    const n = t.createElement("img");
                                    n.src = o, n.alt = "Attachment", n.width = 500, n.height = 500, n.loading = "lazy", n.decoding = "async", n.draggable = !1, e.appendChild(n)
                                }
                                break;
                                case "audio": {
                                    const n = t.createElement("audio");
                                    n.src = o, n.muted = !1, n.preload = "metadata", n.controls = !0, e.appendChild(n)
                                }
                                break;
                                case "video": {
                                    const n = t.createElement("video");
                                    n.src = o, n.muted = !0, n.width = 500, n.height = 500, n.autoplay = !0, n.controls = !0, e.appendChild(n)
                                }
                            }
                        }
                        l.appendChild(e)
                    }
                    return l
                }

                function Mr(e, t) {
                    if (Ir === e) {
                        const e = yr.scrollHeight - yr.clientHeight;
                        yr.appendChild(_r(t)), e === yr.scrollTop && yr.scrollTo({
                            behavior: "instant",
                            left: 0,
                            top: yr.scrollHeight
                        })
                    }
                }

                function Or(e, t) {
                    if (Ir === e)
                        for (const e of vr)
                            if (e.getAttribute("id") === t) {
                                e.remove();
                                break
                            }
                }

                function Pr(e, t, n) {
                    if (Ir === e)
                        for (const e of vr)
                            if (e.getAttribute("id") === t) {
                                const r = e.querySelector("div>span");
                                null != r ? r.textContent = n : o("Failed to update message: " + t);
                                break
                            }
                }
                async function Br() {
                    if (0 === Sr.length) {
                        br.disabled = !0, kr.disabled = !0;
                        try {
                            const n = await m(22);
                            for (const r of n)
                                if ("#" === r[0]) {
                                    const e = t.createElement("span");
                                    e.textContent = r.slice(1), gr.appendChild(e)
                                } else {
                                    const [n, i, a] = r.split(":", 3), s = t.createElement("div");
                                    s.textContent = n, s.onclick = async () => {
                                        var t;
                                        if (!jr) {
                                            jr = !0;
                                            try {
                                                const n = await m(7, [Ir = i]);
                                                e = null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.id, yr.innerHTML = "";
                                                for (const e of n) yr.prepend(_r(e));
                                                yr.scrollTo({
                                                    behavior: "instant",
                                                    left: 0,
                                                    top: yr.scrollHeight
                                                })
                                            } catch (e) {
                                                return void o("Failed to initialize channel. Message: " + e)
                                            }
                                            for (const e of Sr) e.removeAttribute("data-current");
                                            s.setAttribute("data-current", ""), wr.textContent = n, br.style.display = "f" === a ? "block" : "none", jr = !1
                                        }
                                    }, gr.appendChild(s)
                                }
                        } catch (e) {
                            return void o("Failed to load channel list. Message: " + e)
                        }
                    }
                    let e;
                    yr.innerHTML = "",
                        wr.innerHTML = "Global", z.removeAllListeners("msg"), z.removeAllListeners("msgdel"), z.removeAllListeners("msgupd"), z.on("msg", Mr), z.on("msgdel", Or), z.on("msgupd", Pr); {
                        const t = gr.querySelector("div");
                        null != t ? (yr.onscroll = async () => {
                                if (!jr && 0 === yr.scrollTop) {
                                    jr = !0;
                                    try {
                                        const t = await m(7, [Ir, e]);
                                        if (t.length > 0) {
                                            e = t[t.length - 1].id;
                                            const n = yr.scrollHeight;
                                            for (const e of t) yr.prepend(_r(e));
                                            yr.scrollTo({
                                                behavior: "instant",
                                                left: 0,
                                                top: yr.scrollHeight - n
                                            })
                                        }
                                    } catch (e) {
                                        o("Failed to fetch messages. Reason: " + e)
                                    }
                                    jr = !1
                                }
                            }, kr.onkeydown = e => {
                                if ("Enter" === e.key) {
                                    if (e.preventDefault(), e.stopPropagation(), null == U) return void _.click();
                                    const t = kr.value.trim();
                                    if (t.length < 1) return void o("Messages cannot be empty.");
                                    if (t.length > 1e3) return void o("Messages cannot be longer than 1000 characters.");
                                    kr.value = "", kr.disabled = !0, m(8, [U, Ir, t]).then((() => {
                                        kr.disabled = !1
                                    })).catch((e => {
                                        o("Failed to post text message. Message: " + e), kr.disabled = !1
                                    }))
                                }
                            },
                            t.click()) : (gr.innerHTML = "No public channels are available at this moment.", yr.onscroll = null, kr.onkeydown = null)
                    }
                    kr.onfocus = e => {
                        e.preventDefault(), e.stopPropagation(), null == U && _.click()
                    }, hr.removeAttribute("data-current"), pr.removeAttribute("data-current"), fr.removeAttribute("style"), mr.removeAttribute("style"), ur.setAttribute("data-current", ""), gr.style.display = "block", br.disabled = !1, kr.disabled = !1
                }
                async function Nr() {
                    if (null == U) return void _.click();
                    if ("string" != typeof H) return void o("Internal error");
                    const e = (e, i, a, s) => {
                        const c = t.createElement("div");
                        c.setAttribute("data-user", i); {
                            const e = t.createElement("img");
                            e.alt = "Avatar", e.width = 32, e.height = 32, e.loading = "lazy", e.decoding = "async", e.draggable = !1; {
                                const t = URL.createObjectURL(new Blob([s], {
                                    type: "image/jpeg",
                                    endings: "native"
                                }));
                                e.addEventListener("load", (() => URL.revokeObjectURL(t)), {
                                    once: !0,
                                    passive: !0
                                }), e.src = t
                            }
                            c.appendChild(e)
                        } {
                            const e = t.createElement("div");
                            e.textContent = a,
                                c.appendChild(e)
                        }
                        return c.onclick = async () => {
                            if (!jr) {
                                jr = !0;
                                try {
                                    n = (await m(28, [U, Ir = e])).reverse(), yr.innerHTML = "";
                                    for (const e of n.slice(0, r = 20)) yr.prepend(_r(await m(29, [U, e])));
                                    yr.scrollTo({
                                        behavior: "instant",
                                        left: 0,
                                        top: yr.scrollHeight
                                    })
                                } catch (e) {
                                    return void o("Failed to fetch messages. Reason: " + e)
                                }
                                for (const e of Lr) e.removeAttribute("data-current");
                                c.setAttribute("data-current", ""), wr.textContent = a, jr = !1
                            }
                        }, fr.appendChild(c), c
                    };
                    if (0 === Lr.length) {
                        br.disabled = !0, kr.disabled = !0;
                        try {
                            const t = await m(27, U);
                            for (const {
                                    id: n,
                                    type: r,
                                    users: o
                                }
                                of t)
                                if ("d" === r) {
                                    if (1 !== o.length) throw Error("Invalid user list for DM channel.");
                                    const t = o[0],
                                        {
                                            id: r,
                                            avatar: i
                                        } = await m(1, t);
                                    e(n, t, r, i)
                                }
                        } catch (e) {
                            return void o("Failed to load friends list. Message: " + e)
                        }
                    }
                    let n, r = 0;
                    yr.innerHTML = "", wr.innerHTML = "Friends", z.removeAllListeners("msg"), z.removeAllListeners("msgdel"), z.removeAllListeners("msgupd"), z.on("msg", Mr), z.on("msgdel", Or), z.on("msgupd", Pr); {
                        const e = fr.querySelector("div");
                        null != e && e.click()
                    }
                    yr.onscroll = async () => {
                        if (!jr && 0 === yr.scrollTop && null != n && r < n.length) {
                            jr = !0;
                            try {
                                const e = yr.scrollHeight;
                                for (const e of n.slice(r, r += 20)) yr.prepend(_r(await m(29, [U, e])));
                                yr.scrollTo({
                                    behavior: "instant",
                                    left: 0,
                                    top: yr.scrollHeight - e
                                })
                            } catch (e) {
                                o("Failed to fetch messages. Reason: " + e)
                            }
                            jr = !1
                        }
                    }, kr.onkeydown = async t => {
                            if ("Enter" === t.key) {
                                t.preventDefault(), t.stopPropagation();
                                const n = kr.value.trim();
                                if (n.length < 1) return void o("Messages cannot be empty.");
                                if (n.length > 1e3) return void o("Messages cannot be longer than 1000 characters.");
                                if (null != Ir) {
                                    kr.value = "", kr.disabled = !0;
                                    try {
                                        if (Ir.startsWith("tmp$")) {
                                            const t = Ir.slice(4),
                                                {
                                                    id: n,
                                                    avatar: r
                                                } = await m(1, t);
                                            Ir = await m(30, [U, [H, t], "dm_channel"]);
                                            for (const e of Lr) e.removeAttribute("data-current");
                                            e(Ir, t, n, r).setAttribute("data-current", "")
                                        }
                                        await m(8, [U, Ir, n])
                                    } catch (e) {
                                        o("Failed to post text message. Reason: " + e)
                                    }
                                }
                                kr.disabled = !1
                            }
                        }, ur.removeAttribute("data-current"), pr.removeAttribute("data-current"),
                        mr.removeAttribute("style"), gr.removeAttribute("style"), hr.setAttribute("data-current", "1"), fr.style.display = "block", br.style.display = "none", br.disabled = !0, kr.disabled = !1
                }
                br.onclick = () => {
                    const e = t.createElement("input");
                    e.type = "file", e.accept = "*/*", e.multiple = !0, e.onchange = async () => {
                        const t = e.files;
                        if (null != t && t.length > 0) {
                            if (t.length > 10) return void o("Uploading more than 10 files at once is not supported.");
                            br.disabled = !0, kr.disabled = !0;
                            try {
                                const e = [];
                                for (const n of t) {
                                    if (n.size < 1) throw Error("Empty files are not allowed.");
                                    if (n.size > 1e7) throw Error("Files larger than 10MB are not supported.");
                                    e.push({
                                        name: n.name,
                                        attachment: await n.arrayBuffer()
                                    })
                                }
                                await m(12, [U, Ir, e])
                            } catch (e) {
                                o("Failed to upload file. Message: " + e)
                            }
                            br.disabled = !1, kr.disabled = !1
                        }
                    }, e.click()
                }, ur.onclick = e => {
                    e.preventDefault(), e.stopPropagation(), Br()
                }, hr.onclick = e => {
                    e.preventDefault(), e.stopPropagation(), Nr()
                }, n("goto-chat").onclick = Er.onclick = () => {
                    null != $ && $();
                    for (const e of re) e.removeAttribute("data-current");
                    Br().then((() => {
                        O.checked = !1, Cr.setAttribute("data-current", ""), Er.setAttribute("data-current", ""), j.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "instant"
                        })
                    }))
                }, K = async e => {
                    if (null != U) {
                        await Nr(), null != $ && $();
                        for (const e of re) e.removeAttribute("data-current");
                        O.checked = !1, Cr.setAttribute("data-current", ""), Er.setAttribute("data-current", ""), j.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "instant"
                        }); {
                            const t = fr.querySelector('div[data-user="' + e + '"]');
                            if (null != t) return void t.click()
                        }
                        wr.textContent = (await m(1, e)).id, Ir = "tmp$" + e
                    } else _.click()
                }
            } {
                const Dr = mr.children;
                let Rr = null;
                const Fr = JSON.parse(F.get("__chats") || "[]");

                function Ur({
                    role: e,
                    text: n
                }) {
                    const r = t.createElement("div"); {
                        const n = t.createElement("img");
                        n.width = 32, n.height = 32, n.loading = "lazy", n.decoding = "async", n.draggable = !1, "u" === e ? (n.src = "res/user.svg", n.alt = "User") : (n.src = "res/bot.svg", n.alt = "Assistant"), r.appendChild(n)
                    } {
                        const e = t.createElement("div");
                        e.textContent = n,
                            r.appendChild(e)
                    }
                    return yr.appendChild(r), r
                }

                function Hr(e) {
                    const n = e.title;
                    if ("string" != typeof n) throw Error("Invalid chat object");
                    const r = t.createElement("div");
                    r.onclick = () => {
                        for (const e of Dr) e.removeAttribute("data-current");
                        r.setAttribute("data-current", "1"), yr.innerHTML = "", wr.textContent = n;
                        for (const t of Rr = e.msgs) Ur(t);
                        yr.scrollTo({
                            behavior: "instant",
                            left: 0,
                            top: yr.scrollHeight
                        })
                    }; {
                        const e = t.createElement("div");
                        e.textContent = n, r.appendChild(e)
                    } {
                        const n = t.createElement("button");
                        n.type = "button", n.title = "Delete", n.onclick = t => {
                            t.preventDefault(), t.stopPropagation();
                            const n = Fr.indexOf(e, 0);
                            n >= 0 && (Rr = null, r.remove(), Fr.splice(n, 1), yr.innerHTML = "", F.set("__chats", JSON.stringify(Fr, void 0, 0)))
                        }, r.appendChild(n)
                    }
                    mr.appendChild(r)
                }

                function zr() {
                    kr.disabled = !1, z.removeAllListeners("gptres"), z.removeAllListeners("gptend"), z.removeAllListeners("gpterr")
                }
                n("newchat").onclick = () => {
                        for (const e of Dr) e.removeAttribute("data-current");
                        Rr = null, yr.innerHTML = "", wr.innerHTML = "New chat"
                    },
                    pr.onclick = () => {
                        for (const e of Dr) e.removeAttribute("data-current");
                        if (Rr = null, yr.innerHTML = "", wr.innerHTML = "New chat", z.removeAllListeners("msg"), z.removeAllListeners("msgdel"), z.removeAllListeners("msgupd"), Dr.length < 2)
                            for (const e of Fr) Hr(e);
                        yr.onscroll = null, kr.onfocus = null, kr.onkeydown = e => {
                            if ("Enter" === e.key) {
                                e.preventDefault(), e.stopPropagation();
                                const t = kr.value.trim();
                                if (t.length < 1) return void o("Messages cannot be empty.");
                                if (t.length > 8e3) return void o("Messages cannot be longer than 8000 characters.");
                                if (kr.value = "", kr.disabled = !0, null == Rr) {
                                    const e = {
                                        title: t.slice(0, 100),
                                        msgs: Rr = []
                                    };
                                    Hr(e), Fr.push(e)
                                }
                                const n = {
                                    role: "u",
                                    text: t
                                };
                                Ur(n), Rr.push(n);
                                const r = {
                                        role: "a",
                                        text: "Processing..."
                                    },
                                    i = Ur(r),
                                    a = i.lastElementChild;
                                z.on("gptres", (e => {
                                        a.textContent = r.text = e, a.scrollIntoView({
                                            block: "end",
                                            inline: "end",
                                            behavior: "instant"
                                        })
                                    })), z.on("gptend", (() => {
                                        zr(), Rr.push(r), F.set("__chats", JSON.stringify(Fr, void 0, 0))
                                    })),
                                    z.on("gpterr", (e => {
                                        zr(), Rr.pop(), i.remove(), o("Failed to process the request. Message: " + e)
                                    })), z.emit("gptreq", Rr)
                            }
                        }, ur.removeAttribute("data-current"), hr.removeAttribute("data-current"), fr.removeAttribute("style"), gr.removeAttribute("style"), pr.setAttribute("data-current", "1"), mr.style.display = "block", br.style.display = "none", br.disabled = !0, kr.disabled = !1
                    }
            }
            n("emoji").onclick = () => {
                if ("block" !== dr.style.display) {
                    if (null == dr.firstElementChild) {
                        const e = new fa({
                            locale: "POSIX",
                            emojiVersion: 1e3
                        });
                        e.addEventListener("emoji-click", (e => {
                            e.preventDefault(), e.stopPropagation();
                            const t = e.detail.unicode;
                            null != t && kr.setRangeText(t, kr.selectionStart || 0, kr.selectionEnd || 0, "end")
                        })), dr.appendChild(e)
                    }
                    dr.style.display = "block"
                } else dr.style.display = "none"
            }, n("discord").onclick = () => {
                p("https://discord.gg/djdH3kVd4v")
            }
        }
        const ee = n("paycc"),
            te = n("paydesc"),
            ne = n("chat-profile"),
            re = t.querySelectorAll("#nav-bar>button, #content>div"); {
            const Vr = n("home-btn"),
                Wr = n("game-btn"),
                qr = n("unbl-btn"),
                Gr = n("apps-btn"),
                Jr = n("settings"),
                Kr = n("home-page"),
                Yr = n("games-page"),
                Xr = n("store-page"),
                Qr = n("services-page"),
                Zr = n("site-blocked-page"),
                $r = n("uploadgames-page"),
                eo = n("accountinfo-page"),
                to = n("profile-page"),
                no = n("settings-page");
            n("logo").onclick = Vr.onclick = () => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                O.checked = !1, Kr.setAttribute("data-current", ""), Vr.setAttribute("data-current", ""), j.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                })
            }, n("goto-games").onclick = Wr.onclick = () => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                q || (t.title = "Games - nw.wafflynutria.com"), $ = h, v.replaceState(void 0, "", ""), P.setAttribute("content", "Play 3500+ HTML5, Flash DOS games online for free! No installation required, works on all devices."), B.setAttribute("href", "https://nettleweb.com/games"), O.checked = !1, Yr.setAttribute("data-current", ""), Wr.setAttribute("data-current", ""), j.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                })
            }, n("goto-store").onclick = M.onclick = () => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                q || (t.title = "Store - nw.wafflynutria.com"), $ = h, v.replaceState(void 0, "", ""), P.setAttribute("content", "Shop with us! NettleWeb Store is an online marketplace where buyers and sellers connect. Browse and purchase a wide variety of items from our community of users."), B.setAttribute("href", "https://nettleweb.com/store"), O.checked = !1, Xr.setAttribute("data-current", ""),
                    M.setAttribute("data-current", ""), j.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    })
            }, n("goto-apps").onclick = Gr.onclick = () => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                q || (t.title = "Apps - nw.wafflynutria.com"), $ = h, v.replaceState(void 0, "", ""), P.setAttribute("content", ""), B.setAttribute("href", "https://nettleweb.com/apps"), O.checked = !1, Qr.setAttribute("data-current", ""), Gr.setAttribute("data-current", ""), j.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                })
            }, qr.onclick = () => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                O.checked = !1, Zr.setAttribute("data-current", ""), qr.setAttribute("data-current", ""), j.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                })
            }, n("ug").onclick = () => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                O.checked = !1, $r.setAttribute("data-current", ""), j.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                })
            }, n("chat-login").onclick = ne.onclick = _.onclick = () => {
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                O.checked = !1,
                    eo.setAttribute("data-current", "1"), _.setAttribute("data-current", "1"), j.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    })
            }, Jr.onclick = () => {
                const e = no.hasAttribute("data-current");
                null != $ && $();
                for (const e of re) e.removeAttribute("data-current");
                e ? (Vr.setAttribute("data-current", "1"), Kr.setAttribute("data-current", "1")) : no.setAttribute("data-current", "1"), O.checked = !1, j.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                })
            }; {
                const ro = n("af"),
                    oo = n("dm"),
                    io = n("pf-games"),
                    ao = n("pf-items"),
                    so = n("avatar"),
                    co = n("userid");
                Q = async e => {
                    const n = (e = await m(1, e)).uid;
                    if ("string" != typeof n || n.length < 4) throw Error("Failed to parser server response.");
                    null != $ && $();
                    for (const e of re) e.removeAttribute("data-current");
                    j.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant"
                    }), O.checked = !1, to.setAttribute("data-current", "1"), $ = h, io.innerHTML = "", ao.innerHTML = "", io.removeAttribute("style"), ao.removeAttribute("style"); {
                        const t = "/u/" + n;
                        v.replaceState(void 0, "", t), P.setAttribute("content", "@" + (co.textContent = e.id) + "'s profile at NettleWeb; Join NettleWeb today to play and share online games within our community!"), B.setAttribute("href", "https://nettleweb.com" + t)
                    }
                    switch (e.vip) {
                        case 3:
                            co.setAttribute("vip", "gold");
                            break;
                        case 4:
                            co.setAttribute("vip", "diamond");
                            break;
                        default:
                            co.removeAttribute("vip")
                    }
                    ro.onclick = () => {
                        o("Function not yet implemented.")
                    }, oo.onclick = () => {
                        o("Function not yet implemented.")
                    };
                    for (const e of G)
                        if (e.user === n) {
                            const {
                                name: n,
                                prev: r,
                                date: i
                            } = e, a = t.createElement("a");
                            a.href = i > 0 ? "/" + i.toString(36) : "#", a.title = "Play " + n, a.target = "_self", a.className = "game", a.onclick = t => {
                                t.ctrlKey || (t.preventDefault(), t.stopPropagation(), X(e).catch((e => {
                                    o("Failed to launch game. Message: " + e)
                                })))
                            }, a.style.backgroundImage = null != r ? 'url("' + r + '"), url("/res/preview.svg")' : 'url("/d/' + encodeURIComponent(n) + '.jpg"), url("/res/preview.svg")'; {
                                const e = t.createElement("div");
                                e.textContent = n,
                                    a.appendChild(e)
                            }
                            switch (e.type) {
                                case "html5": {
                                    const e = t.createElement("span");
                                    e.textContent = "HTML5", e.style.background = "#c04000", a.appendChild(e)
                                }
                                break;
                                case "flash": {
                                    const e = t.createElement("span");
                                    e.textContent = "Flash", e.style.background = "#008000", a.appendChild(e)
                                }
                                break;
                                case "dos": {
                                    const e = t.createElement("span");
                                    e.textContent = "Dos", e.style.background = "#0000ff", a.appendChild(e)
                                }
                                break;
                                default:
                                    a.style.backgroundImage = 'url("/res/preview.svg")'
                            }
                            io.appendChild(a)
                        }
                    null == io.firstElementChild && (io.style.overflow = "unset", io.innerHTML = "This user has not uploaded any games yet.");
                    for (const e of Z)
                        if (e.user === n) {
                            const n = t.createElement("div");
                            n.className = "item", n.onclick = () => {
                                Y(e).catch((e => {
                                    o("Failed to open the item. Message: " + e)
                                }))
                            }, n.style.backgroundImage = 'url("' + e.prev[0] + '"), url("/res/preview.svg")'; {
                                const r = t.createElement("div");
                                r.textContent = e.name, n.appendChild(r)
                            } {
                                const r = t.createElement("span");
                                r.textContent = "$" + e.price.toFixed(2), n.appendChild(r)
                            }
                            ao.appendChild(n)
                        } null == ao.firstElementChild && (ao.style.overflow = "unset", ao.innerHTML = "This user does not have a store yet."); {
                        const t = URL.createObjectURL(new Blob([e.avatar], {
                            type: "image/jpeg",
                            endings: "native"
                        }));
                        so.src = t, await so.decode(), URL.revokeObjectURL(t)
                    }
                }
            }("/" === w || w.indexOf(".", 0) >= 0 || await (async () => {
                switch (w) {
                    case "/g":
                    case "/g/":
                    case "/game":
                    case "/game/":
                    case "/games":
                    case "/games/":
                        return Wr.click(), !1;
                    case "/s":
                    case "/s/":
                    case "/shop":
                    case "/shop/":
                    case "/store":
                    case "/store/":
                        return M.click(), !1;
                    case "/a":
                    case "/a/":
                    case "/apps":
                    case "/apps/":
                        return Gr.click(), !1;
                    default:
                        if (w.startsWith("/u/", 0)) {
                            if (w.length < 53) try {
                                return await Q(w.slice(3)), !1
                            } catch (e) {
                                o("Failed to open user profile. Message: " + e)
                            }
                            return !0
                        }
                        if (w.length > 6 && w.length < 13) {
                            const e = parseInt(w.slice(1), 36);
                            if (Number.isSafeInteger(e) && e > 0)
                                for (const t of G)
                                    if (t.date === e) return await X(t), !1
                        }
                        return o("Error: Page does not exist: " + w), !0
                }
            })()) && (v.replaceState(void 0, "", "/"),
                B.setAttribute("href", "https://nettleweb.com/")), n("loading").remove(), j.style.display = "block"
        } {
            const lo = t.createElement.bind(t);
            Object.defineProperty(t, "createElement", {
                value: (e, t) => {
                    const n = lo(e, t);
                    return "iframe" === n.tagName.toLowerCase() && n.setAttribute("credentialless", "true"), n
                },
                writable: !1,
                enumerable: !1,
                configurable: !1
            })
        } {
            const uo = t.createElementNS.bind(t);
            Object.defineProperty(t, "createElementNS", {
                value: (e, t, n) => {
                    const r = uo(e, t, n);
                    return "iframe" === r.tagName.toLowerCase() && r.setAttribute("credentialless", "true"), r
                },
                writable: !1,
                enumerable: !1,
                configurable: !1
            })
        } {
            const ho = await c("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7505521340110301");
            if (null != ho && ho.length > 0) try {
                Function("arguments", "globalThis", "window", "frames", "self", "document", ho).call(e, void 0, e, e, e, e, t)
            } catch (fo) {} else o("You are using an ad blocker. Please disable it to support this website's development.");
            const po = window.adsbygoogle || (window.adsbygoogle = []);
            for (const mo of t.querySelectorAll("ins.adsbygoogle")) {
                mo.setAttribute("data-ad-client", "ca-pub-7505521340110301"), mo.setAttribute("data-ad-format", "auto"), mo.setAttribute("data-full-width-responsive", "true");
                try {
                    po.push(1)
                } catch (go) {}
            }
        } {
            const bo = async () => {
                await J, ee.innerHTML = Us.cc, _.innerHTML = "My Account", n("ac-prof").style.display = "block", n("chat-login").remove(), n("login-dialog").remove();
                const e = n("ac-name"),
                    r = n("ac-email"),
                    i = n("ac-un"),
                    a = n("ac-edit"),
                    c = n("ac-link"),
                    d = n("ac-name-edit"),
                    u = n("ac-email-edit"),
                    h = n("cp"),
                    p = n("rs"),
                    f = n("tf");
                "1" === F.get("__?2fa") && (f.setAttribute("data-enabled", ""), f.textContent = "Disable Two-Factor");
                const g = n("ch-avatar"),
                    b = g.firstElementChild,
                    v = t.createElement("img");
                v.alt = "Avatar", v.width = 40, v.height = 40, v.loading = "eager", v.decoding = "sync", v.draggable = !1, ne.appendChild(v);
                const w = t.createElement("div");
                w.className = "user", ne.appendChild(w),
                    ne.style.display = "block";
                const k = await m(2, U),
                    E = k.id,
                    C = k.uid;
                if ("string" != typeof E || E.length < 4 || "string" != typeof C || C.length < 2) o("Error: Server response parse error.");
                else {
                    switch (e.textContent = k.name || "Not set", r.textContent = k.email || "Not set", i.textContent = E, w.textContent = E, n("ac-uid").textContent = C, ee.value = k.paycc || "US", te.value = k.paydesc || "", k.vip) {
                        case 3:
                            n("ac-membership").textContent = "Gold \u{1f451}", i.setAttribute("vip", "gold"), w.setAttribute("vip", "gold");
                            break;
                        case 4:
                            n("ac-membership").textContent = "Diamond \u{1f48e}", i.setAttribute("vip", "diamond"), w.setAttribute("vip", "diamond");
                            break;
                        default:
                            n("ac-membership").textContent = "None"
                    } {
                        const e = URL.createObjectURL(new Blob([k.avatar], {
                            type: "image/jpeg",
                            endings: "native"
                        }));
                        b.src = v.src = e, await b.decode(), await v.decode(), URL.revokeObjectURL(e)
                    } {
                        const e = n("ac-games");
                        for (const n of G)
                            if (n.user === C) {
                                const {
                                    name: r,
                                    prev: i,
                                    date: a
                                } = n, s = t.createElement("a");
                                s.href = a > 0 ? "/" + a.toString(36) : "#", s.title = "Play " + r,
                                    s.target = "_self", s.className = "game", s.onclick = e => {
                                        e.ctrlKey || (e.preventDefault(), e.stopPropagation(), X(n).catch((e => {
                                            o("Failed to launch game. Message: " + e)
                                        })))
                                    }, s.style.backgroundImage = null != i ? 'url("' + i + '"), url("/res/preview.svg")' : 'url("/d/' + encodeURIComponent(r) + '.jpg"), url("/res/preview.svg")'; {
                                    const e = t.createElement("div");
                                    e.textContent = r, s.appendChild(e)
                                }
                                switch (n.type) {
                                    case "html5": {
                                        const e = t.createElement("span");
                                        e.textContent = "HTML5", e.style.background = "#c04000", s.appendChild(e)
                                    }
                                    break;
                                    case "flash": {
                                        const e = t.createElement("span");
                                        e.textContent = "Flash", e.style.background = "#008000", s.appendChild(e)
                                    }
                                    break;
                                    case "dos": {
                                        const e = t.createElement("span");
                                        e.textContent = "Dos", e.style.background = "#0000ff", s.appendChild(e)
                                    }
                                    break;
                                    default:
                                        s.style.backgroundImage = 'url("/res/preview.svg")'
                                }
                                e.appendChild(s)
                            } null == e.firstElementChild && (e.style.overflow = "unset", e.innerHTML = "You have not uploaded any games yet.")
                    } {
                        const e = n("ac-orders"),
                            r = await m(50, U);
                        if (Array.isArray(r) && r.length > 0) {
                            const n = t.createElement("table");
                            n.innerHTML = '<thead><tr><th scope="col">ID</th><th scope="col">Date</th><th scope="col">Items</th><th scope="col">Price*</th><th scope="col">State</th><th scope="col">Contact</th></tr></thead>'; {
                                const e = t.createElement("tbody");
                                for (const n of r) {
                                    const r = t.createElement("tr"); {
                                        const e = t.createElement("td");
                                        e.textContent = n.id, r.appendChild(e)
                                    } {
                                        const e = t.createElement("td");
                                        e.textContent = s(n.date), r.appendChild(e)
                                    } {
                                        const e = t.createElement("td");
                                        for (const r of n.pros) {
                                            const n = t.createElement("div");
                                            for (const e of Z)
                                                if (e.date.toString(36) === r) {
                                                    n.textContent = e.name;
                                                    break
                                                } e.appendChild(n)
                                        }
                                        r.appendChild(e)
                                    } {
                                        const e = t.createElement("td");
                                        e.textContent = "$" + n.price.toFixed(2), r.appendChild(e)
                                    } {
                                        const e = t.createElement("td");
                                        switch (n.state) {
                                            case 0:
                                                e.textContent = "Pending Payment"; {
                                                    const r = t.createElement("button");
                                                    r.type = "button", r.textContent = "Cancel", r.onclick = () => {
                                                        m(52, [U, n.id, !1]).then((() => {
                                                            e.innerHTML = "Aborted"
                                                        })).catch((e => {
                                                            o("Failed to cancel order. Message: " + e)
                                                        }))
                                                    }, e.appendChild(r)
                                                }
                                                break;
                                            case 1:
                                                e.textContent = "Aborted";
                                                break;
                                            case 2:
                                                e.textContent = "Delivered";
                                                break;
                                            default:
                                                e.textContent = "Unknown"
                                        }
                                        r.appendChild(e)
                                    } {
                                        const e = t.createElement("td");
                                        e.textContent = n.sellerEmail, r.appendChild(e)
                                    }
                                    e.appendChild(r)
                                }
                                n.appendChild(e)
                            }
                            e.innerHTML = "<div>* including additional delivery fee</div>", e.prepend(n)
                        } else e.style.overflow = "hidden", e.innerHTML = "You have not purchased any items from the store."
                    } {
                        const e = n("s-products");
                        for (const n of Z)
                            if (n.user === C) {
                                const r = t.createElement("div");
                                r.className = "item", r.onclick = () => {
                                    Y(n).catch((e => {
                                        o("Failed to open the item. Message: " + e)
                                    }))
                                }, r.style.backgroundImage = 'url("' + n.prev[0] + '"), url("/res/preview.svg")'; {
                                    const e = t.createElement("div");
                                    e.textContent = n.name, r.appendChild(e)
                                } {
                                    const e = t.createElement("span");
                                    e.textContent = "$" + n.price.toFixed(2), r.appendChild(e)
                                }
                                e.appendChild(r)
                            } null == e.firstElementChild && (e.style.overflow = "hidden",
                            e.innerHTML = "You have not published any products yet.")
                    }
                    g.onclick = () => {
                        const e = t.createElement("input");
                        e.type = "file", e.accept = "image/*", e.onchange = async () => {
                            var t;
                            const n = null === (t = e.files) || void 0 === t ? void 0 : t.item(0);
                            if (null != n) {
                                const e = await l(n, 512, 512);
                                if (null == e) return void o("Error: Failed to resize image.");
                                try {
                                    await m(4, [U, await e.arrayBuffer()])
                                } catch (e) {
                                    return void o("Failed to upload the image file. Message: " + e)
                                }
                                const t = URL.createObjectURL(e);
                                b.src = v.src = t, await b.decode(),
                                    await v.decode(), URL.revokeObjectURL(t)
                            }
                        }, e.click()
                    }, a.onclick = () => {
                        const e = t.createElement("div"),
                            n = t.createElement("input");
                        n.type = "text", n.value = i.innerHTML, n.minLength = 4, n.maxLength = 20, n.spellcheck = !1, n.placeholder = "Username", n.autocomplete = "off", e.appendChild(n);
                        const r = t.createElement("button");
                        r.type = "button", r.title = "Save", r.className = "tick", e.appendChild(r);
                        const s = t.createElement("button");
                        s.type = "button", s.title = "Cancel", s.className = "cross", e.appendChild(s), n.onblur = () => {
                                const e = n.value.trim().toLowerCase();
                                e.length > 0 && (n.value = e)
                            }, r.onclick = () => {
                                const t = n.value.trim().toLowerCase();
                                t.length < 4 || t.length > 20 ? o("Username must be between 4 and 20 characters long.") : /^[\-a-z0-9]+$/.test(t) ? m(3, [U, t]).then((() => {
                                    e.replaceWith(i), i.textContent = t, w.textContent = t, a.removeAttribute("style")
                                })).catch((e => {
                                    o("Failed to change username. Message: " + e)
                                })) : o("Username must contain only hyphens, 0-9, lowercase a-z")
                            }, s.onclick = () => {
                                e.replaceWith(i), a.removeAttribute("style")
                            },
                            a.style.display = "none", i.replaceWith(e), n.select()
                    }, c.onclick = () => {
                        const e = t.createElement("span"),
                            n = "https://nettleweb.com/u/" + k.uid;
                        e.textContent = n, c.replaceWith(e), navigator.clipboard.writeText(n)
                    }, d.onclick = () => {
                        const n = t.createElement("div"),
                            r = t.createElement("input");
                        r.type = "text", r.value = e.innerHTML, r.minLength = 2, r.maxLength = 30, r.spellcheck = !1, r.placeholder = "Name", r.autocomplete = "off", n.appendChild(r);
                        const i = t.createElement("button");
                        i.type = "button", i.title = "Save", i.className = "tick",
                            n.appendChild(i);
                        const a = t.createElement("button");
                        a.type = "button", a.title = "Cancel", a.className = "cross", n.appendChild(a), r.onblur = () => {
                            const e = r.value.trim();
                            e.length > 0 && (r.value = e)
                        }, i.onclick = () => {
                            const t = r.value.trim();
                            t.length < 2 || t.length > 30 ? o("Name must be between 2 and 30 characters long.") : m(20, [U, t]).then((() => {
                                n.replaceWith(e), e.textContent = t, d.removeAttribute("style")
                            })).catch((e => {
                                o("Failed to update your name. Message: " + e)
                            }))
                        }, a.onclick = () => {
                            n.replaceWith(e),
                                d.removeAttribute("style")
                        }, d.style.display = "none", e.replaceWith(n), r.select()
                    }, u.onclick = () => {
                        const e = t.createElement("div"),
                            n = t.createElement("input");
                        n.type = "email", n.value = r.innerHTML, n.minLength = 6, n.maxLength = 320, n.spellcheck = !1, n.placeholder = "Email", n.autocomplete = "off", e.appendChild(n);
                        const i = t.createElement("button");
                        i.type = "button", i.title = "Save", i.className = "tick", e.appendChild(i);
                        const a = t.createElement("button");
                        a.type = "button", a.title = "Cancel", a.className = "cross", e.appendChild(a),
                            n.onblur = () => {
                                const e = n.value.trim().toLowerCase();
                                e.length > 0 && (n.value = e)
                            }, i.onclick = () => {
                                const a = n.value.trim().toLowerCase();
                                a.length < 6 || a.length > 320 || a.indexOf("@", 1) < 0 ? o("Please provide a valid email address.") : m(19, [U, a]).then((() => {
                                    {
                                        const n = t.createElement("div");
                                        n.textContent = "Please check your inbox and fill in the 6-digit verification code below to verify your email address.", e.prepend(n)
                                    }
                                    n.type = "text", n.value = "", n.minLength = 6, n.maxLength = 6, n.placeholder = "6-digit verification code",
                                        n.onblur = () => {
                                            const e = n.value.trim();
                                            e.length > 0 && (n.value = e)
                                        }, i.onclick = () => {
                                            const t = n.value.trim();
                                            6 === t.length && /^\d+$/.test(t) ? m(18, [U, t]).then((() => {
                                                e.replaceWith(r), r.textContent = a, u.removeAttribute("style")
                                            })).catch((e => {
                                                o("Failed to verify your email. Message: " + e)
                                            })) : o("The code provided must have exactly 6 digits.")
                                        }
                                })).catch((e => {
                                    o("Failed to update your email address. Message: " + e)
                                }))
                            }, a.onclick = () => {
                                e.replaceWith(r), u.removeAttribute("style")
                            }, u.style.display = "none", r.replaceWith(e),
                            n.select()
                    }, h.onclick = () => {
                        const e = t.createElement("div"); {
                            const n = t.createElement("div");
                            n.setAttribute("style", "position:relative;display:block;width:fit-content;height:fit-content;margin:10px 0px;padding:5px;line-height:18px;"),
                                n.innerHTML = "Notice: If your account was created with your Google account and does not have a password, set the current password field to 'CHANGEME!'. After changing your password, previously logged-in sessions will still have access to your account. To revoke the access, click the 'logout all sessions' button down below.", e.appendChild(n)
                        }
                        const n = t.createElement("input");
                        n.type = "password", n.minLength = 8, n.maxLength = 30, n.spellcheck = !1, n.placeholder = "Current password", n.autocomplete = "off",
                            e.appendChild(n);
                        const r = t.createElement("input");
                        r.type = "password", r.minLength = 8, r.maxLength = 30, r.spellcheck = !1, r.placeholder = "New password", r.autocomplete = "off", e.appendChild(r);
                        const i = t.createElement("input");
                        i.type = "password", i.minLength = 8, i.maxLength = 30, i.spellcheck = !1, i.placeholder = "Confirm password", i.autocomplete = "off", e.appendChild(i);
                        const a = t.createElement("button");
                        a.type = "button", a.title = "Change", a.className = "tick", e.appendChild(a);
                        const s = t.createElement("button");
                        s.type = "button",
                            s.title = "Cancel", s.className = "cross", e.appendChild(s), a.onclick = () => {
                                const t = n.value;
                                if (t.length < 8 || t.length > 30) return void o("The current password must have 8 to 30 characters.");
                                const a = r.value;
                                a.length < 8 || a.length > 30 ? o("The new password must have 8 to 30 characters.") : t !== a ? a === i.value ? m(9, [U, t, a]).then((() => {
                                    e.replaceWith(h)
                                })).catch((e => {
                                    o("Failed to change password. Message: " + e)
                                })) : o("The confirm password does not match the new password.") : o("The new password must be different from the current password.")
                            }, s.onclick = () => {
                                e.replaceWith(h)
                            }, h.replaceWith(e)
                    }, p.onclick = () => {
                        m(43, U).then((e => {
                            "string" == typeof e && 2048 === e.length ? (F.set("__secrets_", U = e), p.disabled = !0, z.emit("login", U)) : o("Error: Remote returned invalid token.")
                        })).catch((e => {
                            o("Failed to revoke login tokens. Message: " + e)
                        }))
                    }, f.onclick = () => {
                        const e = t.createElement("div");
                        if (f.hasAttribute("data-enabled")) {
                            const n = t.createElement("input");
                            n.type = "text", n.minLength = 6, n.maxLength = 6, n.spellcheck = !1, n.placeholder = "6-digit verification code", n.autocomplete = "off", e.appendChild(n);
                            const r = t.createElement("button");
                            r.type = "button", r.title = "Change", r.className = "tick", e.appendChild(r), r.onclick = () => {
                                const t = n.value.trim();
                                6 === t.length && /^\d+$/.test(t) ? m(46, [U, t]).then((() => {
                                    F.set("__?2fa", "0"), e.replaceWith(f), f.removeAttribute("data-enabled"), f.textContent = "Enable Two-Factor"
                                })).catch((e => {
                                    o("Failed to enable two-factor authentication. Message: " + e)
                                })) : o("The code provided must have exactly 6 digits.")
                            }
                        } else {
                            {
                                const n = t.createElement("div");
                                n.setAttribute("style", "position:relative;display:block;width:fit-content;height:fit-content;margin:15px 0px;line-height:18px;white-space:pre-wrap;"),
                                    n.innerHTML = 'In order to enable two-factor authentication (2FA), please follow the steps below:\n1. Install an <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" target="_blank" rel="noopener">authenticator app</a> if you don\'t have one already.\n2. Scan the QR code below or manually input the secret to save your account onto the authenticator.\n3. Input the 6-digit verification code generated below to verify.\n\nAfter enabling 2FA, you will be required to input the generated 6-digit verification code everytime as you login for enhanced account security.\n\nTo avoid being locked out, save the secret or a screenshot of the QR code across multiple devices, so that it could be restored back into the authenticator in case you lost your data.',
                                    e.appendChild(n)
                            }
                            const n = rs.encode(crypto.getRandomValues(new Uint8Array(new ArrayBuffer(32), 0, 32))); {
                                const r = t.createElement("img");
                                r.src = "data:image/gif;base64," + ss.encode(Dt("otpauth://totp/NettleWeb:" + E + "?secret=" + n + "&issuer=NettleWeb&algorithm=SHA1", "gif", {
                                    ecc: "low",
                                    mask: 1,
                                    scale: 4,
                                    border: 1
                                })), r.alt = "QR Code", r.width = 172, r.height = 172, r.loading = "eager", r.decoding = "sync", r.draggable = !1, e.appendChild(r)
                            } {
                                const r = t.createElement("div");
                                r.setAttribute("style", "position:relative;display:block;width:fit-content;height:fit-content;margin:15px 0px;line-height:18px;"), r.textContent = "Secret: " + n, e.appendChild(r)
                            }
                            const r = t.createElement("input");
                            r.type = "text", r.minLength = 6, r.maxLength = 6, r.spellcheck = !1, r.placeholder = "6-digit verification code", r.autocomplete = "off", e.appendChild(r);
                            const i = t.createElement("button");
                            i.type = "button", i.title = "Change", i.className = "tick", e.appendChild(i), i.onclick = () => {
                                const t = r.value.trim();
                                6 === t.length && /^\d+$/.test(t) ? m(44, [U, n, t]).then((() => {
                                    F.set("__?2fa", "1"), e.replaceWith(f), f.setAttribute("data-enabled", ""), f.textContent = "Disable Two-Factor"
                                })).catch((e => {
                                    o("Failed to enable two-factor authentication. Message: " + e)
                                })) : o("The code provided must have exactly 6 digits.")
                            }
                        }
                        const n = t.createElement("button");
                        n.type = "button", n.title = "Cancel", n.className = "cross", e.appendChild(n), n.onclick = () => {
                            e.replaceWith(f)
                        }, f.replaceWith(e)
                    }, n("so").onclick = () => {
                        F.delete("__secrets_"),
                            setTimeout((() => y.reload()), 200)
                    }, n("da").onclick = () => {
                        o("Error: Operation not permitted.")
                    }, n("account-settings").style.display = "block"
                }
            };
            if (null != U) {
                const So = await new Promise((e => {
                    const t = r => {
                            z.off("lr", t), z.off("le", n), e(null), H = r
                        },
                        n = r => {
                            z.off("lr", t), z.off("le", n), e(r)
                        };
                    z.on("lr", t), z.on("le", n), z.emit("login", U)
                }));
                if (null == So) return void await bo();
                o("Failed to validate login token. Please login again. Message: " + So), U = null
            }
            const yo = n("login-dialog");
            let vo, wo, ko;

            function Eo() {
                yo.style.display = "none", yo.innerHTML = ""; {
                    const e = t.createElement("h3");
                    e.textContent = "Login", yo.appendChild(e)
                }
                const e = t.createElement("input");
                e.type = "text", e.value = wo || "", e.required = !0, e.minLength = 4, e.maxLength = 320, e.spellcheck = !1, e.placeholder = "Username or email", e.autocomplete = "off", yo.appendChild(e);
                const n = t.createElement("input");
                n.type = "password", n.value = ko || "", n.required = !0, n.minLength = 8, n.maxLength = 30, n.spellcheck = !1, n.placeholder = "Password", n.autocomplete = "off", yo.appendChild(n);
                const r = t.createElement("button");
                r.type = "button", r.className = "pri-button", r.textContent = "Login", yo.appendChild(r);
                const i = t.createElement("div");
                i.tabIndex = 0, i.textContent = "Register", yo.appendChild(i);
                const a = t.createElement("div");
                a.tabIndex = 0, a.textContent = "Forgot password", yo.appendChild(a);
                const s = t.createElement("div");
                s.tabIndex = 0, s.textContent = "Sign in with Google", yo.appendChild(s), e.onblur = () => {
                    const t = e.value.trim().toLowerCase();
                    t.length > 0 && (wo = e.value = t)
                }, n.onblur = () => {
                    const e = n.value;
                    e.length > 0 && (ko = e)
                }, r.onclick = () => {
                    const t = wo = e.value.trim().toLowerCase();
                    if (t.indexOf("@", 1) < 0) {
                        if (t.length < 4 || t.length > 20) return void o("Username must be between 4 and 20 characters long.");
                        if (!/^[\-a-z0-9]+$/.test(t)) return void o("Username must contain only hyphens, 0-9, lowercase a-z.")
                    } else if (t.length < 6 || t.length > 320) return void o("Invalid email address. (Usernames should not contain a '@' symbol)");
                    const r = ko = n.value;
                    r.length < 8 || r.length > 30 ? o("Password must be between 8 and 30 characters long.") : m(10, [t, r]).then((e => {
                        "string" == typeof e ? Ao(e) : o("Error: Remote returned invalid token data.")
                    })).catch((e => {
                        o("Failed to retrieve login token. Message: " + e)
                    }))
                }, i.onclick = Co, a.onclick = xo, s.onclick = To, yo.style.display = "block"
            }

            function Co() {
                yo.style.display = "none", yo.innerHTML = ""; {
                    const e = t.createElement("h3");
                    e.textContent = "Register", yo.appendChild(e)
                }
                const e = t.createElement("input");
                e.type = "text", e.value = wo || "",
                    e.required = !0, e.minLength = 4, e.maxLength = 20, e.spellcheck = !1, e.placeholder = "Username", e.autocomplete = "off", yo.appendChild(e);
                const n = t.createElement("input");
                n.type = "email", n.value = vo || "", n.required = !0, n.minLength = 6, n.maxLength = 320, n.spellcheck = !1, n.placeholder = "Email", n.autocomplete = "off", yo.appendChild(n);
                const r = t.createElement("input");
                r.type = "password", r.value = ko || "", r.required = !0, r.minLength = 8, r.maxLength = 30, r.spellcheck = !1, r.placeholder = "Password", r.autocomplete = "off", yo.appendChild(r);
                const i = t.createElement("input");
                i.type = "password", i.value = "", i.required = !0, i.minLength = 8, i.maxLength = 30, i.spellcheck = !1, i.placeholder = "Confirm password", i.autocomplete = "off", yo.appendChild(i);
                const a = t.createElement("button");
                a.type = "button", a.className = "pri-button", a.textContent = "Register", yo.appendChild(a);
                const s = t.createElement("div");
                s.tabIndex = 0, s.textContent = "Login", yo.appendChild(s);
                const c = t.createElement("div");
                c.tabIndex = 0, c.textContent = "Sign in with Google", yo.appendChild(c),
                    e.onblur = () => {
                        const t = e.value.trim().toLowerCase();
                        t.length > 0 && (wo = e.value = t)
                    }, n.onblur = () => {
                        const e = n.value.trim().toLowerCase();
                        e.length > 0 && (vo = n.value = e)
                    }, r.onblur = () => {
                        const e = r.value;
                        e.length > 0 && (ko = e)
                    }, a.onclick = () => {
                        const a = wo = e.value.trim().toLowerCase();
                        if (a.length < 4 || a.length > 20) return void o("The username must be between 4 and 20 characters long.");
                        if (!/^[\-a-z0-9]+$/.test(a)) return void o("The username must contain only hyphens, lowercase a-z and 0-9.");
                        const s = vo = n.value.trim().toLowerCase();
                        if (s.length < 6 || s.length > 320 || s.indexOf("@", 1) < 0) return void o("Please provide a valid email.");
                        const l = ko = r.value;
                        l.length < 8 || l.length > 30 ? o("The password must be between 8 and 30 characters long.") : l === i.value ? m(11, [a, l, s]).then((() => {
                            yo.style.display = "none", yo.innerHTML = ""; {
                                const e = t.createElement("h3");
                                e.textContent = "Verify Email", yo.appendChild(e)
                            } {
                                const e = t.createElement("span");
                                e.textContent = "Please check your inbox and fill in the 6-digit verification code below to verify your email address.", yo.appendChild(e)
                            }
                            const e = t.createElement("input");
                            e.type = "text", e.value = "", e.required = !0, e.minLength = 6, e.maxLength = 6, e.spellcheck = !1, e.placeholder = "6-digit verification code", e.autocomplete = "off", yo.appendChild(e);
                            const n = t.createElement("button");
                            n.type = "button", n.className = "pri-button", n.textContent = "Verify", yo.appendChild(n); {
                                const e = t.createElement("span");
                                e.textContent = "Notice: If you are using a managed email address (ie. school or work) and did not receive a code in your inbox after several attempts, the code is likely to be blocked by your administrator. In this case, using a personal account could help.", yo.appendChild(e)
                            }
                            yo.appendChild(c), e.onblur = () => {
                                const t = e.value.trim();
                                t.length > 0 && (e.value = t)
                            }, n.onclick = () => {
                                const t = e.value.trim();
                                6 === t.length && /^\d+$/.test(t) ? m(17, [a, t]).then((e => {
                                    "string" == typeof e && 2048 === e.length ? (F.set("__secrets_", U = e), z.emit("login", U), bo()) : o("Error: Remote returned invalid token data.")
                                })).catch((e => {
                                    o("Failed to verify your email address. Message: " + e)
                                })) : o("The code provided must have exactly 6 digits.")
                            }, yo.style.display = "block"
                        })).catch((e => {
                            o("Failed to send request. Message: " + e)
                        })) : o("The confirm password does not match.")
                    }, s.onclick = Eo, c.onclick = To, yo.style.display = "block"
            }

            function xo() {
                yo.style.display = "none", yo.innerHTML = ""; {
                    const e = t.createElement("h3");
                    e.textContent = "Reset Password", yo.appendChild(e)
                }
                const e = t.createElement("input");
                e.type = "email", e.value = vo || "", e.required = !0, e.minLength = 6, e.maxLength = 320, e.spellcheck = !1, e.placeholder = "Email", e.autocomplete = "off", yo.appendChild(e);
                const n = t.createElement("button");
                n.type = "button", n.className = "pri-button", n.textContent = "Continue", yo.appendChild(n);
                const r = t.createElement("div");
                r.tabIndex = 0, r.textContent = "Login", yo.appendChild(r);
                const i = t.createElement("div");
                i.tabIndex = 0, i.textContent = "Register", yo.appendChild(i);
                const a = t.createElement("div");
                a.tabIndex = 0, a.textContent = "Sign in with Google", yo.appendChild(a), e.onblur = () => {
                    const t = e.value.trim().toLowerCase();
                    t.length > 0 && (vo = e.value = t)
                }, n.onclick = () => {
                    const n = vo = e.value.trim().toLowerCase();
                    n.length < 6 || n.length > 320 || n.indexOf("@", 1) < 0 ? o("Please provide a valid email.") : m(21, n).then((() => {
                        yo.style.display = "none", yo.innerHTML = ""; {
                            const e = t.createElement("h3");
                            e.textContent = "Reset Password",
                                yo.appendChild(e)
                        } {
                            const e = t.createElement("span");
                            e.textContent = "Please check your inbox and follow the instructions on the email.", yo.appendChild(e)
                        }
                        yo.appendChild(r), yo.appendChild(i), yo.appendChild(a), yo.style.display = "block"
                    })).catch((e => {
                        o("Failed to send request. Message: " + e)
                    }))
                }, r.onclick = Eo, i.onclick = Co, a.onclick = To, yo.style.display = "block"
            }

            function Ao(e) {
                if (2048 === e.length) return F.set("__secrets_", U = e), F.set("__?2fa", "0"), z.emit("login", U), void bo();
                yo.style.display = "none",
                    yo.innerHTML = ""; {
                    const e = t.createElement("h3");
                    e.textContent = "Two-Factor Authentication", yo.appendChild(e)
                } {
                    const e = t.createElement("span");
                    e.textContent = "Please open your authenticator app and fill in the generated 6-digit verification code below.", yo.appendChild(e)
                }
                const n = t.createElement("input");
                n.type = "text", n.value = "", n.minLength = 6, n.maxLength = 6, n.spellcheck = !1, n.placeholder = "6-digit verification code", n.autocomplete = "off", yo.appendChild(n);
                const r = t.createElement("button");
                r.type = "button", r.className = "pri-button", r.textContent = "Verify", yo.appendChild(r), n.onblur = () => {
                        const e = n.value.trim();
                        e.length > 0 && (n.value = e)
                    }, r.onclick = () => {
                        const t = n.value.trim();
                        6 === t.length && /^\d+$/.test(t) ? m(45, [e, t]).then((e => {
                            "string" == typeof e && 2048 === e.length ? (F.set("__secrets_", U = e), F.set("__?2fa", "1"), z.emit("login", U), bo()) : o("Error: Remote returned invalid token data.")
                        })).catch((e => {
                            o("Failed to login with OTP. Message: " + e)
                        })) : o("The code provided must have exactly 6 digits.")
                    },
                    yo.style.display = "block"
            }

            function To() {
                const t = new URL("https://accounts.google.com/o/oauth2/v2/auth"); {
                    const n = t.searchParams;
                    n.set("client_id", "176227430389-qkdboctmfhe9jnvnk2vmarafc5p8amuf.apps.googleusercontent.com"), n.set("redirect_uri", e.origin + "/auth.html"), n.set("response_type", "token"), n.set("state", "12"), n.set("scope", "email profile"), n.set("include_granted_scopes", "true"), n.set("enable_granular_consent", "true")
                }
                y.replace(t)
            } {
                const Lo = F.get("_cre_") || "";
                if (Lo.length > 0) {
                    try {
                        const Io = await m(0, Lo);
                        if ("string" != typeof Io) return void o("Error: Remote returned invalid token data.");
                        _.click(), Ao(Io)
                    } catch (jo) {
                        o("Failed to retrieve login token. Message: " + jo)
                    }
                    F.delete("_cre_")
                } else Eo()
            }
        }
    })(window)
})();