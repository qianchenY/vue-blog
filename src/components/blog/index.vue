<template>
<div id="blog">
    <Header></Header>
	<router-view></router-view>
    <Footer></Footer>
</div>
</template>

<script>
import Header from './public/Header'
import Footer from './public/Footer'
import Wonder from '../../assets/js/canvas'

export default {
    name: 'blog',
    components: {
        Header,
        Footer
    },
    mounted(){
        $("#wonder").css("height", $(document).innerHeight() - $('.ft').height());
        
        new Wonder.Wonder({
            el: '#wonder',
            dotsNumber: 100,
            lineMaxLength: 200,
            dotsAlpha: .5,
            speed: 1.5,
            clickWithDotsNumber: 5
        })        
    }
}
</script>

<style lang="scss">

//公共样式文件
* {
    margin: 0px;
    padding: 0px;
}

html{
    font-size: 62.5%;
    height: 100%; 
    
}

body {
    width: 100%;
    overflow-x: hidden;
    font-family: "Microsoft Yahei","Helvetica Neue",Helvetica,Arial,sans-serif;
    @include font-size;
    color: black;
}

a {
    color: #333;
    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-focus-ring-color: transparent;
    -moz-tap-highlight-color: transparent;
    -moz-focus-ring-color: transparent;
    @include transition;

    &:hover{
        color: $color;
    }
}

ol, ul, li {
    list-style: none;
}

img {
    max-width: 100%;
    border: 0px solid #ccc;
}

table, embed, video {
    max-width: 100%;
}

input, textarea{
    border: none;
    background: none;
	font-family: inherit;
    
    &[type="submit"]{
        cursor: pointer;
    }
    
    &[type="checkbox"]{
        cursor: pointer;
    }
    
    &[type="radio"]{
        cursor: pointer;
    }
    
    &:focus{
        outline: none;
    }
}

textarea{
    resize: none;
}

button{
    border: none;
    background: none;
    cursor: pointer;
}

em,i{
    font-style: normal;
}
    
.left{
    @include float;
}

.right{
    @include float(right);
}

.clear{
    clear: both;
}

.margin{
    @include margin;
}

.overflow{
    overflow: hidden;
}

.width{
    width: $width;
}

.box{
    margin: 0 auto;
    max-width: $width;
    overflow: hidden;
}


@media screen and (min-width:960px) and (max-width:1219px){
    .box{
        width: 950px;
    }
}

@media screen and (min-width: 768px) and (max-width:959px){
    .box{
        width: 750px;
    }
}

@media screen and (max-width: 767px){
    .box{
        padding: {
            left: 10px;
            right: 10px;
        };
        box-sizing: border-box;
    }
}	

.transition{
    @include transition;
}

.box-sizing{
    box-sizing: border-box;
}

.czjz {
    position: relative;
    top: 50%;
    transform: translate(0px, -50%);
}  

.relative{
    position: relative;
} 

@for $i from 5 through 50 { 
    @if($i % 5 == 0){
        .mt-#{$i} { 
            margin-top: $i + 0px; 
        }             
    }
}

.mr-5{
    margin: {
        right: 5px;
    };
}

.mt-none{
    margin: {
        top: 0 !important;
    };
}

.mr-none{
    margin: {
        right: 0 !important;
    };
}

.mb-none{
    margin: {
        bottom: 0 !important;
    };
}

.ml-none{
    margin: {
        left: 0 !important;
    };
}  

.font-none{
    line-height: 0;
    font-size: 0;
} 

.background-none{
    background: none !important;
}	

.m-desc{
    @include font-size(14);
    color:#333; 
    line-height: 24px;

    a{
        color: $color;
        
        &:hover{
            text-decoration: underline;
        }
    }
    
    p{ 
        @include font-size(14);
        color:#333; 
        line-height: 24px; 
    }
    
    span{ 
        @include font-size(14);
        color:#333; 
        line-height: 24px; 
    }
    
    b{ 
        @include font-size(14);
        color:#333; 
        line-height: 24px; 
    }
    
    a{ 
        @include font-size(14);
        color:$color; 
        line-height: 24px; 
    }
    
    img{ 
        display: block; 
        max-width: 100%; 
        margin: 0 auto;
    }
    
    iframe{ 
        display: block; 
        max-width: 100%; 
        margin: 0 auto;
    }
    
    table{ 
        width:90%; 
        border-collapse:collapse; 
        line-height:22px; 
        border:1px solid #ccc; 
        margin-left:auto; 
        margin-right:auto;
    }
    
    table tr td{ 
        padding:3px; 
        border:1px solid #ccc; 
        background:#fff;
        font-size:14px;
        font-size:1.4rem;
    } 
        
}    

[class*="-item"]{
    
    .item-pic{
        position: relative;
        display: block;
        line-height: 0;
        font-size: 0;
        text-align: center;
        overflow: hidden;

        img{
            @include transition;
        }

        &:hover{
            img{
                transform: scale(1.1);
            }
        }
    }

    .item-title{
        overflow: hidden;

        a{
            &:hover{
                color: $color;
            }
        }
    }

    .item-desc{
        overflow: hidden;

        a{
            display: block;
            &:hover{
                color: $color;
            }
        }
    }
}

@media screen and (max-width: 767px){
    .lv1-title{
        font-size: 24px !important;
        font-size: 2.4rem !important;
    }

    .lv2-title{
        font-size: 20px !important;
        font-size: 2rem !important;
    }

    .lv3-title{
        font-size: 18px !important;
        font-size: 1.8rem !important;
    }

    .lv1-desc{
        font-size: 16px !important;
        font-size: 1.6rem !important;
    }

    .lv2-desc{
        font-size: 14px !important;
        font-size: 1.4rem !important;
    }

    [class*="-item"]{    
        .item-title{
            font-size: 14px;
            font-size: 1.4rem;
        }
    
        .item-desc{
            font-size: 13px;
            font-size: 1.3rem;
        }

        .item-link{
            font-size: 13px;
            font-size: 1.3rem;
        }

        .item-modal{
            display: none;
        }
    }    
}

.main{
    position: relative;
    z-index: 2;
    margin: {
        top: 30px;
        bottom: 30px;
    };
}

// .m-left start
.m-left{
    float: left;
    width: get_w(800);
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;
    border-radius: 10px;
}

@media screen and (max-width: 959px){
    .m-left{
        float: none;
        width: 100%;
    }
}
// .m-left end

// .m-right start
.m-right{
    float: right;
    width: get_w(360);
    box-sizing: border-box;
}

.m-right-box{
    margin-top: 15px;
    background-color: white;
    padding: 10px;
    overflow: hidden;    

    .box-hd{
        position: relative;
        padding-bottom: 10px;
        line-height: 1.2;
        @include font-size(16);
        color: #333;
        border-bottom: 1px solid #ccc;

        span{
            color: #333;
            cursor: pointer;

            &:hover{
                color: $color;
            }
        }

        &:before{
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            display: block;
            width: 70px;
            height: 3px;
            background-color: $color;
        }
    }

    .box-bd{
        margin: {
            top: 15px
        };
        padding: 5px;
    }
}

@media screen and (max-width: 959px){
    .m-right{
        float: none;
        width: 100%;
        margin-top: 30px;
    }
}
// .m-right end
</style>
