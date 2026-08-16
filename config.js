const LONGVIDEO_CONFIG = {

    appName: "LONGVIDEO AI",

    version: "0.1",

    /*
     * De frontend gebruikt deze instellingen.
     * De daadwerkelijke AI-provider kunnen we
     * later vervangen zonder de hele app opnieuw
     * te bouwen.
     */

    video: {

        defaultDuration: 60,

        sceneLength: 5,

        defaultResolution: "480p",

        supportedResolutions: [
            "480p",
            "720p",
            "1080p"
        ],

        defaultAspect: "16:9"

    },

    backend: {

        mode: "provider",

        provider: "wan",

        endpoint: "",

        enabled: false

    }

};
