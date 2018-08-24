import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {
    constructor(private http: HttpClient) { }
    getCategories() {
        return this.http.get('http://localhost:8080/rest/categories');
    }

    getCategoryById(id) {
        return this.http.get('http://localhost:8080/rest/categories/' + id);
    }

    updateCategory(categoryUpdated) {
        return this.http.put('http://localhost:8080/rest/categories/' + categoryUpdated.id, categoryUpdated);
    }

    addCategory(category) {
        return this.http.post('http://localhost:8080/rest/categories', category);
    }

    deleteCategory(category) {
        return this.http.delete('http://localhost:8080/rest/categories/' + category.id);
    }

}
