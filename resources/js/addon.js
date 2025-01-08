import AssetsFieldtype from "./components/fieldtypes/AssetsFieldtype.vue";
import Editor from "./components/fieldtypes/Editor.vue";
import Browser from "./components/fieldtypes/Browser.vue";

Statamic.booting(() => {
    Statamic.$components.register("assets-fieldtype", AssetsFieldtype);
});

Statamic.booting(() => {
    Statamic.$components.register("asset-editor", Editor);
});

Statamic.booting(() => {
    Statamic.$components.register("asset-browser", Browser);
});
