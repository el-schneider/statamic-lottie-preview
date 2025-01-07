import AssetsFieldtype from "./components/fieldtypes/AssetsFieldtype.vue";
import Editor from "./components/fieldtypes/Editor.vue";

Statamic.booting(() => {
    Statamic.$components.register("assets-fieldtype", AssetsFieldtype);
});

Statamic.booting(() => {
    Statamic.$components.register("asset-editor", Editor);
});
