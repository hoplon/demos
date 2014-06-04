// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
cljs.reader.PushbackReader = (function (){var obj10047 = {};return obj10047;
})();
cljs.reader.read_char = (function read_char(reader){if((function (){var and__7255__auto__ = reader;if(and__7255__auto__)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__7255__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__7894__auto__ = (((reader == null))?null:reader);return (function (){var or__7267__auto__ = (cljs.reader.read_char[goog.typeOf(x__7894__auto__)]);if(or__7267__auto__)
{return or__7267__auto__;
} else
{var or__7267__auto____$1 = (cljs.reader.read_char["_"]);if(or__7267__auto____$1)
{return or__7267__auto____$1;
} else
{throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){if((function (){var and__7255__auto__ = reader;if(and__7255__auto__)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__7255__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__7894__auto__ = (((reader == null))?null:reader);return (function (){var or__7267__auto__ = (cljs.reader.unread[goog.typeOf(x__7894__auto__)]);if(or__7267__auto__)
{return or__7267__auto__;
} else
{var or__7267__auto____$1 = (cljs.reader.unread["_"]);if(or__7267__auto____$1)
{return or__7267__auto____$1;
} else
{throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__7834__auto__,writer__7835__auto__,opt__7836__auto__){return cljs.core._write(writer__7835__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buffer.length === 0))
{self__.idx = (self__.idx + 1);
return (self__.s[self__.idx]);
} else
{return self__.buffer.pop();
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;return self__.buffer.push(ch);
});
cljs.reader.__GT_StringPushbackReader = (function __GT_StringPushbackReader(s,buffer,idx){return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});
cljs.reader.push_back_reader = (function push_back_reader(s){return (new cljs.reader.StringPushbackReader(s,[],-1));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){var or__7267__auto__ = goog.string.isBreakingWhitespace(ch);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);cljs.reader.unread(reader,next_ch);
return next_ch;
})())));
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__10048){
var rdr = cljs.core.first(arglist__10048);
var msg = cljs.core.rest(arglist__10048);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__7255__auto__ = !((ch === "#"));if(and__7255__auto__)
{var and__7255__auto____$1 = !((ch === "'"));if(and__7255__auto____$1)
{var and__7255__auto____$2 = !((ch === ":"));if(and__7255__auto____$2)
{return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));
} else
{return and__7255__auto____$2;
}
} else
{return and__7255__auto____$1;
}
} else
{return and__7255__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){var sb = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char(rdr);while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch)))
{cljs.reader.unread(rdr,ch);
return sb.toString();
} else
{{
var G__10049 = (function (){sb.append(ch);
return sb;
})();
var G__10050 = cljs.reader.read_char(rdr);
sb = G__10049;
ch = G__10050;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.reader.read_char(reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[0]) === s)))
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.reader.match_int = (function match_int(s){var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);var zero = (groups[2]);if(!((zero == null)))
{return 0;
} else
{var a = (cljs.core.truth_((groups[3]))?[(groups[3]),10]:(cljs.core.truth_((groups[4]))?[(groups[4]),16]:(cljs.core.truth_((groups[5]))?[(groups[5]),8]:(cljs.core.truth_((groups[6]))?[(groups[7]),parseInt((groups[6]),10)]:((cljs.core.constant$keyword$6)?[null,null]:null)))));var n = (a[0]);var radix = (a[1]);if((n == null))
{return null;
} else
{var parsed = parseInt(n,radix);if(("-" === (groups[1])))
{return (- parsed);
} else
{return parsed;
}
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);var numinator = (groups[1]);var denominator = (groups[2]);return (parseInt(numinator,10) / parseInt(denominator,10));
});
cljs.reader.match_float = (function match_float(s){return parseFloat(s);
});
cljs.reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s)))
{return cljs.reader.match_int(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s)))
{return cljs.reader.match_float(s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if(cljs.core.constant$keyword$6)
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){var code = parseInt(code_str,16);return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.reader.read_char(reader);var mapresult = cljs.reader.escape_char_map(ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else
{if((ch === "u"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else
{if(cljs.reader.numeric_QMARK_(ch))
{return String.fromCharCode(ch);
} else
{if(cljs.core.constant$keyword$6)
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){var ch = cljs.reader.read_char(rdr);while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(ch) : pred.call(null,ch))))
{{
var G__10051 = cljs.reader.read_char(rdr);
ch = G__10051;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}
if((delim === ch))
{return cljs.core.persistent_BANG_(a);
} else
{var temp__4090__auto__ = (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));if(cljs.core.truth_(temp__4090__auto__))
{var macrofn = temp__4090__auto__;var mret = (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(rdr,ch) : macrofn.call(null,rdr,ch));{
var G__10052 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__10052;
continue;
}
} else
{cljs.reader.unread(rdr,ch);
var o = (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,recursive_QMARK_) : cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_));{
var G__10053 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__10053;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.reader.read_char(rdr);var dm = (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.dispatch_macros.call(null,ch));if(cljs.core.truth_(dm))
{return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(rdr,_) : dm.call(null,rdr,_));
} else
{var temp__4090__auto__ = (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(rdr,ch) : cljs.reader.maybe_read_tagged_type.call(null,rdr,ch));if(cljs.core.truth_(temp__4090__auto__))
{var obj = temp__4090__auto__;return obj;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmached delimiter ",ch], 0));
});
cljs.reader.read_list = (function read_list(rdr,_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){var l = cljs.reader.read_delimited_list("}",rdr,true);if(cljs.core.odd_QMARK_(cljs.core.count(l)))
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char(reader);while(true){
if(cljs.core.truth_((function (){var or__7267__auto__ = (ch == null);if(or__7267__auto__)
{return or__7267__auto__;
} else
{var or__7267__auto____$1 = cljs.reader.whitespace_QMARK_(ch);if(or__7267__auto____$1)
{return or__7267__auto____$1;
} else
{return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.reader.macros.call(null,ch));
}
}
})()))
{cljs.reader.unread(reader,ch);
var s = buffer.toString();var or__7267__auto__ = cljs.reader.match_number(s);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else
{{
var G__10054 = (function (){buffer.append(ch);
return buffer;
})();
var G__10055 = cljs.reader.read_char(reader);
buffer = G__10054;
ch = G__10055;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.reader.read_char(reader);while(true){
if((ch == null))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{if(("\\" === ch))
{{
var G__10056 = (function (){buffer.append(cljs.reader.escape_char(buffer,reader));
return buffer;
})();
var G__10057 = cljs.reader.read_char(reader);
buffer = G__10056;
ch = G__10057;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(cljs.core.constant$keyword$7)
{{
var G__10058 = (function (){buffer.append(ch);
return buffer;
})();
var G__10059 = cljs.reader.read_char(reader);
buffer = G__10058;
ch = G__10059;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if(cljs.core.constant$keyword$6)
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){var token = cljs.reader.read_token(reader,initch);if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,0,token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + 1),token.length));
} else
{return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);var token__$1 = (a[0]);var ns = (a[1]);var name = (a[2]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - 2),ns.length) === ":/"))) || (((name[(name.length - 1)]) === ":")) || (!((token__$1.indexOf("::",1) === -1))))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else
{if((!((ns == null))) && ((ns.length > 0)))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring(0,ns.indexOf("/")),name);
} else
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,f], null);
} else
{if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{if(cljs.core.constant$keyword$6)
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true))),sym);
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){var m = cljs.reader.desugar_meta((cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true)));if(cljs.core.map_QMARK_(m))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}
var o = (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true));if((function (){var G__10061 = o;if(G__10061)
{var bit__7917__auto__ = (G__10061.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__7917__auto__) || (G__10061.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__10061.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__10061);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__10061);
}
})())
{return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function read_set(rdr,_){return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){return cljs.core.re_pattern(cljs.reader.read_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(rdr,true,null,true) : cljs.reader.read.call(null,rdr,true,null,true));
return rdr;
});
cljs.reader.macros = (function macros(c){if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.read_comment;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",-1545057749,null));
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if(cljs.core.constant$keyword$6)
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader("Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if(cljs.core.constant$keyword$6)
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.reader.read_char(reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_(ch))
{{
var G__10062 = reader;
var G__10063 = eof_is_error;
var G__10064 = sentinel;
var G__10065 = is_recursive;
reader = G__10062;
eof_is_error = G__10063;
sentinel = G__10064;
is_recursive = G__10065;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_(ch))
{{
var G__10066 = (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(reader,ch) : cljs.reader.read_comment.call(null,reader,ch));
var G__10067 = eof_is_error;
var G__10068 = sentinel;
var G__10069 = is_recursive;
reader = G__10066;
eof_is_error = G__10067;
sentinel = G__10068;
is_recursive = G__10069;
continue;
}
} else
{if(cljs.core.constant$keyword$6)
{var f = cljs.reader.macros(ch);var res = (cljs.core.truth_(f)?(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(reader,ch) : f.call(null,reader,ch)):((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):((cljs.core.constant$keyword$6)?cljs.reader.read_symbol(reader,ch):null)));if((res === reader))
{{
var G__10070 = reader;
var G__10071 = eof_is_error;
var G__10072 = sentinel;
var G__10073 = is_recursive;
reader = G__10070;
eof_is_error = G__10071;
sentinel = G__10072;
is_recursive = G__10073;
continue;
}
} else
{return res;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){var r = cljs.reader.push_back_reader(s);return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function zero_fill_right_and_truncate(s,width){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s)))
{return s;
} else
{if((width < cljs.core.count(s)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,0,width);
} else
{if(cljs.core.constant$keyword$6)
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__10074 = b.append("0");
b = G__10074;
continue;
}
} else
{return b.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod(num,div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.reader.divisible_QMARK_(year,4)) && ((cljs.reader.indivisible_QMARK_(year,100)) || (cljs.reader.divisible_QMARK_(year,400)));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,28,31,30,31,30,31,31,30,31,30,31], null);var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,29,31,30,31,30,31,31,30,31,30,31], null);return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function parse_int(s){var n = parseInt(s,10);if(cljs.core.not(isNaN(n)))
{return n;
} else
{return null;
}
});
cljs.reader.check = (function check(low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)+" Failed:  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(low)+"<="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+"<="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(high))], 0));
}
return n;
});
cljs.reader.parse_and_validate_timestamp = (function parse_and_validate_timestamp(s){var vec__10076 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,0,null);var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,1,null);var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,2,null);var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,3,null);var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,4,null);var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,5,null);var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,6,null);var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,7,null);var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,8,null);var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,9,null);var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10076,10,null);var v = vec__10076;if(cljs.core.not(v))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([("Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))], 0));
} else
{var years__$1 = cljs.reader.parse_int(years);var months__$1 = (function (){var or__7267__auto__ = cljs.reader.parse_int(months);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 1;
}
})();var days__$1 = (function (){var or__7267__auto__ = cljs.reader.parse_int(days);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 1;
}
})();var hours__$1 = (function (){var or__7267__auto__ = cljs.reader.parse_int(hours);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 0;
}
})();var minutes__$1 = (function (){var or__7267__auto__ = cljs.reader.parse_int(minutes);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 0;
}
})();var seconds__$1 = (function (){var or__7267__auto__ = cljs.reader.parse_int(seconds);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 0;
}
})();var fraction__$1 = (function (){var or__7267__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,3));if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 0;
}
})();var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?-1:1);var offset_hours__$1 = (function (){var or__7267__auto__ = cljs.reader.parse_int(offset_hours);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 0;
}
})();var offset_minutes__$1 = (function (){var or__7267__auto__ = cljs.reader.parse_int(offset_minutes);if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 0;
}
})();var offset = (offset_sign__$1 * ((offset_hours__$1 * 60) + offset_minutes__$1));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check(1,months__$1,12,"timestamp month field must be in range 1..12"),cljs.reader.check(1,days__$1,(cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(months__$1,cljs.reader.leap_year_QMARK_(years__$1)) : cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_(years__$1))),"timestamp day field must be in range 1..last day in month"),cljs.reader.check(0,hours__$1,23,"timestamp hour field must be in range 0..23"),cljs.reader.check(0,minutes__$1,59,"timestamp minute field must be in range 0..59"),cljs.reader.check(0,seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,59))?60:59),"timestamp second field must be in range 0..60"),cljs.reader.check(0,fraction__$1,999,"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4090__auto__ = cljs.reader.parse_and_validate_timestamp(ts);if(cljs.core.truth_(temp__4090__auto__))
{var vec__10078 = temp__4090__auto__;var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,0,null);var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,1,null);var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,2,null);var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,3,null);var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,4,null);var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,5,null);var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,6,null);var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10078,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([("Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts))], 0));
}
});
cljs.reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.reader.parse_timestamp(s);
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_(elems))
{return cljs.core.into(cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function read_js(form){if(cljs.core.vector_QMARK_(form))
{var arr = [];var seq__10091_10103 = cljs.core.seq(form);var chunk__10092_10104 = null;var count__10093_10105 = 0;var i__10094_10106 = 0;while(true){
if((i__10094_10106 < count__10093_10105))
{var x_10107 = chunk__10092_10104.cljs$core$IIndexed$_nth$arity$2(null,i__10094_10106);arr.push(x_10107);
{
var G__10108 = seq__10091_10103;
var G__10109 = chunk__10092_10104;
var G__10110 = count__10093_10105;
var G__10111 = (i__10094_10106 + 1);
seq__10091_10103 = G__10108;
chunk__10092_10104 = G__10109;
count__10093_10105 = G__10110;
i__10094_10106 = G__10111;
continue;
}
} else
{var temp__4092__auto___10112 = cljs.core.seq(seq__10091_10103);if(temp__4092__auto___10112)
{var seq__10091_10113__$1 = temp__4092__auto___10112;if(cljs.core.chunked_seq_QMARK_(seq__10091_10113__$1))
{var c__8023__auto___10114 = cljs.core.chunk_first(seq__10091_10113__$1);{
var G__10115 = cljs.core.chunk_rest(seq__10091_10113__$1);
var G__10116 = c__8023__auto___10114;
var G__10117 = cljs.core.count(c__8023__auto___10114);
var G__10118 = 0;
seq__10091_10103 = G__10115;
chunk__10092_10104 = G__10116;
count__10093_10105 = G__10117;
i__10094_10106 = G__10118;
continue;
}
} else
{var x_10119 = cljs.core.first(seq__10091_10113__$1);arr.push(x_10119);
{
var G__10120 = cljs.core.next(seq__10091_10113__$1);
var G__10121 = null;
var G__10122 = 0;
var G__10123 = 0;
seq__10091_10103 = G__10120;
chunk__10092_10104 = G__10121;
count__10093_10105 = G__10122;
i__10094_10106 = G__10123;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{if(cljs.core.map_QMARK_(form))
{var obj = (function (){var obj10096 = {};return obj10096;
})();var seq__10097_10124 = cljs.core.seq(form);var chunk__10098_10125 = null;var count__10099_10126 = 0;var i__10100_10127 = 0;while(true){
if((i__10100_10127 < count__10099_10126))
{var vec__10101_10128 = chunk__10098_10125.cljs$core$IIndexed$_nth$arity$2(null,i__10100_10127);var k_10129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10101_10128,0,null);var v_10130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10101_10128,1,null);(obj[cljs.core.name(k_10129)] = v_10130);
{
var G__10131 = seq__10097_10124;
var G__10132 = chunk__10098_10125;
var G__10133 = count__10099_10126;
var G__10134 = (i__10100_10127 + 1);
seq__10097_10124 = G__10131;
chunk__10098_10125 = G__10132;
count__10099_10126 = G__10133;
i__10100_10127 = G__10134;
continue;
}
} else
{var temp__4092__auto___10135 = cljs.core.seq(seq__10097_10124);if(temp__4092__auto___10135)
{var seq__10097_10136__$1 = temp__4092__auto___10135;if(cljs.core.chunked_seq_QMARK_(seq__10097_10136__$1))
{var c__8023__auto___10137 = cljs.core.chunk_first(seq__10097_10136__$1);{
var G__10138 = cljs.core.chunk_rest(seq__10097_10136__$1);
var G__10139 = c__8023__auto___10137;
var G__10140 = cljs.core.count(c__8023__auto___10137);
var G__10141 = 0;
seq__10097_10124 = G__10138;
chunk__10098_10125 = G__10139;
count__10099_10126 = G__10140;
i__10100_10127 = G__10141;
continue;
}
} else
{var vec__10102_10142 = cljs.core.first(seq__10097_10136__$1);var k_10143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10102_10142,0,null);var v_10144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10102_10142,1,null);(obj[cljs.core.name(k_10143)] = v_10144);
{
var G__10145 = cljs.core.next(seq__10097_10136__$1);
var G__10146 = null;
var G__10147 = 0;
var G__10148 = 0;
seq__10097_10124 = G__10145;
chunk__10098_10125 = G__10146;
count__10099_10126 = G__10147;
i__10100_10127 = G__10148;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([("JS literal expects a vector or map containing only string or unqualified keyword keys")], 0));
} else
{return null;
}
}
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null));
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.reader.read_symbol(rdr,initch);var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)));var dfn = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);if(cljs.core.truth_(pfn))
{return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(cljs.reader.read(rdr,true,null,false)) : pfn.call(null,cljs.reader.read(rdr,true,null,false)));
} else
{if(cljs.core.truth_(dfn))
{return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(tag,cljs.reader.read(rdr,true,null,false)) : dfn.call(null,tag,cljs.reader.read(rdr,true,null,false)));
} else
{if(cljs.core.constant$keyword$6)
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_))], 0))], 0));
} else
{return null;
}
}
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function register_default_tag_parser_BANG_(f){var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return f;
});})(old_parser))
);
return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function deregister_default_tag_parser_BANG_(){var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return null;
});})(old_parser))
);
return old_parser;
});
