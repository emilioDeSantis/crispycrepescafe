import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import PageHero from "../components/PageHero";

const inter = Inter({ subsets: ["latin"] });

interface ReviewBoxProps {
    title: string;
    author: string;
    source: string;
    content: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ title, author, source, content }) => {
    return (
        <div
            style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h3
                style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    color: "#19bb7d",
                }}
            >
                {title}
            </h3>
            <p style={{ whiteSpace: "pre-wrap", marginBottom: "1rem" }}>
                {content}
            </p>
            <div
                style={{
                    fontStyle: "italic",
                    color: "#666",
                }}
            >
                <span>- By {author}</span>
                <br />
                <span>{source}</span>
            </div>
        </div>
    );
};

export default function Reviews(): JSX.Element {
    return (
        <main style={{ width: "100%" }}>
            <PageHero
                backgroundImage="/crepes.png"
                subtitle="BRINGING THE"
                title="Delicious Taste of French Crepes"
            />

            <div style={{
                padding: "4rem 1rem",
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
            }}>
                <h2 style={{
                    fontSize: "2.5rem",
                    color: "#19bb7d",
                    fontFamily: "Alex Brush",
                    lineHeight: 1,  
                    marginBottom: "0.5rem",
                }}>
                    What People Say
                </h2>
                <h3 style={{
                    fontSize: "3rem",
                    color: "#333",
                    marginBottom: "2rem",
                }}>
                    Customer Reviews
                </h3>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4rem",
                }}>
                    <ReviewBox
                        title="Crispy Crepes Cafe – Don't Be Afraid of the French"
                        author="Nina MacLaughlin"
                        source="Boston Phoenix"
                        content={`Maybe it's the accents, but French food always seems to fall under the heading of gourmet (the fries are an exception). Escargot, pate, beef bourguignon. In terms of price and palate, French food occupies a secure position at the top of the food ladder – a ladder you may be just starting to climb. The tiny cafe has the feel of a slightly hipped-up pizza place. A high ceiling, exposed brick walls, and track lighting set off a landscape typical of college cafes; the order-at-the-counter routine, tiled table, and paper napkins – along with Tom Petty playing on the kitchen radio – give the place a gimickless, low-key feel.

At nine o'clock on a recent Tuesday night, four of the seven tables were occupied, and people picking up take out orders arrived in a steady stream, some dressed in sweat pants, some in skirts. The fanciest things about this venue is the circumflex (that little triangle thing) over the e. Otherwise, it's really just a pizza place with crepes.

And there are a lot of crepes to choose from. In the savory-crepe category, the fillings sound like toppings, from the simple (crepe au fromage, with two cheeses) to the deluxe (smoke salmon, tomato, onion, chopped egg, and cream cheese). The crepe containing tomato, grilled zucchini, and roasted pepper with goat cheese ($5.25) is a pocket of pleasure. Long strips of red pepper and large chunks of zucchini keep their individual flavors inside the light, crispy pancake. The Tuscany, with pesto-scented chicken, tomato, spinach, and mozarella ($5.95), is filled with a generous amount of chicken and cheese; a whisper of basil pulls it together. In both crepes, the veggies are fresh, warm, and juicy.

Crispy Crepes Cafe's sweet crepes are exceptional, and like their savory counterparts, range from the subtle to the almost overwhelming. A filling of strawberries, bananas, and chocolate ($5.25) flirts with the latter. Warm banana slices slathered in liquid chocolate and the sweet flush of strawberries all folded within a delicate, golden crust make a decadent treat. The understated sweetness of the ricotta-cheese crepe, with a choice of apricot, raspberry or strawberry jam ($4.50), offers a subtler experience, but one that's no less satisfying.

There's also a selection of salads (around $6) and pastas (around $8). But why bother? You can get those anywhere. At Crispy Crepes Cafe, enjoy fancy French food with pizza-place personality.`}
                    />

                    <ReviewBox
                        title="Sweet dreams of crepes at Crispy Crepes Cafe"
                        author="Anand Vaishnav"
                        source="Boston Globe"
                        content={`It's generally a good sign if you have pleasant dreams about the restaurant you're reviewing. In the case of the Crispy Crepes Cafe, those dreams consisted of the following: tender, triangle-shaped crepes cooked just right, topped with powdered sugar and shaved coconut, oozing with rich chocolate sauce and thin banana slices. It was tragic to wake up from something like that. But those dreams can come true at the Crispy Crepes Cafe, an unassuming 20-seat restaurant on the edge of Boston University. From the outside, the place resembles a gaudy diner, with giant letters on the front windows urging passersby to "join us for breakfast." On the inside, it's a bit drafty, but the exposed brick and wooden chairs create a homey feel. The café's owners, brothers Brahim and Said Bendok, have designed a menu that appeals to crepe connoisseurs as well as hung-over students seeking a soothing Saturday morning breakfast. The café serves breakfast, lunch, and dinner, with a menu that includes omelets, pasta, salad, pancakes, and French toast. Service is easy-going, pleasant, and efficient.

We arrive for and start with bruschetta ($3.95), biting into warm pieces of bread with generous dollops of salted tomatoes. It's a little oily, which makes the bread spongy, but there's plenty of flavor. A house chopped salad ($4.75) is standard fare of lettuce, tomato, cucumber, onion, carrots, and eggs. Small pieces of warm pita bread on top add a nice touch.

We practically attack the crepes when they arrive. The Southwest crepe ($5.95) comes packed with spicy marinated chicken, wilted spinach, and cheddar. But the signature component is a mild jalapeno corn salsa of garlic, cilantro, tomatoes, and lime. This is a zesty-tasting crepe with a kick. The California crepe ($5.95) tastes sunny and fresh with turkey, tomato, spinach, cucumber, avocado, and jack cheese. One companion calls the French-dip crepe ($6.25) a "man crepe": tender chunks of beef with caramelized onions, garlic, and brie, a combination right out of a steak house.

Brahim Bendok explains later that the crepes — made of a simple batter of eggs, flour, and milk — are 16 inches in diameter, which is why they are stuffed to the brim. The crepes are big enough for a meal. Occasionally, though, more turns out to be less, especially with the vegetarian crepes. The Santa Fe crepe ($5.75) tastes bland even with avocados, cucumbers, spinach, shredded carrots, mushrooms, and jack cheese. The crespelle alla Fiorentina crepe ($5.75) — brimming with plum tomatoes, spinach, mushrooms, and ricotta cheese — needed more cheese or spices to satisfy. We also sampled chicken Florentine ($8.25), which has big chunks of chicken, tomato, and spinach draped over linguine and swimming in a pink cream sauce. It's good, but the sauce is watery and lacks texture.

Dessert's a winner, and the coconut-banana-chocolate crepe ($4.95) left one companion scraping the plate. The apple-brown-sugar-cinnamon-caramel crepe ($5.25) comes drizzled with caramel sauce. Mixed with the brown sugar, it's a delight for those with a sweet tooth. The banana and honey-glazed almond crepe ($4.95) is a bit dry but still satisfying, with sprinkles of crunchy almonds and fresh bananas.

Despite the restaurant's name, the crepes are not crispy — they're delightfully warm, moist, and served fresh off the griddle. Brahim Bendok says the "crispy" refers to the fact that the crepes are cooked to a slight golden brown. Whatever the formula, it mostly works, and the prices are a steal. And let's face it: Any restaurant that goes through five jars of Nutella chocolate spread in a day is doing something right.`}
                    />
                </div>
            </div>
        </main>
    );
}