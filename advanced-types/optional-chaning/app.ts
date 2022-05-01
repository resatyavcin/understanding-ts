const fecthedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: "My own company"}
}


//JS optional
console.log(fecthedUserData.job && fecthedUserData.job.title)
console.log(fecthedUserData?.job?.title)