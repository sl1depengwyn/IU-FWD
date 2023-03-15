<script lang="ts">
    interface Comic {
        day: string;
        month: string;
        year: string;
        num: number;
        link: string;
        news: string;
        safe_title: string;
        transcript: string;
        alt: string;
        img: string;
        title: string;
    }

    export let email = "";

    async function fetchComic() {
        const mailParams = new URLSearchParams([["email", email]]);
        const idResponse = await fetch(
            "https://fwd.innopolis.app/api/hw2?" + mailParams.toString()
        );
        const id: string = await idResponse.json();
        const params = new URLSearchParams([["num", id.toString()]]);
        const comicResponse = await fetch(
            "https://getxkcd.vercel.app/api/comic?" + params.toString()
        );
        return comicResponse.json() as Promise<Comic>;
    }

    let promise = fetchComic();
</script>

{#await promise}
    <div class="lds-ripple">
        <div />
        <div />
    </div>
{:then comic}
    <section class="comic">
        <h2>{comic.title}</h2>
        <img alt={comic.alt} src={comic.img} />
        <p>
            Uploaded: {new Date(
                parseInt(comic.year),
                parseInt(comic.month) - 1,
                parseInt(comic.day)
            ).toLocaleDateString()}
        </p>
    </section>
{:catch error}
    <p class="error">{error.message}</p>
{/await}

<style>
    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }

    .lds-ripple div {
        position: absolute;
        border: 4px solid rgb(85, 26, 139);
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }

    .error {
        color: red;
    }

    .comic {
        margin-bottom: 50px;
    }

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
        }

        4.9% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
        }

        5% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }

        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }
</style>
