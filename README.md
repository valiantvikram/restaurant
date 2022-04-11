# restaurant
##### _an application to take-away every chef's invetory management worries_


#

## infiswift-db

SQL Plus was used as the database with Oracle SQL developer as the IDE. The database schema INFI contains three tables T_INF_MENU (for Menu), T_INF_RCP_DTL (for recipe ingredients) and T_EXEC_LOG (for CRUD logs). 

Included a package PKG_RCP_MAINT for managing these tables, doing the quantity conversions and facilitating the APIs. Execute all the four db scripts included in your DB.



```sh
T_INF_MENU
Name    Null?    Type          
------- -------- ------------- 
RCP_KY  NOT NULL NUMBER        
RCP_NM  NOT NULL VARCHAR2(100) 
RCP_TYP          VARCHAR2(20)  
PRICE            NUMBER        
ACTV_FL          VARCHAR2(1)   
CRT_TS           TIMESTAMP(6)  
UPD_TS           TIMESTAMP(6)


T_INF_RCP_DTL
Name    Null? Type          
------- ----- ------------- 
RCP_NM        VARCHAR2(100) 
ING_NM        VARCHAR2(100) 
ING_MSR       VARCHAR2(100) 
ING_QTY       NUMBER(10)    
CRT_TS        TIMESTAMP(6)  
UPD_TS        TIMESTAMP(6)  
RCP_KY        NUMBER        


T_EXEC_LOG
Name          Null? Type          
------------- ----- ------------- 
TABLE_NM            VARCHAR2(20)  
MESSAGE             VARCHAR2(200) 
ELASPSED_TIME       NUMBER        
START_TIME          TIMESTAMP(6)  
END_TIME            TIMESTAMP(6)
```



## infiswift-server
The project was built using jdk-18 and Eclipse 2202-03. Import as maven project and run RestaurantApplication. 

If you get any beans error with getter/setter in the model class. Please download plugins for lombok if using IntelliJ or for eclipse download lombok.jar and add its location in the Run conifguration lookup path under source and add the below argument:

```sh
-vmagrs -javaagent:lombok.jar
```


## infiswift-ui
To install the pakacge & dependcies use:
```sh
npm install
```
Run following for a dev server: 

```sh
ng serve
```

## time taken

- 2 hours for initial setup. (Downloading & running SQL DB, JDK, Eclipse, VS Code on local machine)
- 8 hours for total coding. Includes all the stuff from designing the schema to writing the last part of UI code. 
- 30 minutes of testing. (And yes, there are few validations missed, no save/delete confirmation in the form of dialogs except from the API in the dev tools, all for the lack of time!)
#
#
#

> Even if the UI seems bland, I tried
> to make a functional demo in the shortest time.
> Still adding dependencies in pom.xml & package.json 
> required plenty of google searches.
> We can discuss (if given the chance) what more I could've done
> in optimizing the code-flow and user experience.
