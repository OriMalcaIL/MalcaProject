import pynecone as pc
image1 = pc.container(pc.image(src="https://picsum.photos/300/200", style={"object-fit": "cover"}))
image2 = pc.container(pc.image(src="https://picsum.photos/300/201", style={"object-fit": "cover"}))
image3 = pc.container(pc.image(src="https://picsum.photos/300/202", style={"object-fit": "cover"}))
image4 = pc.container(pc.image(src="https://picsum.photos/300/203", style={"object-fit": "cover"}))

image_list = [image4, image3, image2, image1]