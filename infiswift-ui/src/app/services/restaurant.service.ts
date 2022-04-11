import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const HEADERS = new HttpHeaders({'Content-Type':'application/json'});
const OPTIONS = {headers:HEADERS};
const OPTIONSFORTEXT = {headers:HEADERS, responseType:'text' as 'text'};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getRecipeDetails():Observable<any>{
    return this.http
    .get<any>(`${environment.SERVICES.RECIPE_DETAIL_URL}`)
  }

  insertRecipeDetails(recipeDetail: any):Observable<any>{
    const body = JSON.stringify(recipeDetail);
    return this.http
    .post<any>(`${environment.SERVICES.INSERT_RECIPE_DETAIL_URL}`,body, OPTIONS)
  }

  updateRecipeDetails(recipeDetail: any):Observable<any>{
    const body = JSON.stringify(recipeDetail);
    return this.http
    .post<any>(`${environment.SERVICES.UPDATE_RECIPE_DETAIL_URL}`,body, OPTIONS)
  }

  deleteRecipeDetails(recipeDetail: any):Observable<any>{
    const body = JSON.stringify(recipeDetail);
    return this.http
    .post<any>(`${environment.SERVICES.DELETE_RECIPE_DETAIL_URL}`,body, OPTIONS)
  }
  
  getMenuDetails():Observable<any>{
    return this.http
    .get<any>(`${environment.SERVICES.MENU_DETAIL_URL}`)
  }

  insertMenuDetails(menuDetail: any):Observable<any>{
    const body = JSON.stringify(menuDetail);
    return this.http
    .post<any>(`${environment.SERVICES.INSERT_MENU_DETAIL_URL}`,
      body, OPTIONS)
  }

  updateMenuDetails(menuDetail: any):Observable<any>{
    const body = JSON.stringify(menuDetail);
    // console.log(body);
    return this.http
    .post<any>(`${environment.SERVICES.UPDATE_MENU_DETAIL_URL}`,body, OPTIONS)
    .pipe(catchError(this.handleErrorObservable));
  }

  deleteMenuDetails(menuDetail: any):Observable<any>{
    const body = JSON.stringify(menuDetail);
    return this.http
    .post<any>(`${environment.SERVICES.DELETE_MENU_DETAIL_URL}`,body, OPTIONS)
  }
  
  getIngredientsQuant(servings:number):Observable<any>{
    let params = new HttpParams().set("servings",servings);
    return this.http
    .get<any>(`${environment.SERVICES.INGREDIENTS_QUANT_URL}`,{params:params})
  }

  private handleErrorObservable(error:HttpResponse<any>|any){
    return throwError(error.message || "server error");
    
  }

}

