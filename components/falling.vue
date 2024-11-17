<template>
    <div class="wrapper">
        <p v-t="'developWith'"/>
        <div class="words">
            <span v-for="tech of stack" :key="tech">{{tech}}</span>
        </div>
    </div>
</template>

<script setup>
    const stack = [
        'Typescript',
        'React',
        'Laravel',
        'Vue',
        'Next',
        'NestJS',
        'Express',
        'Tailwind',
        'Git',
        'Python',
        'SQL',
        'NoSQL',
        'Spring',        
        'Datadog',
        'Typescript'
    ]
</script>

<style scoped>
.wrapper{
    box-sizing: content-box;
    height: 34px;
    display: flex;
    padding: 20px 0;
    font-size: 24px;
    cursor: default;
    user-select: none;
}
.words{
    overflow: hidden;
}
p{
    margin: 0;
    text-align: center;
}
span{
    display: block;
    animation: spin 8.5s infinite;
    color: blueviolet;
    padding-left: 8px;
}
@keyframes spin{
    7.14%{
        transform: translateY(-100%);
    }
    14.28%{
        transform: translateY(-200%);
    }
    21.42%{
        transform: translateY(-300%);
    }
    28.57%{
        transform: translateY(-400%);
    }
    35.71%{
        transform: translateY(-500%);
    }
    42.85%{
        transform: translateY(-600%);
    }
    50%{
        transform: translateY(-700%);
    }
    57.14%{
        transform: translateY(-800%);
    }
    64.28%{
        transform: translateY(-900%);
    }
    71.42%{
        transform: translateY(-1000%);
    }
    78.57%{
        transform: translateY(-1100%);
    }
    85.71%{
        transform: translateY(-1200%);
    }
    92.85%{
        transform: translateY(-1300%);
    }
    100%{
        transform: translateY(-1400%);
    }
}

@media screen and (max-width:400px) {
    .wrapper{
        height: 22px;
        padding: 20px 0;
        font-size: 1em;
    }
}
</style>