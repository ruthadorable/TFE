export default interface Menu {
    id?: string;
    titre?: string;
    icon?:string;
    url?:string;
    sousMenu?: Array<Menu>;
}