import React from "react";
import Head from "next/head";

export default function DefaultHead() {
    return (
        <Head>
            {/* VIEWPORT */}
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta
                id="viewport"
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
            />

            {/* TITLE and DESCRIPTION */}
            <title key="title">Kyle Jorve | Illustration and Design</title>
            <link rel="canonical" href="https://kylejorve.com/" />
            <meta
                name="description"
                content="Kyle Jorve is an illustrator, designer, writer, and front end developer working primarily in the genres of fantasy and science fiction."
            />

            {/* ICONS */}
            <link rel="shortcut icon" href="/images/icons-logos/favicons/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/images/icons-logos/favicons/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" sizes="57x57" href="/images/icons-logos/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/images/icons-logos/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/images/icons-logos/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/images/icons-logos/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/images/icons-logos/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/images/icons-logos/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/images/icons-logos/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/images/icons-logos/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/icons-logos/favicons/apple-icon-180x180.png" />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/images/icons-logos/favicons/android-icon-192x192.png"
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/icons-logos/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/images/icons-logos/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/icons-logos/favicons/favicon-16x16.png" />

            {/* OPEN GRAPH TAGS */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Kyle Jorve Illustration and Design" />
            <meta property="og:title" content="Kyle Jorve | Illustration and Design" />
            <meta property="og:url" content="https://kylejorve.com/" />
            <meta
                property="og:description"
                content="Kyle Jorve is an illustrator, designer, writer, and front end developer working primarily in the genres of fantasy and science fiction."
            />
            <meta
                property="og:image"
                content="https://kylejorve.com/images/gallery/pendrakes-chamber/kyle-jorve_pendrakes-chamber.jpg"
                key="meta-image"
            />
        </Head>
    );
}
