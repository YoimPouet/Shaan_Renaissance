import { shaanRenaissance } from "../../module/config.js";
import { registerSettings } from "../../module/system/settings/index.js";
import { registerHandlebarsHelpers } from "../handlebars.js";
import { registerFonts } from "../register-fonts.js";
import { ModuleArt } from "../../module/system/module-art.js";
import { templatePaths } from "../preloadTemplates.js";
import { LicenseViewer } from "../../module/apps/license-viewer/app.js"

export const Init = {
    listen: () => {
        Hooks.once("init", () => {
          console.log ("SHAAN RENAISSANCE | Initialising Shaan Renaissance System");

          CONFIG.shaanRenaissance = shaanRenaissance;
          registerFonts();
          registerHandlebarsHelpers();
          registerSettings();
          preloadHandleBarTemplates();
    
          game.shaanRenaissance = {}
          game.shaanRenaissance.LicenseViewer = new LicenseViewer
            
            
          game.shaanRenaissance.system = {moduleArt: new ModuleArt}
        })
    }
}
async function preloadHandleBarTemplates() 
{
    return loadTemplates( templatePaths );
};