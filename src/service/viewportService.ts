import {observable} from "mobx";
import isNumber from "lodash/isNumber";
import debounce from "lodash/debounce";

class ViewPortServiceClass {

    @observable public isMobile : boolean = false;
    private viewThreshold = 700;

    public adjustView(viewInPx : number) {
        if (isNumber(viewInPx)) {
            const isMobile = viewInPx < this.viewThreshold;
            if (this.isMobile !== isMobile) {
                this.isMobile = isMobile;
            }
        }
    }

}

const ViewportService = new ViewPortServiceClass();

ViewportService.adjustView(window.innerWidth);
window.addEventListener(
    "resize",
    debounce(() => { ViewportService.adjustView(window.innerWidth); }, 50),
    false
);

export default ViewportService;
