// axios.ts

import axios from 'axios'
import type {App} from 'vue'
import {Md5} from 'ts-md5';

interface AxiosOptions {
    baseUrl?: string
}

export default {
    install: (app: App, options: AxiosOptions) => {
        const ax = axios.create({
            baseURL: options.baseUrl,
            params: {
                ts:"1",
                apikey: "558432cb6d3856550cab17969f3e2368",
                hash: Md5.hashStr("11cca2b5bb814ca7a95bb7dbad1573904442a5d86558432cb6d3856550cab17969f3e2368")
            },
            headers: {

            }
        })
        app.provide("axios", ax)
    }
}