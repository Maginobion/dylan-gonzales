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
        'Express',
        'Tailwind',
        'Git',
        'Python',
        'Django',
        'Spring',
        'MySQL',
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
    animation: spin 8.4s infinite;
    color: blueviolet;
    padding-left: 8px;
}
@keyframes spin{
    8.3%{
        transform: translateY(-100%);
    }
    16.6%{
        transform: translateY(-200%);
    }
    24.9%{
        transform: translateY(-300%);
    }
    33.2%{
        transform: translateY(-400%);
    }
    41.5%{
        transform: translateY(-500%);
    }
    49.8%{
        transform: translateY(-600%);
    }
    58.1%{
        transform: translateY(-700%);
    }
    66.4%{
        transform: translateY(-800%);
    }
    74.7%{
        transform: translateY(-900%);
    }
    83%{
        transform: translateY(-1000%);
    }
    91.3%{
        transform: translateY(-1100%);
    }
    100%{
        transform: translateY(-1200%);
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