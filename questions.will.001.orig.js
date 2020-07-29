questions = [
    {
        //"question": "Oppression by corporations is more of a concern than oppression by governments.",
        "question": "The growing influence of corporations is more of a concern than the growing influence of governments.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "It is necessary for the government to intervene in the economy to protect consumers.",
        "question": "It is necessary for the government intervene in the economy periodically to protect consumers.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        // The idea behind the phrase is that a freer market is one in which people are free to engage in more different
        // types of economic activity without regulation or restriction. In other words, since "the market" is just a term 
        // for a whole bunch of actions taken by people (buying things, selling things, signing contracts, etc.), a 
        // "free market" is really just a bunch of people with a lot of economic freedom.
        // https://www.reddit.com/r/communism101/comments/534r9f/what_does_the_freer_the_market_the_freer_the/
        // "question": "The freer the markets, the freer the people.",
        "question": "A freer market is one in which people are free to engage in more different types of economic activity without restriction.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        // ?????
        //https://www.quora.com/It-is-better-to-maintain-a-balanced-budget-than-to-ensure-welfare-for-all-citizens-How-much-do-you-agree-with-the-following-statement
        "question": "It is better to maintain a balanced budget than to ensure welfare for all citizens.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //https://psmag.com/news/benefits-government-funded-research-86168
        //https://academicmatters.ca/the-public-value-of-public-funding-for-research/
        "question": "Publicly-funded research is more beneficial to the people than leaving it to the market.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {   
        // Tarriff - Rather than being used to raise revenue, they are imposed to increase the price
        // of foreign goods in order to make domestic produce comparatively cheaper, with the aim of
        // encouraging domestic production by protecting local firms from global competition.
        //https://www.theguardian.com/business/2018/jul/06/what-are-trade-tariffs-and-who-will-they-affect#:~:text=Rather%20than%20being%20used%20to,local%20firms%20from%20global%20competition.
        //"question": "Tariffs on international trade are important to encourage local production.",
        "question": "It is important to make laws which make imported goods more expensive. This makes domestic products more competative.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        // https://en.wikipedia.org/wiki/From_each_according_to_his_ability,_to_each_according_to_his_needs
        // "From each according to his ability, to each according to his needs" is a slogan popularised
        // by Karl Marx in his 1875 Critique of the Gotha Program.[1][2] The principle refers to free 
        // access to and distribution of goods, capital and services.[3] In the Marxist view, such an 
        // arrangement will be made possible by the abundance of goods and services that a developed communist
        // system will be capable to produce; the idea is that, with the full development of socialism and 
        // unfettered productive forces, there will be enough to satisfy everyone's needs.
        "question": "From each according to his ability, to each according to his needs.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        // https://www.theatlantic.com/politics/archive/2014/03/the-conservative-myth-of-a-social-safety-net-built-on-charity/284552/
        // https://www.quora.com/It-would-be-best-if-social-programs-were-abolished-in-favor-of-private-charity-How-much-do-you-agree-with-the-following-statement
        // "question": "It would be best if social programs were abolished in favor of private charity.",
        "question": "Churches and other charities should give money to help the needy, not the government.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "Taxes should be increased on the rich to provide for the poor.",
        "question": "If you are rich, you should be taxed more to help out poor people",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {   
        // https://www.quora.com/Inheritance-is-a-legitimate-form-of-wealth-How-much-do-you-agree-with-the-following-statement#:~:text=100%25.,will%20it%20to%20their%20progeny.
        // Inherited wealth is nothing more than wealth bequeathed to an heir from the 
        // individual who owned/earned that wealth. It is that person’s right to determine
        // what happens to his/her wealth (property), whether they give it to charity, spend
        // it on wine, women & song, or will it to their progeny.
        // "question": "Inheritance is a legitimate form of wealth.",
        "question": "If your parents die and leave you all of their money in their will, you are free to spend it however you like.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": -5
        }
    },
    {
        //https://www.reddit.com/r/AskLibertarians/comments/dni205/public_utilities_like_roads_and_electricity/
        "question": "Basic utilities like roads and electricity should be publicly owned.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "Government intervention is a threat to the economy.",
        "question": "Government intervention is a threat to the economy.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "Those with a greater ability to pay should receive better healthcare.",
        "question": "If you are rich and get sick you should be able to spend your money to get the best treatment.",
        "effect": {
            "econ": -10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "Quality education is a right of all people.",
        "question": "Anyone that wants to go to school should be able to go for free.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 5
        }
    },
    {
        //https://en.wikipedia.org/wiki/Means_of_production#:~:text=society%20at%20large.-,Determinant%20of%20class,passive%20income%20from%20their%20operation.
        "question": "The means of production should belong to the workers who use them.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //https://www.quora.com/What-arguments-are-there-for-why-the-United-Nations-should-be-abolished
        "question": "The United Nations should be abolished.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        //"question": "Military action by our nation is often necessary to protect it.",
        "question": "We often must go to war to protect our country.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        //"question": "I support regional unions, such as the European Union.",
        "question": "It is good that countries join together and agree to help each other.",
        "effect": {
            "econ": -5,
            "dipl": 10,
            "govt": 10,
            "scty": 5
        }
    },
    {
        //"question": "It is important to maintain our national sovereignty.",
        "question": "It is important that our country remains independent and is governed by the people that live here.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        //"question": "A united world government would be beneficial to mankind.",
        "question": "If the whole world was just one country, mankind would benefit.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "It is more important to retain peaceful relations than to further our strength.",
        "question": "It is more important to keep peace than to prepare for war.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "Wars do not need to be justified to other countries.",
        "question": "If our country must go to war with another, we don't need any other country's permission.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        //"question": "Military spending is a waste of money.",
        "question": "When the government spends money on the military, it is a waste of money.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 10,
            "scty": 0
        }
    },
    {
        //"question": "International aid is a waste of money.",
        "question": "Giving money to those in need that don't live in our country is a waste of money.",
        "effect": {
            "econ": -5,
            "dipl": -10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "My nation is great.",
        "question": "My country is great.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        //"question": "Research should be conducted on an international scale.",
        "question": "Inventors from different countries should coopoerate to come up with new technologies.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 10
        }
    },
    {
        //"question": "Governments should be accountable to the international community.",
        "question": "Our country should obey international laws that all countries have agreed upon.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 5,
            "scty": 0
        }
    },
    {
        //"question": "Even when protesting an authoritarian government, violence is not acceptable.",
        "question": "Protestors should never cause harm to anyone or any property.",
        "effect": {
            "econ": 0,
            "dipl": 5,
            "govt": -5,
            "scty": 0
        }
    },
    {
        //"question": "My religious values should be spread as much as possible.",
        "question": "Many of my values come from my religion.",
        "effect": {
            "econ": 0,
            "dipl": -5,
            "govt": -10,
            "scty": -10
        }
    },
    {
        //"question": "Our nation's values should be spread as much as possible.",
        "question": "Many of our country's values come from different religions.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -5,
            "scty": 0
        }
    },
    {
        "question": "It is very important to maintain law and order.",
        "effect": {
            "econ": 0,
            "dipl": -5,
            "govt": -10,
            "scty": -5
        }
    },
    {
        //"question": "The general populace makes poor decisions.",
        "question": "The average person makes poor decisions.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        //"question": "Physician-assisted suicide should be legal.",
        "question": "If you're sick and there is no hope to live, it is not against the law to have a doctor help you end your life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "question": "The sacrifice of some civil liberties is necessary to protect us from acts of terrorism.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "question": "Government surveillance is necessary in the modern world.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "question": "The very existence of the state is a threat to our liberty.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "question": "Regardless of political opinions, it is important to side with your country.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": -5
        }
    },
    {
        "question": "All authority should be questioned.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 5
        }
    },
    {
        "question": "A hierarchical state is best.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "question": "It is important that the government follows the majority opinion, even if it is wrong.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "question": "The stronger the leadership, the better.",
        "effect": {
            "econ": 0,
            "dipl": -10,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "question": "Democracy is more than a decision-making process.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "question": "Environmental regulations are essential.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "A better world will come from automation, science, and technology.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "Children should be educated in religious or traditional values.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "question": "Traditions are of no value on their own.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "Religion should play a role in government.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "question": "Churches should be taxed the same way other institutions are taxed.",
        "effect": {
            "econ": 5,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "Climate change is currently one of the greatest threats to our way of life.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "It is important that we work as a united world to combat climate change.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "Society was better many years ago than it is now.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "question": "It is important that we maintain the traditions of our past.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "question": "It is important that we think in the long term, beyond our lifespans.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "Reason is more important than maintaining our culture.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "Drug use should be legalized or decriminalized.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 2
        }
    },
    {
        "question": "Same-sex marriage should be legal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 10,
            "scty": 10
        }
    },
    {
        "question": "No cultures are superior to others.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 5,
            "scty": 10
        }
    },
    {
        "question": "Sex outside marriage is immoral.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "question": "If we accept migrants at all, it is important that they assimilate into our culture.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -5,
            "scty": -10
        }
    },
    {
        "question": "Abortion should be prohibited in most or all cases.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "question": "Gun ownership should be prohibited for those without a valid reason.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": 0
        }
    },
    {
        "question": "I support single-payer, universal healthcare.",
        "effect": {
            "econ": 10,
            "dipl": 0,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "question": "Prostitution should be illegal.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": -10,
            "scty": -10
        }
    },
    {
        "question": "Maintaining family values is essential.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "question": "To chase progress at all costs is dangerous.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": -10
        }
    },
    {
        "question": "Genetic modification is a force for good, even on humans.",
        "effect": {
            "econ": 0,
            "dipl": 0,
            "govt": 0,
            "scty": 10
        }
    },
    {
        "question": "We should open our borders to immigration.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 10,
            "scty": 0
        }
    },
    {
        "question": "Governments should be as concerned about foreigners as they are about their own citizens.",
        "effect": {
            "econ": 0,
            "dipl": 10,
            "govt": 0,
            "scty": 0
        }
    },
    {
        "question": "All people - regardless of factors like culture or sexuality - should be treated equally.",
        "effect": {
            "econ": 10,
            "dipl": 10,
            "govt": 10,
            "scty": 10
        }
    },
    {
        "question": "It is important that we further my group's goals above all others.",
        "effect": {
            "econ": -10,
            "dipl": -10,
            "govt": -10,
            "scty": -10
        }
    }
];