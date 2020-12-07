import castArray from '../repototest/COMP.SE.200-2020-assignment/src/castArray.js';
import isEmpty from '../repototest/COMP.SE.200-2020-assignment/src/isEmpty.js';
import map from '../repototest/COMP.SE.200-2020-assignment/src/map.js';
import add from '../repototest/COMP.SE.200-2020-assignment/src/add.js';
import reduce from '../repototest/COMP.SE.200-2020-assignment/src/reduce.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('Store search integration test', function(){
    describe(`Integration test of customer searching products and adding them to their cart`, function(){
        var found_products = []
        it("Trying to select all foods by a certain category", function(){   
            
            //User enters categories
            var users_categories = ["meat", "dairy", "fruit"]

            //some mockup data for the store
            var available_prods = {
                meat: 
                    {
                        id: 412,
                        name: "wagyu",
                        price: 34
                    },

                dairy:

                
                    {
                        id: 2,
                        name: "milk",
                        price: 7
                    }
                
            }


            //Try to find matching categories from products and customers wants
            

            var current_index = 0
            for(var i = 0; i < users_categories.length; i ++){
                
                var current_product= available_prods[users_categories[i]];
                
                if(!isEmpty(current_product)){
                    found_products[current_index] = current_product;
                    current_index++;
                }
                
            }
     
            expect(found_products).to.deep.equal([
                {
                    id: 412,
                    name: "wagyu",
                    price: 34
                },
                {
                    id: 2,
                    name: "milk",
                    price: 7
                }       
            ])
        });
        var all_product_prices = []
        it("Try to map all obj prices together", function(){   
            //Run map() to get the product prices 
            function sum_obj_price(obj){
                return obj.price;
            }
            
            all_product_prices = map(found_products, sum_obj_price);
            
            //Check if the prices match
            expect(all_product_prices).to.deep.equal([34,7])

            
        });

        it("Try to add all the product prices together with reduce function", function(){
            
            var total_price = reduce(all_product_prices,add)

            expect(total_price).to.equal(41)
        });


    });
});
 

