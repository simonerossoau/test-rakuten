import contentsElement from './contentsElement';

export default class categoryListPreviewsModel {

    public Type: string;
    public Text_id: string;
    public Numerical_id: number;
    public Category: string;
    public Short_name: string;
    public Content_type: string;
    public Is_b2b: boolean;
    public Wktv: any;
    public Only_cupon: boolean;
    public Kind: string;
    public Is_recomendation: boolean;
    public Name: string;
    public Additional_images: any;
    public Contents: contentsElement;

    constructor() {

        this.Type = "";
        this.Text_id = "";
        this.Numerical_id = 0;
        this.Category = "";
        this.Short_name = "";
        this.Content_type = "";
        this.Is_b2b = false;
        this.Wktv = "";
        this.Only_cupon = false;
        this.Kind = "";
        this.Is_recomendation = false;
        this.Name = "";
        this.Additional_images = undefined;
        this.Contents = new contentsElement();

    }

    public apiToModel(data): categoryListPreviewsModel {
        var categoryList = new categoryListPreviewsModel();

        categoryList.Type = data.lists;
        categoryList.Text_id = data.id;
        categoryList.Numerical_id = data.numerical_id;
        categoryList.Category = data.category;
        categoryList.Short_name = data.short_name;
        categoryList.Content_type = data.content_type;
        categoryList.Is_b2b = data.is_b2b;
        categoryList.Wktv = data.wktv_code;
        categoryList.Only_cupon = data.only_coupon;
        categoryList.Kind = data.kind;
        categoryList.Is_recomendation = data.is_recommendation;
        categoryList.Name = data.name;
        categoryList.Additional_images = data.additional_images;
        categoryList.Contents = data.contents;

        return categoryList;

    }
}
