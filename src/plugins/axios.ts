// axios.ts

import axios from 'axios'
import type {App} from 'vue'
import {Md5} from 'ts-md5';
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const customKey = import.meta.env.VITE_CUSTOM_KEY;

interface AxiosOptions {
    baseUrl?: string
}

export default {
    install: (app: App, options: AxiosOptions) => {
        const ax = axios.create({
            baseURL: options.baseUrl,
            params: {
                ts:customKey,
                apikey: publicKey,
                hash: Md5.hashStr(`${customKey}${privateKey}${publicKey}`),
            },
            headers: {

            }
        })
        app.provide("axios", ax)
    }
}