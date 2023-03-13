<script lang="ts">
    import { onMount } from "svelte";

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

    let comicEl;

    onMount(() => {
        async function fetchComic() {
        // const comicEl = document.getElementById("comic") as HTMLElement;
        const mailParams = new URLSearchParams([
            ["email", "m.filonov@innopolis.university"],
        ]);
        const idResponse = await fetch(
            "https://fwd.innopolis.app/api/hw2?" + mailParams.toString()
        );
        const id: string = await idResponse.json();
        const params = new URLSearchParams([["num", id.toString()]]);
        const comicResponse = await fetch(
            "https://getxkcd.vercel.app/api/comic?" + params.toString()
        );
        const comicData: Comic = await comicResponse.json();
        comicEl.innerHTML = "";
        var img = document.createElement("img");
        img.src = comicData.img;
        img.alt = comicData.alt;
        var heading = document.createElement("h2");
        heading.textContent = comicData.title;
        var dateEl = document.createElement("div");
        const date = new Date(
            parseInt(comicData.year),
            parseInt(comicData.month),
            parseInt(comicData.day)
        );
        dateEl.textContent = "Uploaded: " + date.toLocaleDateString();
        comicEl.appendChild(heading);
        comicEl.appendChild(img);
        comicEl.appendChild(dateEl);
    }

    fetchComic()
    })
</script>

<div class="container" id="comic" bind:this={comicEl}>
    <div class="lds-ripple">
        <div />
        <div />
    </div>
</div>

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

    #comic {
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
