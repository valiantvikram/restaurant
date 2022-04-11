create or replace PACKAGE BODY                     PKG_RCP_MAINT AS 
    
    PROCEDURE PRC_GET_RCP_DTLS  (PC_RCP     OUT     SYS_REFCURSOR)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_RCP_DTL';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        OPEN PC_RCP FOR
            SELECT DISTINCT
                    RCP_KY,
                    RCP_NM,
                    ING_NM,
                    ING_MSR,
                    ING_QTY
            FROM
                T_INF_RCP_DTL;
        
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
                
    END PRC_GET_RCP_DTLS;
    
    PROCEDURE PRC_INS_RCP_DTLS (new_rcp_nm  IN T_INF_RCP_DTL.RCP_NM%TYPE,
                                new_ing_nm  IN T_INF_RCP_DTL.ING_NM%TYPE,
                                new_ing_msr IN T_INF_RCP_DTL.ING_MSR%TYPE,
                                new_ing_qty IN T_INF_RCP_DTL.ING_QTY%TYPE)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_RCP_DTL';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        INSERT INTO T_INF_RCP_DTL (RCP_KY,RCP_NM,ING_NM,ING_MSR,ING_QTY)
        VALUES (SEQ_RCP_DTL.NEXTVAL,new_rcp_nm, new_ing_nm, new_ing_msr, new_ing_qty);
            
        COMMIT;
        
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
        PRC_UPD_EXEC_LOG(lv_table_name,new_rcp_nm|| ' RECIPE ADDED', t1, ld_start_ts, ld_end_ts);
        
                
    END PRC_INS_RCP_DTLS;
    
    PROCEDURE PRC_UPD_RCP_DTLS  (p_rcp_ky   IN NUMBER,
                                new_rcp_nm   IN T_INF_RCP_DTL.RCP_NM%TYPE,
                                new_ing_nm  IN T_INF_RCP_DTL.ING_NM%TYPE   ,
                                new_ing_msr IN T_INF_RCP_DTL.ING_MSR%TYPE,
                                new_ing_qty IN T_INF_RCP_DTL.ING_QTY%TYPE)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_RCP_DTL';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        UPDATE T_INF_RCP_DTL
        SET RCP_NM = new_rcp_nm,
            ING_NM = new_ing_nm,
            ING_MSR = new_ing_msr,
            ING_QTY = new_ing_qty
        WHERE 
            RCP_KY = p_rcp_ky;
        
        COMMIT;
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
        PRC_UPD_EXEC_LOG(lv_table_name,new_rcp_nm|| ' RECIPE ALTERED', t1, ld_start_ts, ld_end_ts);
        
                
    END PRC_UPD_RCP_DTLS;
    
    PROCEDURE PRC_DEL_RCP_DTLS      (p_rcp_ky   IN T_INF_RCP_DTL.RCP_KY%TYPE)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_RCP_DTL';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        DELETE FROM T_INF_RCP_DTL
        WHERE RCP_KY = p_rcp_ky;
        
        COMMIT;
        
--        PRC_DEL_MENU_RCP(p_rcp_nm);
        
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
        PRC_UPD_EXEC_LOG(lv_table_name,' RECIPE DELETED', t1, ld_start_ts, ld_end_ts);
        
                
    END PRC_DEL_RCP_DTLS;
    
    PROCEDURE PRC_GET_MENU  (PC_MENU     OUT     SYS_REFCURSOR)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_MENU';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        OPEN PC_MENU FOR
            SELECT DISTINCT
                    RCP_KY,
                    RCP_NM,
                    RCP_TYP,
                    PRICE
            FROM
                T_INF_MENU;
        
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
                
    END PRC_GET_MENU;
    
    PROCEDURE PRC_INS_MENU     (new_rcp_nm   IN T_INF_MENU.RCP_NM%TYPE,
                                new_rcp_type IN T_INF_MENU.RCP_TYP%TYPE,
                                new_price    IN T_INF_MENU.PRICE%TYPE)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_MENU';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        INSERT INTO T_INF_MENU (RCP_KY,RCP_NM,RCP_TYP,PRICE)
        VALUES (SEQ_RCP_DTL.NEXTVAL,new_rcp_nm, new_rcp_type, new_price);
            
        COMMIT;
        
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
        PRC_UPD_EXEC_LOG(lv_table_name,new_rcp_nm|| ' MENU ITEM ADDED', t1, ld_start_ts, ld_end_ts);
                
    END PRC_INS_MENU;
    
    PROCEDURE PRC_UPD_MENU      (p_rcp_ky    IN NUMBER,
                                new_rcp_nm   IN T_INF_MENU.RCP_NM%TYPE,
                                new_rcp_type IN T_INF_MENU.RCP_TYP%TYPE,
                                new_price    IN T_INF_MENU.PRICE%TYPE)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_RCP_DTL';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        UPDATE T_INF_MENU
        SET RCP_NM = new_rcp_nm,
            RCP_TYP = new_rcp_type,
            PRICE = new_price
        WHERE 
            RCP_KY = p_rcp_ky;
            
            COMMIT;
        
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
        PRC_UPD_EXEC_LOG(lv_table_name,new_rcp_nm|| ' MENU ITEM ALTERED', t1, ld_start_ts, ld_end_ts);
                
    END PRC_UPD_MENU;
    
    
    PROCEDURE PRC_DEL_MENU      (p_rcp_ky   IN T_INF_MENU.RCP_KY%TYPE)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_MENU';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        DELETE FROM T_INF_MENU
        WHERE RCP_KY = p_rcp_ky;
        
        COMMIT;
        
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
        PRC_UPD_EXEC_LOG(lv_table_name,'MENU ITEM DELETED', t1, ld_start_ts, ld_end_ts);
                
    END PRC_DEL_MENU;
    
    
    PROCEDURE PRC_GET_INGRDIENT_QTY  (  P_SERVING    IN      NUMBER,
                                        PC_RCP     OUT     SYS_REFCURSOR)
    AS
        ld_start_ts     TIMESTAMP;
        ld_end_ts       TIMESTAMP;
        t1             PLS_INTEGER;
        lv_table_name   VARCHAR2(30):='T_INF_RCP_DTL';
    BEGIN
        ld_start_ts:= SYSTIMESTAMP;
        t1:= DBMS_UTILITY.get_time;
        
        OPEN PC_RCP FOR
            SELECT DISTINCT
                    RCP_NM,
                    ING_NM,
                    ING_MSR,
                    ING_QTY*P_SERVING ING_QTY,
                    CASE
                        WHEN ING_MSR = 'Tablespoon'
                        THEN (ING_QTY * P_SERVING * 15)||'g'
                        WHEN ING_MSR = 'Teaspoon'
                        THEN (ING_QTY * P_SERVING * 5)||'g'
                        WHEN ING_MSR = 'Cup'
                        THEN (ING_QTY * P_SERVING * 128)||'g'
                        WHEN ING_MSR = 'Pound'
                        THEN (ING_QTY * P_SERVING * 450)||'g'
                    END AS QTY_IN_GRAMS
                        
            FROM
                T_INF_RCP_DTL
            WHERE 
                RCP_NM IN (SELECT DISTINCT RCP_NM FROM T_INF_MENU);
        
        ld_end_ts:= SYSTIMESTAMP;
        t1:= (DBMS_UTILITY.get_time -t1);
        
                
    END PRC_GET_INGRDIENT_QTY;
  
  
    PROCEDURE PRC_UPD_EXEC_LOG (p_table_nm         IN   T_EXEC_LOG.TABLE_NM%TYPE,
                            p_message          IN   T_EXEC_LOG.MESSAGE%TYPE,
                            p_elapsed_time     IN   T_EXEC_LOG.ELASPSED_TIME%TYPE,
                            p_start_time       IN   T_EXEC_LOG.START_TIME%TYPE,
                            p_end_time         IN   T_EXEC_LOG.END_TIME%TYPE)
                            
    AS
       lv_table_name   VARCHAR2(30):='T_EXEC_LOG';
    BEGIN        
        INSERT INTO T_EXEC_LOG (TABLE_NM,MESSAGE,ELASPSED_TIME,START_TIME,END_TIME)
        VALUES (p_table_nm,p_message, p_elapsed_time, p_start_time,p_end_time);
            
        COMMIT;
    END PRC_UPD_EXEC_LOG;   
  


END PKG_RCP_MAINT;