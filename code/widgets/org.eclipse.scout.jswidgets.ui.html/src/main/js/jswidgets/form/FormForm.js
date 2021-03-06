/*******************************************************************************
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 ******************************************************************************/
jswidgets.FormForm = function() {
  jswidgets.FormForm.parent.call(this);
  this.openedByButton = false;
  this.currentFormPropertiesBox = null;
  this.LifecycleData = {};
};
scout.inherits(jswidgets.FormForm, scout.Form);

jswidgets.FormForm.prototype._jsonModel = function() {
  return scout.models.getModel('jswidgets.FormForm');
};

jswidgets.FormForm.prototype._init = function(model) {
  jswidgets.FormForm.parent.prototype._init.call(this, model);

  this.widget('OpenFormButton').on('click', this._onOpenFormButtonClick.bind(this));
  this.widget('OpenLifecycleFormButton').on('click', this._onOpenLifecycleFormButtonClick.bind(this));

  // form properties of the form will be opened with OpenFormButton
  this.propertiesBox = this.widget('PropertiesBox');
  // defaults
  this.propertiesBox.titleField.setValue('Title');
  this.propertiesBox.displayHintField.setValue(scout.Form.DisplayHint.DIALOG);
  this.propertiesBox.closableField.setValue(true);

  // form properties of current form
  this.currentFormPropertiesBox = this.widget('CurrentFormPropertiesBox');
  this.currentFormPropertiesBox.setField(this);
  this.currentFormPropertiesBox.displayHintField.setEnabled(false);
  this.currentFormPropertiesBox.displayParentField.setEnabled(false);
  this.widget('CurrentFormPropertiesTab').setVisible(!this.detailForm);

  if(this.closeMenuVisible){
    this.widget('CloseMenu').setVisible(true);
  }

  if (this.openedByButton) {
    this.widget('EventsTab').setField(this);
    this.widget('WidgetActionsBox').setField(this);
  }
};

jswidgets.FormForm.prototype._onOpenFormButtonClick = function(model) {
  var form = scout.create('jswidgets.FormForm', {
    parent: this,
    title: this.propertiesBox.titleField.value,
    subTitle: this.propertiesBox.subTitleField.value,
    iconId: this.propertiesBox.iconIdField.value,
    displayHint: this.propertiesBox.displayHintField.value,
    displayParent: jswidgets.DisplayParentLookupCall.displayParentForType(this, this.propertiesBox.displayParentField.value),
    modal: this.propertiesBox.modalField.value,
    askIfNeedSave: this.propertiesBox.askIfNeedSaveField.value,
    cacheBounds: this.propertiesBox.cacheBoundsField.value,
    closable: this.propertiesBox.closableField.value,
    resizable: this.propertiesBox.resizableField.value,
    openedByButton: true,
    closeMenuVisible: true
  });
  this.widget('EventsTab').setField(form);
  this.widget('WidgetActionsBox').setField(form);
  form.open();

};

jswidgets.FormForm.prototype._onOpenLifecycleFormButtonClick = function(model) {
  var form = scout.create('jswidgets.LifecycleForm', {
    parent: this,
    title: this.propertiesBox.titleField.value,
    subTitle: this.propertiesBox.subTitleField.value,
    iconId: this.propertiesBox.iconIdField.value,
    displayHint: this.propertiesBox.displayHintField.value,
    displayParent: jswidgets.DisplayParentLookupCall.displayParentForType(this, this.propertiesBox.displayParentField.value),
    modal: this.propertiesBox.modalField.value,
    closable: this.propertiesBox.closableField.value,
    resizable: this.propertiesBox.resizableField.value,
    data: this.LifecycleData
  });
  this.widget('EventsTab').setField(form);

  var lifecycleDataField = this.widget('LifecycleDataField');
  form.on('load', function(event) {
    var data = form.data;
    var text = 'Form loaded (' + this.lifecycleDataToString(data) + ')';
    lifecycleDataField.setValue(text);
  }.bind(this));
  form.on('save', function(event) {
    var data = form.data;
    var text = lifecycleDataField.value;
    text += '\n' + 'Form saved (' + this.lifecycleDataToString(data) + ')';
    lifecycleDataField.setValue(text);
  }.bind(this));
  form.on('reset', function(event) {
    var data = form.data;
    var text = lifecycleDataField.value;
    text += '\n' + 'Form reset (' + this.lifecycleDataToString(data) + ')';
    lifecycleDataField.setValue(text);
  }.bind(this));
  form.on('close', function(event) {
    var data = form.data;
    var text = lifecycleDataField.value;
    text += '\n' + 'Form closed (' + this.lifecycleDataToString(data) + ')';
    lifecycleDataField.setValue(text);
    this.lifecycleData = data;
  }.bind(this));

  lifecycleDataField.setVisible(true);
  form.open();
};

jswidgets.FormForm.prototype.lifecycleDataToString = function(data) {
  return 'Name: ' + data.name + ', Birthday: ' + data.birthday;
};
