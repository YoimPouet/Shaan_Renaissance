import { objectHasKey } from "../utils/utils.js";
export class TokenDocumentSR extends TokenDocument {
  _onCreate(data, options, userId) {
    super._onCreate(data, options, userId);
    if (this.parent.isView) this.object?._onCreate(data, options, userId);
    this.bar1 = { attribute: "attributes.hpEsprit" };
    this.bar2 = { attribute: "attributes.hpAme" };
    this.bar3 = { attribute: "attributes.hpCorps" };
  }
  hasStatusEffect(statusId) {
    if (statusId === "dead") return this.overlayEffect === CONFIG.controlIcons.defeated;
    const { actor } = this;

    const hasCondition = objectHasKey(CONFIG.shaanRenaissance.conditionTypes, statusId) && actor.hasCondition(statusId);

    return hasCondition;
  }
}
