/**
 * ARTISYNC MOCK DATABASE
 * ──────────────────────
 * Self-contained fake data used when Supabase is unavailable / for demo purposes.
 * All images use Unsplash (free, no API key required).
 */

// ──────────────── PRODUCTS (45 items) ────────────────
const MOCK_PRODUCTS_RAW = [
  { id: 'p01', title: 'Banarasi Silk Saree — Crimson Zari', category: 'Textiles', price: 8500, description: 'Hand-woven Banarasi silk saree with gold zari border from Varanasi.', image_url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600', seller_id: 's1', seller: { name: 'Kamala Devi Weavers' }, product_story: 'Woven over 14 days on a traditional handloom in Varanasi.', created_at: '2024-01-10T10:00:00Z', rating: 4.9, is_virtual: false },
  { id: 'p02', title: 'Phulkari Dupatta — Punjab Gold', category: 'Textiles', price: 2800, description: 'Hand-embroidered Phulkari dupatta with vibrant silk thread work.', image_url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600', seller_id: 's2', seller: { name: 'Surjit Kaur Embroidery' }, product_story: 'Each stitch is a prayer — a tradition passed through five generations.', created_at: '2024-01-12T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p03', title: 'Kanjivaram Silk Saree — Temple Border', category: 'Textiles', price: 14000, description: 'Pure silk Kanjivaram with traditional temple border motifs from Tamil Nadu.', image_url: 'https://images.unsplash.com/photo-1611601679218-c71e6b5a1839?w=600', seller_id: 's3', seller: { name: 'Rajeswari Silks' }, product_story: 'Woven on the banks of Kaveri river.', created_at: '2024-01-14T10:00:00Z', rating: 5.0, is_virtual: false },
  { id: 'p04', title: 'Madhubani Painting — Fish & Lotus', category: 'Paintings', price: 3200, description: 'Authentic Madhubani painting on handmade paper using natural colours.', image_url: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600', seller_id: 's4', seller: { name: 'Mithila Art Studio' }, product_story: 'Fish and Lotus symbolise fertility and prosperity in Mithila tradition.', created_at: '2024-01-16T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p05', title: 'Blue Pottery Vase — Jaipur', category: 'Pottery', price: 1800, description: 'Hand-painted blue pottery vase, glazed with Persian-influenced motifs.', image_url: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=600', seller_id: 's5', seller: { name: 'Amer Pottery Works' }, product_story: 'Mughal artisans brought this craft to Jaipur 400 years ago.', created_at: '2024-01-18T10:00:00Z', rating: 4.6, is_virtual: false },
  { id: 'p06', title: 'Bidriware Box — Silver Inlay', category: 'Metalwork', price: 4500, description: 'Traditional Bidriware zinc box with intricate silver inlay, from Bidar.', image_url: 'https://images.unsplash.com/photo-1620912189869-83f5c0a0c897?w=600', seller_id: 's6', seller: { name: 'Bidar Craft House' }, product_story: 'A 600-year-old craft brought by Persian craftsmen to the Bahmani court.', created_at: '2024-01-20T10:00:00Z', rating: 4.9, is_virtual: false },
  { id: 'p07', title: 'Channapatna Wooden Toys — Set of 5', category: 'Woodwork', price: 950, description: 'Lacquer-turned wooden toys for children, painted with natural dyes.', image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', seller_id: 's7', seller: { name: 'Karnataka Toy Guild' }, product_story: 'Once made for Tipu Sultan\'s court. Safe & eco-friendly.', created_at: '2024-01-22T10:00:00Z', rating: 4.5, is_virtual: false },
  { id: 'p08', title: 'Warli Tribal Painting', category: 'Paintings', price: 2100, description: 'Hand-painted Warli folk painting on black canvas with white pigment.', image_url: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?w=600', seller_id: 's8', seller: { name: 'Palghar Warli Collective' }, product_story: 'Warli paintings are among the oldest art forms in India, dating to 2500 BCE.', created_at: '2024-01-24T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p09', title: 'Copper Puja Thali — Handbeaten', category: 'Metalwork', price: 1600, description: 'Handbeaten copper thali with engraved floral patterns for puja rituals.', image_url: 'https://images.unsplash.com/photo-1610295198203-2de83cacc7a2?w=600', seller_id: 's9', seller: { name: 'Varanasi Metal Arts' }, product_story: 'Each thali is beaten and engraved by hand over two full days.', created_at: '2024-01-26T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p10', title: 'Pashmina Shawl — Natural Ivory', category: 'Textiles', price: 12000, description: '100% pure Pashmina from the underbelly of Changthangi goats, Kashmir.', image_url: 'https://images.unsplash.com/photo-1609767760303-a7bfb5f6b699?w=600', seller_id: 's10', seller: { name: 'Kashmir Pashmina House' }, product_story: 'One shawl uses the fleece of 3 goats and takes 72 hours to weave.', created_at: '2024-01-28T10:00:00Z', rating: 5.0, is_virtual: false },
  { id: 'p11', title: 'Dhokra Brass Elephant', category: 'Metalwork', price: 3800, description: 'Lost-wax cast Dhokra brass elephant from Bastar, Chhattisgarh.', image_url: 'https://images.unsplash.com/photo-1604519706953-f8f9e22c3da1?w=600', seller_id: 's1', seller: { name: 'Kamala Devi Weavers' }, product_story: 'Dhokra is one of the world\'s earliest non-ferrous metal casting traditions.', created_at: '2024-01-30T10:00:00Z', rating: 4.9, is_virtual: false },
  { id: 'p12', title: 'Pattachitra Scroll — Lord Jagannath', category: 'Paintings', price: 5500, description: 'Hand-painted Pattachitra silk scroll depicting the Jagannath Trinity.', image_url: 'https://images.unsplash.com/photo-1580136608529-c9c97d9ca20d?w=600', seller_id: 's2', seller: { name: 'Surjit Kaur Embroidery' }, product_story: 'Painted with natural colours including conch shells and lamp soot.', created_at: '2024-02-01T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p13', title: 'Kolhapuri Chappals — Hand-stitched', category: 'Footwear', price: 1200, description: 'Traditional Kolhapuri sandals handcrafted from vegetable-tanned leather.', image_url: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600', seller_id: 's3', seller: { name: 'Rajeswari Silks' }, product_story: 'A 1000-year-old craft from Kolhapur, Maharashtra.', created_at: '2024-02-03T10:00:00Z', rating: 4.6, is_virtual: false },
  { id: 'p14', title: 'Jamdani Muslin Saree', category: 'Textiles', price: 9800, description: 'Transparent Jamdani muslin with woven geometric motifs.', image_url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600', seller_id: 's4', seller: { name: 'Mithila Art Studio' }, product_story: 'UNESCO recognised heritage craft. One of the finest muslins in the world.', created_at: '2024-02-05T10:00:00Z', rating: 4.9, is_virtual: false },
  { id: 'p15', title: 'Terracotta Horse — Bankura', category: 'Pottery', price: 1400, description: 'Traditional Bankura horse in terracotta, symbol of West Bengal crafts.', image_url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=600', seller_id: 's5', seller: { name: 'Amer Pottery Works' }, product_story: 'The Bankura horse is the symbol of the crafts tradition of West Bengal.', created_at: '2024-02-07T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p16', title: 'Navaratna Silver Necklace', category: 'Jewelry', price: 15000, description: 'Sterling silver necklace set with nine gemstones representing nine planets.', image_url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600', seller_id: 's6', seller: { name: 'Bidar Craft House' }, product_story: 'Each gem is set according to vedic astrology principles.', created_at: '2024-02-09T10:00:00Z', rating: 5.0, is_virtual: false },
  { id: 'p17', title: 'Kashmiri Papier-Mâché Box', category: 'Decor', price: 2200, description: 'Hand-painted papier-mâché box with floral motifs from Srinagar.', image_url: 'https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?w=600', seller_id: 's7', seller: { name: 'Karnataka Toy Guild' }, product_story: 'Introduced by Shah Mir from Iran in the 14th century.', created_at: '2024-02-11T10:00:00Z', rating: 4.6, is_virtual: false },
  { id: 'p18', title: 'Tanjore Painting — Goddess Lakshmi', category: 'Paintings', price: 18000, description: 'Gold-foil Tanjore painting with semi-precious stones and silk cloth.', image_url: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600', seller_id: 's8', seller: { name: 'Palghar Warli Collective' }, product_story: '300-year-old Maratha court craft, famed for its golden luminosity.', created_at: '2024-02-13T10:00:00Z', rating: 5.0, is_virtual: false },
  { id: 'p19', title: 'Ikat Silk Stole — Pochampally', category: 'Textiles', price: 3500, description: 'Single-Ikat woven silk stole from Pochampally, Telangana.', image_url: 'https://images.unsplash.com/photo-1611601679218-c71e6b5a1839?w=600', seller_id: 's9', seller: { name: 'Varanasi Metal Arts' }, product_story: 'The dye-resist technique requires tying threads before weaving begins.', created_at: '2024-02-15T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p20', title: 'Brass Diya Stand — Ganesha', category: 'Metalwork', price: 2400, description: 'Handcrafted brass Ganesha diya stand with elephant motif base.', image_url: 'https://images.unsplash.com/photo-1620912189869-83f5c0a0c897?w=600', seller_id: 's10', seller: { name: 'Kashmir Pashmina House' }, product_story: 'Traditionally lit at every auspicious occasion in Indian homes.', created_at: '2024-02-17T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p21', title: 'Lambani Patch-work Bag', category: 'Accessories', price: 1100, description: 'Colourful patch-work bag with mirror-work by Lambani tribe, Karnataka.', image_url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600', seller_id: 's1', seller: { name: 'Kamala Devi Weavers' }, product_story: 'Lambani women stitch their life stories into fabric.', created_at: '2024-02-19T10:00:00Z', rating: 4.6, is_virtual: false },
  { id: 'p22', title: 'Kondapalli Wooden Elephant', category: 'Woodwork', price: 780, description: 'Bright lacquer-painted wooden elephant from Kondapalli, Andhra Pradesh.', image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', seller_id: 's2', seller: { name: 'Surjit Kaur Embroidery' }, product_story: 'Made from tella poniki wood found in local forests.', created_at: '2024-02-21T10:00:00Z', rating: 4.5, is_virtual: false },
  { id: 'p23', title: 'Gond Painting — Tiger', category: 'Paintings', price: 4200, description: 'Vibrant Gond tribal painting on canvas from Madhya Pradesh.', image_url: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?w=600', seller_id: 's3', seller: { name: 'Rajeswari Silks' }, product_story: 'Gond art uses thousands of tiny dots and lines to build organic patterns.', created_at: '2024-02-23T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p24', title: 'Silver Payal — Tribal Ghungroo', category: 'Jewelry', price: 5500, description: 'Sterling silver anklets with traditional ghungroo bells, Rajasthan.', image_url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600', seller_id: 's4', seller: { name: 'Mithila Art Studio' }, product_story: 'Worn by Rajasthani women since the Mughal era.', created_at: '2024-02-25T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p25', title: 'Handblock Printed Kurta — Bagru', category: 'Clothing', price: 1800, description: 'Handblock-printed cotton kurta using natural indigo dye, Rajasthan.', image_url: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600', seller_id: 's5', seller: { name: 'Amer Pottery Works' }, product_story: 'Block printing is done with centuries-old teak wood blocks.', created_at: '2024-02-27T10:00:00Z', rating: 4.6, is_virtual: false },
  { id: 'p26', title: 'Kalamkari Table Runner', category: 'Textiles', price: 1600, description: 'Hand-painted Kalamkari table runner with mythological motifs.', image_url: 'https://images.unsplash.com/photo-1609767760303-a7bfb5f6b699?w=600', seller_id: 's6', seller: { name: 'Bidar Craft House' }, product_story: 'Kalam means pen — every line is drawn freehand with a bamboo pen.', created_at: '2024-03-01T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p27', title: 'Dokra Bell Metal Idol — Lakshmi', category: 'Metalwork', price: 6800, description: 'Lost-wax bell-metal Lakshmi idol from Odisha tribal tradition.', image_url: 'https://images.unsplash.com/photo-1604519706953-f8f9e22c3da1?w=600', seller_id: 's7', seller: { name: 'Karnataka Toy Guild' }, product_story: 'Each idol is cast in a clay mould that is destroyed after a single casting.', created_at: '2024-03-03T10:00:00Z', rating: 4.9, is_virtual: false },
  { id: 'p28', title: 'Rogan Art Wall Panel', category: 'Paintings', price: 7500, description: 'Rogan castor-oil painted panel from Kutch, one of the rarest crafts.', image_url: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600', seller_id: 's8', seller: { name: 'Palghar Warli Collective' }, product_story: 'Only a single Khatri family in India still practices Rogan painting.', created_at: '2024-03-05T10:00:00Z', rating: 5.0, is_virtual: false },
  { id: 'p29', title: 'Kathakali Mask — Performance Grade', category: 'Decor', price: 4800, description: 'Hand-crafted Kathakali performance mask using papier-mâché, Kerala.', image_url: 'https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?w=600', seller_id: 's9', seller: { name: 'Varanasi Metal Arts' }, product_story: 'Made by master craftsmen who provide masks to Kathakali troupes.', created_at: '2024-03-07T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p30', title: 'Kullu Woollen Shawl — Geometric', category: 'Textiles', price: 3800, description: 'Hand-woven woollen shawl with geometric Kullu patterns, Himachal.', image_url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600', seller_id: 's10', seller: { name: 'Kashmir Pashmina House' }, product_story: 'Woven on traditional pit-looms at altitudes above 2500 metres.', created_at: '2024-03-09T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p31', title: 'Brass Nataraja Statue — 12 inch', category: 'Metalwork', price: 5200, description: 'Hand-forged brass Nataraja depicting the cosmic dance of Shiva.', image_url: 'https://images.unsplash.com/photo-1620912189869-83f5c0a0c897?w=600', seller_id: 's1', seller: { name: 'Kamala Devi Weavers' }, product_story: 'Forged using the same method used in Chola bronze casting.', created_at: '2024-03-11T10:00:00Z', rating: 4.9, is_virtual: false },
  { id: 'p32', title: 'Pichwai Painting — Krishna Leela', category: 'Paintings', price: 22000, description: 'Large Pichwai on cloth depicting Krishna\'s Raas Leela, Nathdwara.', image_url: 'https://images.unsplash.com/photo-1580136608529-c9c97d9ca20d?w=600', seller_id: 's2', seller: { name: 'Surjit Kaur Embroidery' }, product_story: 'Pichwais are hung behind the idol of Shrinathji in the temple.', created_at: '2024-03-13T10:00:00Z', rating: 5.0, is_virtual: false },
  { id: 'p33', title: 'Aranmula Kannadi Metal Mirror', category: 'Metalwork', price: 9500, description: 'Sacred metal mirror hand-polished by master craftsmen of Aranmula.', image_url: 'https://images.unsplash.com/photo-1610295198203-2de83cacc7a2?w=600', seller_id: 's3', seller: { name: 'Rajeswari Silks' }, product_story: 'The alloy composition is a family secret passed down for generations.', created_at: '2024-03-15T10:00:00Z', rating: 5.0, is_virtual: false },
  { id: 'p34', title: 'Kutchi Bandhani Saree — Saffron', category: 'Textiles', price: 6200, description: 'Tie-dye Bandhani saree in saffron with intricate dot patterns from Kutch.', image_url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600', seller_id: 's4', seller: { name: 'Mithila Art Studio' }, product_story: 'Each dot is tied by hand — a 200×200 cm saree has 300,000 knots.', created_at: '2024-03-17T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p35', title: 'Bamboo Weave Lamp Shade', category: 'Decor', price: 1350, description: 'Hand-woven bamboo lamp shade from Tripura, eco-friendly home décor.', image_url: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=600', seller_id: 's5', seller: { name: 'Amer Pottery Works' }, product_story: 'North-East India has the richest bamboo craft tradition in Asia.', created_at: '2024-03-19T10:00:00Z', rating: 4.5, is_virtual: false },
  { id: 'p36', title: 'Gemstone Studded Clutch — Rajasthani', category: 'Accessories', price: 2800, description: 'Handcrafted minaudière clutch with mirror-work and gemstone embellishment.', image_url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600', seller_id: 's6', seller: { name: 'Bidar Craft House' }, product_story: 'Made by Rajasthani women\'s cooperatives in Jodhpur.', created_at: '2024-03-21T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p37', title: 'Sandalwood Ganesha — 6 inch', category: 'Woodwork', price: 4200, description: 'Hand-carved mysore sandalwood Ganesha idol with intricate detailing.', image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', seller_id: 's7', seller: { name: 'Karnataka Toy Guild' }, product_story: 'Mysore sandalwood has the highest oil content of any sandalwood variety.', created_at: '2024-03-23T10:00:00Z', rating: 4.9, is_virtual: false },
  { id: 'p38', title: 'Dokra Necklace — Tribal Motifs', category: 'Jewelry', price: 3200, description: 'Dhokra brass necklace with tribal animal motifs from Bastar.', image_url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600', seller_id: 's8', seller: { name: 'Palghar Warli Collective' }, product_story: 'One of the oldest metal craft traditions, 4000+ years old.', created_at: '2024-03-25T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p39', title: 'Kaitha Wood Carved Panel', category: 'Woodwork', price: 8800, description: 'Intricate kaitha (catechu) wood carved panel with floral arabesques.', image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', seller_id: 's9', seller: { name: 'Varanasi Metal Arts' }, product_story: 'Saharanpur wood carving school — known for its detail and longevity.', created_at: '2024-03-27T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p40', title: 'Handmade Incense Sticks — Nag Champa', category: 'Wellness', price: 350, description: 'Hand-rolled Nag Champa incense using sandalwood, frangipani & jasmine.', image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600', seller_id: 's10', seller: { name: 'Kashmir Pashmina House' }, product_story: 'Used in temples and homes across India for centuries.', created_at: '2024-03-29T10:00:00Z', rating: 4.6, is_virtual: false },
  { id: 'p41', title: 'Zardozi Embroidered Cushion Cover', category: 'Textiles', price: 2400, description: 'Velvet cushion cover with gold zardozi embroidery, Lucknow.', image_url: 'https://images.unsplash.com/photo-1609767760303-a7bfb5f6b699?w=600', seller_id: 's1', seller: { name: 'Kamala Devi Weavers' }, product_story: 'Zardozi was the embroidery of Mughal emperors.', created_at: '2024-04-01T10:00:00Z', rating: 4.8, is_virtual: false },
  { id: 'p42', title: 'Moonj Grass Basket Set', category: 'Decor', price: 880, description: 'Hand-coiled Moonj grass storage baskets in natural and dyed colours.', image_url: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=600', seller_id: 's2', seller: { name: 'Surjit Kaur Embroidery' }, product_story: 'Moonj grass grows on the banks of the Ganga and Yamuna.', created_at: '2024-04-03T10:00:00Z', rating: 4.5, is_virtual: false },
  { id: 'p43', title: 'Silk Kantha Stole — Bengal', category: 'Textiles', price: 2900, description: 'Hand-embroidered Kantha stole on pure silk with running stitch motifs.', image_url: 'https://images.unsplash.com/photo-1611601679218-c71e6b5a1839?w=600', seller_id: 's3', seller: { name: 'Rajeswari Silks' }, product_story: 'Kantha stitch was traditionally used to recycle old sarees into new textiles.', created_at: '2024-04-05T10:00:00Z', rating: 4.7, is_virtual: false },
  { id: 'p44', title: 'Handmade Jute Rug — Natural', category: 'Decor', price: 1750, description: 'Handwoven natural jute rug with chevron pattern, eco-friendly.', image_url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=600', seller_id: 's4', seller: { name: 'Mithila Art Studio' }, product_story: 'Jute is called "the golden fibre" of Bengal — entirely biodegradable.', created_at: '2024-04-07T10:00:00Z', rating: 4.6, is_virtual: false },
  { id: 'p45', title: 'Lac Bangle Set — Rajasthani', category: 'Jewelry', price: 650, description: 'Traditional lac bangles studded with mirror and stone, Jaipur.', image_url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600', seller_id: 's5', seller: { name: 'Amer Pottery Works' }, product_story: 'Lac bangles are an inseparable part of Rajasthani bridal trousseau.', created_at: '2024-04-09T10:00:00Z', rating: 4.6, is_virtual: false },
]

const HANDICRAFT_IMAGE_BANK: Record<string, string[]> = {
  Textiles: ['/saree.jpg'],
  Pottery: ['/pottery.jpg'],
  Metalwork: ['/gold%26jwellery.jpg'],
  Jewelry: ['/gold%26jwellery.jpg'],
  Footwear: ['/saree.jpg'],
  Clothing: ['/saree.jpg'],
  Accessories: ['/gold%26jwellery.jpg'],
  Woodwork: ['/pottery.jpg'],
  Wellness: ['/pottery.jpg'],
  Paintings: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Mithila_Painting_at_Patna_Junction.jpg',
    'https://commons.wikimedia.org/wiki/Special:FilePath/A_Warli_painting_by_Jivya_Soma_Mashe,_Thane_district.jpg',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Medinipur_Patachitra_-_durga.jpg',
  ],
  Decor: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Painted_prayers,_Warli_paintings,_at_Sanskriti_Kendra,_Anandagram,_New_Delhi.jpg',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Jadupatua_painting.jpg',
    '/pottery.jpg',
  ],
}

export const getHandicraftImageByCategory = (category: string, index: number): string => {
  const pool = HANDICRAFT_IMAGE_BANK[category] || ['/pottery.jpg']
  return pool[index % pool.length]
}

export const MOCK_PRODUCTS = MOCK_PRODUCTS_RAW.map((product, index) => ({
  ...product,
  image_url: getHandicraftImageByCategory(product.category, index),
}))

// ──────────────── REELS (3 looping videos) ────────────────
export const MOCK_REELS = [
  {
    id: 1,
    user_id: 'u1',
    product_id: 'p01',
    video_url: 'https://videos.pexels.com/video-files/7205821/7205821-sd_960_540_24fps.mp4',
    caption: '🧵 Watch the magic of Banarasi silk weaving — pure gold zari on a traditional handloom in Varanasi! #Artisync #HandloomIndia',
    likes: 2847,
    created_at: '2024-03-01T10:00:00Z',
    profiles: { name: 'Kamala Devi Weavers', profile_image: null },
    products: { id: 'p01', title: 'Banarasi Silk Saree — Crimson Zari' }
  },
  {
    id: 2,
    user_id: 'u2',
    product_id: 'p05',
    video_url: 'https://videos.pexels.com/video-files/4683406/4683406-hd_720_1298_50fps.mp4',
    caption: '🏺 The art of Blue Pottery — see how artisans hand-paint these stunning Jaipur vases using Persian techniques! #BluePottery #Jaipur',
    likes: 1923,
    created_at: '2024-03-05T10:00:00Z',
    profiles: { name: 'Amer Pottery Works', profile_image: null },
    products: { id: 'p05', title: 'Blue Pottery Vase — Jaipur' }
  },
  {
    id: 3,
    user_id: 'u3',
    product_id: 'p03',
    video_url: 'https://videos.pexels.com/video-files/6720710/6720710-hd_1920_1080_25fps.mp4',
    caption: '✨ Kanjivaram silk — the pride of Tamil Nadu weaving tradition. Every thread tells a thousand year old story. #KanjivaramSaree',
    likes: 3412,
    created_at: '2024-03-10T10:00:00Z',
    profiles: { name: 'Rajeswari Silks', profile_image: null },
    products: { id: 'p03', title: 'Kanjivaram Silk Saree — Temple Border' }
  },
]

// ──────────────── AUCTIONS (8 items) ────────────────
const HOUR = 1000 * 60 * 60
const NOW = Date.now()

export const MOCK_AUCTIONS = [
  {
    id: 'a01',
    product_id: 'p18',
    status: 'running',
    starting_price: 15000,
    starts_at: new Date(NOW - HOUR * 6).toISOString(),
    ends_at: new Date(NOW + HOUR * 18).toISOString(),
    product: { title: 'Tanjore Painting — Goddess Lakshmi', image_url: MOCK_PRODUCTS.find(p => p.id === 'p18')?.image_url || '/pottery.jpg', price: 18000 },
    bids: [{ amount: 18500 }, { amount: 16000 }, { amount: 15000 }],
  },
  {
    id: 'a02',
    product_id: 'p32',
    status: 'running',
    starting_price: 20000,
    starts_at: new Date(NOW - HOUR * 12).toISOString(),
    ends_at: new Date(NOW + HOUR * 36).toISOString(),
    product: { title: 'Pichwai Painting — Krishna Leela', image_url: MOCK_PRODUCTS.find(p => p.id === 'p32')?.image_url || '/pottery.jpg', price: 22000 },
    bids: [{ amount: 24000 }, { amount: 21000 }, { amount: 20500 }],
  },
  {
    id: 'a03',
    product_id: 'p10',
    status: 'running',
    starting_price: 10000,
    starts_at: new Date(NOW - HOUR * 3).toISOString(),
    ends_at: new Date(NOW + HOUR * 45).toISOString(),
    product: { title: 'Pashmina Shawl — Natural Ivory', image_url: MOCK_PRODUCTS.find(p => p.id === 'p10')?.image_url || '/saree.jpg', price: 12000 },
    bids: [{ amount: 11500 }, { amount: 10800 }, { amount: 10200 }],
  },
  {
    id: 'a04',
    product_id: 'p28',
    status: 'upcoming',
    starting_price: 6000,
    starts_at: new Date(NOW + HOUR * 24).toISOString(),
    ends_at: new Date(NOW + HOUR * 72).toISOString(),
    product: { title: 'Rogan Art Wall Panel', image_url: MOCK_PRODUCTS.find(p => p.id === 'p28')?.image_url || '/pottery.jpg', price: 7500 },
    bids: [],
  },
  {
    id: 'a05',
    product_id: 'p33',
    status: 'running',
    starting_price: 8000,
    starts_at: new Date(NOW - HOUR * 1).toISOString(),
    ends_at: new Date(NOW + HOUR * 10).toISOString(),
    product: { title: 'Aranmula Kannadi Metal Mirror', image_url: MOCK_PRODUCTS.find(p => p.id === 'p33')?.image_url || '/gold%26jwellery.jpg', price: 9500 },
    bids: [{ amount: 9200 }, { amount: 8500 }],
  },
  {
    id: 'a06',
    product_id: 'p16',
    status: 'upcoming',
    starting_price: 12000,
    starts_at: new Date(NOW + HOUR * 48).toISOString(),
    ends_at: new Date(NOW + HOUR * 96).toISOString(),
    product: { title: 'Navaratna Silver Necklace', image_url: MOCK_PRODUCTS.find(p => p.id === 'p16')?.image_url || '/gold%26jwellery.jpg', price: 15000 },
    bids: [],
  },
  {
    id: 'a07',
    product_id: 'p06',
    status: 'running',
    starting_price: 3500,
    starts_at: new Date(NOW - HOUR * 8).toISOString(),
    ends_at: new Date(NOW + HOUR * 4).toISOString(),
    product: { title: 'Bidriware Box — Silver Inlay', image_url: MOCK_PRODUCTS.find(p => p.id === 'p06')?.image_url || '/gold%26jwellery.jpg', price: 4500 },
    bids: [{ amount: 4800 }, { amount: 4200 }, { amount: 3800 }],
  },
  {
    id: 'a08',
    product_id: 'p37',
    status: 'running',
    starting_price: 3500,
    starts_at: new Date(NOW - HOUR * 2).toISOString(),
    ends_at: new Date(NOW + HOUR * 26).toISOString(),
    product: { title: 'Sandalwood Ganesha — 6 inch', image_url: MOCK_PRODUCTS.find(p => p.id === 'p37')?.image_url || '/pottery.jpg', price: 4200 },
    bids: [{ amount: 3900 }, { amount: 3600 }],
  },
]

// ──────────────── LEADERBOARD (5 entries) ────────────────
export const MOCK_LEADERS = [
  { user_id: 'u01', name: 'Priya Sharma', mitraPoints: 28500, auctionsWon: 24, profile_image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
  { user_id: 'u02', name: 'Arjun Mehta', mitraPoints: 22100, auctionsWon: 18, profile_image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun' },
  { user_id: 'u03', name: 'Kavya Nair', mitraPoints: 19800, auctionsWon: 14, profile_image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya' },
  { user_id: 'u04', name: 'Rahul Verma', mitraPoints: 16400, auctionsWon: 11, profile_image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul' },
  { user_id: 'u05', name: 'Sneha Gupta', mitraPoints: 14200, auctionsWon: 9, profile_image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha' },
]
