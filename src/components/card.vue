<template>
    <div class="flex justify-center items-center bg-rose py-32">
        <div class="w-[736px] h-auto bg-white rounded-3xl px-10 py-10">
            <div class="flex flex-col ">
                <img src="/public/image-omelette.jpeg" alt="image" class="rounded-xl pb-9">
                <div class="text-text">
                    <p class="text-[40px]">Simple Omelette Recipe</p>
                    <h3 class="pt-6 text-h3 text-base pb-8">
                        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                        to perfection, optionally filled with your choice of cheese, vegetables, or meats.

                    </h3>
                </div>

                <div class="bg-ros p-7 text-col rounded-xl">
                    <h3 class="text-tit text-xl font-semibold pb-4"> Preparation time</h3>
                    <ul class="">
                        <li class="pl-4 pb-1"><span class="font-bold">Total</span>: Approximately 10 minutes</li>
                        <li class="pl-4 pb-1"><span class="font-bold">Preparation</span>: 5 minutes</li>
                        <li class="pl-4"><span class="font-bold">Cooking</span>: 5 minutes</li>
                    </ul>
                </div>

                <div class="pt-8">
                    <p class="text-tit1 text-[28px] pb-6">Ingredients</p>
                    <ul class="text-h3">
                        <li class="pl-4 pb-2"> 2-3 large eggs</li>
                        <li class="pl-4 pb-2">Salt, to taste</li>
                        <li class="pl-4 pb-2">Pepper, to taste</li>
                        <li class="pl-4 pb-2">1 tablespoon of butter or oil</li>
                        <li class="pl-4"> Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                    <div class="border-b pt-8"></div>
                </div>

                <div class="pt-8">
                    <p class="text-tit1 text-3xl pb-6">Instructions</p>
                    <ol class="text-h3">
                        <li class="pl-4 pb-2"><span class="font-bold">Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well
                            mixed.
                            You can add a tablespoon of water or milk for a fluffier texture.
                        </li>
                        <li class="pl-4 pb-2"><span class="font-bold">Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
                        <li class="pl-4 pb-2"><span class="font-bold"> Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to
                            ensure
                            the eggs evenly coat the surface.</li>
                        <li class="pl-4 pb-2"><span class="font-bold">Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly
                            runny in the
                            middle, sprinkle your chosen fillings over one half of the omelette.</li>
                        <li class="pl-4 pb-2"><span class="font-bold">Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over
                            the
                            fillings. Let it cook for another minute, then slide it onto a plate.</li>
                        <li class="pl-4"><span class="font-bold">Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
                    </ol>
                    <div class="border-b pt-8"></div>
                </div>

                <div class="pt-8 text-h3">
                    <p class="text-tit1 text-3xl pb-6">Nutrition</p>
                    <h3 class="pb-6">
                        The table below shows nutritional values per serving without the additional fillings.
                    </h3>

                    <div class="flex border-b pl-8 p-3 gap-60">
                        <h3>Calories</h3>
                        <h3 class="text-num font-bold">277kcal</h3>
                    </div>

                    <div class="flex border-b pl-8 p-3 gap-64">
                        <h3>Carbs</h3>
                        <h3 class="pl-3 text-num font-bold">0g</h3>
                    </div>

                    <div class="flex border-b pl-8 p-3 gap-64">
                        <h3>Protein</h3>
                        <h3 class="text-num font-bold">20g</h3>
                    </div>

                    <div class="flex pl-8 pt-3 gap-72">
                        <h3>Fat</h3>
                        <h3 class="text-num font-bold">22g</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
ul {

    list-style-type: disc;
    /* Affiche les puces (points) */
    padding-left: 20px ;
    

}

ul li::marker {
    color: #7A284E; /* Couleur des puces */
}


ol li::marker {
    color: #854632; 
    font-weight: 700;
    /* Couleur des puces */
}
ol {
    list-style: decimal;
    padding-left: 20px ;

}

li, h3, span {
        font-family: 'Outfit', sans-serif;
    }
</style>