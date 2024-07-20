import { getFullMeters } from "../api/getFullMeters.ts";
import { makeObservable, observable, action } from "mobx";
import { fromPromise, isPromiseBasedObservable } from "mobx-utils";
import { FullMeters } from "../types/types";



class MetersStore {
  meters?: isPromiseBasedObservable<FullMeters[]>;
  isDisabled = false;

  constructor() {
    makeObservable(this, {
      meters: observable,
      isDisabled: observable,
      getMetersAction: action,
      deleteMeter: action,
    });
  }

  getMetersAction = () => (this.meters = fromPromise<FullMeters[]>(getFullMeters()));


  deleteMeter = (id: string) => {
    this.isDisabled = true;
    fetch(`http://showroom.eis24.me/api/v4/test/meters/${id}`, {
      method: "DELETE",
    }).then(() => {
      this.getMetersAction();
      this.isDisabled = false;
    })
  }
}

export const metersStore = new MetersStore();
