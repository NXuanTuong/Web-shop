import toastr from "toastr";
import { get } from "../api/products";
import "toastr/build/toastr.min.css";
import FooterPage from "../components/footer";
import NavHeader from "../components/header";
import { addToCart } from "../utils/addCart";
import { ReRender } from "../utils/Rerender";

const DetailsProduct = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
            ${NavHeader.render()}
            <div class="bg-[#eff5f8] block">
                <ul class="text-center p-5">
                    <li class="inline-block"><a class="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/product">Shop</a></li> 
                    <li class="inline-block"><span class="px-1 text-lg font-medium text-[#8d979d] py-3">></span></li>
                    <li class="inline-block"><a  class="px-1 text-lg font-medium text-black py-3" href="">Product Detail</a></li>
                </ul>
            </div>

            <div class="max-w-7xl w-full p-6 m-auto mt-20">
                <div class="grid grid-cols-2 gap-10">
                    <div>
                        <img src="${data.image}" class= "object-cover h-full w-full rounded-xl max-w-full" alt="">
                        <div class="flex justify-between border border-grey-800 rounded-xl px-2 py-3 mt-2">
                            <img src="https://picsum.photos/150/150" class="object-cover hover:opacity-90 cursor-pointer rounded" alt="">
                            <img src="https://picsum.photos/150/150" class="object-cover hover:opacity-90 cursor-pointer rounded" alt="">
                            <img src="https://picsum.photos/150/150" class="object-cover hover:opacity-90 cursor-pointer rounded" alt="">
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-xl w-96 font-semibold">${data.name}</p>
                            </div>

                            <div>
                                <div class="px-3">
                                    <p class="text-red-500 text-base"><del>$ ${data.priceold}</del></p>
                                </div>
                                
                                <div>
                                    <p class="text-lg font-semibold">$ ${data.pricenew}</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 flex ">
                            <div class="flex">
                                <div>
                                    <span>3.9</span>
                                </div>
                                <div class="px-3">
                                  <p> <span class="text-yellow-500"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> </span> <span class="text-gray-300"><i class="bi bi-star-fill"></i></span></p>
                                </div>
                            </div>

                            <div class="px-9">
                                <span class="text-base text-[#6456d5] font-semibold"><i class="bi bi-eye-fill"></i> See all 512 reviews</span>
                            </div>
                        </div>
                        <div class="mt-5">
                            <span class="text-xl font-semibold">S??? l?????ng: </span>
                        </div>
                        
                        <div class="mt-2 text-center">
                            <input type="number" id="numberProduct" name="" min="1" value="1" class="border w-40 p-2 border-[#6456d5] rounded-xl outline-none">
                        </div>
                        <div class="mt-10 px-2 py-3 text-center bg-[#6456d5] cursor-pointer text-white rounded-lg w-full">
                            <button id="btnAddtoCart" type="" class="text-lg">Add to cart</button>
                        </div>

                        <div class="mt-10">
                            <p class="text-base font-semibold mb-4">Description</p>
                            <p class="text-base text-gray-500 mb-3">Time Zone ???????c s???n xu???t kh??p k??n t??? kh??u thi???t k??? t???i H??n Qu???c, nh???p kh???u m??y c???a Nh???t ?????n l???p r??p t???i Trung Qu???c. T???o n??n m???t m???c gi?? ph??n kh??c ph??? th??ng ph?? h???p v?? c???nh tranh nh???t. X??y d???ng n??n m???t ???????? ch?????? v???ng m???nh trong l??ng gi???i tr??? y??u th???i trang.</p>
                            <p class="text-base text-gray-500 mb-3">Time Zone th????ng hi???u H??n qu???c, c??ng ngh??? Nh???t B???n v???i m??y to??n b??? khung m??y ?????ng h??? ???????c nh???t nh???p kh???u 100% t??? Citizen. Thi???t k??? t???i Korea b???i chuy??n gia th???i trang h??ng ?????u H??n Qu???c, ti??u chu???n qu???c t???, b???o h??nh qu???c t??? v?? ch??? ????? h???u m??i t???t nh???t.</p>
                        </div>
                        <div class="w-full h-0.5 mt-10 mb-10 bg-gray-200"></div>
                        <div>
                            <p class="text-base font-semibold mb-4">Product Specifications</p>
                            <ul class="flex mb-3 items-center">
                                <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                                <li class="px-3"><span class="font-semibold">Th????ng hi???u:</span> TIME ZONE</li>
                            </ul>
                            <ul class="flex mb-3 items-center">
                                <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                                <li class="px-3"><span class="font-semibold">Ch???t li???u d??y:</span> D??y Th??p ?????c</li>
                            </ul>
                            <ul class="flex mb-3 items-center">
                                <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                                <li class="px-3"><span class="font-semibold">Ch???t li???u m???t k??nh:</span> M???t k??nh saphire ch???ng tr???y x?????c.</li>
                            </ul>
                            <ul class="flex mb-3 items-center">
                                <li class="w-2 h-2 rounded-full bg-gray-200"></li>
                                <li class="px-3"><span class="font-semibold">???????ng k??nh m???t:</span> size 42 mm</li>
                            </ul>
                        </div>

                        <div>
                            <div class="grid grid-cols-2 mt-20 gap-5">
                                <div class="text-center border border-gray-400 bg-[#f9fafc] rounded-xl py-5">
                                    <div class="text-2xl">
                                        <i class="bi bi-globe"></i>
                                    </div>
                                    <div>
                                        <p class="font-semibold">International Delivery</p>
                                        <p class="text-gray-400 font-semibold">Get your order in 2 days</p>
                                    </div>
                                </div>

                                <div>
                                    <div class="text-center border border-gray-400 rounded-xl py-5 bg-[#f9fafc]">
                                    <div class="text-2xl">
                                        <i class="bi bi-box-seam"></i>
                                    </div>
                                    <div>
                                        <p class="font-semibold">Well Preserved</p>
                                        <p class="text-gray-400 font-semibold">Limit chemical exposure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="mt-80">
                    <div>
                        <h1 class="font-semibold text-xl">Recent Reviews</h1>
                        <div class="w-full h-0.5 mt-7 mb-7 bg-gray-200"></div>

                        <div class="grid grid-cols-3 gap-10">
                            <div>
                                <p class="mb-3 font-semibold">Nguy???n Xu??n T?????ng</p>
                                <p class="text-gray-500">May 16, 2022</p>
                            </div>

                            <div>
                                <div class="flex">
                                    <div class="px-3">
                                    <p> <span class="text-yellow-500"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></span></p>
                                    </div>
                                    <div>
                                        <span class="px-3">5</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p class="font-semibold mb-3">T??i ???? nh???n h??ng</p>
                                <p class="text-gray-500">S???n ph???m r???t ?????p v?? ch???t l?????ng . Ph?? h???p cho m???i l???a tu???i , th??? hi???n ???????c phong c??ch c??ng nh?? t??n vinh v??? b??? ngo??i.</p>
                            </div>
                        </div>

                        <div class="w-full h-0.5 mt-7 mb-7 bg-gray-200"></div>

                        <div class="grid grid-cols-3 gap-10">
                            <div>
                                <p class="mb-3 font-semibold">Nguy???n Xu??n T?????ng</p>
                                <p class="text-gray-500">May 16, 2022</p>
                            </div>

                            <div>
                                <div class="flex">
                                    <div class="px-3">
                                    <p> <span class="text-yellow-500"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></span></p>
                                    </div>
                                    <div>
                                        <span class="px-3">5</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p class="font-semibold mb-3">T??i ???? nh???n h??ng</p>
                                <p class="text-gray-500">S???n ph???m r???t ?????p v?? ch???t l?????ng . Ph?? h???p cho m???i l???a tu???i , th??? hi???n ???????c phong c??ch c??ng nh?? t??n vinh v??? b??? ngo??i.</p>
                            </div>
                        </div>

                        <div class="w-full h-0.5 mt-7 mb-7 bg-gray-200"></div>

                        <div class="grid grid-cols-3 gap-10">
                            <div>
                                <p class="mb-3 font-semibold">Nguy???n Xu??n T?????ng</p>
                                <p class="text-gray-500">May 16, 2022</p>
                            </div>

                            <div>
                                <div class="flex">
                                    <div class="px-3">
                                    <p> <span class="text-yellow-500"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></span></p>
                                    </div>
                                    <div>
                                        <span class="px-3">5</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p class="font-semibold mb-3">T??i ???? nh???n h??ng</p>
                                <p class="text-gray-500">S???n ph???m r???t ?????p v?? ch???t l?????ng . Ph?? h???p cho m???i l???a tu???i , th??? hi???n ???????c phong c??ch c??ng nh?? t??n vinh v??? b??? ngo??i.</p>
                            </div>
                        </div>

                        <div class="w-full h-0.5 mt-7 mb-7 bg-gray-200"></div>

                        <div class="grid grid-cols-3 gap-10">
                            <div>
                                <p class="mb-3 font-semibold">Nguy???n Xu??n T?????ng</p>
                                <p class="text-gray-500">May 16, 2022</p>
                            </div>

                            <div>
                                <div class="flex">
                                    <div class="px-3">
                                    <p> <span class="text-yellow-500"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> </span> <span class="text-gray-300"><i class="bi bi-star-fill"></i></span></p>
                                    </div>
                                    <div>
                                        <span class="px-3">4</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p class="font-semibold mb-3">T??i ???? nh???n h??ng</p>
                                <p class="text-gray-500">S???n ph???m r???t ?????p v?? ch???t l?????ng . Ph?? h???p cho m???i l???a tu???i , th??? hi???n ???????c phong c??ch c??ng nh?? t??n vinh v??? b??? ngo??i.</p>
                            </div>
                        </div>

                        <div class="w-full h-0.5 mt-7 mb-7 bg-gray-200"></div>
                    </div>

                    <div class="mt-20">
                        <h2 class="font-semibold text-xl mb-7">Customers also purchased</h2>
                        <div>
                    <div>
                        <div class="grid grid-cols-4 mb-5 gap-10">
                                <div class="px-3 py-7 rounded-lg shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="https://picsum.photos/200/300" class="object-cover w-full max-w-full h-64" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[5%]"><p>20%</p></span>
                                            <span class="text-black icon_heart cursor-pointer absolute text-2xl -top-[2%] right-[9px] hover:text-red-500"><i class="bi bi-heart"></i></span>
                                            <div class="absolute top-[47%] -left-[5%] mx-5 feedback_item_product">
                                            <ul>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="cursor-pointer"><i class="bi bi-star"></i></li>
                                            </ul>
                                        </div>
                                        <div class="hover:bg-red-500 btn_add_cart cursor-pointer top-[80%] left-[20%] delay-150 duration-200 ease-in-out py-1 px-3 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
                                        <a herf="">Add to Cart <span><i class="fas fa-shopping-cart"></i></span></a>
                                        </div>
                                </div>

                                <div>
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">Nguyen Xuan Tuong</a></h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300">$ 150.000</del>
                                        <p class="px-2 font-semibold text-lg">$100.000</p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 py-7 shadow rounded-lg hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="https://picsum.photos/200/300" class="object-cover w-full max-w-full h-64" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[5%]"><p>20%</p></span>
                                            <span class="text-black icon_heart cursor-pointer absolute text-2xl -top-[2%] right-[9px] hover:text-red-500"><i class="bi bi-heart"></i></span>
                                            <div class="absolute top-[47%] -left-[5%] mx-5 feedback_item_product">
                                            <ul>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="cursor-pointer"><i class="bi bi-star"></i></li>
                                            </ul>
                                        </div>
                                        <div class="hover:bg-red-500 btn_add_cart cursor-pointer top-[80%] left-[20%] delay-150 duration-200 ease-in-out py-1 px-3 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
                                        <a herf="">Add to Cart <span><i class="fas fa-shopping-cart"></i></span></a>
                                        </div>
                                </div>

                                <div>
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">Nguyen Xuan Tuong</a></h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300">$ 150.000</del>
                                        <p class="px-2 font-semibold text-lg">$100.000</p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 py-7 shadow rounded-lg hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="https://picsum.photos/200/300" class="object-cover w-full max-w-full h-64" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[5%]"><p>20%</p></span>
                                            <span class="text-black icon_heart cursor-pointer absolute text-2xl -top-[2%] right-[9px] hover:text-red-500"><i class="bi bi-heart"></i></span>
                                            <div class="absolute top-[47%] -left-[5%] mx-5 feedback_item_product">
                                            <ul>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="cursor-pointer"><i class="bi bi-star"></i></li>
                                            </ul>
                                        </div>
                                        <div class="hover:bg-red-500 btn_add_cart cursor-pointer top-[80%] left-[20%] delay-150 duration-200 ease-in-out py-1 px-3 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
                                        <a herf="">Add to Cart <span><i class="fas fa-shopping-cart"></i></span></a>
                                        </div>
                                </div>

                                <div>
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">Nguyen Xuan Tuong</a></h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300">$ 150.000</del>
                                        <p class="px-2 font-semibold text-lg">$100.000</p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-3 py-7 shadow rounded-lg hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="https://picsum.photos/200/300" class="object-cover w-full max-w-full h-64" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[5%]"><p>20%</p></span>
                                            <span class="text-black icon_heart cursor-pointer absolute text-2xl -top-[2%] right-[9px] hover:text-red-500"><i class="bi bi-heart"></i></span>
                                            <div class="absolute top-[47%] -left-[5%] mx-5 feedback_item_product">
                                            <ul>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="cursor-pointer"><i class="bi bi-star"></i></li>
                                            </ul>
                                        </div>
                                        <div class="hover:bg-red-500 btn_add_cart cursor-pointer top-[80%] left-[20%] delay-150 duration-200 ease-in-out py-1 px-3 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
                                        <a herf="">Add to Cart <span><i class="fas fa-shopping-cart"></i></span></a>
                                        </div>
                                </div>

                                <div>
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">Nguyen Xuan Tuong</a></h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300">$ 150.000</del>
                                        <p class="px-2 font-semibold text-lg">$100.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                            <div class="text-center mt-12">
                                <ul class="block">
                                    <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#"><i class="fas fa-angle-left"></i></a></li>
                                    <li class="inline-block px-4 py-2 border bg-red-300"><a class="text-[#000]" href="#">1</a></li>
                                    <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#">2</a></li>
                                    <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#">3</a></li>
                                    <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#"><i class="fas fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                ${FooterPage.render()}
            </div>
        `;
    },
    afterRender(id) {
        NavHeader.afterRender();
        const btnAddToCart = document.querySelector("#btnAddtoCart");
        const numberProduct = document.querySelector("#numberProduct");

        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);

            // eslint-disable-next-line max-len
            addToCart({ ...data, quantity: numberProduct.value ? +numberProduct.value : 1, total: data.pricenew * numberProduct.value }, () => {
                toastr.success("Th??m v??o gi??? h??ng th??nh c??ng!");
                ReRender(NavHeader, "#header");
            });
        });
    },
};
export default DetailsProduct;