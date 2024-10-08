import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getItemsFiles(type) {
    const itemsDirectory = path.join(process.cwd(), 'src/data', type);
    return fs.readdirSync(itemsDirectory);
}

export function getRichText(richTextFile) {
    const filePath = path.join(process.cwd(), `src/data/rich-text/${richTextFile}`);
    
    if (!fs.existsSync(filePath)) {
        throw new Error(`The file ${filePath} does not exist.`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log('fileContent:', fileContent);
    const { data } = matter(fileContent);
    console.log('data:', data);
    return data;
}

export function getItemData(itemIdentifier, type) {
    const itemsDirectory = path.join(`${process.cwd()}/src/data/${type}`);
    const itemSlug = itemIdentifier.replace(/\.md$/, '');
    const filePath = path.join(itemsDirectory, `${itemSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const itemData = {
        slug: itemSlug,
        ...data,
        content,
    };

    return itemData;
}

export function getAllItems(type) {
    const itemFiles = getItemsFiles(type);

    const allItems = itemFiles.map((itemFile) => getItemData(itemFile, type));

    const sortedItems = allItems.sort((itemA, itemB) =>
        itemA.date > itemB.date ? -1 : 1
    );

    return sortedItems;
}

export function getFeaturedItems(items) {
    return items.filter((item) => item.isFeatured);
}
