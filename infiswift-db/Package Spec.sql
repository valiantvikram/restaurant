create or replace PACKAGE                PKG_RCP_MAINT AS 
    
    PROCEDURE PRC_GET_RCP_DTLS  (PC_RCP     OUT     SYS_REFCURSOR);
    
    PROCEDURE PRC_INS_RCP_DTLS (new_rcp_nm  IN T_INF_RCP_DTL.RCP_NM%TYPE,
                                new_ing_nm  IN T_INF_RCP_DTL.ING_NM%TYPE   ,
                                new_ing_msr IN T_INF_RCP_DTL.ING_MSR%TYPE,
                                new_ing_qty IN T_INF_RCP_DTL.ING_QTY%TYPE);
    
    PROCEDURE PRC_UPD_RCP_DTLS  (p_rcp_ky   IN NUMBER,
                                new_rcp_nm   IN T_INF_RCP_DTL.RCP_NM%TYPE,
                                new_ing_nm  IN T_INF_RCP_DTL.ING_NM%TYPE   ,
                                new_ing_msr IN T_INF_RCP_DTL.ING_MSR%TYPE,
                                new_ing_qty IN T_INF_RCP_DTL.ING_QTY%TYPE);
                                
    PROCEDURE PRC_DEL_RCP_DTLS      (p_rcp_ky   IN T_INF_RCP_DTL.RCP_KY%TYPE);
     
    PROCEDURE PRC_GET_MENU  (PC_MENU     OUT     SYS_REFCURSOR);
    
    PROCEDURE PRC_INS_MENU     (new_rcp_nm   IN T_INF_MENU.RCP_NM%TYPE,
                                new_rcp_type IN T_INF_MENU.RCP_TYP%TYPE,
                                new_price    IN T_INF_MENU.PRICE%TYPE);
    
    PROCEDURE PRC_UPD_MENU      (p_rcp_ky    IN NUMBER,
                                new_rcp_nm   IN T_INF_MENU.RCP_NM%TYPE,
                                new_rcp_type IN T_INF_MENU.RCP_TYP%TYPE,
                                new_price    IN T_INF_MENU.PRICE%TYPE);
                                
    PROCEDURE PRC_DEL_MENU      (p_rcp_ky   IN T_INF_MENU.RCP_KY%TYPE);
    
    PROCEDURE PRC_GET_INGRDIENT_QTY  (  P_SERVING    IN      NUMBER,
                                        PC_RCP     OUT     SYS_REFCURSOR);
                                        
    PROCEDURE PRC_UPD_EXEC_LOG (p_table_nm         IN   T_EXEC_LOG.TABLE_NM%TYPE,
                                p_message          IN   T_EXEC_LOG.MESSAGE%TYPE,
                                p_elapsed_time     IN   T_EXEC_LOG.ELASPSED_TIME%TYPE,
                                p_start_time       IN   T_EXEC_LOG.START_TIME%TYPE,
                                p_end_time         IN   T_EXEC_LOG.END_TIME%TYPE);    
  

END PKG_RCP_MAINT;