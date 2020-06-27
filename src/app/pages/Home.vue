<template>
    <div class="container">
        <div class="title-container">
            <h1 class="title is-size-3">Marvin Isaac</h1>
            <h2 class="subtitle is-size-6">Developer</h2>
        </div>
        <div class="columns is-mobile">
            <div class="column has-buttons-left">
                <a class="button" target="_blank"
                    v-for="(link, index) in left"
                    :key="index"
                    :href="link.url">
                    {{link.text}}
                </a>
            </div>
            <div class="column has-buttons-right">
                <a class="button"
                    v-for="(link, index) in right"
                    :key="index"
                    :target="setTarget(link.newTab)"
                    :href="link.url">
                    {{link.text}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        left: [{
            'text': 'LinkedIn',
            'url': 'http://marvin.ph'
        }, {
            'text': 'GitHub',
            'url': 'http://github.com/marvinisaac'
        // }, {
        //     'text': 'Tutorials',
        //     'url': 'https://thepinoydev.com'
        }],
        right: [{
            'newTab': false,
            'text': 'Articles',
            'url': '/article'
        }]
    }),
    methods: {
        setTarget: (shouldOpenNewTab) => {
            if (shouldOpenNewTab) {
                return '_blank'
            }

            return ''
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    background: url('https://cdn.halohalolabs.com/marvinisaac-com/brain-hemispheres.svg') center center no-repeat;
    background-size: auto;
    margin: 0 auto;
    max-width: 480px;
    padding: 1.5rem 1.5rem 20vh;

    .title-container {
        margin-bottom: 5rem;
    }

    .columns {
        .column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 0;

            .button {
                background: white;
                border: none;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                font-weight: bolder;
                margin: 0 0 1rem 0;
                transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            }

            .button:hover {
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }
        }

        .column.has-buttons-left {
            .button {
                align-self: flex-start;
            }
        }

        .column.has-buttons-right {
            .button {
                align-self: flex-end;
            }
        }
    }
}
</style>
