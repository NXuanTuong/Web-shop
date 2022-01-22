import FooterPage from "../components/footer";
import NavHeader from "../components/header";

const ProductPage = {
    render() {
        return /* html */ `
        <div class="max-w-full m-auto">
            ${NavHeader.render()}

            <div class="flex justify-between px-[123px] bg-[#eff5f8] items-center">
                <div class="block">
                    <ul class="text-center p-5">
                        <li class="inline-block"><a class="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
                        <li class="inline-block"><span class="px-1 text-lg font-medium text-[#8d979d] py-3">></span></li>
                        <li class="inline-block"><a  class="px-1 text-lg font-medium text-black py-3" href="/about">Shop</a></li>
                    </ul>
                </div>

                <div class="flex items-center">
                    <div>
                        <p>Showing a single result</p>
                    </div>

                    <div class="mx-5">
                        <select class="px-3 py-2 shadow-md">
                            <option value="Thứ tự mặc định">Default order</option>
                            <option value="Thứ tự mặc định">Order by popularity</option>
                            <option value="Thứ tự mặc định">Order by rating score</option>
                            <option value="Thứ tự mặc định">Latest</option>
                            <option value="Thứ tự mặc định">Order by price: low to high</option>
                            <option value="Thứ tự mặc định">Order by price: high to low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl w-full p-6 m-auto mt-16">
                <div style="grid-template-columns: 1fr 3fr" class="grid grid-cols-2 gap-16">
                    <div>
                        <div class="mb-16">
                            <h3 class="uppercase text-lg font-medium mb-5">PRODUCT PORTFOLIO</h3>
                            
                            <div class="border p-5 bg-[#fbf9ff] shadow-md">
                                <ul>
                                    <li class="mb-2 border-b py-2"><a class="text-base hover:text-red-500 font-semibold leading-4" href="">Casio</a></li>
                                    <li class="mb-2 border-b py-2"><a class="text-base hover:text-red-500 font-semibold leading-4" href="">Citizen</a></li>
                                    <li class="mb-2 border-b py-2"><a class="text-base hover:text-red-500 font-semibold leading-4" href="">Couple watches</a></li>
                                    <li class="mb-2 border-b py-2"><a class="text-base hover:text-red-500 font-semibold leading-4" href="">Men's watch</a></li>
                                    <li class="mb-2 border-b py-2"><a class="text-base hover:text-red-500 font-semibold leading-4" href="">Women's watches</a></li>
                                    <li class="mb-2 border-b py-2"><a class="text-base hover:text-red-500 font-semibold leading-4" href="">Rolex</a></li>
                                    <li class="mb-2 border-b py-2"><a class="text-base hover:text-red-500 font-semibold leading-4" href="">Accessory</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="mb-16">
                            <div>
                                <h3 class="uppercase text-lg font-medium mb-5">Filter by price</h3>

                                <input type="range" class="w-full mb-4" name="" value="">

                                <div class="grid grid-cols-2 gap-16">
                                    <div>
                                        <button class="border px-4 text-lg font-semibold py-1 rounded-full bg-red-400 hover:bg-red-500 text-white" type="">Filter</button>
                                    </div>

                                    <div>
                                        <div class="flex">
                                            <h4 >Price:</h4>
                                            <p class="mx-1 font-semibold"><span>$</span> 154.75</p>
                                        </div>
                                        <div class="flex">
                                            <span class="mx-3"><i class="fas fa-arrows-alt-h"></i></span>
                                            <p class="font-semibold"><span>$</span> 200.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-16">
                            <div>
                                <h3 class="uppercase text-lg font-medium mb-5">Most interested</h3>
                            </div>

                            <div class="border p-5 bg-[#fbf9ff] shadow-md">
                                <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 gap-3 mb-4 border-b py-4">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-11_large-100x100.jpg" class="w-full" alt="">
                                    </div>

                                    <div>
                                        <p class="text-sm">BULOVA CORPORATION <p class="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">AUTOMATIC MEN'S WATCH 49MM</p></p>
                                        <del class="block"><span>$</span>
                                        <span class="text-red-300 text-sm">130.00
                                        </span></del><span>$</span>
                                        <span class="font-semibold">100.00
                                        </span>
                                    </div> 
                                </div>
        
                                <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 gap-3 mb-4 border-b py-2">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product6_20a32b81-5765-41f0-96da-606bb1ce5ed8_large-100x100.jpg" class="w-full" alt="">
                                    </div>

                                    <div>
                                        <p class="text-sm">MICHAEL KORS BRECKEN <p class="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">CHRONOGRAPH WATCH 44MM </p></p>
                                        <del class="block"><span>$</span>
                                        <span class="text-red-300 text-sm">150.000
                                        </span></del>
                                        <span>$</span>
                                        <span class="font-semibold">142.300
                                        </span>
                                    </div> 
                                </div>

                                <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 gap-3 mb-4 border-b py-2">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" class="w-full" alt="">
                                    </div>

                                    <div>
                                        <p class="text-sm">OMEGA SEAMASTER 39MM</p>
                                            <del class="block"><span>$</span>
                                            <span class="text-red-300 text-sm">180.000
                                            </span></del>
                                            <span>$</span>
                                            <span class="font-semibold">155.500
                                            </span>
                                            </span>
                                    </div> 
                                </div>

                                <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 gap-3 mb-4 py-2">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" class="w-full" alt="">
                                    </div>

                                    <div>
                                        <p class="text-sm">TISSOT LE LOCLE T006 <p class="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">AUTO WATCH 39MM</p></p>
                                        <del class="block"><span>$</span>
                                            <span class="text-red-300 text-sm">280.000
                                            </span></del>
                                            <span>$</span>
                                            <span class="font-semibold">275.500
                                            </span>
                                            </span>
                                    </div> 
                                </div>
                                
                            </div>
                        </div>

                        <div class="mb-16">
                            <h3 class="uppercase text-lg font-medium mb-5">Product photo gallery</h3>

                            <div class="border p-5 bg-[#fbf9ff] shadow-md">
                                <div class="grid grid-cols-2 gap-3">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" class="mb-4 w-full" alt="">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product6_20a32b81-5765-41f0-96da-606bb1ce5ed8_large-100x100.jpg" class="mb-4 w-full" alt="">
                                    </div>

                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/15-100x100.jpg" class="mb-4 w-full"  alt="">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-11_large-100x100.jpg" class="mb-4 w-full" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- The End Grid-1 -->

                    <!-- Start Grid-2 -->
                    <div>
                    <div>
                        <div class="grid grid-cols-3 mb-5 gap-10">
                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/5.jpg" class="object-cover w-full" alt="">
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
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">FOSSIL ME3104 TOWNSMAN AUTOMATIC LEATHER WATCH 44MM</a></h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300"><span>$</span> 150.000</del>
                                        <p class="px-2 font-semibold text-lg"><span>$</span> 143.750</p>
                                    </div>
                                </div>
                            </div>

                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/22.jpg" class="object-cover w-full" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[5%]"><p>New</p></span>
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
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">FREDERIQUE CONSTANT FC-312V4S4 SLIMLINE AUTO WATCH 40MM</a></h3>
                                    <div class="flex justify-center items-center">
                                        <p class="px-2 font-semibold text-lg"><span>$</span> 190.000</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-25_large.jpg" class="object-cover w-full" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[5%]"><p>30%</p></span>
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
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">MICHAEL KORS MINI SOFIE PAVÉ PEACOCK WATCH 36MM</a></h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300"><span>$</span> 160.000</del>
                                        <p class="px-2 font-semibold text-lg"><span>$</span> 133.750</p>
                                    </div>
                                </div>
                            </div>

                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-doi-alexandre-christie-ac8c26-1lk-trang-ac8c26-1mk-trang-pin-day-inox-600x600-300x300.jpg" class="object-cover w-full" alt="">
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
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">ĐỒNG HỒ ĐÔI ALEXANDRE CHRISTIE AC8C26-1LK TRẮNG – AC8C26-1MK TRẮNG PIN DÂY INOX</a> </h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300"><span>$</span> 150.000</del>
                                        <p class="px-2 font-semibold text-lg"><span>$</span> 143.750</p>
                                    </div>
                                </div>
                            </div>

                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-16_1024x1024-600x600.jpg" class="object-cover w-full" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[5%]"><p>New</p></span>
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
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">BIG BANG MXM18 SANG BLEU 39</a></h3>
                                    <div class="flex justify-center items-center">
                                        <p class="px-2 font-semibold text-lg"><span>$</span> 190.750</p>
                                    </div>
                                </div>
                            </div>

                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-daniel-wellington-dw00500001-nu-pin-day-inox-600x600-300x300.jpg" class="object-cover w-full" alt="">
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
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">ĐỒNG HỒ DANIEL WELLINGTON DW00500001 NỮ PIN DÂY INOX</a></h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300"><span>$</span> 150.000</del>
                                        <p class="px-2 font-semibold text-lg"><span>$</span> 130.550</p>
                                    </div>
                                </div>
                            </div>

                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-doi-sunrise-sg-sl1085.1601-pin-day-inox-600x600-300x300.jpg" class="object-cover w-full" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[5%]"><p>New</p></span>
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
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">ĐỒNG HỒ ĐÔI SUNRISE SG – SL1085.1601 PIN DÂY INOX</a> </h3>
                                    <div class="flex justify-center items-center">
                                        <p class="px-2 font-semibold text-lg"><span>$</span> 160.750</p>
                                    </div>
                                </div>
                            </div>

                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/11.jpg" class="object-cover w-full" alt="">
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
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">BULOVA MARINE STAR DIAMOND WATCH 32 MM</a> </h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300"><span>$</span> 190.000</del>
                                        <p class="px-2 font-semibold text-lg"><span>$</span> 176.750</p>
                                    </div>
                                </div>
                            </div>

                            <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/7.jpg" class="object-cover w-full" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[5%]"><p>New</p></span>
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
                                        <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">CARTIER W6920071 BALLON BLEU DE CERTIER WATCH 33MM</a></h3>
                                        <div class="flex justify-center items-center">
                                            <p class="px-2 font-semibold text-lg"><span>$</span> 180.750</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/17.jpg" class="object-cover w-full" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[5%]"><p>New</p></span>
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
                                        <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">MOVADO MUSEUM 70TH ANNIVERSARY SPECIAL EDITION WATCH 35MM</a> </h3>
                                        <div class="flex justify-center items-center">
                                            <p class="px-2 font-semibold text-lg"><span>$</span> 200.750</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/16.jpg" class="object-cover w-full" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-green-300 py-1 border -left-[5%]"><p>New</p></span>
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
                                        <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">OMEGA DE VILLE PRESTIGE WATCH 39.5MM</a> </h3>
                                        <div class="flex justify-center items-center">
                                            <p class="px-2 font-semibold text-lg"><span>$</span> 150.750</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/3.jpg" class="object-cover w-full" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[5%]"><p>30%</p></span>
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
                                        <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="">LONGINES MASTER WATCH 38.5MM</a></h3>
                                        <div class="flex justify-center items-center">
                                            <del class="text-red-300"><span>$</span> 200.000</del>
                                            <p class="px-2 font-semibold text-lg"><span>$</span> 180.750</p>
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
        </div>
        </div>
    </div>   
    </div>   
    </div>
            ${FooterPage.render()}
    </div>
        `;
    },
};
export default ProductPage;