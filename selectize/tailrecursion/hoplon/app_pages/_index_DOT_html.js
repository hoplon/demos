// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.reload');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon.reload');
goog.require('selectize');
goog.require('selectize');
tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit = (function hoploninit(){tailrecursion.hoplon.reload.reload_all();
tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes = (function rotten_tomatoes(query,callback){return jQuery.ajax(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$42,"http://api.rottentomatoes.com/api/public/v1.0/movies.json",cljs.core.constant$keyword$43,"GET",cljs.core.constant$keyword$44,"jsonp",cljs.core.constant$keyword$46,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$48,query,cljs.core.constant$keyword$49,10,cljs.core.constant$keyword$50,"jv2szsy84jnsbj8cdtxt866m"], null),cljs.core.constant$keyword$47,(function (){return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}),cljs.core.constant$keyword$45,(function (p1__5373_SHARP_){return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1((p1__5373_SHARP_["movies"])) : callback.call(null,(p1__5373_SHARP_["movies"])));
})], null)));
});
tailrecursion.hoplon.app_pages._index_DOT_html.movie_option = (function movie_option(movie){var map__9623 = movie;var map__9623__$1 = ((cljs.core.seq_QMARK_(map__9623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9623):map__9623);var abridged_cast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9623__$1,"abridged_cast");var synopsis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9623__$1,"synopsis");var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9623__$1,"title");return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4((tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$51,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(movie,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","thumbnail"], null))) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$51,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(movie,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","thumbnail"], null)))),(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"title",(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"name",title) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"name",title))) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"title",(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"name",title) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"name",title)))),(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"description",((cljs.core.empty_QMARK_(synopsis))?"No synopsis available at this time.":synopsis)) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"description",((cljs.core.empty_QMARK_(synopsis))?"No synopsis available at this time.":synopsis))),(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"actors",((cljs.core.seq(abridged_cast))?cljs.core.cons("Starring ",cljs.core.interpose(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.span,((function (map__9623,map__9623__$1,abridged_cast,synopsis,title){
return (function (p1__5374_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5374_SHARP_,"name");
});})(map__9623,map__9623__$1,abridged_cast,synopsis,title))
),abridged_cast))):"Actors unavailable.")) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"actors",((cljs.core.seq(abridged_cast))?cljs.core.cons("Starring ",cljs.core.interpose(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.span,((function (map__9623,map__9623__$1,abridged_cast,synopsis,title){
return (function (p1__5374_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5374_SHARP_,"name");
});})(map__9623,map__9623__$1,abridged_cast,synopsis,title))
),abridged_cast))):"Actors unavailable.")))) : tailrecursion.hoplon.div.call(null,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$51,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(movie,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","thumbnail"], null))) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$51,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(movie,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","thumbnail"], null)))),(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"title",(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"name",title) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"name",title))) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"title",(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"name",title) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"name",title)))),(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"description",((cljs.core.empty_QMARK_(synopsis))?"No synopsis available at this time.":synopsis)) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"description",((cljs.core.empty_QMARK_(synopsis))?"No synopsis available at this time.":synopsis))),(tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"actors",((cljs.core.seq(abridged_cast))?cljs.core.cons("Starring ",cljs.core.interpose(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.span,((function (map__9623,map__9623__$1,abridged_cast,synopsis,title){
return (function (p1__5374_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5374_SHARP_,"name");
});})(map__9623,map__9623__$1,abridged_cast,synopsis,title))
),abridged_cast))):"Actors unavailable.")) : tailrecursion.hoplon.span.call(null,cljs.core.constant$keyword$25,"actors",((cljs.core.seq(abridged_cast))?cljs.core.cons("Starring ",cljs.core.interpose(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.span,((function (map__9623,map__9623__$1,abridged_cast,synopsis,title){
return (function (p1__5374_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5374_SHARP_,"name");
});})(map__9623,map__9623__$1,abridged_cast,synopsis,title))
),abridged_cast))):"Actors unavailable.")))));
});
(tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon Selectize") : tailrecursion.hoplon.title.call(null,"Hoplon Selectize")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize.css")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize_movies.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize_movies.css"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon Selectize") : tailrecursion.hoplon.title.call(null,"Hoplon Selectize")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize.css")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize_movies.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize_movies.css"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$54,"font-family: sans-serif; width: 40%; margin: auto;"], null),(function (){var G__9624 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Rotten Tomatoes Movie Title Search") : tailrecursion.hoplon.h3.call(null,"Rotten Tomatoes Movie Title Search"));return G__9624;
})(),(function (){var G__9625 = (function (){var movies = tailrecursion.javelin.cell(cljs.core.PersistentArrayMap.EMPTY);var movie_id = tailrecursion.javelin.cell(null);var movie = tailrecursion.javelin.lift(((function (movies,movie_id){
return (function (G__9627,G__9628,G__9626){return (G__9626.cljs$core$IFn$_invoke$arity$2 ? G__9626.cljs$core$IFn$_invoke$arity$2(G__9627,G__9628) : G__9626.call(null,G__9627,G__9628));
});})(movies,movie_id))
).call(null,movies,movie_id,cljs.core.get);var poster = tailrecursion.javelin.lift(((function (movies,movie_id,movie){
return (function (G__9629,G__9630){return (G__9629.cljs$core$IFn$_invoke$arity$2 ? G__9629.cljs$core$IFn$_invoke$arity$2(G__9630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","detailed"], null)) : G__9629.call(null,G__9630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","detailed"], null)));
});})(movies,movie_id,movie))
).call(null,cljs.core.get_in,movie);var title = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster){
return (function (G__9632,G__9631){return (G__9631.cljs$core$IFn$_invoke$arity$2 ? G__9631.cljs$core$IFn$_invoke$arity$2(G__9632,"title") : G__9631.call(null,G__9632,"title"));
});})(movies,movie_id,movie,poster))
).call(null,movie,cljs.core.get);var year = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title){
return (function (G__9634,G__9633){return (G__9633.cljs$core$IFn$_invoke$arity$2 ? G__9633.cljs$core$IFn$_invoke$arity$2(G__9634,"year") : G__9633.call(null,G__9634,"year"));
});})(movies,movie_id,movie,poster,title))
).call(null,movie,cljs.core.get);var starring = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year){
return (function (G__9635,G__9637,G__9636){return (G__9635.cljs$core$IFn$_invoke$arity$2 ? G__9635.cljs$core$IFn$_invoke$arity$2(((function (movies,movie_id,movie,poster,title,year){
return (function (p1__5375_SHARP_){return (G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(p1__5375_SHARP_,"name") : G__9636.call(null,p1__5375_SHARP_,"name"));
});})(movies,movie_id,movie,poster,title,year))
,(G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(G__9637,"abridged_cast") : G__9636.call(null,G__9637,"abridged_cast"))) : G__9635.call(null,((function (movies,movie_id,movie,poster,title,year){
return (function (p1__5375_SHARP_){return (G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(p1__5375_SHARP_,"name") : G__9636.call(null,p1__5375_SHARP_,"name"));
});})(movies,movie_id,movie,poster,title,year))
,(G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(G__9637,"abridged_cast") : G__9636.call(null,G__9637,"abridged_cast"))));
});})(movies,movie_id,movie,poster,title,year))
).call(null,cljs.core.map,movie,cljs.core.get);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(selectize.selectize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$40,movie_id,cljs.core.constant$keyword$25,"movies",cljs.core.constant$keyword$55,"id",cljs.core.constant$keyword$56,"title",cljs.core.constant$keyword$57,"title",cljs.core.constant$keyword$58,false,cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (p1__5376_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(movies,cljs.core.assoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5376_SHARP_,"id"),p1__5376_SHARP_);
return tailrecursion.hoplon.app_pages._index_DOT_html.movie_option(p1__5376_SHARP_);
});})(movies,movie_id,movie,poster,title,year,starring))
], null),cljs.core.constant$keyword$60,tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes], 0)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
))))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))))) : tailrecursion.hoplon.div.call(null,selectize.selectize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$40,movie_id,cljs.core.constant$keyword$25,"movies",cljs.core.constant$keyword$55,"id",cljs.core.constant$keyword$56,"title",cljs.core.constant$keyword$57,"title",cljs.core.constant$keyword$58,false,cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (p1__5376_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(movies,cljs.core.assoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5376_SHARP_,"id"),p1__5376_SHARP_);
return tailrecursion.hoplon.app_pages._index_DOT_html.movie_option(p1__5376_SHARP_);
});})(movies,movie_id,movie,poster,title,year,starring))
], null),cljs.core.constant$keyword$60,tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes], 0)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
))))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))))));
})();return G__9625;
})()) : tailrecursion.hoplon.html_body.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$54,"font-family: sans-serif; width: 40%; margin: auto;"], null),(function (){var G__9624 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Rotten Tomatoes Movie Title Search") : tailrecursion.hoplon.h3.call(null,"Rotten Tomatoes Movie Title Search"));return G__9624;
})(),(function (){var G__9625 = (function (){var movies = tailrecursion.javelin.cell(cljs.core.PersistentArrayMap.EMPTY);var movie_id = tailrecursion.javelin.cell(null);var movie = tailrecursion.javelin.lift(((function (movies,movie_id){
return (function (G__9627,G__9628,G__9626){return (G__9626.cljs$core$IFn$_invoke$arity$2 ? G__9626.cljs$core$IFn$_invoke$arity$2(G__9627,G__9628) : G__9626.call(null,G__9627,G__9628));
});})(movies,movie_id))
).call(null,movies,movie_id,cljs.core.get);var poster = tailrecursion.javelin.lift(((function (movies,movie_id,movie){
return (function (G__9629,G__9630){return (G__9629.cljs$core$IFn$_invoke$arity$2 ? G__9629.cljs$core$IFn$_invoke$arity$2(G__9630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","detailed"], null)) : G__9629.call(null,G__9630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","detailed"], null)));
});})(movies,movie_id,movie))
).call(null,cljs.core.get_in,movie);var title = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster){
return (function (G__9632,G__9631){return (G__9631.cljs$core$IFn$_invoke$arity$2 ? G__9631.cljs$core$IFn$_invoke$arity$2(G__9632,"title") : G__9631.call(null,G__9632,"title"));
});})(movies,movie_id,movie,poster))
).call(null,movie,cljs.core.get);var year = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title){
return (function (G__9634,G__9633){return (G__9633.cljs$core$IFn$_invoke$arity$2 ? G__9633.cljs$core$IFn$_invoke$arity$2(G__9634,"year") : G__9633.call(null,G__9634,"year"));
});})(movies,movie_id,movie,poster,title))
).call(null,movie,cljs.core.get);var starring = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year){
return (function (G__9635,G__9637,G__9636){return (G__9635.cljs$core$IFn$_invoke$arity$2 ? G__9635.cljs$core$IFn$_invoke$arity$2(((function (movies,movie_id,movie,poster,title,year){
return (function (p1__5375_SHARP_){return (G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(p1__5375_SHARP_,"name") : G__9636.call(null,p1__5375_SHARP_,"name"));
});})(movies,movie_id,movie,poster,title,year))
,(G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(G__9637,"abridged_cast") : G__9636.call(null,G__9637,"abridged_cast"))) : G__9635.call(null,((function (movies,movie_id,movie,poster,title,year){
return (function (p1__5375_SHARP_){return (G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(p1__5375_SHARP_,"name") : G__9636.call(null,p1__5375_SHARP_,"name"));
});})(movies,movie_id,movie,poster,title,year))
,(G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(G__9637,"abridged_cast") : G__9636.call(null,G__9637,"abridged_cast"))));
});})(movies,movie_id,movie,poster,title,year))
).call(null,cljs.core.map,movie,cljs.core.get);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(selectize.selectize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$40,movie_id,cljs.core.constant$keyword$25,"movies",cljs.core.constant$keyword$55,"id",cljs.core.constant$keyword$56,"title",cljs.core.constant$keyword$57,"title",cljs.core.constant$keyword$58,false,cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (p1__5376_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(movies,cljs.core.assoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5376_SHARP_,"id"),p1__5376_SHARP_);
return tailrecursion.hoplon.app_pages._index_DOT_html.movie_option(p1__5376_SHARP_);
});})(movies,movie_id,movie,poster,title,year,starring))
], null),cljs.core.constant$keyword$60,tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes], 0)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
))))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))))) : tailrecursion.hoplon.div.call(null,selectize.selectize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$40,movie_id,cljs.core.constant$keyword$25,"movies",cljs.core.constant$keyword$55,"id",cljs.core.constant$keyword$56,"title",cljs.core.constant$keyword$57,"title",cljs.core.constant$keyword$58,false,cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (p1__5376_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(movies,cljs.core.assoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5376_SHARP_,"id"),p1__5376_SHARP_);
return tailrecursion.hoplon.app_pages._index_DOT_html.movie_option(p1__5376_SHARP_);
});})(movies,movie_id,movie,poster,title,year,starring))
], null),cljs.core.constant$keyword$60,tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes], 0)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
))))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))))));
})();return G__9625;
})()))) : tailrecursion.hoplon.html.call(null,(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon Selectize") : tailrecursion.hoplon.title.call(null,"Hoplon Selectize")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize.css")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize_movies.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize_movies.css"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon Selectize") : tailrecursion.hoplon.title.call(null,"Hoplon Selectize")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize.css")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize_movies.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$52,"stylesheet",cljs.core.constant$keyword$43,"text/css",cljs.core.constant$keyword$53,"selectize_movies.css"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$54,"font-family: sans-serif; width: 40%; margin: auto;"], null),(function (){var G__9624 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Rotten Tomatoes Movie Title Search") : tailrecursion.hoplon.h3.call(null,"Rotten Tomatoes Movie Title Search"));return G__9624;
})(),(function (){var G__9625 = (function (){var movies = tailrecursion.javelin.cell(cljs.core.PersistentArrayMap.EMPTY);var movie_id = tailrecursion.javelin.cell(null);var movie = tailrecursion.javelin.lift(((function (movies,movie_id){
return (function (G__9627,G__9628,G__9626){return (G__9626.cljs$core$IFn$_invoke$arity$2 ? G__9626.cljs$core$IFn$_invoke$arity$2(G__9627,G__9628) : G__9626.call(null,G__9627,G__9628));
});})(movies,movie_id))
).call(null,movies,movie_id,cljs.core.get);var poster = tailrecursion.javelin.lift(((function (movies,movie_id,movie){
return (function (G__9629,G__9630){return (G__9629.cljs$core$IFn$_invoke$arity$2 ? G__9629.cljs$core$IFn$_invoke$arity$2(G__9630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","detailed"], null)) : G__9629.call(null,G__9630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","detailed"], null)));
});})(movies,movie_id,movie))
).call(null,cljs.core.get_in,movie);var title = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster){
return (function (G__9632,G__9631){return (G__9631.cljs$core$IFn$_invoke$arity$2 ? G__9631.cljs$core$IFn$_invoke$arity$2(G__9632,"title") : G__9631.call(null,G__9632,"title"));
});})(movies,movie_id,movie,poster))
).call(null,movie,cljs.core.get);var year = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title){
return (function (G__9634,G__9633){return (G__9633.cljs$core$IFn$_invoke$arity$2 ? G__9633.cljs$core$IFn$_invoke$arity$2(G__9634,"year") : G__9633.call(null,G__9634,"year"));
});})(movies,movie_id,movie,poster,title))
).call(null,movie,cljs.core.get);var starring = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year){
return (function (G__9635,G__9637,G__9636){return (G__9635.cljs$core$IFn$_invoke$arity$2 ? G__9635.cljs$core$IFn$_invoke$arity$2(((function (movies,movie_id,movie,poster,title,year){
return (function (p1__5375_SHARP_){return (G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(p1__5375_SHARP_,"name") : G__9636.call(null,p1__5375_SHARP_,"name"));
});})(movies,movie_id,movie,poster,title,year))
,(G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(G__9637,"abridged_cast") : G__9636.call(null,G__9637,"abridged_cast"))) : G__9635.call(null,((function (movies,movie_id,movie,poster,title,year){
return (function (p1__5375_SHARP_){return (G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(p1__5375_SHARP_,"name") : G__9636.call(null,p1__5375_SHARP_,"name"));
});})(movies,movie_id,movie,poster,title,year))
,(G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(G__9637,"abridged_cast") : G__9636.call(null,G__9637,"abridged_cast"))));
});})(movies,movie_id,movie,poster,title,year))
).call(null,cljs.core.map,movie,cljs.core.get);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(selectize.selectize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$40,movie_id,cljs.core.constant$keyword$25,"movies",cljs.core.constant$keyword$55,"id",cljs.core.constant$keyword$56,"title",cljs.core.constant$keyword$57,"title",cljs.core.constant$keyword$58,false,cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (p1__5376_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(movies,cljs.core.assoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5376_SHARP_,"id"),p1__5376_SHARP_);
return tailrecursion.hoplon.app_pages._index_DOT_html.movie_option(p1__5376_SHARP_);
});})(movies,movie_id,movie,poster,title,year,starring))
], null),cljs.core.constant$keyword$60,tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes], 0)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
))))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))))) : tailrecursion.hoplon.div.call(null,selectize.selectize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$40,movie_id,cljs.core.constant$keyword$25,"movies",cljs.core.constant$keyword$55,"id",cljs.core.constant$keyword$56,"title",cljs.core.constant$keyword$57,"title",cljs.core.constant$keyword$58,false,cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (p1__5376_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(movies,cljs.core.assoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5376_SHARP_,"id"),p1__5376_SHARP_);
return tailrecursion.hoplon.app_pages._index_DOT_html.movie_option(p1__5376_SHARP_);
});})(movies,movie_id,movie,poster,title,year,starring))
], null),cljs.core.constant$keyword$60,tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes], 0)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
))))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))))));
})();return G__9625;
})()) : tailrecursion.hoplon.html_body.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$54,"font-family: sans-serif; width: 40%; margin: auto;"], null),(function (){var G__9624 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Rotten Tomatoes Movie Title Search") : tailrecursion.hoplon.h3.call(null,"Rotten Tomatoes Movie Title Search"));return G__9624;
})(),(function (){var G__9625 = (function (){var movies = tailrecursion.javelin.cell(cljs.core.PersistentArrayMap.EMPTY);var movie_id = tailrecursion.javelin.cell(null);var movie = tailrecursion.javelin.lift(((function (movies,movie_id){
return (function (G__9627,G__9628,G__9626){return (G__9626.cljs$core$IFn$_invoke$arity$2 ? G__9626.cljs$core$IFn$_invoke$arity$2(G__9627,G__9628) : G__9626.call(null,G__9627,G__9628));
});})(movies,movie_id))
).call(null,movies,movie_id,cljs.core.get);var poster = tailrecursion.javelin.lift(((function (movies,movie_id,movie){
return (function (G__9629,G__9630){return (G__9629.cljs$core$IFn$_invoke$arity$2 ? G__9629.cljs$core$IFn$_invoke$arity$2(G__9630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","detailed"], null)) : G__9629.call(null,G__9630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["posters","detailed"], null)));
});})(movies,movie_id,movie))
).call(null,cljs.core.get_in,movie);var title = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster){
return (function (G__9632,G__9631){return (G__9631.cljs$core$IFn$_invoke$arity$2 ? G__9631.cljs$core$IFn$_invoke$arity$2(G__9632,"title") : G__9631.call(null,G__9632,"title"));
});})(movies,movie_id,movie,poster))
).call(null,movie,cljs.core.get);var year = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title){
return (function (G__9634,G__9633){return (G__9633.cljs$core$IFn$_invoke$arity$2 ? G__9633.cljs$core$IFn$_invoke$arity$2(G__9634,"year") : G__9633.call(null,G__9634,"year"));
});})(movies,movie_id,movie,poster,title))
).call(null,movie,cljs.core.get);var starring = tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year){
return (function (G__9635,G__9637,G__9636){return (G__9635.cljs$core$IFn$_invoke$arity$2 ? G__9635.cljs$core$IFn$_invoke$arity$2(((function (movies,movie_id,movie,poster,title,year){
return (function (p1__5375_SHARP_){return (G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(p1__5375_SHARP_,"name") : G__9636.call(null,p1__5375_SHARP_,"name"));
});})(movies,movie_id,movie,poster,title,year))
,(G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(G__9637,"abridged_cast") : G__9636.call(null,G__9637,"abridged_cast"))) : G__9635.call(null,((function (movies,movie_id,movie,poster,title,year){
return (function (p1__5375_SHARP_){return (G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(p1__5375_SHARP_,"name") : G__9636.call(null,p1__5375_SHARP_,"name"));
});})(movies,movie_id,movie,poster,title,year))
,(G__9636.cljs$core$IFn$_invoke$arity$2 ? G__9636.cljs$core$IFn$_invoke$arity$2(G__9637,"abridged_cast") : G__9636.call(null,G__9637,"abridged_cast"))));
});})(movies,movie_id,movie,poster,title,year))
).call(null,cljs.core.map,movie,cljs.core.get);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(selectize.selectize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$40,movie_id,cljs.core.constant$keyword$25,"movies",cljs.core.constant$keyword$55,"id",cljs.core.constant$keyword$56,"title",cljs.core.constant$keyword$57,"title",cljs.core.constant$keyword$58,false,cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (p1__5376_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(movies,cljs.core.assoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5376_SHARP_,"id"),p1__5376_SHARP_);
return tailrecursion.hoplon.app_pages._index_DOT_html.movie_option(p1__5376_SHARP_);
});})(movies,movie_id,movie,poster,title,year,starring))
], null),cljs.core.constant$keyword$60,tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes], 0)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
))))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))))) : tailrecursion.hoplon.div.call(null,selectize.selectize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$40,movie_id,cljs.core.constant$keyword$25,"movies",cljs.core.constant$keyword$55,"id",cljs.core.constant$keyword$56,"title",cljs.core.constant$keyword$57,"title",cljs.core.constant$keyword$58,false,cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (p1__5376_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(movies,cljs.core.assoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__5376_SHARP_,"id"),p1__5376_SHARP_);
return tailrecursion.hoplon.app_pages._index_DOT_html.movie_option(p1__5376_SHARP_);
});})(movies,movie_id,movie,poster,title,year,starring))
], null),cljs.core.constant$keyword$60,tailrecursion.hoplon.app_pages._index_DOT_html.rotten_tomatoes], 0)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$27,movie,(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster) : tailrecursion.hoplon.img.call(null,cljs.core.constant$keyword$54,"float:right;",cljs.core.constant$keyword$51,poster)),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9640,G__9638,G__9639){return G__9638.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9639)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9640)+")");
});})(t__8516__auto__,movies,movie_id,movie,poster,title,year,starring))
).call(null,year,t__8516__auto__,title);
return t__8516__auto__;
})())),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Starring") : tailrecursion.hoplon.h2.call(null,"Starring")),(tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
)) : tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_(starring,null,((function (movies,movie_id,movie,poster,title,year,starring){
return (function (item__8502__auto__){var vec__9641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (movies,movie_id,movie,poster,title,year,starring){
return (function (G__9642){var star = G__9642;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [star], null);
});})(movies,movie_id,movie,poster,title,year,starring))
).call(null,item__8502__auto__));var star = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9641,0,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1((function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()) : tailrecursion.hoplon.li.call(null,(function (){var t__8516__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring){
return (function (G__9643,G__9644){return G__9643.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9644));
});})(t__8516__auto__,vec__9641,star,movies,movie_id,movie,poster,title,year,starring))
).call(null,t__8516__auto__,star);
return t__8516__auto__;
})()));
});})(movies,movie_id,movie,poster,title,year,starring))
))))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$54,"text-align:center;",(tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$53,"https://github.com/tailrecursion/hoplon-demos/blob/master/selectize/src/index.cljs.hl","Hoplon Source Code"))))));
})();return G__9625;
})()))));
return tailrecursion.hoplon.init();
});
goog.exportSymbol('tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit', tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit);
