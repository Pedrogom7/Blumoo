class Project {
    id: number;
    name: string;
    description: string;
    parent: Project | null;
    children: Project[];

    constructor(id: number, name: string, description: string, parent: Project | null = null) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.parent = parent;
        this.children = [];
    }

    addChild(child: Project): void {
        child.parent = this;
        this.children.push(child);
    }

    removeChild(child: Project): void {
        this.children = this.children.filter(c => c !== child);
        child.parent = null;
    }

    findProjectById(id: number): Project | null {
        if (this.id === id) {
            return this;
        }
        for (const child of this.children) {
            const result = child.findProjectById(id);
            if (result) {
                return result;
            }
        }
        return null;
    }
}


// EXEMPLIFICAÇÃO DE USO

const rootProject = new Project(1, "Infrastructure Project", "Main infrastructure project");

const subProject1 = new Project(2, "Bridge Construction", "Construction of a new bridge");
const subProject2 = new Project(3, "Road Expansion", "Expansion of the main road");

rootProject.addChild(subProject1);
rootProject.addChild(subProject2);

const subSubProject1 = new Project(4, "Foundation Work", "Foundation work for the bridge");
subProject1.addChild(subSubProject1);

// Exibir a hierarquia de projetos
console.log(rootProject);

// Encontrar um projeto pelo ID
const project = rootProject.findProjectById(4);
if (project) {
    console.log(`Project found: ${project.name} - ${project.description}`);
} else {
    console.log("Project not found");
}
