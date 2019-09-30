<template>
    <div>
        <h1 class="title" style="color: rgba(0,0,0,.75);">{{title}}</h1>
        <div class="markdown_section" v-html="html"></div>
    </div>
</template>

<script>
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
import 'highlight.js/styles/atom-one-dark.css';
import ajax from '@/api.js'
export default {
    data(){
        return {
            sourceCode:``,
            title:'',
        }
    },
    methods:{
        getArticle(){
            let id = this.$route.query.id;
            let params = id ? {id}:{};
            ajax({
                params,
                url:'/article-detail',
                callback:(res)=>{
                    this.sourceCode = res[0].content;
                    this.title = res[0].title;
                }
            })
        }
    },
    computed:{
        html(){
            var md = MarkdownIt({
                html:         true,        // Enable HTML tags in source
                xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                                            // This is only for full CommonMark compatibility.
                breaks:       true,        // Convert '\n' in paragraphs into <br>
                langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                            // useful for external highlighters.
                linkify:      true,        // Autoconvert URL-like text to links

                // Enable some language-neutral replacement + quotes beautification
                typographer:  true,

                quotes: '“”‘’',

                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        console.log(lang,str);
                        try {
                            return hljs.highlight(lang, str).value;
                        } catch (__) {}
                    }
                    return ''; // use external default escaping
                }
            });
            return md.render(this.sourceCode)
        }
    },
    mounted(){
        this.getArticle();
        // this.html = md.renderInline(this.word);
    }
}
</script>

<style scoped lang="scss">
    .title{
        font-size: 24px;
    }
    .markdown_section{
        font-size: 16px;
    }
    @media screen and (max-width:420px) {
        .title{
            font-size: 1.2rem;
        }
        .markdown_section{
            font-size: 0.8rem;
        }
    }
</style>
