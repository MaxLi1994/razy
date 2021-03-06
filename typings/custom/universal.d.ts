declare module NodeJS {
    interface Global {
        [key: string]: any
    }
}
interface Window {
    [key: string]: any
}

declare const __INITIAL_STATE__: string;
declare const __INITED_FLAG__: string;

declare const device_mobile: boolean;
declare const device_phone: boolean;
declare const device_tablet: boolean;
declare const device_os: string;

declare const _importLess: ImportLess;
declare const _http: REQUEST;
declare const _https: REQUEST;

declare const __CROSSDOMAIN__: string;
declare const __DIST_PATH__: string;
declare const __PORT__: string;
declare const __APP__: string;
declare const __STUB_SERVER_FILE_DIR__: string;
declare const __JS_LIB_PATH__: string;
declare const __JS_STATIC_PATH__: string;
declare const __IMAGE_STATIC_PATH__: string;
declare const __STYLE_STATIC_PATH__: string;
declare const __RETINA_DEFAULT_RATIO__: string;
declare const __API_SERVER_FETCH_HOSTNAME__: string;
declare const __API_SERVER_FETCH_PORT__: string;
declare const __STUB_SERVER_FETCH_HOSTNAME__: string;
declare const __STUB_SERVER_FETCH_PORT__: string;
declare const __API_SERVER_HTTP_HOSTNAME__: string;
declare const __API_SERVER_HTTP_PORT__: string;
declare const __STUB_SERVER_HTTP_HOSTNAME__: string;
declare const __STUB_SERVER_HTTP_PORT__: string;
declare const __PAGE_SERVER_HOST__: string;
declare const __PAGE_SERVER_PORT__: string;
declare const __NODE_ENV__: string;
