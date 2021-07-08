var express = require("express");
var router = express.Router();
const url = "/vips-mobile/dgmaxx/shop/wx/product/detail/v2"
const future = Math.floor(new Date().getTime() / 1000) + 60 * 60 * (14 + 24)
const futureTips = {
  priceTitle: "清仓价",
  futurePrice: "22",
  msg: "已享满100减10",
  startTime: future,
};
router.get(url, (req, res) => {
  const detail = {
    code: 1,
    msg: "success",
    tid: "-6039743922134181005",
    data: {
      productId: "6919220176103781782",
      productName: "【100%纯棉】2021夏爆款t恤潮流印第安人印花短袖T恤男",
      subTitle: "纯棉印第安人印花圆领短袖T恤",
      productNameNoBrand: "【100%纯棉】2021夏爆款t恤潮流印第安人印花短袖T恤男",
      status: "1",
      isShowColor: "1",
      isHaiTao: "0",
      isMpProduct: "0",
      isGroupBuy: "0",
      groupInfo: {
        storeCode: null,
        warehouseCode: null,
        storeName: null,
        address: null,
        longitude: null,
        latitude: null,
        tel: null,
        contact: null,
        distance: null,
        imageUrl: null,
        areaId: null,
        warehouse: null,
        provinceCode: null,
        cityCode: null,
        districtCode: null,
        streetCode: null,
        zoneCode: null,
        wechatNumber: null,
        wechatQrcodeUrl: null,
        mobile: null,
        fullName: null,
      },
      categoryName: "男式T恤",
      sizeTableId: "57533160",
      rectangleType: "s",
      sellTimeTo: "1735660800000",
      sellTimeFrom: "1566194898000",
      attrSpecProps: [
        { attributeName: "风格", values: "潮流嘻哈，休闲" },
        { attributeName: "适用场景", values: "约会，休闲，居家，日常" },
        { attributeName: "版型", values: "常规" },
        { attributeName: "厚薄", values: "常规" },
        { attributeName: "弹性", values: "微弹" },
        { attributeName: "适用季节", values: "春，夏，秋" },
        { attributeName: "领型", values: "圆领" },
        { attributeName: "袖型", values: "收口袖" },
        { attributeName: "袖长", values: "短袖" },
        { attributeName: "衣长", values: "常规" },
        { attributeName: "适用人群", values: "青少年，青年，中年" },
        { attributeName: "面料", values: "纯棉" },
        { attributeName: "选购热点", values: "专柜同款" },
        { attributeName: "功能", values: "无" },
        { attributeName: "图案", values: "印花" },
        { attributeName: "里材质", values: "棉" },
        { attributeName: "款式", values: "套头" },
        { attributeName: "上市年份", values: "2021" },
        { attributeName: "适用性别", values: "男士" },
        {
          attributeName: "商品卖点",
          values: "2021爆款印第安人潮流印花纯棉圆领短袖T恤",
        },
        {
          attributeName: "洗涤说明",
          values: "30°水洗 不可漂白 悬挂晾干 不可熨烫 不可干洗。",
        },
        { attributeName: "SUB_TITLE", values: "纯棉潮流印花圆领T恤" },
        { attributeName: "产地", values: "中国" },
        {
          attributeName: "备注",
          values: "图片中的各种配件均为拍摄搭配之用，是不包含在所售商品中的。",
        },
      ],
      brandStore: {
        brandStoreName: "浪莎",
        brandStoreLogo:
          "https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/181dd0653007460f8ce19d395767d0e2/10000531/primary.png",
        brandStoreSn: "10000531",
        brandStoreSlogan: "浪莎-不只是吸引！",
      },
      spu: {
        spuImg:
          "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/17/88a0b5ce-8049-4e25-bbad-5541f4b47769_420_531.jpg",
        spuPrice: {
          vipshopPrice: "29",
          marketPrice: "199",
          discountTips: "1.5折",
          hasLowPrice: false,
        },
        subTitle: "纯棉印第安人印花圆领短袖T恤",
        canReturn: "1",
        canExchange: "1",
        skuOfMinVipshopPrice: "292529486752768000",
        vendorProductId: "292529486752763904",
      },
      saleProps: [
        {
          pid: "134",
          name: "颜色",
          type: "color",
          values: [
            {
              vid: "1293761",
              name: "黑色",
              previewImages: [
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/39/33c4554d-af3c-4cbe-83ca-b6a1b3a674f5.jpg",
                  imageIndex: "1",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/177/dcbbb2e4-a56d-48f2-866f-00c46086de16.jpg",
                  imageIndex: "2",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/164/2e365f97-03e5-43a6-9efd-d4a7f2cb3036.jpg",
                  imageIndex: "3",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/144/72b429f1-803f-47d7-8025-2398632587ca.jpg",
                  imageIndex: "4",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/2/91dd5a80-0e10-4a9d-a936-4c7befff62bb.jpg",
                  imageIndex: "15",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/0/e17e0caf-9fea-43ed-8ff1-c5e5a89ba4e7.jpg",
                  imageIndex: "16",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/167/b1a9979a-41b8-484c-bc77-35caa7da3a72.jpg",
                  imageIndex: "17",
                },
              ],
              detailImages: [
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/95/e4f04d1e-08a0-49ef-86a6-0b7b85ab334c.jpg",
                  imageIndex: "601",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/157/e0a72d72-3a46-4172-99c6-3dc15f121ef5.jpg",
                  imageIndex: "602",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/128/4ff86709-2b6a-4323-9086-41732b0c46ef.jpg",
                  imageIndex: "603",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/8/d0961ac5-f5d9-429f-98d7-74dc39d3339c.jpg",
                  imageIndex: "604",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/3/4a2f2afd-0ec2-4491-8649-16edd6be56b8.jpg",
                  imageIndex: "605",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/99/b67cbc16-048a-43db-9883-86b1b84b33c2.jpg",
                  imageIndex: "606",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/168/fe7311f8-d117-4aa0-b686-d8930bf5c74a.jpg",
                  imageIndex: "607",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/146/b538ed81-2c99-4d1d-8672-86b8161c1184.jpg",
                  imageIndex: "608",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0524/83/6fa758db-8d02-4f87-941b-a932d2afb5da.jpg",
                  imageIndex: "609",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/163/0787cd5f-825a-480b-b579-4dbac0a2c739.jpg",
                  imageIndex: "610",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/93/c0c4e2a7-634b-499d-83d7-24900aa59c79.jpg",
                  imageIndex: "611",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/37/683379ef-de27-4ed4-a788-f2536f507753.jpg",
                  imageIndex: "612",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/18/11597ca9-095d-4a13-801e-ae6fb7d9dcd6.jpg",
                  imageIndex: "613",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/65/0f7bd54b-ff38-4f38-981e-346f1dcf0d04.jpg",
                  imageIndex: "614",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/114/274a3ba6-8589-4c37-97a6-765cc2b854af.jpg",
                  imageIndex: "615",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/129/124aa161-b70e-4b20-98f3-edb18ed08859.jpg",
                  imageIndex: "616",
                },
              ],
              icon: {
                imageUrl:
                  "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/39/33c4554d-af3c-4cbe-83ca-b6a1b3a674f5.jpg",
                imageIndex: "1",
              },
            },
            {
              vid: "973717",
              name: "白色",
              previewImages: [
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/161/00332336-ad77-40fb-a0fe-0e01df447115.jpg",
                  imageIndex: "1",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/42/e1d8c761-8d3d-483e-9c52-ed624b3b1fc2.jpg",
                  imageIndex: "2",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/74/cd728e2f-8b1f-49ab-bb37-cb5204c41251.jpg",
                  imageIndex: "3",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/179/ccc66860-8f9f-4f18-8c50-44f6b8519ff4.jpg",
                  imageIndex: "4",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/65/b3b5838a-3acb-4f84-bdbc-4d722954d835.jpg",
                  imageIndex: "15",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/91/e75d9fd0-613d-4c11-b618-2d3366c8a869.jpg",
                  imageIndex: "16",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/123/e390f4fc-d399-47de-a0d5-35e090c0ffe1.jpg",
                  imageIndex: "17",
                },
              ],
              detailImages: [
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/95/e4f04d1e-08a0-49ef-86a6-0b7b85ab334c.jpg",
                  imageIndex: "601",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/157/e0a72d72-3a46-4172-99c6-3dc15f121ef5.jpg",
                  imageIndex: "602",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/128/4ff86709-2b6a-4323-9086-41732b0c46ef.jpg",
                  imageIndex: "603",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/8/d0961ac5-f5d9-429f-98d7-74dc39d3339c.jpg",
                  imageIndex: "604",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/3/4a2f2afd-0ec2-4491-8649-16edd6be56b8.jpg",
                  imageIndex: "605",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/99/b67cbc16-048a-43db-9883-86b1b84b33c2.jpg",
                  imageIndex: "606",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/168/fe7311f8-d117-4aa0-b686-d8930bf5c74a.jpg",
                  imageIndex: "607",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/146/b538ed81-2c99-4d1d-8672-86b8161c1184.jpg",
                  imageIndex: "608",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0524/83/6fa758db-8d02-4f87-941b-a932d2afb5da.jpg",
                  imageIndex: "609",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/163/0787cd5f-825a-480b-b579-4dbac0a2c739.jpg",
                  imageIndex: "610",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/93/c0c4e2a7-634b-499d-83d7-24900aa59c79.jpg",
                  imageIndex: "611",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/37/683379ef-de27-4ed4-a788-f2536f507753.jpg",
                  imageIndex: "612",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/18/11597ca9-095d-4a13-801e-ae6fb7d9dcd6.jpg",
                  imageIndex: "613",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/65/0f7bd54b-ff38-4f38-981e-346f1dcf0d04.jpg",
                  imageIndex: "614",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/114/274a3ba6-8589-4c37-97a6-765cc2b854af.jpg",
                  imageIndex: "615",
                },
                {
                  imageUrl:
                    "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/129/124aa161-b70e-4b20-98f3-edb18ed08859.jpg",
                  imageIndex: "616",
                },
              ],
              icon: {
                imageUrl:
                  "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/161/00332336-ad77-40fb-a0fe-0e01df447115.jpg",
                imageIndex: "1",
              },
            },
          ],
        },
        {
          pid: "453",
          name: "尺码",
          type: "size",
          values: [
            { vid: "83", name: "S" },
            { vid: "77", name: "M" },
            { vid: "76", name: "L" },
            { vid: "2804", name: "XL" },
            { vid: "50854", name: "2XL" },
            { vid: "51815", name: "3XL" },
          ],
        },
      ],
      defaultSaleProps: {
        rectangleType: "s",
        previewImages: [
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/161/00332336-ad77-40fb-a0fe-0e01df447115.jpg",
            imageIndex: "1",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/42/e1d8c761-8d3d-483e-9c52-ed624b3b1fc2.jpg",
            imageIndex: "2",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/74/cd728e2f-8b1f-49ab-bb37-cb5204c41251.jpg",
            imageIndex: "3",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/179/ccc66860-8f9f-4f18-8c50-44f6b8519ff4.jpg",
            imageIndex: "4",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/65/b3b5838a-3acb-4f84-bdbc-4d722954d835.jpg",
            imageIndex: "15",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/91/e75d9fd0-613d-4c11-b618-2d3366c8a869.jpg",
            imageIndex: "16",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/123/e390f4fc-d399-47de-a0d5-35e090c0ffe1.jpg",
            imageIndex: "17",
          },
        ],
        detailImages: [
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/95/e4f04d1e-08a0-49ef-86a6-0b7b85ab334c.jpg",
            imageIndex: "601",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/157/e0a72d72-3a46-4172-99c6-3dc15f121ef5.jpg",
            imageIndex: "602",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/128/4ff86709-2b6a-4323-9086-41732b0c46ef.jpg",
            imageIndex: "603",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/8/d0961ac5-f5d9-429f-98d7-74dc39d3339c.jpg",
            imageIndex: "604",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/3/4a2f2afd-0ec2-4491-8649-16edd6be56b8.jpg",
            imageIndex: "605",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/99/b67cbc16-048a-43db-9883-86b1b84b33c2.jpg",
            imageIndex: "606",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/168/fe7311f8-d117-4aa0-b686-d8930bf5c74a.jpg",
            imageIndex: "607",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/146/b538ed81-2c99-4d1d-8672-86b8161c1184.jpg",
            imageIndex: "608",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0524/83/6fa758db-8d02-4f87-941b-a932d2afb5da.jpg",
            imageIndex: "609",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/163/0787cd5f-825a-480b-b579-4dbac0a2c739.jpg",
            imageIndex: "610",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/93/c0c4e2a7-634b-499d-83d7-24900aa59c79.jpg",
            imageIndex: "611",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/37/683379ef-de27-4ed4-a788-f2536f507753.jpg",
            imageIndex: "612",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/18/11597ca9-095d-4a13-801e-ae6fb7d9dcd6.jpg",
            imageIndex: "613",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/65/0f7bd54b-ff38-4f38-981e-346f1dcf0d04.jpg",
            imageIndex: "614",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/114/274a3ba6-8589-4c37-97a6-765cc2b854af.jpg",
            imageIndex: "615",
          },
          {
            imageUrl:
              "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/616267/2021/0312/129/124aa161-b70e-4b20-98f3-edb18ed08859.jpg",
            imageIndex: "616",
          },
        ],
      },
      skus: {
        "134:1293761;453:50854": {
          skuId: "292529486752772098",
          barcode: "F1LSSQ-A099-21025805",
          mid: "6919220176086984086",
          msizeId: "6919220176221300118",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          
          salePriceState: 1,
          sizeDetailId: "280165175",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:1293761;453:76": {
          skuId: "292529486752772096",
          barcode: "F1LSSQ-A099-21025803",
          mid: "6919220176086984086",
          msizeId: "6919220176271672726",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165177",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:973717;453:50854": {
          skuId: "292529486752768002",
          barcode: "F1LSSQ-A099-21025705",
          mid: "6919220176103781782",
          msizeId: "6919220176271668630",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165175",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:1293761;453:51815": {
          skuId: "292529486752772099",
          barcode: "F1LSSQ-A099-21025806",
          mid: "6919220176086984086",
          msizeId: "6919220176271664534",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165176",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:973717;453:83": {
          skuId: "292529486752763905",
          barcode: "F1LSSQ-A099-21025701",
          mid: "6919220176103781782",
          msizeId: "6919220176338810262",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165178",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:1293761;453:77": {
          skuId: "292529486752768007",
          barcode: "F1LSSQ-A099-21025802",
          mid: "6919220176086984086",
          msizeId: "6919220176087000470",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165180",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:973717;453:51815": {
          skuId: "292529486752768003",
          barcode: "F1LSSQ-A099-21025706",
          mid: "6919220176103781782",
          msizeId: "6919220176305239446",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165176",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:973717;453:2804": {
          skuId: "292529486752768001",
          barcode: "F1LSSQ-A099-21025704",
          mid: "6919220176103781782",
          msizeId: "6919220176103785878",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165179",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:973717;453:76": {
          skuId: "292529486752768000",
          barcode: "F1LSSQ-A099-21025703",
          mid: "6919220176103781782",
          msizeId: "6919220176305247638",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165177",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:973717;453:77": {
          skuId: "292529486752763908",
          barcode: "F1LSSQ-A099-21025702",
          mid: "6919220176103781782",
          msizeId: "6919220176137381270",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165180",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:1293761;453:2804": {
          skuId: "292529486752772097",
          barcode: "F1LSSQ-A099-21025804",
          mid: "6919220176086984086",
          msizeId: "6919220176086988182",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165179",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
        "134:1293761;453:83": {
          skuId: "292529486752768004",
          barcode: "F1LSSQ-A099-21025801",
          mid: "6919220176086984086",
          msizeId: "6919220176120591766",
          buy_min: "1",
          buy_max: "2",
          stock: "-1",
          stockType: "0",
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            discountTips: "1.4折",
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              isQuota: false,
            },
            hasLowPrice: false,
          },
          salePriceState: 1,
          sizeDetailId: "280165178",
          isWarmup: "0",
          saleStyle: 3,
          sellTimeFrom: 1566194898000,
          isImpending: 0,
        },
      },
      mids: {
        "6919220176103781782": {
          mid: "6919220176103781782",
          isIndependent: 0,
          salePriceState: 1,
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            multiVipshopPrice: 0,
            discountTips: "1.4折",
            couponFavPrice: null,
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              priceSuff: "",
              isQuota: false,
            },
          },
          "tips": [
            {
               "isFuture": 0,
               "typeId": "2",
               "type": "满减",
               "tips": "常态满减活动提示语",
               "activityNo": "02100000900000159635",
               "startTime": "1591603824",
               "endTime": "1592467134"
            }
         ],
          isImpending: 0,
        },
        "6919220176086984086": {
          mid: "6919220176086984086",
          isIndependent: 0,
          salePriceState: 1,
          price: {
            vipshopPrice: "29",
            marketPrice: "199",
            multiVipshopPrice: 0,
            discountTips: "1.4折",
            couponFavPrice: null,
            salePriceInfo: {
              name: "特卖价",
              price: "27.05",
              startTime: 1622512800,
              endTime: 1624240800,
              priceSuff: "",
              isQuota: false,
            },
          },
          "tips": [
            {
               "isFuture": 0,
               "typeId": "2",
               "type": "满减",
               "tips": "常态满减活动提示语",
               "activityNo": "02100000900000159635",
               "startTime": "1591603824",
               "endTime": "1592467134"
            }
         ],
          isImpending: 0,
        },
      },
      salesInfo: { salesId: "1710953750", salesName: "唯品会好货精选" },
      isNewEcology: 0,
      sizeMeasurePic:
        "http://a.vpimg4.com/upload/category/2016/07/01/96/a0d5f4c2-d222-43e9-97b6-358f2c752313.jpg",
      sizeTableTips:
        "尺码对照表仅供参考，不同款式的尺码可能会有1-3cm的微小误差，以您收到的商品为准。",
      sizeTableDetails: {
        280165178: {
          id: "280165178",
          name: "S",
          propertyValues: {
            "衣长(cm)": "63",
            "袖长(cm)": "16",
            "胸围(cm)": "46",
          },
          dimension: "胸围(cm),衣长(cm),袖长(cm)",
          sizeDetailOrder: 1,
        },
        280165180: {
          id: "280165180",
          name: "M",
          propertyValues: {
            "衣长(cm)": "67",
            "袖长(cm)": "18",
            "胸围(cm)": "48",
          },
          dimension: "胸围(cm),衣长(cm),袖长(cm)",
          sizeDetailOrder: 2,
        },
        280165177: {
          id: "280165177",
          name: "L",
          propertyValues: {
            "衣长(cm)": "69",
            "袖长(cm)": "18",
            "胸围(cm)": "50",
          },
          dimension: "胸围(cm),衣长(cm),袖长(cm)",
          sizeDetailOrder: 3,
        },
        280165179: {
          id: "280165179",
          name: "XL",
          propertyValues: {
            "衣长(cm)": "71",
            "袖长(cm)": "20",
            "胸围(cm)": "52",
          },
          dimension: "胸围(cm),衣长(cm),袖长(cm)",
          sizeDetailOrder: 4,
        },
        280165175: {
          id: "280165175",
          name: "2XL",
          propertyValues: {
            "衣长(cm)": "73",
            "袖长(cm)": "20",
            "胸围(cm)": "54",
          },
          dimension: "胸围(cm),衣长(cm),袖长(cm)",
          sizeDetailOrder: 5,
        },
        280165176: {
          id: "280165176",
          name: "3XL",
          propertyValues: {
            "衣长(cm)": "75",
            "袖长(cm)": "22",
            "胸围(cm)": "56",
          },
          dimension: "胸围(cm),衣长(cm),袖长(cm)",
          sizeDetailOrder: 6,
        },
      },
    },
  };
  for(let key of Object.keys(detail.data.skus)) {
    detail.data.skus[key].futureTips = futureTips
  }
  for(let key of Object.keys(detail.data.mids)) {
    // detail.data.mids[key].futureTips = futureTips
    detail.data.mids[key].price.couponFavPrice = '22'
    // detail.data.mids[key].price.salePriceInfo.price = '2722'
    // detail.data.mids[key].price.salePriceInfo = null
  }
  res.json(detail)
});

module.exports = {
  type: 'router', // 选择模式 router or proxy
  url,
  router: router,
};
