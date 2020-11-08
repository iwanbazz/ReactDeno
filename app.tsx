import React, { ComponentType } from 'react'
import { Head, SEO, Viewport } from 'https://deno.land/x/aleph/mod.ts'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    return (
        <>
            <SEO
                title="React"
                description="React framework in deno"
                keywords="react,framework,deno,alephjs"
            />
            <Viewport
                width="device-width"
                initialScale={1.0}
                minimumScale={1.0}
                maximumScale={1.0}
            />
            <Head>
                <title>Hello World - Aleph.js</title>
            </Head>
            <Page {...pageProps} />
        </>
    )
}
