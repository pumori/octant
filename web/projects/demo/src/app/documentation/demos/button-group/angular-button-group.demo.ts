import { Component } from '@angular/core';
import { ButtonGroupView } from '../../../../../../../src/app/modules/shared/models/content';
import { stringify } from 'querystring';

const buttonGroup: ButtonGroupView = {
  config: {
    buttons: [
      {
        name: 'Delete',
        payload: {},
        confirmation: {
          title: 'Delete Pod',
          body: 'Are you sure you want to delete *Pod* **myapp-pod**?',
        },
      },
    ],
  },
  metadata: {
    type: 'buttonGroup',
  },
};

const multipleButtons: ButtonGroupView = {
  config: {
    buttons: [
      {
        name: 'Button 1',
        payload: {},
      },
      {
        name: 'Button 2',
        payload: {},
      },
    ],
  },
  metadata: {
    type: 'buttonGroup',
  },
};

const code = `buttonGroup := component.NewButtonGroup()
buttonGroup.AddButton(
  component.NewButton("Trigger",
    action.CreatePayload(octant.ActionOverviewCronjob, action.Payload{
      "namespace":  c.Namespace,
      "apiVersion": c.APIVersion,
      "kind":       c.Kind,
      "name":       c.Name,
    }),
  ))
`;

const json = JSON.stringify(buttonGroup, null, 4);

@Component({
  selector: 'app-angular-button-group-demo',
  templateUrl: './angular-button-group.demo.html',
})
export class AngularButtonGroupDemoComponent {
  buttonGroup = buttonGroup;
  multipleButtons = multipleButtons;
  code = code;
  json = json;
}
