export class DefaultTokenConfigSR extends DefaultTokenConfig {
  get template() {
    return "systems/shaanrenaissance/templates/scene/tokenConfig.hbs";
  }
  async getData(options = {}) {
    const context = await super.getData(options);
    return Object.assign(context, {
      object: this.token.toObject(false),
      isDefault: true,
      barAttributes: TokenDocument.implementation.getTrackedAttributeChoices(),
      bar1: this.token.bar1,
      bar2: this.token.bar2,
      bar3: this.token.bar3,
    });
  }
  _getSubmitData(updateData = {}) {
    const formData = foundry.utils.expandObject(super._getSubmitData(updateData));
    formData.light.color = formData.light.color || undefined;
    formData.bar1.attribute = formData.bar1.attribute || null;
    formData.bar2.attribute = formData.bar2.attribute || null;
    formData.bar3.attribute = formData.bar3.attribute || null;
    return formData;
  }
}
