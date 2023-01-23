import data from './data.json'
export default data

const allCategories = data.map(obj => obj.category)
const categorieSet = new Set(allCategories)
const categoriesUnique = Array.from(categorieSet)

const categoriesWithCounts = allCategories.reduce((obj, cat) => {
    if (obj[cat] === undefined) {
        obj[cat] = 1
    }   else {
        obj[cat] += 1
    }
    return obj
}, {})

const namesAndCategories = categoriesUnique.map(name => {
    return { name, count: categoriesWithCounts[name] } 
})

namesAndCategories.push({ name: 'All', count: data.length })

export {
    allCategories,
    categoriesUnique,
    categoriesWithCounts,
    namesAndCategories
}